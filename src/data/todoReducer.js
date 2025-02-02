const ADD_TODO = "ADD-TODO";
const NEW_TODO_TEXT = "NEW-TODO-TEXT";
const DELETE_TODO = "DELETE-TODO";

const todoReducer = (state, action) => {
    switch(action.type) {
        case ADD_TODO:
            const maxId = state.todos.reduce((max, todo) => Math.max(max, todo.id), 0);
            let newTodo = {
                id: maxId + 1,
                todoText: state.newTodoText
            };
            return {
                ...state,
                todos: [...state.todos, newTodo],
                newTodoText: ""
            };

        case NEW_TODO_TEXT:
            return {
                ...state,
                newTodoText: action.text
            };

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.todoId)
            };

        default:
            return state;
    }
}

export const addTodoActionCreator = () => (
    { type: ADD_TODO }
);

export const newTodoTextActionCreator = (text) => ({ type: NEW_TODO_TEXT, text });

export const deleteTodoActionCreator = (todoId) => ({ type: DELETE_TODO, todoId });

export default todoReducer;
