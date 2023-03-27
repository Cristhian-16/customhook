import { useState } from "react"

export const TodoAdd = ({ onNewTodo }) => {

    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleForm = (e) => {
        e.preventDefault();

        if (input.trim().length <= 2) return;

        onNewTodo({
            id: new Date().getTime(),
            text: input,
            done: false
        })
        setInput('')
    }

    return (
        <form onSubmit={handleForm}>
            <input
                type="text"
                placeholder="task"
                className="form-control"
                onChange={handleChange}
                value={input}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-3">
                Add
            </button>
        </form>
    )
}
