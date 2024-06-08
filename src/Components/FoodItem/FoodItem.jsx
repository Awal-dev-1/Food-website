import  { useContext} from "react";
import "./foodItem.css";
import {assets} from '../../assets/assets'
import { GetTheContext } from "../Context/UseTheContext";

export default function FoodItem({ id, name, description, price, image }) {

  //const [countItems, setCountItems] = useState(0);
  const {cartItemCount, addCartItem, removeCartItem} = useContext(GetTheContext)


  return (
    <div className="food-item">
      <div className="item-display">
        <img className="item-image" src={image} alt="" />
      </div>
      
        <div className="count-container">
          {
            !cartItemCount[id]?
          <img className="add-up" onClick={() => addCartItem(id)} src={assets.add_icon_white} alt="" /> :
          <div className="count-box">
            <img src={assets.remove_icon_red}  onClick={() => removeCartItem(id)} alt="" />
            <p className="count">{cartItemCount[id]}</p>
            <img src={assets.add_icon_green}  onClick={() =>addCartItem(id)} alt=""/>
          </div>
          }
        </div>
    
      <div className="item-info">
        <p className="name">{name}</p>
        <p className="price">{price} Cedis</p>
        <p className="des">{description}</p>
      </div>
    </div>
  );
}
