import React from 'react'
import { useState } from 'react'

export const CounterApp = () => {

    const [count, setCount] = useState({
        count1: 10,
        count2: 20,
        count3: 30
    })

    const { count1, count2, count3 } = count

    return (
        <>
            <h1> CounterApp 1 : {count1} </h1>
            <h1> CounterApp 2 : {count2} </h1>
            <h1> CounterApp 3 : {count3} </h1>

            <hr />

            <button
                className='btn btn-primary'
                onClick={() => setCount({ ...count, count1: count1 + 1 })}
            >
                +1
            </button>
        </>
    )
}
