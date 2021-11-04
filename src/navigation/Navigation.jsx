import React, {useState} from "react";
import { StartPage, GamePage } from "../pages";

export const Navigation = () => {
    const [started, setStarted] = useState(false);

    return started ? <GamePage /> : <StartPage onStart={() => setStarted(true)} />
}