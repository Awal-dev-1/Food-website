import React from 'react'
import './MenuList.css'
import { menu_list } from '../../assets/assets'


export default function MenuList({category,setCategory}) {
  return (
    <div className="list-menu">
      <div className="list-menu-text">
        <h2>
          Explore the vibrant flavors of Ghana at <span>Taste of Ghana</span>
        </h2>
        <p>
          Our menu features a delightful array of Ghanaian specialties, from the
          savory and spicy jollof rice to the aromatic and hearty waakye.
          Indulge in our tender, flavorful grilled tilapia, or enjoy the
          comforting taste of our rich groundnut soup.
        </p>
      </div>
      <div className="menu-list-content">
        {menu_list && menu_list.length > 0
          ? menu_list.map((listFood,index) => (
              <div onClick={() => setCategory((prevSet) => prevSet === listFood.menu_name ? "all":listFood.menu_name)} className="menu-list-image" key={index}>
                <img className={category === listFood.menu_name ? "active":""} src={listFood.menu_image} alt="" />
                <p>{listFood.menu_name}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
