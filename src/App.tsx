import React from 'react'
import Section from './components/Section'
import TaskList from './components/TaskList'
import './styles'

const App = () => {
  return (
    <div className="App">
      <Section>
        <form>
          <TaskList />
        </form>
      </Section>
    </div>
  );
}

export default App;
