const ADD_TASK = 'add-task';
const UPDATE_NEW_TASK = 'update-new-task-text';
const TOGGLE_TASK = 'toggle-task';
const REMOVE_TASK = 'remove-task';

const initialState = {
    tasks: [],
    newTaskText: ""
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            if (!state.newTaskText.trim()) return state; 
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: state.tasks.length + 1,
                    title: state.newTaskText,
                    isDone: false
                }],
                newTaskText: "" 
            };
        case UPDATE_NEW_TASK:
            return {
                ...state,
                newTaskText: action.newText
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.taskId ? { ...task, isDone: !task.isDone } : task
                )
            };
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.taskId)
            };
        default:
            return state;
    }
};

// Экшн-криейторы
export const addTaskActionCreator = () => ({ type: ADD_TASK });
export const updateNewTaskTextActionCreator = (text) => ({ type: UPDATE_NEW_TASK, newText: text });
export const toggleTaskActionCreator = (id) => ({ type: TOGGLE_TASK, taskId: id });
export const removeTaskActionCreator = (id) => ({ type: REMOVE_TASK, taskId: id });

export default taskReducer;
