import styles from "./Button.module.css"

function Button({ type }) {
  return (
    <button className={styles[type]}>Click Me!</button>
  )
}

export default Button