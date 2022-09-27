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
        <p>🏠Home</p>
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
        <summary role="button">Explicación</summary>
        <p>
          El hook useCallback nos devuelve una función memorizada. Esto significa que la función devuelta no cambiará a
          menos que las dependencias pasadas cambien. De esta manera podemos aislar algunas funciones para que no se
          ejecuten automáticamente en cada render. La diferencia con useMemo es que useMemo se usa para un valor y
          useCallback para una función. En este ejemplo podemos ver en el código que el Todos.tsx recibe tanto el todos
          como el addTodo para evitar que haga render a menos que cambie el todo podemos agregar un memo sin embargo
          esta se sigue actualizando, esto sucede debido a la referential equality es decir cada vez que un componente
          hace un re-render sus funciones también se vuelven a crear causando un re-render, es por eso que utilizamos
          también el useCallback.
        </p>
      </details>
      <details>
        <summary role="button">Links Útiles</summary>
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
