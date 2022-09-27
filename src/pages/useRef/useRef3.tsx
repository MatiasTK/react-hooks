import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function UseRef3() {
  const [inputValue, setInputValue] = useState('')
  const previousInputValue = useRef('')

  useEffect(() => {
    previousInputValue.current = inputValue
  }, [inputValue])

  return (
    <div className="container-fluid">
      <Link to="/useRef" style={{ marginTop: '1rem' }}>
        <p>← useRef</p>
      </Link>
      <article style={{ border: '2px solid #1095c1' }}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
      </article>
      <details>
        <summary role="button">Explicación</summary>
        <p>
          En este ejemplo podemos ver como podemos acceder al valor anterior de un estado usando useRef. Esto se debe a
          que el valor del useRef persiste entre renders.
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
