import React from 'react'
import ReviewCard from '../components/ReviewCard'

const Testimonials = () => {
    const reviews = [
        {
            imgURL: '/customer1.jpeg', 
            customerName: 'Morich Brown',
            rating: 4.5,
            feedback: "The attention to detail and the quality of the products exceeded my expectations. Highly recommended!"
        },
        {
            imgURL: '/customer2.svg', 
            customerName: 'Lota Mongeskar',
            rating: 4.5,
            feedback: "The products not only met but exceeded my expectations. I'll definitely be a returning customer!"
        }
    ];
  return (
    <section id='testimonials' className='w-full min-h-screen text-white bg-cover flex items-center flex-col'>
    <h3 className='font-gothic text-center text-4xl font-bold mt-32'>
      What Our Customers Are Saying
    </h3>
    <p className='m-auto mt-16 text-center font-quicksand'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
    <div className='mt-24 flex flex-1 justify-evenly items-center gap-14'>
      {reviews.map(review => (
        <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback}/>
      ))}
    </div>
  </section>
  )
}

export default Testimonials
