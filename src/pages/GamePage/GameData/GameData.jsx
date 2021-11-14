import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

import styles from "./GameData.module.css";

export const GameData = ({ scores, helthPoints, gameTime, onFinish }) => {
    const [time, setTime] = useState(gameTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((seconds) => {
                if (seconds > 0) {
                    return seconds - 1;
                }

                else {
                    onFinish();
                    clearInterval(interval);
                    return 0;
                }
            });
        }, 1000)
    }, [gameTime, onFinish])

    return (
        <div className={styles.container}>
            <h3>Time: {time}s</h3>
            <h3>Scores: {scores}</h3>
            <div className={styles.row}>
                <h3>Sharingan</h3>
                <div className={styles.helthPoints} style={{width: helthPoints * 10 }} />
            </div>
        </div>
    )
}