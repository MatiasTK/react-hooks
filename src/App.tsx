import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="container" style={{ textAlign: 'center', paddingTop: '2rem' }}>
      <h1>Ejemplos de utilización de los Hooks de React</h1>
      <article style={{ marginTop: 0 }}>
        <Link to="/useContext">
          <button>React useContext</button>
        </Link>
        <Link to="/useRef">
          <button>React useRef</button>
        </Link>
        <Link to="/useReducer">
          <button>React useReducer</button>
        </Link>
        <Link to="/useCallback">
          <button>React useCallback</button>
        </Link>
        <Link to="/useMemo">
          <button>React useMemo</button>
        </Link>
        <hr />
        <h3>Extra</h3>
        <Link to="/Memo">
          <button data-tooltip="Ya se que no es un hook" data-placement="bottom">
            React Memo
          </button>
        </Link>
      </article>
    </div>
  )
}

export default App
