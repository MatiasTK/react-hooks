import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function UseRef2() {
  const inputElement = useRef<HTMLInputElement>(null)

  const focusInput = () => {
    inputElement?.current!.focus()
  }

  return (
    <div className="container-fluid">
      <Link to="/useRef" style={{ marginTop: '1rem' }}>
        <p>← useRef</p>
      </Link>
      <article style={{ border: '2px solid #1095c1' }}>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus input</button>
      </article>
      <details>
        <summary role="button">Explicación</summary>
        <p>
          En este ejemplo podemos ver como podemos acceder a un elemento del DOM usando useRef. En este caso estamos
          usando el hook useRef para acceder al input y poder hacer focus en el. Esto es muy útil cuando tenemos que
          hacer focus en un elemento del DOM cuando se hace click en un botón por ejemplo.
        </p>
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
