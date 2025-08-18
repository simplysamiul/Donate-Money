import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './shared/Navbar'

function App() {

  return (
    <div className='font-primary'>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        
      </footer>
    </div>
  )
}

export default App
