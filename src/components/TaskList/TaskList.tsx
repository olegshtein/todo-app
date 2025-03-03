import TaskListItem from './TaskListItem'
import styles from './TaskList.module.css'

const TaskList = () => {

  return (
    <ul className={styles.taskList}>
      <TaskListItem />
    </ul>
  )
}

export default TaskList