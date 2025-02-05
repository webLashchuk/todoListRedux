import { createStore, combineReducers } from "redux";
import taskReducer from "./TaskReducer";

const rootReducer = combineReducers({
    taskPage: taskReducer  
});

const store = createStore(rootReducer);

export default store;