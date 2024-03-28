import React from 'react'

const About = () => {
  return (
    <section id='about' className='w-full min-h-screen'>
      <div className='flex justify-center items-center'>
        <div className='w-1/2 h-screen'>
            <img src="/room-1.jpg" alt="room" className='h-full m-auto'/>
        </div>
        <div className='w-1/2 h-screen flex items-center'>
            <p className='text-white font-quicksand text-3xl'>Here at Kaizen Interiors, we specialize in providing all our customers with the best furniture options. <br /><br />Our goal? <br /><br />To personalize each space and add a touch of the client's personality to it. All while sticking to our driving principle, <em className='font-gothic'>Kaizen</em>. <br /><br /><strong>Kaizen - The principle of continuous improvement.</strong></p>
        </div>
      </div>
    </section>
  )
}

export default About
