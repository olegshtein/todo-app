import styles from './NoTaskNote.module.css'

const NoTaskNote = () => {
  return (
    <div className={styles.note}>
      <p>Сейчас у вас нет ни одной задачи.</p>
      <p>Добавьте её! =)</p>
    </div>
  )
}

export default NoTaskNote