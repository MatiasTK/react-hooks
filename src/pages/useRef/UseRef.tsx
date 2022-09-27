import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function UseRef() {
  const [inputValue, setInputValue] = useState('')
  const count = useRef(0) /* Proba cambiando esto a un useState... */

  useEffect(() => {
    count.current = count.current + 1
  }, [])

  return (
    <div className="container-fluid">
      <Link to="/" style={{ marginTop: '1rem' }}>
        <p>🏠Home</p>
      </Link>
      <article style={{ border: '2px solid #1095c1' }}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <h1>Render Count: {count.current}</h1>
      </article>
      <details>
        <summary role="button">Explicación</summary>
        <p>
          El hook useRef nos permite guardar valores entre los renders. Se puede usar para guardar un valor mutable que
          no cause un re-render cuando se actualice. También se puede usar para acceder directamente a un elemento del
          DOM. En este ejemplo podemos ver en el código que cada vez que yo escribo en el input se va a hacer un
          re-render sin embargo al usar useRef este contador se va a mantener ya que el valor ya esta previamente
          guardado y no se modifica entre renders. Proba cambiando el useRef por un useState y veras que entrara en un
          loop infinito.
        </p>
      </details>
      <details>
        <summary role="button">Mas Casos</summary>
        <ul>
          <li>
            <Link to="/useRef2">Accediendo elementos del DOM</Link>
          </li>
          <li>
            <Link to="/useRef3">Haciendo un seguimiento del estado</Link>
          </li>
        </ul>
      </details>
      <details>
        <summary role="button">Links Útiles</summary>
        <ul>
          <li>
            <a href="https://reactjs.org/docs/hooks-reference.html#useref" target="_blank" rel="noreferrer">
              React Docs
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/react/react_useref.asp" target="_blank" rel="noreferrer">
              W3Schools
            </a>
          </li>
        </ul>
      </details>
    </div>
  )
}
