import React, { useState } from 'react';
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const [selectedimage, setSelectedImage]=useState(0)
  const [quantity, setQuantity]=useState(1)
const data = [
        "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ];
  return (
    <div className="product">
      <div className="left">
         <div className="images">
         <img src={data[0]} alt="" onClick={e=>setSelectedImage(0)} />
          <img src={data[1]} alt="" onClick={e=>setSelectedImage(1)} />
         </div>
         <div className="mainImage">
          <img src={data[selectedimage]} alt="" />
         </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem, ipsum dolor sit amet 
          consectetur adipisicing elit.
           Illo minima rerum dolor iusto quae facilis 
           aliquam suscipit saepe repellendus aliquid 
           autem odit laboriosam accusamus ipsam sed explicabo fuga, 
          atque tempora iste et alias velit! Quia?</p>
          <div className="quantity">
            <button onClick={()=>setQuantity((prev)=> (prev === 1 ? 1 : prev - 1))}>-</button>
            {quantity}
            <button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
          </div>
          <button className="add">
              <AddShoppingCartIcon />Add to Cart
          </button>
          <div className="link">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
            <div className="item">
               <BalanceIcon/>ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women,Top</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
      </div>
    </div>
  )
}

export default Product
 