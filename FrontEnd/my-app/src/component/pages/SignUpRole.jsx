import React, { useState } from 'react'
import ClientIcon from '../../image/client.png'
import FreelancerIcon from '../../image/administrator.png'
import { NavLink } from 'react-router-dom'

const SignUpRole = (props) => {
    
  return (
    <div className='flex items-center justify-center flex-col mt-10'>
        <div className="title">
            <h3 className='text-3xl font-bold '>Join as a client or freelancer</h3>
        </div>
        <div className="role-choosing flex mt-10 gap-10">
        <div className="client border-4 p-2 rounded-xl cursor-pointer hover:border-[#108a00]" >
            <div className="cont flex flex-row justify-between">
            <img src ={ClientIcon} className='h-10 ml-4'></img>
            <label class="container ml-24 mt-2  ">
            <div class="form">
            <input onClick={()=>props.setSignUpRole('client')}  id="01" type="radio" name="r" value="client" checked></input>
            </div>
            </label>           
             </div>
          <h3 className='text-xl font-semibold mt-4'>I’m a client,<br></br> hiring for a<br></br> project</h3>
        </div>
        <div className="freelancer border-4 rounded-xl p-2 hover:border-[#108a00] cursor-pointer" >
            <div className="cont flex flex-row justify-between">
            <img src ={FreelancerIcon} className='h-10 ml-4'></img>
            <label class="container ml-24 mt-2 ">
            <div class="form">
            <input onClick={()=>props.setSignUpRole('freelancer')} id="01" type="radio" name="r" ></input>
            </div>
            </label>
            </div>
          <h3 className='text-xl mt-4 font-semibold'>I’m a freelancer,<br></br> looking for work</h3>
        </div>
        </div>
        {props.role===''&& <h3 className='mt-10 bg-slate-200 font-semibold p-2.5 rounded-xl text-[#A5A5A5] '>Create Account</h3>}
        {props.role==='client'&& 
        <NavLink to='/sign-up-form'>
          <button className='mt-10 bg-[#108a00] text-[#fff] p-2.5 rounded-xl '>Join As Client</button>
        </NavLink>
        }
        {props.role==='freelancer'&&
          <NavLink to='/sign-up-form'>
            <button className='mt-10 bg-[#108a00] text-[#fff] p-2.5 rounded-xl '>Apply As Freelancer</button>
          </NavLink> 
        }
        <h3 className='mt-6'>Already have an account? Log In</h3>
    </div>
  )
}

export default SignUpRole