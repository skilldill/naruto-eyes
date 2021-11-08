import React, { useEffect, useState } from "react";

import {Ball} from "./Ball";
import {ballsFactory} from "./ballsFactory";
import styles from "./GamePage.module.css";

export const GamePage = () => {
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    
    const [balls, setBalls] = useState([]);
    const [scores, setScores] = useState(0);

    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            setTranslateX(event.clientX * 0.01);
            setTranslateY(event.clientY * 0.009);
        })

        const interval = setInterval(() => {
            const ball = ballsFactory();
            setBalls((balls) => [...balls, ball]);
        }, 500)

        return () => {
            clearInterval(interval);
        }
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
                <h2>{scores}</h2>
                <div className={styles.itachi}>
                    <div className={`${styles.eyeWhite} ${styles.eyeWhiteLeft}`}>
                        <div 
                            className={`${styles.eye} ${styles.eyeLeft}`} 
                            style={{transform: `translate(${translateX}px, ${translateY}px)`}} 
                        >
                            <div className={styles.eyeInner}></div>
                        </div>
                    </div>

                    <div className={`${styles.eyeWhite} ${styles.eyeWhiteRight}`}>
                        <div 
                            className={`${styles.eye} ${styles.eyeRight}`} 
                            style={{transform: `translate(${translateX}px, ${translateY}px)`}} 
                        >
                            <div className={styles.eyeInner}></div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}