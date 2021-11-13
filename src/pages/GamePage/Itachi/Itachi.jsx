import React from "react";
import { Eyes } from "../Eyes";

import styles from "./Itachi.module.css";

export const Itachi = ({eyeType}) => {
    return (
        <div className={styles.itachi}>
            <div className={styles.itachiEyes}>
                <Eyes type={eyeType} rotate={false}/>
            </div>
        </div>
    )
}