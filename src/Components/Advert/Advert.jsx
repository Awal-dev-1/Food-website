import React from 'react'
import './advert.css'
import { assets } from '../../assets/assets'

export default function Advert() {
  return (
    <div className='advert-container'> 
         <img src={assets.food_advert}  alt=''/>
    </div>
  )
}
