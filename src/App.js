import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'New Light-weight Road Bike',
        completed: false
      },
      {
        id: 2,
        title: 'Remote start for Ram',
        completed: true
      },
      {
        id: 3,
        title: 'Chest mount HR monitor',
        completed: false
      }
    ]

    }
  

  render() {
    
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
  );
}
}
export default App;
