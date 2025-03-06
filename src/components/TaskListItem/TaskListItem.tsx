import { useState } from 'react'
import classNames from 'classnames'
import styles from './TaskListItem.module.css'
import {useAppContext} from '@/context/AppContext';

const TaskListItem = (props: { children: any, id: string }) => {
  const { removeTask } = useAppContext()
  const {
    id,
    children,
  } = props

  const [isChecked, setIsChecked] = useState(false)

  const onChange = () => {
    setIsChecked(!isChecked)
  }

  const onClick = () => {
    removeTask(id)
  }

  return (
    <li
      className={classNames(styles.task, { [styles.isCompleted]: isChecked })}
      id={id}
    >
      <p className={styles.description}>{children}</p>
      <label htmlFor="status">
        <input
          id="status"
          className={styles.lineThroughCheckbox}
          type="checkbox"
          name="status"
          checked={isChecked}
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