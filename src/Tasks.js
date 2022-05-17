import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggleReminder }) => { //{task} here = props.task
    return (
        <>
        {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggleReminder={onToggleReminder}/>))}
        </>
    )
}

export default Tasks