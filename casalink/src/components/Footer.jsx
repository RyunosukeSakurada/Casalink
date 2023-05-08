import React from 'react'

function Footer() {
  return (
    <footer>
      <div className='p-10 bg-zinc-700 text-gray-200'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            <div className='mb-10'>
              <h4 className='text-amber-500 text-2xl pb-4'>CASALINK</h4>
              <p>
                456 Granville Avenue,<br />
                Vancouver<br />
                Phone:+1 234 567 8901 <br />
                Email:casalink@example.com<br />
              </p>
            </div>
            <div className='mb-10'>
              <h4 className='pb-4 font-semibold'>Useful Links</h4>
              <ul className='cursor-pointer'>
                <li className='pb-2 hover:text-amber-500'>Home</li>
                <li className='pb-2 hover:text-amber-500'>About us</li>
                <li className='pb-2 hover:text-amber-500'>Service</li>
                <li className='pb-2 hover:text-amber-500'>Privacy policy</li>
              </ul>
            </div>
            <div className='mb-10'>
              <h4 className='pb-4 font-semibold'>Join Our Newsletter</h4>
              <form className='flex flex-row flex-wrap'>
                <input 
                  type="text"
                  className='text-gray-500 w-2/3 p-2 focus:border-amber-500 rounded rounded-r-none'
                  placeholder='email@example.com'
                />
                <button className='w-1/3 bg-amber-500 text-white hover:bg-amber-600 rounded rounded-l-none'>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
