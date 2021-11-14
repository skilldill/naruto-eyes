import React, {useState} from "react";
import { StartPage, GamePage, EndPage } from "../pages";

export const Navigation = () => {
    const [pageName, setPageName] = useState('start');

    const mapPages = {
        'start': <StartPage onStart={() => setPageName('game')} />,
        'game': <GamePage onGameOver={() => setPageName('end')} />,
        'end': <EndPage onRestart={() => setPageName('game')} />
    }

    return mapPages[pageName];
}