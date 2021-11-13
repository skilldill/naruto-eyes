import React, { useEffect, useState } from "react";

import {Ball} from "./Ball";
import {Eyes} from "./Eyes";
import {ballsFactory} from "./ballsFactory";
import {Itachi} from "./Itachi";
import styles from "./GamePage.module.css";

import {Suriken} from "./Suriken";

export const GamePage = () => {
    
    
    const [balls, setBalls] = useState([]);
    const [scores, setScores] = useState(0);

    const [eyeType, setEyeType] = useState('default');

    const [sharinganActive, setSharinganActive] = useState(false);

    useEffect(() => {
        // const interval = setInterval(() => {
        //     const ball = ballsFactory();
        //     setBalls((balls) => [...balls, ball]);
        // }, 500)

        // return () => {
        //     clearInterval(interval);
        // }
    }, [])

    const handleJutsu = (active) => {
        if (active) {
            setSharinganActive(true);
            setEyeType('uchiha');
            return;
        }

        setSharinganActive(false);
        setEyeType('default');
        return;
    }

    return (
        <>
            {balls.map((ball, i) => (
                <Ball 
                    key={i} {...ball} 
                    onClick={() => {setScores(scores + 1)}} 
                />
            ))}
            <div className={styles.container}>
                {/* <h2>{scores}</h2> */}
                <Suriken from={{x: 100, y: 50}} to={{x: 1000, y: 100}} slow={sharinganActive} />
                <Suriken from={{x: 250, y: 700}} to={{x: 1500, y: 100}} slow={sharinganActive} />
                <Suriken from={{x: 0, y: 600}} to={{x: 1200, y: 500}} slow={sharinganActive} />
                <div className={styles.eyeBlock}>
                    <div className={`${styles.fullEyeBlock} ${sharinganActive ? styles.fullEyeBlockActive : ''}`}>
                        <Eyes type={eyeType} />
                    </div>
                    <div className={styles.itachiBlock}>
                        <Itachi eyeType={eyeType} onActive={handleJutsu} />
                    </div>
                </div>
                {/* <ul className={styles.controls}>
                    <li onClick={() => setEyeType('default')}>
                        <span>Standart</span>
                    </li>
                    <li onClick={() => setEyeType('uchiha')}>
                        <span>Sharingan</span>
                    </li>
                    <li onClick={() => setEyeType('kakashi')}>
                        <span>Kakashi</span>
                    </li>
                </ul> */}
            </div>
        </>
    )
}