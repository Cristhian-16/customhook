import { TodoAdd } from "./Components/TodoAdd"
import { TodoList } from "./Components/TodoList"
import { useTodo } from "./hooks/useTodo"




export const TodoApp = () => {

    const { tasks, handleClick, handleDelete, toggleCheck, pending } = useTodo()


    return (
        <div>
            <h1>TodoApp : {tasks.length} , <small>pending : {pending()}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        task={tasks}
                        onDelete={handleDelete}
                        onToggle={toggleCheck}
                    />
                </div>

                <div className="col-5">
                    <h4>Add Task</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleClick} />
                </div>
            </div>
        </div>
    )
}
