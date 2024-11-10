import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Summry from './components/Summry'
import Product from './components/Product'
import Table from './components/Table'
import User from './components/User'
import UserDetail from './components/UserDetail'
import Admin from './components/Admin'

function App() {

  return (
    <div>
      <BrowserRouter>
      <nav className='nav-new'>
          <Link to="/" className='link-1'>Home</Link>
          <Link to="/about" className='link-1'>About</Link>
          <Link to="/product" className='link-1'>Product</Link>
          <Link to="/summry" className='link-1'>Summry</Link>
          <Link to="/contact" className='link-1'>Contact</Link>n
          <Link to="/table" className='link-1'>Table</Link>
        </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='/Summry' element={<Summry />} />
        <Route path='/table' element={<Table />} />
        <Route path='/user' element={<User />} />
        <Route path='/user/:id' element={<UserDetail />} />
        <Route path='/user/admin' element={<Admin />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
