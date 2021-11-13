import React, { useEffect, useState } from "react"; 

import styles from "./Suriken.module.css";
import SurikenSVG from "../../../assets/suriken.svg";
import SurikenSlowSVG from "../../../assets/suriken-slow.svg";

export const Suriken = ({from, to, slow = false}) => {

    const [translate, setTranslate] = useState(from);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTranslate(to);
            clearTimeout(timeout);
        }, 100)
    }, [])

    return (
        <div 
            className={styles.suriken}
            style={{
                transform: `translate(${translate.x}px, ${translate.y}px)`,
                transition: `all ${slow ? 30 : 15}s linear`
            }}
        >
            <img src={slow ? SurikenSlowSVG : SurikenSVG} width={50} />
        </div>
    )
}