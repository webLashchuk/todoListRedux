import React from "react";
import s from './TodoList.module.scss';
import TextField from "../TextField/TextField";
import AddButton from "../AddButton/AddButton"
import TaskHandler from "../TaskHandler/TaskHandler";
import { useRef } from "react";
import RemoveButton from "../RemoveButton/RemoveButton";

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
                                <li key={task.id} className={task.isDone ? `${s.item} ${s.success}` : `${s.item}`}>
                                    
                                    <TaskHandler task={task} toggleTaskHandler={props.toggleTaskHandler} />

                                    <h2 className={s.task}>{task.title}</h2>

                                    <RemoveButton task={task} removeTaskHandler={props.removeTaskHandler} />
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