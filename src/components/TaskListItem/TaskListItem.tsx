import classNames from 'classnames'
import { useAppContext } from '@/context/AppContext'
import styles from './TaskListItem.module.css'

const TaskListItem = (props: { children: any, isCompleted: boolean, id: string }) => {
  const { removeTask, toggleIsCompleted } = useAppContext()
  const {
    id,
    isCompleted,
    children,
  } = props

  const onChange = () => {
    toggleIsCompleted(id)
  }

  const onClick = () => {
    removeTask(id)
  }

  return (
    <li
      className={classNames(styles.task, { [styles.isCompleted]: isCompleted })}
      id={id}
    >
      <p className={styles.description}>{children}</p>
      <label htmlFor="status">
        <input
          id="status"
          className={styles.lineThroughCheckbox}
          type="checkbox"
          name="status"
          checked={isCompleted}
          onChange={onChange}
        />
      </label>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={onClick}
      >
        <span className="visually-hidden">Удалить задачу</span>
      </button>
    </li>
  )
}

export default TaskListItem