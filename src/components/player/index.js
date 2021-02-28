import React from 'react'
import { useKeyPress } from '../../hooks/useKeyPress'
import { useWalk } from '../../hooks/useWalk'
import { Actor } from '../actor'

export const Player = ({ skin }) => {

    const { dir, step, walk, position } = useWalk(3)
    const data = {
        h: 32,
        w: 32
    }


    useKeyPress((e) => {
        walk(e.key.replace("Arrow", "").toLowerCase())
        e.preventDefault();
    })

    return (
        <div>
            <Actor
                sprite={`/dasan/images/${skin}.png`}
                data={data}
                step={step}
                dir={dir}
                position={position}
                />
        </div>
    )
}
