import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskReducer";

const store = configureStore({
    reducer: {
        taskReducer: taskReducer
    }
});

export default store;