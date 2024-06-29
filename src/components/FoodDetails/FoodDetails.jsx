import React from 'react'
import { FaHouse, FaLocationDot } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom'

const FoodDetails = () => {
  const params = useLoaderData();
  const { strMeal, strCategory, strArea, strInstructions, strYoutube, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8,
    strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8
  } = params.meals[0];
  return (
    <section className='container mx-auto my-8'>
      <div className="overflow-hidden rounded-xl bg-zinc-50 sm:grid sm:grid-cols-2">
        <img alt={strMeal} src={strMealThumb} className="h-56 w-full object-cover sm:h-full transition-all duration-300 hover:scale-110" />
        <div className="p-8 md:p-12 lg:px-16">
          <div className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">{strMeal}</h2>
              <div className='text-end'>
                <h6>Category: {strCategory}</h6>
                <h6 className='flex items-center justify-end'><FaLocationDot /> {strArea}</h6>
              </div>
            </div>

            <h6 className='text-xl my-2 text-gray-600 font-semibold'>Instructions:</h6>
            <p className="text-justify text-gray-500">{strInstructions}</p>

            <div className="mt-4">
              <h6 className='text-xl my-2 text-gray-600 font-semibold'>Ingredients:</h6>
                <div class="py-3 flex items-center justify-between border-t hover:bg-gray-200">
                  <h3>{strIngredient1}</h3>
                  <h6 class="px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{strMeasure1}</h6>
                </div>
                <div class="py-3 flex items-center justify-between border-t hover:bg-gray-200">
                  <h3>{strIngredient2}</h3>
                  <h6 class="px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{strMeasure2}</h6>
                </div>
                <div class="py-3 flex items-center justify-between border-t hover:bg-gray-200">
                  <h3>{strIngredient3}</h3>
                  <h6 class="px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{strMeasure3}</h6>
                </div>
                <div class="py-3 flex items-center justify-between border-t hover:bg-gray-200">
                  <h3>{strIngredient4}</h3>
                  <h6 class="px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{strMeasure4}</h6>
                </div>
                <div class="py-3 flex items-center justify-between border-t hover:bg-gray-200">
                  <h3>{strIngredient5}</h3>
                  <h6 class="px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{strMeasure5}</h6>
                </div>
                <div class="py-3 flex items-center justify-between border-t hover:bg-gray-200">
                  <h3>{strIngredient6}</h3>
                  <h6 class="px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{strMeasure6}</h6>
                </div>
                <div class="py-3 flex items-center justify-between border-t hover:bg-gray-200">
                  <h3>{strIngredient7}</h3>
                  <h6 class="px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{strMeasure7}</h6>
                </div>
                <div class="py-3 flex items-center justify-between border-t hover:bg-gray-200">
                  <h3>{strIngredient8}</h3>
                  <h6 class="px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{strMeasure8}</h6>
                </div>
                <div class="py-3 flex items-center justify-between border-t hover:bg-gray-200">
                  <h3>{strIngredient8}</h3>
                  <h6 class="px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">{strMeasure8}</h6>
                </div>              
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className='btn btn-ghost my-4'><FaHouse/> Back to Home</Link>
    </section>

  )
}

export default FoodDetails