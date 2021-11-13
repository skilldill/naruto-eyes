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
            x: window.innerWidth / (getRandomInt(10) + 1),
            y: -100,
        },

        to: {
            x: getRandomInt(window.innerWidth),
            y: getRandomInt(window.innerHeight) + 2000
        }
    }

    console.log(suriken);

    return suriken;
}