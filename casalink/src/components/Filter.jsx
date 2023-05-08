import React, { useContext } from 'react'
import LocationDropdown from "./LocationDropdown"
import PropertyDropdown from "./PropertyDropdown"
import PriceRangeDropdown from "./PriceRangeDropdown"
import { HouseContext } from './HouseContext'
//import Context

function Filter() {
  const {handleClick} = useContext(HouseContext)

  return (
    <div 
      className='mt-64 lg:mt-48 px-[30px] py-6 mx-auto
                flex gap-4 lg:gap-x-3 flex-col lg:flex-row justify-between
                max-w-[1170px]
                relative
                lg:shadow-1 bg-white lg:backdrop-blur text-zinc-950
                rounded-lg
      '>
      <LocationDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button 
          onClick={() => handleClick()}
          className='bg-amber-500 
          hover:bg-amber-600 
          transition 
          w-full 
          lg:max-w-[162px] 
          h-16 
          rounded-lg 
          flex 
          justify-center
          items-center
          text-white
          text-lg
      '>
        Research
      </button>
    </div>
  )
}

export default Filter
