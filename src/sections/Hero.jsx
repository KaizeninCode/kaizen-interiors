import React from 'react'
import Nav from '../components/Nav'

const Hero = () => {
  return (
    <section id='home' className='w-full min-h-screen bg-cover'>
      <Nav/>
      <div className='right-0 absolute w-2/5 mt-64'>
        <p className='text-4xl font-quicksand text-left text-white'>Comfort. Luxury. Elegance.</p>
      </div>
    </section>
  )
}

export default Hero
