import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <nav>
        <h1>Navbar</h1>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
          <h1>Footer</h1>
      </footer>
    </>
  )
}

export default App
