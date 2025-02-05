import React from "react";
import s from './TodoList.module.scss';
import TextField from "../TextField/TextField";
import AddButton from "../AddButton/AddButton"
import TaskHandler from "../TaskHandler/TaskHandler";
import icon from '../../assets/img/icon.svg'
import { useRef } from "react";

const TodoList = (props) => {
    const newTaskElement = useRef(null);
    
    return (
            <section className={s.todolist}>   
                <div className="container">
                    <div className={s.layout}>
                        <div className={s.inner}>
                        <>
                            <h1 className={s.title}>
                                ToDo List
                            </h1>
                        </>
                        
                        <div className={s.panel}>
                        <TextField onInputHandler={props.onInputHandler} newTaskText={props.newTaskText} newTaskElement={newTaskElement} />
                            
                        <AddButton addTask={props.addTask} />
                        </div>

                            <ul className={s.list}>
                                {
                                props.tasks.map(task =>
                                    <li className={task.isDone ? `${s.item} ${s.success}` : `${s.item}`}>
                                        <TaskHandler task={task} toggleTaskHandler={props.toggleTaskHandler} />

                                        <h2 className={s.task}>{task.title}</h2>

                                        <button onClick={() => props.removeTaskHandler(task.id)}>
                                            <svg className={s.delete} width="25" height="25">
                                                <use className={s.icon} href={icon +"#icon-trash"} width="26" height="26" />
                                            </svg></button>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>    
                </div>    
            </section>
    )
}

export default TodoList;