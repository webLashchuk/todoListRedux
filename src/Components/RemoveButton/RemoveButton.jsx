import s from './RemoveButton.module.scss';
import icon from '../../assets/img/icon.svg'

const RemoveButton = ({ task, removeTaskHandler }) => {
    return (
        <button onClick={() => removeTaskHandler(task.id)}>
            <svg className={s.delete} width="25" height="25">
                <use className={s.icon} href={icon +"#icon-trash"} width="26" height="26" />
            </svg>
        </button>
    )
}

export default RemoveButton;