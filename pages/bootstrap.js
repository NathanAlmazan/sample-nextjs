import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

const defaultNames = ["Henry", "Nath", "Ange", "Pepper", "Summer", "Winter"]

export default function BootstrapPage() {
  const [text, setText] = useState("")
  const [names, setNames] = useState(defaultNames)
  const [asc, setAsc] = useState(false)

  const handleTextChange = (event) => setText(event.target.value)

  useEffect(() => {
    setNames(defaultNames.filter(name => name.toLowerCase().includes(text.toLowerCase())))
  }, [text])

  useEffect(() => {
    if (asc) setNames(current => current.sort((a, b) => a.localeCompare(b)))
    else setNames(current => current.sort((a, b) => b.localeCompare(a)))
  }, [asc])

  console.log()

  return (
    <Container>
        <input type="text" placeholder="Search" value={text} onChange={handleTextChange} />
        <br />

        <button onClick={() => setAsc(!asc)}>{asc ? "Ascending" : "Descending" }</button>

        {names.map(name => (
            <h6 key={name}>{name}</h6>
        ))}
    </Container>
  )
}