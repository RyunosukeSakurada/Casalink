import React from 'react'
import Hero from '../components/Hero'
import Filter from '../components/Filter'
import HouseList from "../components/HouseList"

function Home() {
  return (
    <div className='min-h-[1800px]'>
      <Hero />
      <Filter />
      <HouseList />
    </div>
  )
}

export default Home
