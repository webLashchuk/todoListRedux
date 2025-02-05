import s from './TextField.module.scss';

const TextField = ({ onInputHandler, newTaskText, newTaskElement }) => {

    return (
        <div className={s.container}>
            <input className={s.input} type="text" id="#racecarLabel" onInput={onInputHandler} value={newTaskText} ref={newTaskElement} />
            <label className={s.label} htmlFor="#racecarLabel">Add your task</label>
        </div>
    )
}

export default TextField;