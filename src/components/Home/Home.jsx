import FoodContains from "../FoodContains/FoodContains"
import Hero from "../NavBar/Hero/Hero"
import { NavBar } from "../NavBar/NavBar"

const Home = () => {
  return (
    <div className="container mx-auto px-6">
        <NavBar/>
        <Hero/>
        <FoodContains/>
    </div>
  )
}

export default Home