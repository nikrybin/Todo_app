export default (state, action)=>{
  switch(action.type) {
    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo=> {
          if (todo.id === action.payload) {
            todo.isComplete = !todo.isComplete;
          }          
          return todo;
        })        
      };

    case 'DELETE_TODOS':
      return {
        ...state,
        todos: state.todos.filter(todo=> 
          todo.isComplete === false
        )        
      };
    
    case 'ADD_TODO':
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      }

    default:
      return state;
  }
}