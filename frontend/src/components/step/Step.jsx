import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

const Step = () => {

    const menu = [
        {
            id:'1',
            title:'Login/Register',
            desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            icon:<LoginIcon style={{width:'100px', height:'100px'}} />
        },
        {
            id:'2',
            title:'Search Doctor',
            desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            icon:<PersonSearchIcon style={{width:'100px', height:'100px'}} />
        },
        {
            id:'3',
            title:'Book a Doctor',
            desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            icon:<BookmarkAddedIcon style={{width:'100px', height:'100px'}} />
        }
    ]

  return (
    <div className='p-5 md:p-10'>
    <h1 className='text-4xl font-bold text-gray-700 text-center py-8'>Step For Book</h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 text-center gap-4'>
            {
                menu.map((item)=>(
                    <div key={item.id} className='flex justify-center items-center rounded p-5 border-solid border-gray-300 border-2 hover:shadow-lg duration-300'>
                        <div className=''>
                            <span className='text-gray-600'>{item.icon}</span>
                            <h1 className='text-2xl text-blue-950 font-bold py-2'>{item.title}</h1>
                            <p className='text-gray-600 text-lg'>{item.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Step