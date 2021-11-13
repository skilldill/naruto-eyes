import React, { useEffect, useState } from "react";
import { Eyes } from "../Eyes";

import styles from "./Itachi.module.css";

export const Itachi = ({eyeType, onActive}) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            if (event.code ===  'Space') {
                setActive(true);
                onActive(true);
            }
        })

        window.addEventListener('keyup', (event) => {
            setActive(false);
            onActive(false); 
         })
    }, [onActive])

    const classes = active ? `${styles.itachi} ${styles.itachiActive }` : styles.itachi;

    return (
        <div className={classes} tabIndex={1}>
            <div className={styles.itachiEyes}>
                <Eyes type={eyeType} rotate={false}/>
            </div>
        </div>
    )
}