import React from 'react'
import paymentimg from '../../assets/pament.svg'
import './NavFot.scss'

const Footer = () => {
  return (
    <>
    <div className="footer">
    <div className='top'>
      <div className="item">
        <h1>Categories</h1>
        <span>Women</span>
        <span>Men</span>
        <span>Shoes</span>
        <span>Accessories</span>
        <span>New Arrival</span>
      </div>
      <div className="item">
      <h1>Links</h1>
        <span>FAQ</span>
        <span>Pages</span>
        <span>Stores</span>
        <span>Compare</span>
        <span>Cookies</span>
      </div>
      <div className="item">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
           soluta officia dolorum ipsa voluptatibus voluptatem minima, temporibus
            recusandae dicta reiciendis.</p>
      </div>
      <div className="item">
      <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
           soluta officia dolorum ipsa voluptatibus voluptatem minima, temporibus
            recusandae dicta reiciendis.</p>
      </div>
    </div>
    <div className='bottom'>
      <div className="left">
        <span className="logo">LOGO</span>
        <span className="copyright">ⒸCopyright 2023. All Rights Reserved</span>
      </div>
      <div className="right">
          <img src={paymentimg} alt="loding" />
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer
