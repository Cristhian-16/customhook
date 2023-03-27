import { Small } from "./Small"
import { useState } from "react"

export const Memorize = () => {

    const [counter, setCounter] = useState(10)
    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Counter : <Small value={counter} /> </h1>
            <hr />

            <button
                className="btn btn-outline-primary"
                onClick={() => setCounter(counter + 1)}>
                +1
            </button>

            <button
                className={
                    show ? 'btn btn-primary' : 'btn btn-danger'
                }
                onClick={() => setShow(!show)}>
                Show/hidden : {JSON.stringify(show)}
            </button>
        </>
    )
}
