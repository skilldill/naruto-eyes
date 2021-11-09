import React, {useEffect, useState} from "react";
import styles from "./Eyes.module.css";

export const Eyes = ({type = 'default'}) => {
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            setTranslateX(event.clientX);
            setTranslateY(event.clientY);
        })
    }, [])

    const eyesStyles = {
        'default': [`${styles.eye} ${styles.eyeLeft}`, `${styles.eye} ${styles.eyeRight}`],
        'uchiha': [`${styles.eye} ${styles.eyeLeft} ${styles.eyeSharingan}`, `${styles.eye} ${styles.eyeRight} ${styles.eyeSharingan}`],
        'kakashi': [`${styles.eye} ${styles.eyeLeft}`, `${styles.eye} ${styles.eyeRight} ${styles.eyeSharingan}`],
    }

    return (
        <div className={styles.container}>
            <div 
                className={styles.itachi}
                style={{transform: `rotateX(${(-translateY + 700) * 0.03}deg) rotateY(${((translateX - 900) * 0.01)}deg)`}}
            >
                <div className={`${styles.eyeWhite} ${styles.eyeWhiteLeft}`}>
                    <div 
                        className={eyesStyles[type][0]} 
                        style={{transform: `translate(${(translateX - 300) * 0.025}px, ${translateY  * 0.05}px)`}} 
                    >
                        <div className={styles.eyeInnerLine}>
                            <div className={styles.eyeInner}></div>
                            
                            <div className={`${styles.eyeTamoe} ${styles.eyeTamoeLeft}`} />
                            <div className={`${styles.eyeTamoe} ${styles.eyeTamoeRight}`} />
                            <div className={`${styles.eyeTamoe} ${styles.eyeTamoeTop}`} />
                        </div>

                    </div>
                </div>

                <div className={`${styles.eyeWhite} ${styles.eyeWhiteRight}`}>
                    <div 
                        className={eyesStyles[type][1]} 
                        style={{transform: `translate(${(translateX - 300) * 0.025}px, ${translateY  * 0.05}px)`}} 
                    >
                        <div className={styles.eyeInnerLine}>
                            <div className={styles.eyeInner}></div>

                            <div className={`${styles.eyeTamoe} ${styles.eyeTamoeLeft}`} />
                            <div className={`${styles.eyeTamoe} ${styles.eyeTamoeRight}`} />
                            <div className={`${styles.eyeTamoe} ${styles.eyeTamoeTop}`} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}