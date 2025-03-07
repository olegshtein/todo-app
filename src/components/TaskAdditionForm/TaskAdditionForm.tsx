import styles from './TaskAdditionForm.module.css'
import React from 'react'
import { useAppContext } from '@/context/AppContext'

const TaskAdditionForm = () => {
  const { inputValue, setInputValue, addTask } = useAppContext()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const onClick = () => {
    addTask(inputValue)
  }

  return (
    <form
      className={styles.form}
    >
      <label className={styles.formDescriptionLabel} htmlFor="task-description">
        <input
          className={styles.formDescriptionInput}
          placeholder="Добавьте задачу"
          name="task-description"
          value={inputValue}
          onChange={onChange}
        />
      </label>
      <button
        className={styles.formButton}
        type="button"
        onClick={onClick}
      >
        <span className="visually-hidden">Добавить задачу</span>
      </button>
    </form>
  )
}

export default TaskAdditionForm