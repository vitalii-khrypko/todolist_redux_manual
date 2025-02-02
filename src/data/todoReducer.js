const ADD_TODO = "ADD-TODO";
const NEW_TODO_TEXT = "NEW-TODO-TEXT";

const todoReducer = (state, action) => {
    switch(action.type) {
        case ADD_TODO:
            // Finding max id and adding 1
            const maxId = state.todos.reduce((max, todo) => Math.max(max, todo.id), 0);
            let newTodo = {
                id: maxId + 1,
                todoText: state.newTodoText
            };
            state.todos.push(newTodo)
            state.newTodoText = "";
            return state;
        case NEW_TODO_TEXT:
            state.newTodoText = action.text;
            return state;
        default:
            return state;
    }
}

export const addTodoActionCreator = () => {
    return {
        type: ADD_TODO
    }
}

export const newTodoTextActionCreator = (text) => {
    return {
        type: NEW_TODO_TEXT,
        text
    }
}

export default todoReducer;