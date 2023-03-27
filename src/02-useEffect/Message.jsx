import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coord, setCoord] = useState({ x: 0, y: 0 })

    const { x, y } = coord

    useEffect(() => {

        const onMouse = ({ x, y }) => {
            const coords = { x, y }
            setCoord(coords)
        }
        window.addEventListener('mousemove', onMouse);

        return () => {
            window.removeEventListener('mousemove', onMouse);
        };
    }, [])

    return (
        <>
            <h4>Usuario ya Existe</h4>
            <p> x : {x}</p>
            <p> y : {y}</p>
        </>
    )
}
