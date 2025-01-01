import React from 'react'

const Hero = () => {
  return (
    <div className='lg:py-[50px] md:py-[30px] sm:py-[20px] lg:px-[100px] md:px-[50px] bg-gray-100'>
        <div className='flex flex-col justify-center items-center p-5'>
            <h1 className='text-2xl lg:text-5xl font-bold md:text-3xl text-blue-950'>Complete Health Solution in One Place</h1>
            <p className='md:text-[25px] py-3 md:leading-9 text-center text-gray-600'>Consulting with a health care professional.book a doctor and book a 
            ambulance or anything about health care related.
            all can be done with DocAppointment.</p>
            <button className='py-3 px-5 bg-blue-950 text-white font-semibold hover:scale-105 duration-300'>Book a Appointment</button>
        </div>
    </div>
  )
}

export default Hero