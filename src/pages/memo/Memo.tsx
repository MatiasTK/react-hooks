import { useState } from 'react'
import { Link } from 'react-router-dom'
import Todos from './Todos'

export default function Memo() {
  const [count, setCount] = useState(0)
  const [todos] = useState(['todo1', 'todo2'])

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div className="container-fluid">
      <Link to="/" style={{ marginTop: '1rem' }}>
        <p>馃彔Home</p>
      </Link>
      <article style={{ border: '2px solid #1095c1' }}>
        <Todos todos={todos} />
        <hr />
        <div style={{ textAlign: 'center' }}>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </article>
      <details>
        <summary role="button">Explicaci贸n</summary>
        <p>
          Si vas a la parte del c贸digo podemos ver que el componente Todos.tsx se exporta con una funci贸n Memo, que pasa
          si sacamos dicha funci贸n? bueno b谩sicamente el memo nos sirve para evitar que se haga re-render de algunos
          componentes de react, en este ejemplo podemos probar que si aumentamos el count (d谩ndole al +) se va a hacer
          un re-render otra vez los todos (a pesar de que estos no cambiaron) lo podemos ver desde las react tools, para
          evitar que estos cambien al componente lo exportamos en una funci贸n memo de esta manera solo va a hacer
          re-render cuando sus props cambien, a esta funci贸n memo tambi茅n le podemos indicar que haga render cuando
          cambie una parte especifica de una prop: ejemplo: si tengo un state de objeto y quiero que haga render cuando
          objeto.activado pase a true o algo asi.
        </p>
      </details>
      <details>
        <summary role="button">Links 脷tiles</summary>
        <ul>
          <li>
            <a href="https://reactjs.org/docs/react-api.html#reactmemo" target="_blank" rel="noreferrer">
              React Docs
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/react/react_memo.asp" target="_blank" rel="noreferrer">
              W3Schools
            </a>
          </li>
        </ul>
      </details>
    </div>
  )
}
