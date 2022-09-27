import { createContext, useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const UserContext = createContext('')

export default function UseContext() {
  const [user] = useState('Jesse Pinkman')

  return (
    <UserContext.Provider value={user}>
      <div className="container-fluid">
        <Link to="/" style={{ marginTop: '1rem' }}>
          <p>🏠Home</p>
        </Link>
        <article style={{ border: '2px solid #1095c1' }}>
          <h1>{`Hello ${user}!`}</h1>
          <Component2 />
        </article>
        <details>
          <summary role="button">Explicación</summary>
          <p>El hook useContext nos permite manejar estados globales, esto nos ayuda a evitar el prop drilling.</p>
        </details>
        <details>
          <summary role="button">Links Útiles</summary>
          <ul>
            <li>
              <a href="https://reactjs.org/docs/hooks-reference.html#usecontext" target="_blank" rel="noreferrer">
                React Docs
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/react/react_usecontext.asp" target="_blank" rel="noreferrer">
                W3Schools
              </a>
            </li>
          </ul>
        </details>
      </div>
    </UserContext.Provider>
  )
}

function Component2() {
  return (
    <>
      <h4>Component 2</h4>
      <Component3 />
    </>
  )
}

function Component3() {
  return (
    <>
      <h4>Component 3</h4>
      <Component4 />
    </>
  )
}

function Component4() {
  return (
    <>
      <h4>Component 4</h4>
      <Component5 />
    </>
  )
}

function Component5() {
  const user = useContext(UserContext)

  return (
    <>
      <h2>Component 5</h2>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  )
}
