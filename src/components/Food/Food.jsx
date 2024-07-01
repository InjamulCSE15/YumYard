import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Food = ({food}) => {
    const {idMeal, strMealThumb, strMeal, strArea, strCategory } = food;
    return (
        <div className="card card-compact bg-base-100 rounded-md shadow hover:shadow-xl">
            <figure>
                <img className="h-[180px] w-full" src={strMealThumb} alt={strMeal} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-[#713f12]">{strMeal}</h2>
                <p className="flex justify-between items-center">
                   <span>Category: {strCategory}</span> 
                   <span className="badge badge-ghost"><FaLocationDot/><span className="pl-1">{strArea}</span></span> 
                </p>
                <div className="">
                    <Link to={`/FoodDetails/${idMeal}`}>
                    <button className="btn w-full bg-[#713f12] text-white hover:bg-white hover:border hover:border-[#713f12] hover:text-[#713f12]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Food