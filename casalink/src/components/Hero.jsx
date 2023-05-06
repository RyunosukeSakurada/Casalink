import React from 'react'

function Hero() {
  return (
    <section 
      className='h-[850px] w-full 
                bg-hero bg-right bg-cover bg-no-repeat 
                pt-[225px] pb-[254px]
                relative
                lg:bg-center lg:mb-28
      '>
      <div className='container mx-auto text-center'>
        <h1 className='text-2xl mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight lg:max-w-[888px]'>
          Your Dream Home Awaits with <span className='text-amber-500 bg-zinc-950 p-2 rounded-3xl'>Casalink</span>
        </h1>
        <h2 className='mb-[30px] max-w-[627px] mx-auto lg:mb-[50px] lg:text-xl font-semibold'>
          Discover the Perfect Property and Make Your Dream a Reality
        </h2>
        <button 
          className='bg-[rgba(255,255,255,0.3)] 
                    hover:bg-[rgba(255,255,255,0.5)] 
                    px-[35px] py-[10px] mb-[160px] 
                    text-xl 
                    rounded-md 
                    backdrop-blur-md 
                    transition
                    lg:px-[80px] lg:py-[16px]
        '>Get Started</button>
      </div>
    </section>
  )
}

export default Hero
