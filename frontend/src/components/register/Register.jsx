import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='p-5'>
        <div className='flex flex-col justify-center items-center md:py-[150px]'>
            <form>
                <div className='flex flex-col gap-5 justify-center items-center'>
                <h1 className='text-center text-3xl font-semibold'>Register</h1>

                <div>
                    <input 
                        type='name' 
                        placeholder='Name'
                        className='py-2 px-3 outline-none border-2 border-blue-950 rounded shadow-md'
                     />
                </div>

                <div>
                    <input 
                        type='email' 
                        placeholder='Email'
                        className='py-2 px-3 outline-none border-2 border-blue-950 rounded shadow-md'
                     />
                </div>

                <div>
                    <input 
                        type='password' 
                        placeholder='Password'
                        className='py-2 px-3 outline-none border-2 border-blue-950 rounded shadow-md'
                     />
                </div>
                <div>
                <input 
                        type='submit' 
                        placeholder='Login'
                        className='py-2 px-[78px] cursor-pointer outline-none border-2 bg-blue-950 rounded shadow-md text-white'
                     />
                </div>
                <p>Already have an account?<Link to='/login' className='text-blue-500'>Login</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register