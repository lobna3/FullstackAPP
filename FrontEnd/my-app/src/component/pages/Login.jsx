import React from 'react'
import Logo from '../../image/th-logo.png'
import { NavLink } from 'react-router-dom'

const Login = (props) => {
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img src={Logo} className='mx-auto h-10 w-auto'></img>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to TalenHub</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-semibold leading-6 text-gray-900">Password</label>
          
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="role flex gap-4">
        <h3 class="block text-sm font-semibold leading-6 text-gray-900">Login us: </h3>
        <form class="form">
        <input id="01" type="radio" name="r" value="client" onClick={(e)=>props.userRole(e.target.value)} checked></input>
        <label for="01" class="block text-sm font-semibold leading-6 text-gray-900">Client</label>
        <input id="01" type="radio" name="r" value="freelancer" onClick={(e)=>props.userRole(e.target.value)} checked></input>
        <label for="01" class="block text-sm font-semibold leading-6 text-gray-900">Freelancer</label>
        </form>
      </div>
      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-[#108a00] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Login</button>
      </div>
    </form>

    <h3 class="mt-10 text-center text-sm text-gray-500">
      Not a member? <NavLink to='/sign-up-role' class="font-bold text-[#108a00] ml-1">SignUp</NavLink></h3>
    
  </div>
</div>
  )
}

export default Login