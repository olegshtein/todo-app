import './Section.module.css'

const Section = (props: { children: any }) => {
  const { children } = props

  return (
    <section className="section container">{children}</section>
  )
}

export default Section