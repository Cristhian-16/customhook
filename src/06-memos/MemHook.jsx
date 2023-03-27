import { useMemo, useState } from "react"


const heaveStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos');
    }

    return `${iterationNumber} iteracion realizadas`

}

export const MemoHook = () => {

    const [counter, setCounter] = useState(100)
    const [show, setShow] = useState(true)

    const memorized = useMemo(() => heaveStuff(counter), [counter])

    return (
        <>
            <h1>Counter : <small>{counter}</small> </h1>
            <hr />

            <h4>{memorized}</h4>

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
