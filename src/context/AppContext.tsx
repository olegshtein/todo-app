import React, { createContext, useState, useContext, ReactNode } from 'react'

// Тип для задачи
interface Task {
  id: number;
  description: string;
}

// Тип для контекста
interface AppContextType {
  tasks: Task[];
  addTask: (description: string) => void;
  inputValue: string; // Текущее значение инпута
  setInputValue: (value: string) => void; // Функция для обновления значения инпута
}

// Создаем контекст с начальным значением
const AppContext = createContext<AppContextType>({
  tasks: [],
  addTask: () => {},
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
    { id: 1, description: 'Задача 1' },
    { id: 2, description: 'Задача 2' },
  ]);

  const [inputValue, setInputValue] = useState(''); // Состояние для значения инпута

  const addTask = (description: string) => {
    const newTask: Task = {
      id: tasks.length + 1, // Генерация id (простой пример)
      description,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setInputValue(''); // Очищаем инпут после добавления задачи
  };

  return (
    <AppContext.Provider value={{ tasks, addTask, inputValue, setInputValue }}>
      {children}
    </AppContext.Provider>
  );
};