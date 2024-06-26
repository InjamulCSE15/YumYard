import React from 'react'
import { useLoaderData } from 'react-router-dom'

const FoodDetails = () => {
  const params = useLoaderData();
  console.log(params);
  return (
    <div>FoodDetails</div>
  )
}

export default FoodDetails