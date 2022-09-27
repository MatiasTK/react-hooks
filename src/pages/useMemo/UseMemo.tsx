import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export default function UseMemo() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState<string[]>([])

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, 'New Todo'])
  }

  const expensiveCalculation = (num: number) => {
    for (let i = 0; i < 1000000000; i++) {
      num += 1
    }
    return num
  }

  const calculation = useMemo(() => expensiveCalculation(count), [count])

  return (
    <div className="container-fluid">
      <Link to="/" style={{ marginTop: '1rem' }}>
        <p>🏠Home</p>
      </Link>
      <article style={{ border: '2px solid #1095c1' }}>
        <div>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>
          })}
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
          <h2>Expensive Calculation</h2>
          {calculation}
        </div>
      </article>
      <details>
        <summary role="button">Explicación</summary>
        <p>
          Si vas a la parte del código podemos ver que el componente useMemo.tsx podemos ver que la constante
          calculation esta utilizando la función useMemo, esta misma sirve para guardar el resultado en memoria del
          calculation y que este se vuelva a ejecutar solo cuando el count cambie, de esta manera evitamos que se vuelva
          a ejecutar la función cada vez que se haga un render del componente. Notar que si intento añadir un todo tarda
          demasiado debido a que también esta calculando la constante calculation, con el useMemo esto no sucede.
        </p>
      </details>
      <details>
        <summary role="button">Links Útiles</summary>
        <ul>
          <li>
            <a href="https://es.reactjs.org/docs/hooks-reference.html#usememo" target="_blank" rel="noreferrer">
              React Docs
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/react/react_usememo.asp" target="_blank" rel="noreferrer">
              W3Schools
            </a>
          </li>
        </ul>
      </details>
    </div>
  )
}
