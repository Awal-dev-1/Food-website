import { useContext, useState } from 'react'
import './foodDisplay.css'
import { GetTheContext } from '../Context/UseTheContext'
import FoodItem from '../FoodItem/FoodItem';

export default function FoodDisplay() {
 
    const {food_list} = useContext(GetTheContext)
  return (
    <div className="display-container">
      <div className="display-content">
        <h2>View Our Top Food Here</h2>
        <p>
          Welcome to Taste of Ghana! We are thrilled to recommend some of the
          standout dishes from our menu that will give you a true taste of
          Ghanaian cuisine.
        </p>
      </div>
      <div className='display'>
        {
            food_list.map((item,index) => {
                 return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>;
            })
            
        }
      </div>
    </div>
  );
}
