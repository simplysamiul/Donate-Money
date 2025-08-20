import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'

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
        <Footer />
      </footer>
    </div>
  )
}

export default App
