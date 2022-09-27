import { memo } from 'react'

function Todos({ todos, addTodo }: any) {
  return (
    <div>
      <h2>My todos</h2>
      {todos.map((todo: string, index: number) => {
        return <p key={index}>{todo}</p>
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default memo(Todos) /* Notar que también usamos memo para que no se actualice a menos que cambie el todos  */
