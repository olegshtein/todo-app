import React from 'react'
import Section from './layouts/Section'
import TaskList from './components/TaskList'
import TaskAdditionForm from "./components/TaskAdditionForm";
import './styles'

const App = () => {
  return (
    <div className="App">
      <Section>
        <TaskAdditionForm />
        <TaskList />
      </Section>
    </div>
  );
}

export default App;
