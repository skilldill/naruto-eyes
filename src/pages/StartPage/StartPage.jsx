import React from "react";
import { useState } from "react/cjs/react.development";

import styles from "./StartPage.module.css";

export const StartPage = ({onStart}) => {
    const [faded, setFaded] = useState(false);

    const handleStart = () => {
        setFaded(true);
        
        const timeout = setTimeout(() => {
            onStart();
            clearTimeout(timeout);
        }, 1000)
    }

    const containerClasses = faded ? 
        `${styles.container} ${styles.containerShow} ${styles.containerFaded}` : 
        `${styles.container} ${styles.containerShow}`;

    const buttonClasses = faded ? `${styles.startButton} ${styles.startButtonFaded}` : styles.startButton;

    return (
        <div className={containerClasses}>
            <div className={`${styles.itachi} ${styles.itachiActive}`}>
                <div className={buttonClasses}>
                    <h2 onClick={handleStart}>S t a r t</h2>
                </div>
            </div>
        </div>
    )
}