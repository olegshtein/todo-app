import styles from './TaskAdditionForm.module.css'
import React from 'react'

const TaskAdditionForm = () => {

  return (
    <form className={styles.form}>
      <label className={styles.formDescriptionLabel} htmlFor="task-description">
        <input
          className={styles.formDescriptionInput}
          placeholder="Добавьте задачу"
          name="task-description"
        />
      </label>
      <button className={styles.formButton} type="button">
        <span className="visually-hidden">Добавить задачу</span>
      </button>
    </form>
  )
}

export default TaskAdditionForm