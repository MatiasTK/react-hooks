import { useMemo, useReducer } from 'react'
import { Link } from 'react-router-dom'

type Todo = {
  id: number
  title: string
  completed: boolean
}

const initialTodos = [
  {
    id: 1,
    title: 'Todo 1',
    completed: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    completed: false,
  },
]

interface TodoAction {
  type: 'ADD_TODO' | 'COMPLETE'
  title?: Todo['title']
  id?: Todo['id']
}

const reducer = (state: any, action: TodoAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.title,
        },
      ]
    case 'COMPLETE':
      return state.map((todo: Todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    default:
      return state
  }
}

export default function UseReducer() {
  const [todos, dispatch] = useReducer(reducer, initialTodos)
  let lastID = useMemo(() => todos.length, [todos])

  const handleComplete = (todo: Todo) => {
    dispatch({ type: 'COMPLETE', id: todo.id })
  }

  const handleAddTodo = () => {
    lastID++
    dispatch({ type: 'ADD_TODO', title: `Todo ${lastID}` })
  }

  return (
    <div className="container-fluid">
      <Link to="/" style={{ marginTop: '1rem' }}>
        <p>🏠Home</p>
      </Link>
      <article style={{ border: '2px solid #1095c1' }}>
        {todos.map((todo: Todo) => (
          <div key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={() => handleComplete(todo)} />
              {todo.title}
            </label>
          </div>
        ))}
        <button onClick={handleAddTodo}>Add Todo</button>
      </article>
      <details>
        <summary role="button">Explicación</summary>
        <p>
          El hook useReducer es un hook similar a useState pero que nos permite manejar estados complejos. Es
          recomendable usar un reducer para evitar que un componente tenga varios estados. El reducer es una función que
          recibe el estado actual y una acción y devuelve el nuevo estado. El hook useReducer devuelve el estado actual
          y una función dispatch que se usa para disparar acciones. El hook useReducer recibe como parámetros el reducer
          y el estado inicial. En este ejemplo podemos ver como tenemos un reducer con dos tipos de acciones una para
          hacer toggle al completed del todo y otra para añadir uno, cuando las queremos usar haremos un dispatch. Esta
          practica es bastante común en react y se suele utilizar con Redux.
        </p>
      </details>
      <details>
        <summary role="button">Links Útiles</summary>
        <ul>
          <li>
            <a href="https://es.reactjs.org/docs/hooks-reference.html#usereducer" target="_blank" rel="noreferrer">
              React Docs
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/react/react_usereducer.asp" target="_blank" rel="noreferrer">
              W3Schools
            </a>
          </li>
        </ul>
      </details>
    </div>
  )
}
