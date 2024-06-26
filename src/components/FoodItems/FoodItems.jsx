import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Food from "../Food/Food";
import { TailSpin } from "react-loader-spinner";
import { Outlet } from "react-router-dom";

const FoodItems = () => {
    const [searchStr, setSearchStr] = useState('');
    const [searchResultTxt, setSearchResultTxt] = useState(false);
    const [loader, setLoader] = useState(false);
    const [foods, setFoods] = useState([]);
    const inputChange = (e) => {
        setSearchStr(e.target.value);
    }
    const handleSearchBtn = () => {
        setLoader(true);
        if (searchStr) {
            const searchURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchStr}`;
            axios.get(searchURL).then((res) => {
                setFoods(res.data.meals);
                setSearchResultTxt(!searchResultTxt);
                setLoader(false);
            }
            );
        }
        else {
            toast.error('Please search any food item');
        }
    }



    return (
        <div>
        <Outlet />
            <div className='lg:w-6/12 mx-auto my-4'>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search delicious food" onChange={inputChange} />
                    <svg onClick={handleSearchBtn}
                        xmlns="http://www.w3.org/2000/svg"
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
            <div className="md:mt-12 mt-6 ">
                {searchResultTxt && <h3 className="text-xl my-4">Search result: {foods.length}</h3>}
                {
                    loader &&
                    <div className="flex justify-center">
                    <TailSpin
                        visible={true}
                        height="80"
                        width="80"
                        color="#713f12"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />

                    </div>
                }
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
                    {
                        foods.map(food => <Food key={food.idMeal} food={food} han></Food>)
                    }
                </div>
            </div>
        </div>
    )
}

export default FoodItems