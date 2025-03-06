import React, { createContext, useState, useContext, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'

// Тип для задачи
interface Task {
  id: string;
  description: string;
}

// Тип для контекста
interface AppContextType {
  tasks: Task[];
  addTask: (description: string) => void;
  removeTask: (id: string) => void;
  inputValue: string; // Текущее значение инпута
  setInputValue: (value: string) => void; // Функция для обновления значения инпута
}

// Создаем контекст с начальным значением
const AppContext = createContext<AppContextType>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  inputValue: '', // Начальное значение инпута
  setInputValue: () => {}, // Заглушка для функции
})

// Компонент-провайдер (управляет состоянием)
interface AppContextProviderProps {
  children: ReactNode;
}

// Создаем кастомный хук для удобства использования и экспортируем его
export const useAppContext = () => useContext(AppContext)

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: uuidv4(), description: 'Задача 1' },
    { id: uuidv4(), description: 'Задача 2' },
  ]);

  const [inputValue, setInputValue] = useState(''); // Состояние для значения инпута

  const addTask = (description: string) => {
    const newTask: Task = {
      id: uuidv4(), // Генерация id (простой пример)
      description,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setInputValue(''); // Очищаем инпут после добавления задачи
  };

  const removeTask = (id: string) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
  }

  return (
    <AppContext.Provider value={{ tasks, addTask, removeTask, inputValue, setInputValue }}>
      {children}
    </AppContext.Provider>
  );
};