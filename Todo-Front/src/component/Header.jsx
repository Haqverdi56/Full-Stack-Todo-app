import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'

function Header() {
  return (
    <div>
      <nav className='navbar'>
        <Link to='/'>Main</Link>
        <Link to='todos'>Todos</Link>
      </nav>
    </div>
  )
}

export default Header
