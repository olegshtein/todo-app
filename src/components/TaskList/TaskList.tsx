import TaskListItem from '@/components/TaskListItem'
import { useAppContext } from '@/context/AppContext'
import styles from './TaskList.module.css'

const TaskList = () => {
  const { tasks } = useAppContext()

  return (
    <ul className={styles.taskList}>
      {tasks.map(({ id, description, isCompleted }) => (
        <TaskListItem key={id} id={id} isCompleted={isCompleted}>
          {description}
        </TaskListItem>
      ))}
    </ul>
  )
}

export default TaskList