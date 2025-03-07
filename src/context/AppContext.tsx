import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

interface AppContextType {
  tasks: Task[];
  addTask: (description: string) => void;
  removeTask: (id: string) => void;
  toggleIsCompleted: (id: string) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
}

const AppContext = createContext<AppContextType>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  toggleIsCompleted: () => {},
  inputValue: '',
  setInputValue: () => {},
})

interface AppContextProviderProps {
  children: ReactNode;
}

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (description: string) => {
    const newTask: Task = {
      id: uuidv4(),
      description,
      isCompleted: false,
    }
    setTasks((prevTasks) => [newTask, ...prevTasks])
    setInputValue('')
  }

  const removeTask = (id: string) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
  }

  const toggleIsCompleted = (id: string) => {
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)
    )
  }

  return (
    <AppContext.Provider value={{ tasks, addTask, removeTask, toggleIsCompleted, inputValue, setInputValue }}>
      {children}
    </AppContext.Provider>
  )
}