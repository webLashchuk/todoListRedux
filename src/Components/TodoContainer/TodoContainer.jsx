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
        tasks: state.taskPage.tasks || [], 
        newTaskText: state.taskPage.newTaskText || ""
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    addTask: () => {
        if (!ownProps.newTaskText.trim()) {
            alert("You have to fill this field!!");
            return;
        }
        dispatch(addTaskActionCreator());
    },
    removeTaskHandler: (id) => dispatch(removeTaskActionCreator(id)),
    onInputHandler: (e) => {
        let text = e.target.value;
        dispatch(updateNewTaskTextActionCreator(text));
    },
    toggleTaskHandler: (id) => dispatch(toggleTaskActionCreator(id))
});


const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoContainer;
