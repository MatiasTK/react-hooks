/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <dialog open>
        <article>
          <header>
            <Link className="close" to="/" />
            ⚠ERROR 404 - Not found
          </header>
          <p>The page you are looking for doesn't exist or an other error ocurred.</p>
          <p>Go to choose a new direction</p>
        </article>
      </dialog>
    </div>
  )
}
