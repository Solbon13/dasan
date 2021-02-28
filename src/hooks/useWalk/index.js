import {useState} from 'react'

export const useWalk = (maxSteps) => {
    const [position, setPosition] = useState({x: 0, y:0})
    const [dir, setDir] = useState(0)
    const [step, setStep] = useState(0)
    console.log(position)
    const directions = {
        down: 0,
        left: 1,
        right: 2,
        up: 3
    }

    const stepSize = 16

    const modifier = {
        down: {x: 0, y: stepSize},
        left: {x: -stepSize, y: 0},
        right: {x: stepSize, y: 0},
        up: {x: 0, y: -stepSize},
    }

    const move = (dir) => {
        setPosition((prev) => ({
            x: prev.x + modifier[dir].x,
            y: prev.y + modifier[dir].y,
        }))
    }

    const walk = (dir) => {
        setDir((prev) => {
            if (directions[dir] === prev) move(dir)
            return directions[dir]
        })
        setStep((prev) => {
            return prev < maxSteps - 1 ? prev + 1 : 0})
    }

    return {
        walk,
        dir,
        step,
        position
    }

}