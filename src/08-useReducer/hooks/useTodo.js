import { useEffect, useReducer } from "react";
import { todoReducer } from '../todoReduce';


const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('task') || [])
}

export const useTodo = () => {

    const [tasks, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(tasks))
    }, [tasks])

    const handleClick = (todo) => {
        dispatch({
            type: 'add',
            data: todo
        })
    }

    const handleDelete = (id) => {
        dispatch({
            type: 'delete',
            data: id
        })
    }

    const toggleCheck = (id) => {
        dispatch({
            type: 'completed',
            data: id
        })
    }

    const pending = () => {
        return tasks.filter(task => !task.done).length
    }
    return {
        tasks,
        handleClick,
        handleDelete,
        toggleCheck,
        pending
    }
}
