import FoodItems from "../FoodItems/FoodItems"
import Footer from "../Footer/Footer"
import Menus from "../Menus/Menus"
import Hero from "../Hero/Hero"
import { NavBar } from "../NavBar/NavBar"

const Home = () => {
  return (
    <div className="container mx-auto px-6">
        <NavBar/>
        <Hero/>
        <Menus/>
        <FoodItems/>
        <Footer/>
    </div>
  )
}

export default Home