import React, { useContext, useState } from 'react'
import './Searchbar.css'
import { Search } from 'lucide-react';
import { DataContext } from './UserContext';
import Productcard from './Productcard';

const Searchbar = () => {
  const {search,setSearch} = useContext(DataContext);


  return (
    
    <>
      <div className="search">  
        <Search className='searchi' />
        <input className='searchinput' type="text" placeholder='Search high-performance electronics by name or featcher'
        value={search} onChange={(e) => setSearch(e.target.value)} />

      </div>
       
    </>
  )
}

export default Searchbar
