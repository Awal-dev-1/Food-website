import React from 'react'
import './header.css'
import { assets } from '../../assets/assets';

export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="inner-content">
          <h2>
            Welcome
          </h2>
          <h1 className='header-logo'>Taste of Ghana</h1>
          <p>
            At Taste of Ghana, we believe in more than just great food; we
            believe in creating memorable dining experiences. Our inviting
            atmosphere, combined with attentive service and vibrant Ghanaian
            decor, ensures that every visit feels like a special occasion.
          </p>
          <div className="btn">
            <button>Learn More</button>
            <button>View Menu</button>
          </div>
        </div>
        <div className="inner-content1">
          <img src={assets.header_img} alt="" />
        </div>
      </div>
    </div>
  );
}
