import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import "./Logo.css"
import { House, ShoppingCart } from 'lucide-react'

const Logo = () => {
  return (
    <div>
      <header className='cont'>
        <Link className='hmlink' to='/'>
          <div className='homeicon'>
            <House className='hicon' />
            <h1>WDM<span>STORE</span></h1>
          </div>
        </Link>
        <Link to='/addcart'>
          <ShoppingCart className='shop' size={30} />
        </Link>
      </header>
    </div>
  )
}

export default Logo
