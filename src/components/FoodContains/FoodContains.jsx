import { useState, useEffect } from 'react'
import axios from "axios";
import Food from '../Food/Food'

const FoodContains = () => {
    const [foods, setFoods] = useState([]);
    const baseURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    useEffect(() => {
        axios.get(baseURL).then((res) => {
            setFoods(res.data.categories);
        })
    }, [])
    return (
        <div className='py-8'>
            <small className='text-[#713F12] font-bold text-xl' >Our Menu</small>
            <h1 className='text-5xl font-bold py-3'>Menu that always<br />make you fall in love</h1>
            <div className='lg:w-6/12 mx-auto my-4'>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search food" />
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70 cursor-pointer">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-6">
                {
                 foods.map(food => <Food key={food.idCategory} food={food}></Food>)
                }
            </div>
        </div>
    )
}

export default FoodContains