import React, { useContext, useState } from 'react'
import UserContext, { DataContext } from '../Comoponents/UserContext'
import './Addcart.css'
import { Link } from 'react-router-dom';
import { Home, ShoppingBag, ShoppingCart } from 'lucide-react';


const Addcart = () => {
  const { cart, addToCart, Product,updateQuantity } = useContext(DataContext);
   const [Quantity, setQuantity] = useState(1)
  console.log(cart);
  return (
    <>
      <Link className='back' to='/'>
        <div className='home'>
          <Home color='orange' /> Back to Home
        </div>
        <div className='shopping-C'>
          <div className='shopping-c1'>
            <div className='shopping-i'><ShoppingCart color='orangered' size={40} /></div>
            <div className='shopping-h'><h2>Your</h2> <h2 className='shopping-h2'>Cart</h2></div>
            <p className='shopping-p'>Great choice Here are the items you've added to your cart</p>
          </div>
        </div>
      </Link>
      <div className='cart'>
        {cart.map((product) => (
          <div key={product.id} className='main-cart'>

            <div className='cart-1'>
              <img src={product.image} alt="" className='cart-img' />

              <div className='cart-2'>
                <h3 className='cart2-name'>{product.name}</h3>
                <button className='cart2-btn'>Apple</button>
                <p className='cart2-p1'>14-inch|M4 Chip|512 GB SSD</p>
                <p className='cart2-p2'>.In stock</p>
              </div>
            </div>

            <h3 className='cart3-price'> ₹{product.price}</h3>
            <div className='cart-3'>

             <div className='two-btn'>
              <button className='increas-btn' onClick={() => updateQuantity(product.id,1)}>+</button>
              <span className='btn-span'>{product.quantitiy}</span>
              <button className='decreas-btn' onClick={() => updateQuantity(product.id,-1)}>-</button>
            </div>
            </div>






          </div>


        ))}
      </div>
    </>
  )
}

export default Addcart
