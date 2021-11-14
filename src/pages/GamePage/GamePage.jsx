import React, { useEffect, useState } from "react";

import {Eyes} from "./Eyes";
import {Itachi} from "./Itachi";
import {GameData} from "./GameData";
import styles from "./GamePage.module.css";

import {Suriken} from "./Suriken";
import { getSuriken } from "./factories";

export const GamePage = ({onGameOver}) => {
    const [surikens, setSurikens] = useState([]);
    const [scores, setScores] = useState(0);

    const [eyeType, setEyeType] = useState('default');

    const [sharinganActive, setSharinganActive] = useState(false);

    const [sharinganScores, setSharinganScores] = useState(20);

    useEffect(() => {
        const interval = setInterval(() => {
            const suriken = getSuriken();
            setSurikens((surikens) => {
                return [...surikens, suriken];
            });
        }, 500)

        return () => {
            clearInterval(interval);
        }
    }, [])

    const handleJutsu = (active) => {
        if (active) {
            setSharinganActive(true);
            setEyeType('uchiha');
            return;
        }

        setSharinganActive(false);
        setEyeType('default');
        return;
    }
    

    useEffect(() => {
        let interval;

        if (sharinganActive) {
            interval = setInterval(() => {
                setSharinganScores((scores) => {
                    if (scores > 0) {
                        return scores - 1;
                    }

                    return 0;
                })
            }, 1000)
        }

        return () => clearInterval(interval);
    }, [sharinganActive])

    if (sharinganScores === 0) {
        onGameOver();
    }
        

    return (
        <>
            {surikens.map((suriken, i) => (
                <Suriken 
                    key={i} {...suriken} 
                    slow={sharinganActive}
                    onClick={() => {setScores(scores + 1)}} 
                />
            ))}
            <div className={styles.container}>
                {/* <h2>{scores}</h2> */}
                <div className={styles.eyeBlock}>
                    <div className={`${styles.fullEyeBlock} ${sharinganActive ? styles.fullEyeBlockActive : ''}`}>
                        <Eyes type={eyeType} />
                    </div>
                    <div className={styles.itachiBlock}>
                        <Itachi eyeType={eyeType} onActive={handleJutsu} />
                    </div>
                    <div className={styles.gameData}>
                        <GameData 
                            scores={scores} 
                            helthPoints={sharinganScores}
                            gameTime={120}
                            onFinish={onGameOver}
                        />
                    </div>
                </div>
                {/* <ul className={styles.controls}>
                    <li onClick={() => setEyeType('default')}>
                        <span>Standart</span>
                    </li>
                    <li onClick={() => setEyeType('uchiha')}>
                        <span>Sharingan</span>
                    </li>
                    <li onClick={() => setEyeType('kakashi')}>
                        <span>Kakashi</span>
                    </li>
                </ul> */}
            </div>
        </>
    )
}