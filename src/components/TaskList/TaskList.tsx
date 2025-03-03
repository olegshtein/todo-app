import Task from '../Task'
import styles from './TaskList.module.css'

const TaskList = () => {

  return (
    <ul className={styles.taskList}>
      <li className={styles.taskListItem}>
        <Task>
          Задача 2
        </Task>
      </li>
      <li className={styles.taskListItem}>
        <Task>
          Задача 1
        </Task>
      </li>
    </ul>
  )
}

export default TaskList