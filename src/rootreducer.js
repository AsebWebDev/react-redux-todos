import { ADD_TODO, REMOVE_TODO, GET_TODOS } from './actioncreators'

const initialState = {
  todos: [],
}

export default function rootReducer(state = initialState, action) {
  let newState = { ...state }
  switch(action.type) {
    case GET_TODOS: {
      return {...state, todos: action.data}
    } 
    case ADD_TODO: {
      return {
        ...newState,
        todos: [...newState.todos, action.todo]
      }
    } 
    case REMOVE_TODO: {
      let todos = state.todos.filter(val => val._id !== action.id)
      return {...state, todos}
    } 
    default: return state;
  } 
}
