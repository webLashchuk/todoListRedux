import s from './AddButton.module.scss';

const AddButton = ({ addTask }) => {
    return (
        <button className={s.button} onClick={addTask}>Add task</button>
    )
}

export default AddButton;