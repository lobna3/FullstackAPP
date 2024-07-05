import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import PopSignUp from '../../popups/SignUpPopSucc.jsx'
const SignUpForm = (props) => {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [address,setAddress]=useState('')
const [password,setPassword]=useState('')
const [phone,setPhone]=useState(null)
const [image,setImage]=useState('https://th.bing.com/th/id/OIP.i_bAvIgZVwOB-3yN_pEDawAAAA?w=278&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7')
const freelancer ={
    name:name,
    email:email,
    password:password,
    adress:address,
    phoneNumber:phone,
    imageUrl:image
}

const signupFreelancer=(newData)=>{
    axios.post('http://localhost:5000/api/freelance/register',newData)
    .then((response) => {
       console.log('User registered successfully:', response.data);
      }).catch((error)=>{console.log(error);})
}



const signupClient = (addClient)=>{
    axios.post('http://127.0.0.1:5000/api/client/signup',addClient)
    .then((res)=>{
        console.log('User registered successfully:');
    }).catch((error)=>{console.log(error)})
}


  return (
    <div className='flex flex-col'>
        {props.role==='client' && <h3 className='text-3xl font-medium flex justify-center mt-10'>Sign up to hire talent</h3> }
        {props.role==='freelancer' && <h3 className='text-3xl font-medium flex justify-center mt-10'>Sign up to find work you love</h3> }

    <div class="max-w-md mx-auto bg-white p-8 rounded-lg ">
        <form>
            <div class="mb-4">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                <div class="relative">
                    <input type="text" id="name" name="name" class=" outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your name" required onChange={(e)=>{setName(e.target.value)}}/>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i class="fas fa-user text-gray-400"></i>
                    </div>
                </div>
            </div>
            
            <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <div class="relative">
                    <input type="email" id="email" name="email" class="outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" required onChange={(e)=>{setEmail(e.target.value)}}/>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i class="fas fa-envelope text-gray-400"></i>
                    </div>
                </div>
            </div>
            
            <div class="mb-4">
                <label for="address" class="block text-gray-700 text-sm font-bold mb-2">Address:</label>
                <div class="relative">
                    <textarea id="address" name="address" rows="4" class="outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your address" required onChange={(e)=>{setAddress(e.target.value)}}></textarea>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i class="fas fa-map-marker-alt text-gray-400"></i>
                    </div>
                </div>
            </div>
            
            <div class="mb-4">
                <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                <div class="relative">
                    <input type="password" id="password" name="password" class=" outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" required onChange={(e)=>{setPassword(e.target.value)}}/>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i class="fas fa-lock text-gray-400"></i>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                        <button type="button" class="focus:outline-none">
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="mb-4">
                <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
                <div class="relative">
                    <input type="tel" id="phone" name="phone" class="outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="123-456-7890" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={(e)=>{setPhone(e.target.value)}}/>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i class="fas fa-phone text-gray-400"></i>
                    </div>
                </div>
            </div>
            
            <div class="mb-4">
                <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Upload Image:</label>
                <input type="file" id="image" name="image" class="outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" accept="image/*" required onChange={(e)=>{setImage(e.target.value)}}/>
            </div>
            
            <button type="submit" class=" ml-28 mt-8 bg-[#108a00] hover:bg-[#3d9731] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=>signupClient(freelancer)} >Sign Up</button>
           <h3 className='mt-10 ml-10'>Already have an account? <NavLink className='font-semibold leading-6 text-[#108a00] ml-4' to='/login'>Login</NavLink></h3>
        </form>
    </div>
    </div>
  )
}

export default SignUpForm