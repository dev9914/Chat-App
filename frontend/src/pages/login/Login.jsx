import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading, login} = useLogin();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
       <h1 className='text-6x1 fontSize font-semibold text-center text-gray-300'> Login
       </h1>
       <form onSubmit={handleSubmit} >
        <div>
          <label className='label p-2 '>
            <span className='text-base text-white label-text'>Username</span>
          </label>
          <input type="text"  value= {username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter username' className='w-full input bg-black input-bordered h-10' />
        </div>

        <div>
          <label className='label'>
            <span className='text-base text-white label-text'>Password</span>
          </label>
          <input type="password" value= {password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' className='w-full input bg-black input-bordered h-10' />
        </div>

        <Link to="/signup" className='text-sm text-gray hover:underline onHover mt-2 inline-block'> Don't have an account? </Link>

        <div>
          <button className='btn bg-black onHover btn-block btn-sm mt-2' disabled={loading} > {loading? <span className='loading loading-spinner'></span> : "Login"}</button>
        </div>

       </form>
      </div> 
    </div>
  )
}

export default Login
