import { useState } from 'react'
import Header from '../../Components/Header/Header'
import MenuList from '../../Components/MenuList/MenuList'
import Advert from '../../Components/Advert/Advert';

const Home = () => {

  const [category, setCategory] = useState("all");
  return (
    <div>
    <Header/>
    <MenuList category={category} setCategory={setCategory}/>
    <Advert/>
    </div>
  )
}

export default Home
