import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { initialProducts } from '../Data/Product'
import { Battery, CircleCheck, Cpu, House, Monitor, Star, Tag, Zap } from 'lucide-react';
import './Productdetail.css';
import { DataContext } from './UserContext';

const Productdetail = () => {
  const { id } = useParams();
  const [Product, setProduct] = useState();
  const { addToCart } = useContext(DataContext);
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setProduct(initialProducts.find((data) => data.id == id))

  }, [id])






  return (
    <>
      <Link to={'/'} className='back-link'>
        <button className='back-btn'>
          <House className='housei' color='orange' />
          Back to Home
        </button>
      </Link>
      <div className="container">

        <div className="C1">
          <img className='C1-img' src={Product?.image} alt="" />
          <div className="C1-Listing">

            <h2 className='C1-L-h2'>Product Description</h2>
            <p className='C1-L-p1'>The {Product?.name} is designed for those who want power, performance and portability. With the latest M4 chip
              ,it  delivers blazing-fast performance, excellent battery life and a stunning 14-inch Liquid Retina display.
              Perfect for work, study entertainment - all in a sleek and lightweight design
            </p>
            <p className='C1-L-p2'><CircleCheck fill='orangered' color='black' className='circle' />  M4 chip next-level performance </p>
            <p className='C1-L-p2' ><CircleCheck fill='orangered' color='black' className='circle' /> 14-inch liquid Retina display (2560*1664)</p>
            <p className='C1-L-p2'><CircleCheck fill='orangered' color='black' className='circle' /> Up to 18 hours of battery life</p>
            <p className='C1-L-p2'><CircleCheck fill='orangered' color='black' className='circle' /> Ultra-slim and lightweight design</p>

          </div>
        </div>

        <div className="C2">
          <h1>{Product?.name}</h1>
          <div className='pc-reviw'>
            <Star size={16} color='orange' fill='orange' className='star' />
            <p className='pc-p2'>4.8</p>
            <p className='pc-review-p'>(1k review)</p>

          </div>
          <div className='C2-price'>
            <h1>₹{Product?.price}</h1>
            <button className='pc-price-btn'>14% OFF</button>
          </div>
          <p className='grip'>Powerful and portable, featuring a 14-inch edge-to-edge display
            and latest CPU. The Macbook Air with A4 chip delivers exceptional performance, all day battery life and a stunning Liquid
            Retina display.
          </p>
          <div className='about'>


            <div className='about-1'>
              <Cpu color='orangered' size={30} />
              <div>
                <p className='about-p1'>M4 Chip</p>
                <p className='about-p2'>High Performance</p>
              </div>
            </div>

            <div className='about-1'>
              <Monitor color='orangered' size={30} />
              <div>
                <p className='about-p1'>14-inch display</p>
                <p className='about-p2'>Liquid Retina</p>
              </div>
            </div>


            <div className='about-1'>
              <Battery color='orangered' size={30} />
              <div>
                <p className='about-p1'>All-day Battery</p>
                <p className='about-p2'>Up to 18 hourse</p>
              </div>
            </div>

          </div>
          <div className='all-btn'>

            <div className='two-btn'>
              <button className='increas-btn' onClick={() => setQuantity((q) => q + 1)}>+</button>
              <span className='btn-span'>{quantity}</span>
              <button className='decreas-btn' onClick={() => setQuantity((q) =>Math.max(1,q - 1))}>-</button>
            </div>
            <button className='C2-btn' onClick={() => { addToCart(Product); setQuantity((q) => q + 1) }}>Add to Cart</button>
          </div>
          <div className='table'>
            <h2 className='table-h2'>Specification</h2>
            <div className='table-box'>
              <p className='table-p1'>Brand</p>
              <p className='table-p2'>Apple</p>
            </div>

            <div className='table-box'>
              <p className='table-p1'>Model</p>
              <p className='table-p2'>{Product?.name}</p>
            </div>

            <div className='table-box'>
              <p className='table-p1'>Display Size</p>
              <p className='table-p2'>14 inches</p>
            </div>

            <div className='table-box'>
              <p className='table-p1'>Display Type</p>
              <p className='table-p2'>Liquid Retina (2560 * 1664)</p>
            </div>

            <div className='table-box'>
              <p className='table-p1'>Processor</p>
              <p className='table-p2'>M4 Chip</p>
            </div>
            <div className='table-box'>
              <p className='table-p1'>RAM</p>
              <p className='table-p2'>16 GB</p>
            </div>

            <div className='table-box'>
              <p className='table-p1'>Storage</p>
              <p className='table-p2'>512 GB SSD</p>
            </div>

            <div className='table-box'>
              <p className='table-p1'>Operating System</p>
              <p className='table-p2'>macOS</p>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}


export default Productdetail
