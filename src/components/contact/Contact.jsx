import React from 'react';
import './Contact.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US</span>
            <div className="mail">
                <input type="text" placeholder='Enter your e-mail...' />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <WhatsAppIcon />
            </div>
        </div>
    </div>
  )
}

export default Contact
