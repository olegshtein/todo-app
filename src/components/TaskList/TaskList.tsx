import TaskListItem from '../TaskListItem'
import styles from './TaskList.module.css'
import { useAppContext } from '../../context/AppContext'

const TaskList = () => {
  const { tasks } = useAppContext()

  return (
    <ul className={styles.taskList}>
      {tasks.map(({ id, description }) => (
        <TaskListItem key={id}>
          {description}
        </TaskListItem>
      ))}
    </ul>
  )
}

export default TaskList