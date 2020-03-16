import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTodo = () => {
  const [text, setText] = useState('');
  const [isInvalid, setInvalid] = useState('');
  const {addTodo} = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    let testing = text;
    testing = testing.replace(/\s+/g, '');
    if(testing.length >= 3){
      const newTodo = {
        id: Math.floor(Math.random() * 100000000),
        text,
        isComplete: false
      }
      addTodo(newTodo); 
      setText('');
      setInvalid('');
    } else {
      setInvalid('is-invalid');
    }
  }

  const onBlur = e => {
    e.preventDefault();
    setInvalid('');
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="row justify-content-between mt-1 mb-3">
          <a href="#" onBlur={onBlur} onClick={onSubmit} className="text-dark pt-2 ml-4">
             <i className="material-icons">add</i>
          </a>
          <div className="col-10 pl-0">
            <input type="text" value={text} onBlur={onBlur} onChange={(e)=> setText(e.target.value)} className={"form-control " + isInvalid}/>
            <div className="invalid-feedback">
              Количество символов, не считая пробелов, должно быть от 3 до 100.
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
