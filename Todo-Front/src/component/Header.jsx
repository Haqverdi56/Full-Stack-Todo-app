import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <nav className='navbar'>
        <Link to='/'>Main</Link>
        <Link to='todos'>Todos</Link>
      </nav>
    </div>
  )
}

export default Header
