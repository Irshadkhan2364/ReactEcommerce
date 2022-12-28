import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavFot.scss'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Flag from '../../assets/india.png'
import Cart from '../cart/Cart';

const Navbar = () => {
  const [open,setOpen]=useState(false);
  return (
    <>
    <div className='navbar'>
      <div className="wrapper">
      {/*************************************  Left Side ********************************************* */}
      <div className="left"> 
        <div className="items">
            <img src={Flag} alt="" />
            <KeyboardArrowDownOutlinedIcon />
        </div>
          
          <div className="items">
            <h5>INR</h5>
            <KeyboardArrowDownOutlinedIcon />
          </div>          
          <div className="items">
          <Link to="/">Mens</Link>
          </div>
          <div className="items">
          <Link to="/">Womens</Link>
          </div>
          <div className="items">
          <Link to="/">Childrens</Link>
          </div>
          <div className="items">
          <Link to="/">Accessories</Link>
          </div>  
      </div>

      {/************************************ Center ***************************************** */}
      <div className="center">
          <Link to='/'>LOGO</Link>
      </div>

      {/********************************** Right side *********************************** */}
      <div className="right">
          <div className="items">
            <Link to='/'>Home</Link>
          </div>
          <div className="items">
          <Link to="/about">About</Link>
          </div>
          <div className="items">
          <Link to="/contact">Contact</Link>
          </div>
          <div className="items">
          <Link to="/products">Stors</Link>
          </div>
        
        <div className="icons">
        <SearchOutlinedIcon />
        <Link to="/register"><PersonSearchOutlinedIcon /></Link>
        <FavoriteBorderOutlinedIcon />
        <div className="cartIcon" onClick={()=>setOpen(!open)}>
        <ShoppingCartOutlinedIcon />
        <span>0</span>
        </div>
        </div>
        </div>
    </div>
    {open && <Cart />}
    </div>
  </>
   )
}

export default Navbar
