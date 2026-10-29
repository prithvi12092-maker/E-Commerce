import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Logo from './Comoponents/Logo'
import Searchbar from './Comoponents/Searchbar'
import Productcard from './Comoponents/Productcard'
import Productdetail from './Comoponents/Productdetail';
import Addcart from './Pages/Addcart'

const App = () => {
  return (
    <div>

      <Logo />
      <Routes>
        <Route path='/' element={
          <>
            <Searchbar />
            <Productcard />
          </>} />
        <Route path="/product/:id" element={<Productdetail />} />
        <Route path="/addcart" element={<Addcart />} />

      </Routes>


    </div>
  )
}

export default App
