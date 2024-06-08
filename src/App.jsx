import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order'
import FoodDisplay from './Components/Food_Display/FoodDisplay';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='oder' element={<Order/>}/>
        <Route path='menu' element={<FoodDisplay/>} />
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
