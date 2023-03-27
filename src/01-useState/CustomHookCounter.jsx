import { useCounter } from "../hooks/useCounter"

export const CustomHookCounter = () => {

    const { counter, increment, decrement, reset } = useCounter()

    return (
        <>
            <h1>Counter Hook Custom : {counter}</h1>
            <hr />

            <button onClick={() => increment(2)} className="btn btn-primary">+1</button>
            <button onClick={reset} className="btn btn-dark">Reset</button>
            <button onClick={() => decrement(2)} className="btn btn-danger">-1</button>

        </>
    )
}
