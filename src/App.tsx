import React from 'react'
import TaskList from './components/TaskList/TaskList'
import 'normalize.css'
import './styles/global.css'

const App = () => {
  return (
    <div className="App">
      <form>
        <TaskList />
      </form>
    </div>
  );
}

export default App;
