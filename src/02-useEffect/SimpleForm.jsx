import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [form, setForm] = useState({
        username: '',
        email: ''
    })

    const { username, email } = form

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setForm({
            ...form,
            [name]: value
        })
    }

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
            <h1>Simple Form</h1>
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

            {
                (username === 'c') && <Message />
            }

        </>
    )
}
