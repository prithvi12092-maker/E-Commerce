import React, { useContext } from 'react'
import './Productcard.css';
import { Link } from 'react-router-dom';
import { ShoppingCartPlus, Star, Tag } from 'lucide-react';
import UserContext, { DataContext } from './UserContext';


const Productcard = () => {
  const { addToCart, filteredProducts, Products, avalablecategories, setSelectedCategory } = useContext(DataContext);
  return (
    <>
      <div className="prdctlist">
        <Tag className='tag' />
        {avalablecategories.map((category) => (
          <button className='btnprdct' key={category} onClick={() => setSelectedCategory(category)}>{category}</button>
        ))}
      </div>
      <h2 className='gear'>Featured Gear ({Products.length} iteams)</h2>

      <div className='product-container'>
        {filteredProducts.map((items) => (
          <div className='pc-c'>
            <Link to={`/product/${items.id}`} >
            <div className='pc-img' style={{ backgroundImage: `url(${items.image})` }}>
              <button className='pc-btn'>₹{items.price}</button>
            </div>
            </Link>
            <p className='pc-name'>{items.name}</p>
            <div className='pc-reviw'>
              <Star size={16} color='orange' fill='orange' className='star' /> <p className='pc-p2'>4.8</p> <p className='pc-review-p'>(1k review)</p> 
            </div>
            <div className='pc-price'>
              <p className='pc-price-p'> ₹{items.price}</p>
              <button className='pc-price-btn'>14% OFF</button>
            </div>
            <p className='pc-des'>{items.description}</p>
            <button className='pc-add' onClick={() => addToCart(items)}>Add to Cart</button>
          </div>))}

      </div>
    </>
  )
}

export default Productcard
