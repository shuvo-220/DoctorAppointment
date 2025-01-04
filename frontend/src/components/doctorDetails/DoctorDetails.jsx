import React, { useState } from 'react'
import image from '../../assets/1.png'
import About from './About'
import Bio from './Bio'

const DoctorDetails = () => {

    const[tab, setTab] = useState('about')

  return (
    <div>
        <div className='p-5 md:p-[50px] mx-auto'>
            <div className='flex flex-col md:flex-row justify-center gap-5 md:justify-center'>
                <div>
                    <img src={image} alt='img' className='w-[350px] h-[350px] rounded' />
                    <h1 className='text-2xl font-semibold text-gray-600 py-2'>Name : Dr. Subrina Sultana</h1>
                    <h3 className='text-xl font-semibold text-gray-800'>Specilization : Cardiologist</h3>

                </div>

                {/* about and bio section */}
                <div className='w-[400px]'>
                    <div className='w-full'>
                        <div className='flex gap-5'>
                            <button onClick={()=>setTab('about')} className={`${tab === 'about' && 'border-b-2 border-blue-950 text-blue-950 py-2 px-3 font-semibold text-lg' }`} >About</button>
                            <button onClick={()=>setTab('bio')} className={`${tab === 'bio' && 'border-b-2 border-blue-950 text-blue-950 py-2 px-3 font-semibold text-lg' }`}>Bio</button>
                        </div>
                        <hr className='py-2' />
                        {
                            tab === 'about' ? <About /> : <Bio />
                        }
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