import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='fixed left-0 w-full py-8 z-10 text-zinc-950'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link>
          <h1 className='text-amber-500 text-3xl font-semibold'>CASALINK</h1>
        </Link>
        <div className='flex items-center gap-6'>
          <Link className="hover:text-amber-600 transition" to="">Log in</Link>
          <Link className="bg-amber-500 hover:bg-amber-600 px-4 py-3 rounded-lg transition" to="">Sign up</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
