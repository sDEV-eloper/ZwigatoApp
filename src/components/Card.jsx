import React from 'react'
import {  CARD_IMG_URL } from './utils/constants'

const Card = (props) => {
   const {name, cloudinaryImageId, cuisines, avgRating, }=props?.resList?.info
   console.log(cuisines)
  return (
    <>
    <div className='border-2 border-red-800 w-60 '>
        <div>
            <img src={CARD_IMG_URL+cloudinaryImageId} alt="" className='h-60 w-60' />
        </div>
        <div className='  bg-red-200'>
            <p>
           { cuisines.join(", ")}
            </p>
            <p>{avgRating}</p>
        <h1 className='font-bold'>{name} </h1>
        </div>
    </div>
    </>
  )
}

export default Card