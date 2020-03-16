import React from 'react';
import {RemoveTodos} from './components/RemoveTodos';
import {Todos} from './components/Todos';
import {AddTodo} from './components/AddTodo';

import {GlobalProvider} from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
    <div className="container-lg text-muted">
      <div className="row">
        <div className="col-md-4 mx-auto shadow">
          <RemoveTodos />
          <Todos />
          <AddTodo />
        </div>
      </div>
    </div>
    </GlobalProvider>

  );
}

export default App;
