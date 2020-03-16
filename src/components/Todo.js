import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


export const Todo = ({todo}) => {

  const {completeTodo} = useContext(GlobalContext);
  let icon = '';
  let font = '';
  let mr = ''
  if(todo.isComplete === true){
    icon = <svg className="bi bi-check-circle " width="50" height="30" viewBox="2 2 35 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M17.354 4.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L10 11.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd"/>
    <path fillRule="evenodd" d="M10 4.5a5.5 5.5 0 105.5 5.5.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 0010 4.5z" clipRule="evenodd"/></svg>;
    font = 'font-italic pl-2';
    mr = 'mr-1'
  } else {
    icon = <i className="material-icons">panorama_fish_eye</i>;
    font = '';
    mr = 'mr-4'
  }
  return (
    <li className="row" onClick={()=>completeTodo(todo.id)}> 
      <a href="#" className="text-dark ml-4 mr-4" className={"text-dark ml-4 " + mr}>
        {icon}
      </a> 
      <div className="col" className={'col ' + font}>
        {todo.text}
     </div>
  </li>
  )
}
