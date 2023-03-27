import { ToodoItem } from "./ToodoItem"

export const TodoList = ({ task, onDelete, onToggle }) => {


    return (
        <ul className="list-group">
            {
                task.map(task => (
                    <ToodoItem
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                ))
            }
        </ul>
    )
}
