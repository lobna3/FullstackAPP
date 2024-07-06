import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { MdError } from "react-icons/md";
import Logo from '../../image/th-logo.png'
import PopSignUpSucc from '../../popups/SignUpPopSucc.jsx'
const SignUpForm = (props) => {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [address,setAddress]=useState('')
const [password,setPassword]=useState('')
const [phone,setPhone]=useState(null)
const [image,setImage]=useState('https://th.bing.com/th/id/OIP.i_bAvIgZVwOB-3yN_pEDawAAAA?w=278&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7')
const [error,setError]=useState('')
const [success,setSuccess]=useState('')
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
       setSuccess(response.data.message)
      }).catch((error)=>{console.log(error);})
}



const signupClient = (addClient)=>{
    axios.post('http://127.0.0.1:5000/api/client/signup',addClient)
    .then((res)=>{
        setSuccess(res.data.message)
    }).catch((error)=>{console.log(error)})
}

const handelErr=()=>{
    if(!name && !password && !email && !address && !phone){
        setError('Please fill all the fields')
        return;
    }
    if(!name){
        setError('Please enter your name')
        return;
    }
    else if(!email){
        setError('Please enter your email')
        return;
    }
    
    else if (!address){
        setError('Please enter your address')
        return;
    }
    else if(!password){
        setError('Please enter your password')
        return;
    }
   
    else if(!phone){
        setError('Please enter your phone number')
        return;
    }
   
    setError('')

}

const checkemail =()=>{
     if (email) {
        const emailPattern = /\S+@\S+\.\S+/;
        if (!emailPattern.test(email)) {
            setError('enter valid email')
          return;
                }
    }
}
const checkPass =()=>{
    if (password) {
        const passwordPattern = /^[a-zA-Z\d]{8,}$/;
                if (!passwordPattern.test(password)) {
                setError('Password must be at least 8 characters long and one number');
                return;
            }
        }
}
const handleSubmit = (e) => {
    e.preventDefault();
}
console.log(props.role);
  return (
    <div className='flex flex-col justify-center items-center'>
        {props.role==='client' && <h3 className='text-3xl font-medium flex justify-center mt-10'>Sign up to hire talent</h3> }
        {props.role==='freelancer' && <h3 className='text-3xl font-medium flex justify-center mt-10'>Sign up to find work you love</h3> }
        <div className="sub-tit flex flex-col mt-8 p-2 items-center justify-center gap-4">
                <img src={Logo} className='h-10'></img>
            </div>
        {error&&<span class="error-message flex items-center justify-center bg-[#EF665B] p-2 w-64 text-sm font-bold text-[#fff] rounded-lg" id="name-error"><MdError size={23} className='mr-3'/> {error}</span>       
}
    <div class="max-w-md mx-auto flex items-center justify-center bg-white mt-4 p-4 rounded-lg ">
           
        <form onSubmit={handleSubmit} noValidate>
            <div className="cont1 flex gap-3">
            <div class="mb-4">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                <div class="relative">
                    <input type="text" id="name" name="name" class=" outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value),setError('')}}/>
                    
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i class="fas fa-user text-gray-400"></i>
                    </div>
                </div>
            </div>
            
            <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <div class="relative">
                    <input type="email" id="email" name="email" class="outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email"  onChange={(e)=>{setEmail(e.target.value),setError('')}}/>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i class="fas fa-envelope text-gray-400"></i>
                    </div>
                </div>
            </div>
            </div>
            
            
            <div className="cont-2 flex gap-3">
            <div class="mb-4">
                <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                <div class="relative">
                    <input type="password" id="password" name="password" class=" outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password"  onChange={(e)=>{setPassword(e.target.value),setError('')}}/>
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
                    <input type="tel" id="phone" name="phone" class="outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={(e)=>{setPhone(e.target.value),setError('')}}/>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i class="fas fa-phone text-gray-400"></i>
                    </div>
                </div>
            </div>
            
            </div>
            <div class="mb-4">
                <label for="address" class="block text-gray-700 text-sm font-bold mb-2">Address:</label>
                <div class="relative">
                    <input type='adress' id="address" name="address" rows="4" class="outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your address" onChange={(e)=>{setAddress(e.target.value),setError('')}}></input>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <i class="fas fa-map-marker-alt text-gray-400"></i>
                    </div>
                </div>
            </div>  
            <div class="mb-4">
                <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Upload Image:</label>
                <input type="file" id="image" name="image" class="outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" accept="image/*"  onChange={(e)=>{setImage(e.target.value)}}/>
            </div>
                <span type="submit" class=" ml-40 mt-4 bg-[#108a00] hover:bg-[#3d9731] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=>{if (props.role==="freelancer"){
                    signupFreelancer(freelancer)}
                    else if (props.role==="client"){
                    signupClient(freelancer)}
                    handelErr(),checkPass(),checkemail()
                    }}> Sign Up</span> 
                    
      {success&&<PopSignUpSucc/>}

           <h3 className='mt-10 ml-24'>Already have an account? <NavLink className='font-semibold text-[#108a00] ml-1' to='/login'>Login</NavLink></h3>
        </form>
    </div>
    </div>
  )
}

export default SignUpForm