import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='fixed left-0 w-full py-8 z-10 text-white'>
      <div className='container mx-auto lg:flex justify-between items-center'>
        <Link to="/">
          <h1 className='text-amber-500 text-3xl font-semibold'>CASALINK</h1>
        </Link>
        <div className='flex items-center gap-6'>
          <Link className="bg-gray-300 hover:bg-amber-600 p-2 lg:px-4 lg:py-3 rounded-lg transition" to="">Became a host</Link>
          <Link className="bg-gray-300 hover:bg-amber-600 p-2 lg:px-4 lg:py-3 rounded-lg transition" to="">Log in</Link>
          <Link className="bg-amber-500 hover:bg-amber-600 p-2 lg:px-4 lg:py-3 rounded-lg transition" to="">Sign up</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
