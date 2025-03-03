import styles from './Task.module.css'

const Task = (props: { children: any }) => {
  const { children } = props

  return (
    <div className={styles.task}>
      <p className={styles.description}>{children}</p>
      <label htmlFor="status">
        <input
          className={styles.lineThroughCheckbox}
          type="checkbox"
          name="status"
        />
      </label>
      <button
        className={styles.deleteButton}
        type="button"
      >
        <span className="visually-hidden">Удалить задачу</span>
      </button>
    </div>
  )
}

export default Task