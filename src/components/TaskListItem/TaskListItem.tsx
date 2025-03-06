import styles from './TaskListItem.module.css'

const TaskListItem = (props: { children: any, key: any }) => {
  const {
    children,
  } = props

  return (
    <li className={styles.task}>
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
    </li>
  )
}

export default TaskListItem