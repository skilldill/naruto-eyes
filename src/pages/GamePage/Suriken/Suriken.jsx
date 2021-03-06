import React, { useEffect, useState } from "react"; 
import styles from "./Suriken.module.css";

const SECONDS = 2;
const SLOW_COEF = 10;

export const Suriken = ({from, to, onClick, slow = false}) => {
    const [translate, setTranslate] = useState(from);
    const [pressed, setPressed] = useState(false);
    
    const deltaX = (to.x - from.x) / SECONDS;
    const deltaY = (to.y - from.y) / SECONDS;

    useEffect(() => {
        const interval = setInterval(() => {
            setTranslate((current) => {
                if (current.y === to.y) {
                    return current;
                }

                if (slow) {
                    return { 
                        x: current.x + deltaX / SLOW_COEF,
                        y: current.y + deltaY / SLOW_COEF
                    }
                }

                return { 
                    x: current.x + deltaX,
                    y: current.y + deltaY 
                }
            })
        }, 1900)

        return () => clearInterval(interval);
    }, [slow, to])

    const classes = slow ? `${styles.suriken} ${styles.surikenSlow}` : styles.suriken
    
    const handleClick = () => {
        setPressed(true);
        onClick();
    }

    if (translate.y >= to.y || pressed) {
        return null;
    }

    return (
        <div 
            onClick={handleClick}
            className={classes}
            style={{
                transform: `translate(${translate.x}px, ${translate.y}px)`,
                transition: `all 2s linear`
            }}
        >
        </div>
    )
}