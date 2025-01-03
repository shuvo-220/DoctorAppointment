import React from 'react'
import image from '../../assets/1.png'

const DoctorDetails = () => {
  return (
    <div>
        <div className='p-5 md:p-[50px]'>
            <div className='flex flex-col md:flex-row justify-between gap-5'>
                <div>
                    <img src={image} alt='img' className='w-[350px] h-[350px] rounded' />
                    <h1 className='text-2xl font-semibold text-gray-600 py-2'>Name : Dr. Subrina Sultana</h1>
                    <h3 className='text-xl font-semibold text-gray-800'>Specilization : Cardiologist</h3>

                </div>

                <div>
                    <div>
                        
                    </div>
                </div>

                <div className='' >
                    <div className='border border-gray-500 rounded p-5 shadow-lg' >
                        <h1 className='text-3xl font-semibold text-gray-600'>Book Appointment</h1>
                        <p className='text-xl font-semibold text-gray-600 py-2'>Date : <input type='date' /></p>
                        <p className='text-lg font-semibold text-gray-600'>time : 3:00 PM</p>
                        <p className='text-lg font-semibold text-gray-600 pb-2'>fees : 650/=</p>
                        <button className='py-2 bg-blue-950 text-white text-center w-full rounded hover:scale-105 duration-300'>Book a Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorDetails