import React from 'react'
import { FaHouse, FaLocationDot } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom'
import { YouTubePlayer } from '../YouTubePlayer/YouTubePlayer';

const FoodDetails = () => {
  const params = useLoaderData();
  const { strMeal, strCategory, strArea, strInstructions, strYoutube, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8,
    strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8
  } = params.meals[0];

  const getYouTubeVideoId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})|(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    return matches ? (matches[1] || matches[2]) : null;
  };

  const vid = getYouTubeVideoId(strYoutube);
  return (
    <section className='container mx-auto my-8'>
      <div className="overflow-hidden rounded-xl bg-zinc-50 grid md:grid-cols-2 gap-4">
        <div>
          <img alt={strMeal} src={strMealThumb} className="h-[24rem] w-full object-cover transition-all duration-300 hover:scale-110" />
        </div>
        <div>
          <YouTubePlayer videoId={vid} />
        </div>
      </div>

      <div className="py-8 px-4">
        <div className=' grid md:grid-cols-2 gap-4'>
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl uppercase font-bold text-gray-900 md:text-3xl">{strMeal}</h2>
              <div className='text-end'>
                <h6>Category: {strCategory}</h6>
                <h6 className='flex items-center justify-end'><FaLocationDot /> {strArea}</h6>
              </div>
            </div>
            <h6 className='text-xl my-2 text-gray-600 font-semibold'>Instructions:</h6>
            <p className="text-justify text-gray-800">{strInstructions}</p>
          </div>
          <div className="mt-4">
            <h6 className='text-xl my-2 text-gray-600 font-semibold'>Ingredients:</h6>
            <div className="py-3 flex items-center justify-between border-t hover:bg-gray-200">
              <h3>{strIngredient1}</h3>
              <h6 className="px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{strMeasure1}</h6>
            </div>
            <div className="py-3 flex items-center justify-between border-t hover:bg-gray-200">
              <h3>{strIngredient2}</h3>
              <h6 className="px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{strMeasure2}</h6>
            </div>
            <div className="py-3 flex items-center justify-between border-t hover:bg-gray-200">
              <h3>{strIngredient3}</h3>
              <h6 className="px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{strMeasure3}</h6>
            </div>
            <div className="py-3 flex items-center justify-between border-t hover:bg-gray-200">
              <h3>{strIngredient4}</h3>
              <h6 className="px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{strMeasure4}</h6>
            </div>
            <div className="py-3 flex items-center justify-between border-t hover:bg-gray-200">
              <h3>{strIngredient5}</h3>
              <h6 className="px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{strMeasure5}</h6>
            </div>
            <div className="py-3 flex items-center justify-between border-t hover:bg-gray-200">
              <h3>{strIngredient6}</h3>
              <h6 className="px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{strMeasure6}</h6>
            </div>
            <div className="py-3 flex items-center justify-between border-t hover:bg-gray-200">
              <h3>{strIngredient7}</h3>
              <h6 className="px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{strMeasure7}</h6>
            </div>
            {strIngredient8 &&
              <div className="py-3 flex items-center justify-between border-t hover:bg-gray-200">
                <h3>{strIngredient8}</h3>
                <h6 className="px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{strMeasure8}</h6>
              </div>
            }
            <div className="my-6 text-center">
              <Link to="/" className='btn btn-ghost'><FaHouse /> Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default FoodDetails