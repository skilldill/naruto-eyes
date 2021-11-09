import React, { useEffect, useState } from "react";

import {Ball} from "./Ball";
import {Eyes} from "./Eyes";
import {ballsFactory} from "./ballsFactory";
import styles from "./GamePage.module.css";

export const GamePage = () => {
    
    
    const [balls, setBalls] = useState([]);
    const [scores, setScores] = useState(0);

    const [eyeType, setEyeType] = useState('default');

    useEffect(() => {
        // const interval = setInterval(() => {
        //     const ball = ballsFactory();
        //     setBalls((balls) => [...balls, ball]);
        // }, 500)

        // return () => {
        //     clearInterval(interval);
        // }
    }, [])

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
                <div className={styles.eyeBlock}>
                    <Eyes type={eyeType} />
                </div>
                <ul className={styles.controls}>
                    <li onClick={() => setEyeType('default')}>
                        <span>Standart</span>
                    </li>
                    <li onClick={() => setEyeType('uchiha')}>
                        <span>Sharingan</span>
                    </li>
                    <li onClick={() => setEyeType('kakashi')}>
                        <span>Kakashi</span>
                    </li>
                </ul>
            </div>
        </>
    )
}