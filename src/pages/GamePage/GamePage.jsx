import React, { useEffect, useState } from "react";

import {Eyes} from "./Eyes";
import {Itachi} from "./Itachi";
import styles from "./GamePage.module.css";

import {Suriken} from "./Suriken";
import { getSuriken } from "./factories";

export const GamePage = () => {
    
    
    const [surikens, setSurikens] = useState([]);
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

        const interval = setInterval(() => {
            const suriken = getSuriken();
            setSurikens((surikens) => {
                return [...surikens, suriken];
            });
        }, 500)

        return () => {
            clearInterval(interval);
        }
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
            {surikens.map((suriken, i) => (
                <Suriken 
                    key={i} {...suriken} 
                    slow={sharinganActive}
                    onClick={() => {setScores(scores + 1)}} 
                />
            ))}
            <div className={styles.container}>
                {/* <h2>{scores}</h2> */}
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