import Head from "next/head";
import { useState } from 'react';
import styles from '../styles/Todo.module.css'
import TodoCard from "../components/Cards/TodoCard"

export default function Blog() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState("")
  const [deadline, setDeadline] = useState(new Date())
  const [clicked, setClicked] = useState([])

  const handleTaskChange = (event) => setTask(event.target.value)
  const handleDeadlineChange = (event) => setDeadline(new Date(event.target.value))
  const handleFinishTask = (taskName) => setTodos(todos.filter(todo => todo.task !== taskName)) 

  const handleSubmit = (event) => {
    event.preventDefault()
    setTodos([ ...todos, { task, deadline } ])
    setTask("")
    setDeadline(new Date())
  }

  const handleTaskClicked = (key) => {
    if (clicked.find(k => k.key === key))
      setClicked(clicked.map(k => {
        if (k.key === key) return { ...k, count: k.count > 3 ? 0 : k.count + 1 }

        return k;
      }))
    else setClicked([ ...clicked, { count: 0, key: key } ])
  }

  return (
    <div className={styles.container}>

      <Head>
        <title>Todo List</title>
      </Head>

      <div className={styles.form}>
        <h1>My Todo List</h1>
        {todos.map(todo => {
          const click = clicked.find(k => k.key === todo.task) // = obj || null

          return (
            <TodoCard
              todo={todo} 
              click={click} 
              taskClicked={handleTaskClicked}
              finishTask={handleFinishTask} 
            />
          )
        })}
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
