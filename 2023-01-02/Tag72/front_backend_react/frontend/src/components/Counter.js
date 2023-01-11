import { useEffect, useState } from "react"
import "./Counter.css"

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")
  const [colors, setColors] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((dataServer) => setData(dataServer))
  }, [input])

  const handleFormSubmit = (event) => {
    event.preventDefault()

    if (!input) return

    fetch("http://localhost:5000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ todotitle: input }),
    })
      .then((response) => response.json())
      .then((datas) => {
        setTodos([...todos, input])
        setInput("")
        setCounter(data.length +1 )
        setColors([...colors, "gray"])
      })
      .catch((error) => console.error("Error:", error))
    
  }

  const handleColorToggle = (index) => {
    const updatedColors = [...colors]
    updatedColors[index] = updatedColors[index] === "gray" ? "green" : "gray"
    setColors(updatedColors)
  }

  return (
    <div>
      <h1>{data.length}</h1>
      <form action="/tasks" method="post" onSubmit={handleFormSubmit}>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">+</button>
      </form>
      <ul className="todo-list">
        {data.map((elt, index) => {
          if (!elt) return

          return (
            <li
              key={index}
              onClick={() => handleColorToggle(index)}
              style={{ backgroundColor: colors[index] }}
            >
              {elt.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Counter