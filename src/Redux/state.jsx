import taskReducer from "./TaskReducer";

let store = {
    _state: {
        tasks: [],
        newTaskText: ""
    },
    _callSubscriber() {},
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state = taskReducer(this._state, action);
        this._callSubscriber(this._state);
    }
}

window.state = store;
export default store;