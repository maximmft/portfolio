export const fadeIn = (direction, delay) => {
    return{
        hidden:{
            y: direction === 'up' ? 75 : direction === 'down' ? -75 : 0,
            x: direction === 'left' ? 150 : direction === 'right' ? -150 : 0,
        },
        show:{
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.5,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}

export const appear = (delay) => {
    return{
        hidden:{
            opacity: 0,
        },
        show:{
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.5,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}
