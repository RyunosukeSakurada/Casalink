import React, { useContext, useState } from 'react'
//import icons
import {RiWallet3Line,RiArrowDownSLine,RiArrowUpSLine} from "react-icons/ri"
//import headless ui
import {Menu} from "@headlessui/react"
//import house context
import {HouseContext} from "./HouseContext"

function PriceRangeDropdown() {
  const {price,setPrice} = useContext(HouseContext)

  const [isOpen, setIsOpen] = useState(false)

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '0 - 1000',
    },
    {
      value: '1000 - 5000',
    },
    {
      value: '5000 - 10000',
    },
    {
      value: '10000 - 50000',
    },
    {
      value: '50000 - 100000',
    },
    {
      value: '100000 - 150000',
    },
    {
      value: '150000 - 200000',
    },
    {
      value: '250000 - 300000',
    },
  ]

  return (
    <Menu as="div" className="dropdown">
      <Menu.Button 
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className='dropdown-icon-primary'/>
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Choose price range</div>
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
        {prices.map((price,index) => {
          return(
            <Menu.Item 
              onClick={()=> setPrice(price.value)}
              className="cursor-pointer hover:text-amber-500 transition" 
              as="li" 
              key={index}
            >
              {price.value}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default PriceRangeDropdown
