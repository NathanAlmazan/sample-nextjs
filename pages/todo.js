import { useState } from 'react';
import styles from '../styles/Todo.module.css'

export default function Blog() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState("")
  const [deadline, setDeadline] = useState(new Date())

  const handleTaskChange = (event) => setTask(event.target.value)
  const handleDeadlineChange = (event) => setDeadline(new Date(event.target.value))
  const handleFinishTask = (taskName) => setTodos(todos.filter(todo => todo.task !== taskName)) 

  const handleSubmit = (event) => {
    event.preventDefault()
    setTodos([ ...todos, { task, deadline } ])
    setTask("")
    setDeadline(new Date())
  }

  return (
    <div className={styles.container}>
      
      <div className={styles.form}>
        <h1>My Todo List</h1>
        {todos.map(todo => (
          <div key={todo.task} className={styles.task}>
            <input type="checkbox" onClick={() => handleFinishTask(todo.task)} />
            <h4>{todo.task}</h4>
            <h6>{todo.deadline.toLocaleString()}</h6>
          </div>
        ))}
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          className={styles.textfield} 
          placeholder="Task name" 
          type="text" 
          value={task} 
          onChange={handleTaskChange} 
        />
  
        <input 
          className={styles.textfield}
          placeholder="Task due date" 
          type="datetime-local" 
          value={deadline.toISOString().split(".")[0]} 
          onChange={handleDeadlineChange} 
        />
        
        <button className={styles.textfield} type="submit">Submit Task</button>
      </form>
    </div>
  )
}
