import React from 'react'
import {BsFillHouseFill} from "react-icons/bs"
import {TbAdjustmentsHorizontal} from "react-icons/tb"
import {MdSecurity} from "react-icons/md"
import {BiSupport}  from "react-icons/bi"


function Banner() {
  return (
    <section className='bg-zinc-700 p-12 rounded-[20px]'>
        <p className='text-2xl mb-8'>Our Features</p>
        <div className='flex flex-wrap gap-y-8 '>
            {/* feature1 */}
            <div className='p-2 min-h-[70px] w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r lg:even:last:border-none items-center'>
              <BsFillHouseFill className='mb-2 text-2xl font-semibold lg:text-2xl' />
              <span className='font-light text-xs lg:text-base'> 
                We offer diverse property types, ensuring a home to fit every lifestyle.
              </span>
            </div>
            {/* feature2 */}
            <div className='p-2 min-h-[70px] w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r lg:even:last:border-none items-center'>
              <TbAdjustmentsHorizontal className='mb-2 text-2xl font-semibold lg:text-2xl' />
              <span className='font-light text-xs lg:text-base'>
                You can easily find your ideal property with our customizable search function
              </span>
            </div>
            {/* feature3 */}
            <div className='p-2 min-h-[70px] w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r lg:even:last:border-none items-center'>
              <MdSecurity className='mb-2 text-2xl font-semibold lg:text-2xl' />
              <span className='font-light text-xs lg:text-base'>
                Strict authentication and high-security protect user information from fraud
              </span>
            </div>
            {/* feature4 */}
            <div className='p-2 min-h-[70px] w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r lg:even:last:border-none items-center'>
              <BiSupport className='text-2xl font-semibold lg:text-2xl' />
              <span className='font-light text-xs lg:text-base'>
                24/7 customer support, providing quick and professional assistance 
              </span>
            </div>
        </div>
    </section>
  )
}

export default Banner
