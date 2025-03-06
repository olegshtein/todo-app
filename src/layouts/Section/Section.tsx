import styles from './Section.module.css'
import classNames from 'classnames';

const Section = (props: { children: any }) => {
  const { children } = props

  return (
    <section className={classNames(styles.section, "container")}>{children}</section>
  )
}

export default Section