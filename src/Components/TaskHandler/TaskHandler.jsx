import s from './TaskHandler.module.scss';

const TaskHandler = ({ task, toggleTaskHandler }) => {
    return (
        <div className={`${s.toggle} ${s.transparent}`}>
            <input
                className={s.toggler}
                id={`complete-${task.id}`}
                type="checkbox"
                checked={task.isDone} 
                onChange={() => toggleTaskHandler(task.id)}
            />
            <label className={s.item} htmlFor={`complete-${task.id}`}></label>
        </div>
    )
}

export default TaskHandler;