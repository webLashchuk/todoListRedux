import { connect } from "react-redux";
import {
    addTaskActionCreator,
    updateNewTaskTextActionCreator,
    toggleTaskActionCreator,
    removeTaskActionCreator
} from "../../Redux/TaskReducer";
import TodoList from "../TodoList/TodoList";

const mapStateToProps = (state) => {
    return {
        tasks: state.taskReducer.tasks || [],
        newTaskText: state.taskReducer.newTaskText || ""
    };
};

const mapDispatchToProps = (dispatch) => ({
    addTask: () => dispatch(addTaskActionCreator()),
    removeTaskHandler: (id) => dispatch(removeTaskActionCreator(id)),
    onInputHandler: (e) => {
        let text = e.target.value;
        dispatch(updateNewTaskTextActionCreator(text));
    },
    toggleTaskHandler: (id) => dispatch(toggleTaskActionCreator(id))
});


const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoContainer;
