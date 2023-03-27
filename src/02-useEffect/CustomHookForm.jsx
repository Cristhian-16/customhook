import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm'

export const CustomHookForm = () => {


    const { form, onInputChange, onClickReset } = useForm({
        username: '',
        email: '',
        password: ''
    })

    const { username, email, password } = form

    useEffect(() => {
        // console.log('call');
    }, [])
    useEffect(() => {
        // console.log('form call');
    }, [form])
    useEffect(() => {
        // console.log('email call');
    }, [email])

    return (
        <>
            <h1>CustomHookForm</h1>
            <hr />

            <input
                type="text"
                className='form-control'
                placeholder='username'
                name='username'
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className='form-control mt-2'
                placeholder='cristhian@google.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className='form-control mt-2'
                placeholder='contraseña'
                name='password'
                value={password}
                onChange={onInputChange}
            />

            <button
                onClick={onClickReset}
                className='btn btn-primary mt-3'>
                Reset
            </button>

        </>
    )
}
