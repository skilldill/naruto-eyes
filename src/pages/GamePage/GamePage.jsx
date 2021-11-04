import React, { useEffect, useState } from "react";

import styles from "./GamePage.module.css";

export const GamePage = () => {
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    
    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            setTranslateX(event.clientX * 0.01);
            setTranslateY(event.clientY * 0.003);
        })
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.itachi}>
                <div 
                    className={`${styles.eye} ${styles.eyeLeft}`} 
                    style={{transform: `translate(${translateX}px, ${translateY}px)`}} 
                >
                    <div className={styles.eyeInner}></div>
                </div>
                <div 
                    className={`${styles.eye} ${styles.eyeRight}`} 
                    style={{transform: `translate(${translateX}px, ${translateY}px)`}} 
                >
                    <div className={styles.eyeInner}></div>
                </div>
            </div>
        </div>
    )
}