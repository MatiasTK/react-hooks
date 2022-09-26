import { memo } from 'react'

function Todos({ todos }: any) {
  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo: string, index: number) => {
        return <p key={index}>{todo}</p>
      })}
    </div>
  )
}

export default memo(Todos) /* Proba quitándole memo... */
