import React from 'react'
import Section from './layouts/Section'
import TaskList from './components/TaskList'
import TaskAdditionForm from "./components/TaskAdditionForm"
import { AppContextProvider } from './context/AppContext'
import './styles'


const App = () => {

  return (
      <AppContextProvider>
        <div className="App">
          <Section>
            <TaskAdditionForm />
            <TaskList />
          </Section>
        </div>
      </AppContextProvider>
  )
}

export default App;
