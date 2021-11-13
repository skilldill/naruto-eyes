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

export function getSuriken() {
    

    const suriken = {
        from: {
            x: getRandomInt(window.innerWidth),
            y: -getRandomInt(window.innerHeight),
        },

        to: {
            x: getRandomInt(window.innerWidth) + 1000,
            y: getRandomInt(window.innerHeight) + 1000
        }
    }

    return suriken;
}