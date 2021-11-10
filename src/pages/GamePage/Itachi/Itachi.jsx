import React from "react";
import { Eyes } from "../Eyes";

import styles from "./Itachi.module.css";

export const Itachi = () => {
    return (
        <div className={styles.itachi}>
            <div className={styles.itachiEyes}>
                <Eyes type="uchiha" rotate={false}/>
            </div>
        </div>
    )
}