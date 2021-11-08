function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function ballsFactory() {
    const ball = {
        x: getRandomInt(window.innerWidth),
        y: getRandomInt(window.innerHeight),
        type: 'default',
    }

    return ball;
}