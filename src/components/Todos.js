import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Todo} from './Todo';

export const Todos = () => {
  const {todos} = useContext(GlobalContext);

  return (
      <ul className="list-unstyled mt-3">
        {todos.map(todo=>(
          <Todo key={todo.id} todo={todo}/>
        ))}
      </ul>
  )
}
