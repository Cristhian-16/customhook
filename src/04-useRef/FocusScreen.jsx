import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClickBtn = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                className='form-control mt-2'
                type="text"
                placeholder='Ingrese su nombre' />

            <button
                className='btn btn-primary mt-2'
                onClick={onClickBtn}>
                Focus
            </button>
        </>
    )
}
