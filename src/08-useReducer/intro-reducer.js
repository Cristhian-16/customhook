
const initState = [{
    id: 1,
    text: 'Hola Mundo',
    done: false
}]


const todoReducer = (state = initState, action = {}) => {

    if (action.type === 'add') {
        return [...state, action.data]
    } else {
        return state
    }
}

let todo = todoReducer();

const newTodo = {
    id: 2,
    text: 'Hola planeta',
    done: false
}

const addTodo = {  //action
    type: 'add',
    data: newTodo,
}


todo = todoReducer(todo, addTodo)

console.log(todo);