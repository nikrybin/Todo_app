import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


export const RemoveTodos = () => {

  const {deleteTodos} = useContext(GlobalContext);

  return (
    <div className="bg-light row justify-content-between">
      <p className="m-2 ml-3">TODO list</p>
      <a href="#" className="text-dark" onClick={()=>deleteTodos()}><i className="material-icons m-2">delete</i></a>
    </div>
  )
}
