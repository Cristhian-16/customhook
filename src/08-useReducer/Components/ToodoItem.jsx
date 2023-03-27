
export const ToodoItem = ({ task, onDelete, onToggle }) => {

    return (
        <li
            className="list-group-item d-flex justify-content-between"
        >
            {
                !task.done ?
                   
                    :
                    <del className="align-self-center">
                        {task.text}
                    </del>
            }

            <div>
                <button
                    className="btn btn-primary"
                    onClick={() => onToggle(task.id)}
                >
                    Completed
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(task.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    )
}
