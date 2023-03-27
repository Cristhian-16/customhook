
export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case 'add':
            return [
                ...initialState,
                action.data
            ]
        case 'delete':
            return initialState.filter(todo => todo.id !== action.data)
        case 'completed':
            return initialState.map(todo => {

                if (todo.id === action.data) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo
            })
        default:
            return initialState
    }
}