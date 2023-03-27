import { useState } from "react"

export const useCounter = (value = 10) => {

    const [counter, setCounter] = useState(value)

    const increment = (values) => {
        setCounter(counter + values)
    }
    const decrement = (values) => {
        setCounter(counter - values)
    }
    const reset = () => {
        setCounter(value)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}