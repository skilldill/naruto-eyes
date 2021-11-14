import React from "react";

import styles from "./EndPage.module.css";

export const EndPage = ({ onRestart }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>G A M E  O V E R</h2>
            <div className={styles.restartButton} onClick={onRestart}>
                <h2>R e s t a r t</h2>
            </div>
        </div>
    )
}