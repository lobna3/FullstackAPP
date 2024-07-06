import React from 'react'
import DesignIcon from '../../image/graphic-designer.gif'
import Profile from '../../image/profile.png'
import Skill from '../../image/skill.jpg'
import { IoIosTimer } from "react-icons/io";

const Graphics = () => {
  return (
    <div className='container-prog'>
      <div className="flex items-center justify-center gap-2 mt-10 ml-6">
        <img src={DesignIcon} className='h-20'></img>
        <h1 className='text-3xl font-bold text-[#181818] '>Graphics & Design</h1>
      </div>
      <div className="talents ml-6">
        <h3 className='text-3xl font-semibold text-[#181818] mt-10 ml-6'>Top projects you may like</h3>
        <div className="talent-card mt-10 max-w-64 rounded-xl cursor-pointer ml-6">
          <img src={Skill} className='w-64 rounded-xl'></img>
          <h5 className='p-3 font-semibold text-[#181818] cursor-pointer hover:text-[#108a00]'>React JS | React Developer | Front End Developer | Reactjs | Figma to</h5>
          <div className="price-delivery flex items-center">
            <IoIosTimer size={28} className='text-[#505050] ml-3' />
            <h5 className='text-[#505050] font-bold text-sm ml-1 '>2 days delivery</h5>
            <h5 className='text-[#505050] font-bold text-sm ml-6 '>From $100</h5>
          </div>
          <div className="profile flex ">
            <img src={Profile} className='w-14 mt-6' />
            <h5 className='mt-10 ml-2 font-semibold text-[#181818]'>username</h5>
            <h5 className='mt-10 ml-10 font-semibold p-1'>⭐ 4.8</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graphics