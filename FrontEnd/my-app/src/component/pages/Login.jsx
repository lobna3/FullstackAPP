import React from 'react'
import Logo from '../../image/th-logo.png'
import { NavLink,useNavigate } from 'react-router-dom'
import { useState,useEffect } from'react'
import axios from 'axios'
import { MdError } from "react-icons/md";
import { jwtDecode } from "jwt-decode";


const Login = (props) => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [userRole,setUserRole]=useState('')
  const [error,setError]=useState('')
  const navigate = useNavigate()
  
  const user={
    email:email,
    password:password
  }
  const clientLogin = async (client) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/client/signIn', client);
      if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('isAuthenticated', true);
          const decodetoken = jwtDecode(response.data.token);
          props.user(decodetoken);
          navigate('/');
      }
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const freelancerLogin = async (freelancer) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/freelance/login', freelancer);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('isAuthenticated', true);
        const decodetoken = jwtDecode(response.data.token);
        props.user(decodetoken);
          navigate('/');
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleLogin = () => {
    if (userRole === 'client') {
      clientLogin(user);
    } else if (userRole === 'freelancer') {
      freelancerLogin(user);
    }
  };

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img src={Logo} className='mx-auto h-10 w-auto'></img>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to TalenHub</h2>
    {error&&<span class="error-message mt-8 flex items-center justify-center bg-[#EF665B] p-2 w-68 text-sm font-bold text-[#fff] rounded-lg" id="name-error"><MdError size={23} className='mr-3'/> {error}</span>}
    
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input onChange={(e)=>setEmail(e.target.value)} id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-semibold leading-6 text-gray-900">Password</label>
          
        </div>
        <div class="mt-2">
          <input onChange={(e)=>setPassword(e.target.value)} id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="form role flex gap-4">
        <h3 class="block text-sm font-semibold leading-6 text-gray-900">Login us: </h3>
        <div className='flex' >
        <div class="radio-buttons flex items-center gap-5">
  <label class="radio-button flex items-center gap-1">
    <input type="radio" name="option" value="client" onClick={(e)=>setUserRole(e.target.value)}/>
    <div class="radio-circle"></div>
    <span class="radio-label text-sm font-bold">Client</span>
  </label>
  <label class="radio-button flex gap-1">
    <input type="radio" name="option" value="freelancer" onClick={(e)=>setUserRole(e.target.value)}/>
    <div class="radio-circle"></div>
    <span class="radio-label text-sm font-bold">Freelancer</span>
  </label>
        </div>
      </div>
      </div>
    </form>
      <div>
        <button onClick={()=>{handleLogin()}} class="flex mt-4 w-full justify-center rounded-md bg-[#108a00] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ">Login</button>
      </div>

    <h3 class="mt-10 text-center text-sm text-gray-500">
      Not a member? <NavLink to='/sign-up-role' class="font-bold text-[#108a00] ml-1">SignUp</NavLink></h3>
    
  </div>
</div>
  )
}

export default Login