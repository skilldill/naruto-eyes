import React, { useEffect, useState } from "react";

import styles from "./Ball.module.css";

export const Ball = (props) => {
    const { x, y, type, onClick } = props;
    
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setTimeout(() => setClicked(true), 2000)
    }, [])

    const handleClick = () => {
        console.log('click');
        onClick();
        setClicked(true);
    }

    return (
        <div 
            className={styles.ball} 
            style={{left: x, top: y, display: clicked ? 'none' : 'block'}}
            onClick={handleClick}
        >

        </div>
    )
} 