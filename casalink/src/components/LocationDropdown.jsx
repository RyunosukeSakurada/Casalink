import React, { useContext, useState } from 'react'

//import icons
import {RiMapPinLine,RiArrowDownSLine,RiArrowUpSLine} from "react-icons/ri"
//import headless ui
import {Menu} from "@headlessui/react"
//import house context
import {HouseContext} from "./HouseContext"

function LocationDropdown() {
  const {location, setLocation, locations} = useContext(HouseContext)

  const [isOpen, setIsOpen] = useState(false)


  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button 
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPinLine className='dropdown-icon-primary'/>
        <div>
          <div className='text-[15px] font-medium leading-tight'>{location}</div>
          <div className='text-[13px]'>Select your place</div>
        </div>
          {
            isOpen ? (
              <RiArrowUpSLine className='dropdown-icon-secondary'/>
              ) : (
              <RiArrowDownSLine className='dropdown-icon-secondary'/>
            )
          }
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {locations.map((location,index) => {
          return(
            <Menu.Item 
              onClick={()=> setLocation(location)}
              className="cursor-pointer hover:text-ambie-600 transition" 
              as="li" 
              key={index}
            >
              {location}
            </Menu.Item>
          )
        })}
      </Menu.Items>

    </Menu>
  )
}

export default LocationDropdown
