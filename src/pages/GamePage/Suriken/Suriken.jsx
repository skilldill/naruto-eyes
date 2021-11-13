import React, { useEffect, useState } from "react"; 

import styles from "./Suriken.module.css";
import SurikenSVG from "../../../assets/suriken.svg";
import SurikenSlowSVG from "../../../assets/suriken-slow.svg";

const SECONDS = 5;

export const Suriken = ({from, to, slow = false}) => {

    const [translate, setTranslate] = useState(from);
    const deltaX = (to.x - from.x) / SECONDS;
    const deltaY = (to.y - from.y) / SECONDS;

    useEffect(() => {
        const interval = setInterval(() => {
            setTranslate((current) => {
                if (current.x === to.x) {
                    return current;
                }

                if (slow) {
                    return { 
                        x: current.x + deltaX / 3,
                        y: current.y + deltaY / 3
                    }
                }

                return { 
                    x: current.x + deltaX,
                    y: current.y + deltaY 
                }
            })
        }, 900)

        return () => clearInterval(interval);
    }, [slow, to])

    return (
        <div 
            className={styles.suriken}
            style={{
                transform: `translate(${translate.x}px, ${translate.y}px)`,
                transition: `all 1s linear`
            }}
        >
            <img src={slow ? SurikenSlowSVG : SurikenSVG} width={50} />
        </div>
    )
}