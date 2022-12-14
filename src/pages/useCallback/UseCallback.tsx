import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Todos from './Todos'

export default function UseCallback() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState<string[]>([])

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  /* Proba sacando este useCallback... */
  const addTodo = useCallback(() => {
    setTodos((prevTodos) => [...prevTodos, 'New Todo'])
  }, [])

  return (
    <div className="container-fluid">
      <Link to="/" style={{ marginTop: '1rem' }}>
        <p>馃彔Home</p>
      </Link>
      <article style={{ border: '2px solid #1095c1' }}>
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </article>
      <details>
        <summary role="button">Explicaci贸n</summary>
        <p>
          El hook useCallback nos devuelve una funci贸n memorizada. Esto significa que la funci贸n devuelta no cambiar谩 a
          menos que las dependencias pasadas cambien. De esta manera podemos aislar algunas funciones para que no se
          ejecuten autom谩ticamente en cada render. La diferencia con useMemo es que useMemo se usa para un valor y
          useCallback para una funci贸n. En este ejemplo podemos ver en el c贸digo que el Todos.tsx recibe tanto el todos
          como el addTodo para evitar que haga render a menos que cambie el todo podemos agregar un memo sin embargo
          esta se sigue actualizando, esto sucede debido a la referential equality es decir cada vez que un componente
          hace un re-render sus funciones tambi茅n se vuelven a crear causando un re-render, es por eso que utilizamos
          tambi茅n el useCallback.
        </p>
      </details>
      <details>
        <summary role="button">Links 脷tiles</summary>
        <ul>
          <li>
            <a href="https://es.reactjs.org/docs/hooks-reference.html#usecallback" target="_blank" rel="noreferrer">
              React Docs
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/react/react_usecallback.asp" target="_blank" rel="noreferrer">
              W3Schools
            </a>
          </li>
        </ul>
      </details>
    </div>
  )
}
