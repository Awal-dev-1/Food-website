import { createContext, useEffect, useState } from 'react'
import { food_list } from '../../assets/assets'

export const GetTheContext = createContext(null)


export default function UseTheContextProvider(props) {

  const [cartItemCount, setCartItemCount] = useState({});

const addCartItem = (cartItemID) => {
  setCartItemCount((prevCart) => {
    const currentCount = prevCart[cartItemID] || 0;
    return { ...prevCart, [cartItemID]: currentCount + 1 };
  });
};

const removeCartItem = (cartItemID) => {
  setCartItemCount((prevCart) => {
    const currentCount = prevCart[cartItemID] || 0;
    const newCount = currentCount > 0 ? currentCount - 1 : 0;
    return { ...prevCart, [cartItemID]: newCount };
  });
};

    const storeContextValue ={
         food_list,
         cartItemCount,
         setCartItemCount,
         addCartItem,
         removeCartItem
    }

    useEffect(()=>{
      console.log(cartItemCount);
    },[cartItemCount])

  return (
    <GetTheContext.Provider value={storeContextValue}>
          {props.children}
    </GetTheContext.Provider>
  )
}
