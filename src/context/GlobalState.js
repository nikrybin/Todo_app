import React, {createState, useReducer, createContext} from 'react';
import AppReducer from './AppReducer';

const initialState = {
  todos: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function completeTodo(id){
    dispatch({
      type: 'COMPLETE_TODO',
      payload: id
    })
  }

  function addTodo(todo){
    dispatch({
      type: 'ADD_TODO',
      payload: todo
    })
  }

  function deleteTodos(id){
    dispatch({
      type: 'DELETE_TODOS'
    })
  }

  return (<GlobalContext.Provider value = {{
    todos: state.todos,
    completeTodo,
    deleteTodos,
    addTodo
  }}>
    {children}
  </GlobalContext.Provider>)
}