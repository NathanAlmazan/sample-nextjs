import styles from './Card.module.css'

const colorDictionary = ["red", "blue", "yellow", "pink", "white"]

function TodoCard({ todo, click, finishTask, taskClicked }) {
  return (
    <div 
        key={todo.task}
        className={styles.task} 
        onClick={() => taskClicked(todo.task)}
        style={{ backgroundColor: click ? colorDictionary[click.count] : "white" }}
    >
        <input type="checkbox" onClick={() => finishTask(todo.task)} />
        <h4>{todo.task}</h4>
        <h6>{todo.deadline.toLocaleString()}</h6>
    </div>
  )
}

export default TodoCard