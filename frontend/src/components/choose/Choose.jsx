import React from 'react'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import doctorImg from '../../assets/1.png'

const Choose = () => {
  return (
    <div className='p-5 md:p-10 lg:p-[35px]'>
        <div>
            <h1 data-aos='fade-up' data-aos-once='true' className='text-center text-xl md:text-3xl lg:text-4xl font-semibold text-blue-950'>Why You Choose Us?</h1>
            <p data-aos='fade-up'  className='text-center text-sm pt-2 py-2 font-semibold text-gray-500 leading-7'>Consulting with a health care professional.book a doctor and book a 
            ambulance or anything about health care related. all can be done with 
            DocAppointment.</p>
        </div>

        <div className='p-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* text area */}
                <div>
                    <div data-aos='zoom-in' className='p-5 md:p-[50px] flex flex-col justify-center items-center'>
                        <h1 className='text-3xl font-semibold text-blue-950 pt-5'>Reaseon for choose us.</h1>
                        <div className='pt-5'>
                        <div className='flex items-center gap-4 py-3 pl-2'>
                            <span className='bg-blue-200 p-2 rounded-full'>
                                <AccessibilityNewIcon className='text-blue-600' />
                            </span>
                            <p className='text-lg text-gray-500 font-semibold'>We always help our patient</p>
                        </div>

                        <div className='flex items-center gap-4 py-3 pl-2'>
                            <span className='bg-yellow-200 p-2 rounded-full'>
                                <MonetizationOnIcon className='text-yellow-600' />
                            </span>
                            <p className='text-lg text-gray-500 font-semibold'>Low cost treatment</p>
                        </div>

                        <div className='flex items-center gap-4 py-3 pl-2'>
                            <span className='bg-gray-200 p-2 rounded-full'>
                                <DesignServicesIcon className='text-gray-600' />
                            </span>
                            <p className='text-lg text-gray-500 font-semibold'>100% satisfication service</p>
                        </div>

                        <div className='flex items-center gap-4 py-3 pl-2'>
                            <span className='bg-gray-200 p-2 rounded-full'>
                                <DesignServicesIcon className='text-gray-600' />
                            </span>
                            <p className='text-lg text-gray-500 font-semibold'>100% satisfication service</p>
                        </div>

                        <div className='flex items-center gap-4 py-3 pl-2'>
                            <span className='bg-gray-200 p-2 rounded-full'>
                                <DesignServicesIcon className='text-gray-600' />
                            </span>
                            <p className='text-lg text-gray-500 font-semibold'>100% satisfication service</p>
                        </div>
                        </div>
                        
                    </div>
                </div>
            {/* image area */}
            <div data-aos='zoom-in' >
                <img src={doctorImg} alt='img' className='wi-full h-full object-cover lg:w-[450px] lg:h-[500px] rounded-md' />
            </div>
            </div>
        </div>

    </div>
  )
}

export default Choose