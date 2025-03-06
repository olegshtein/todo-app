import React from 'react'
import Section from './layouts/Section'
import TaskList from './components/TaskList'
import NoTaskNote from '@/components/NoTaskNote'
import TaskAdditionForm from "./components/TaskAdditionForm"
import { useAppContext } from './context/AppContext'
import './styles'

const App = () => {
  const { tasks } = useAppContext()

  return (
    <div className="App">
      <Section>
        <TaskAdditionForm />
        {tasks.length ? <TaskList /> : <NoTaskNote />}
      </Section>
    </div>
  )
}

export default App;
