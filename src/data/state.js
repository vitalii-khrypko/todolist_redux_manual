import todoReducer from "./todoReducer";

let store = {
    _state: {
        todo: {
            todos: [
                {id: 0, todoText: ""},
            ],
            newTodoText: ""
        }
    },
    _callSubscriber() {},
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.todo = todoReducer(this._state.todo, action);
        this._callSubscriber(this._state);
    }
};

window.state = store;
export default store;