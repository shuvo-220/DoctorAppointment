import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Register = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/user/register',{
                name,email,password
            });
            if(res.status === 200){
                alert('Registration Successfull')
                navigate('/login')
            }
        } catch (error) {
            alert('Registration Failed')
            console.log(error.message)
        }
    }

  return (
    <div className='p-5'>
        <div className='flex flex-col justify-center items-center md:py-[150px]'>
            <form onSubmit={handleSubmit} >
                <div className='flex flex-col gap-5 justify-center items-center'>
                <h1 className='text-center text-3xl font-semibold'>Register</h1>

                <div>
                    <input 
                        type='name' 
                        placeholder='Name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className='py-2 px-3 outline-none border-2 border-blue-950 rounded shadow-md'
                     />
                </div>

                <div>
                    <input 
                        type='email' 
                        placeholder='Email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className='py-2 px-3 outline-none border-2 border-blue-950 rounded shadow-md'
                     />
                </div>

                <div>
                    <input 
                        type='password' 
                        placeholder='Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
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