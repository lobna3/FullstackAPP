import React, { useState } from 'react'
import Logo from '../image/th-logo.png'
import { FiSearch } from "react-icons/fi";
import { NavLink, Link } from 'react-router-dom';
import ProfileImage from '../image/profile.png'
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { RiAlignItemLeftLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { MdPostAdd } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";


const NavBar = (props) => {
  const [dropDown, setDropDown] = useState(false)
  console.log(props.user.id);
  
  return (
    <nav className='flex items-center flex-row p-2'>
      <div className="logo">
        <NavLink to='/'>

          <img src={Logo} className='w-40 ml-20' />
        </NavLink>
      </div>
      <div className="nav-menu flex p-2 ml-10">
        <ul className=' flex items-center justify-between gap-5 text-[#181818]'>
          <NavLink to='/programming'>
            <li className='cursor-pointer hover:text-[#108a00] font-semibold' >Programming & Tech</li>
          </NavLink >
          <NavLink to='/graphics'>
            <li className='cursor-pointer hover:text-[#108a00] font-semibold'>Graphics & Design</li>
          </NavLink>
          <NavLink to='/digital-marketting'>
            <li className='cursor-pointer hover:text-[#108a00] font-semibold'>Digital Marketing</li>
          </NavLink>
        </ul>
      </div>
      <div className="search-bar flex items-center ml-24 bg-[#fff] p-1.5 rounded-xl border ">
        <FiSearch size={18} className='cursor-pointer text-[#181818]' />
        <input type='search' placeholder='Search' className='search-inp ml-2 outline-none '></input>
      </div>
      {!props.user.id &&
        <>
          <div className="login ml-20">
            <NavLink to='/login'>
              <button className='btn h-9 w-16 rounded-xl text-[#181818] hover:text-[#108a00] font-semibold '>Login</button>
            </NavLink>
          </div>
          <div className="sign-up ml-5">
            <NavLink to='/sign-up-role'>
              <button className='btn bg-[#108a00] text-[#fff] h-10 w-20 rounded-xl font-semibold'>Sign Up</button>

            </NavLink>
          </div>
        </>
      }
      {props.user.role === 'client' && <div className='profile-client flex items-center ml-14 cursor-pointer' onClick={() => setDropDown(true)}>
        <div className="client-prof flex items-center">
          <img src={ProfileImage} className='h-12'></img>
          <h3 className='font-medium cursor-pointer'>Username ▼</h3>
        </div>
        {dropDown && <div className="drop-down-user  absolute ml-2.5 mt-44 p-6">
          <div className="wishList flex gap-2 items-center hover:bg-[#108a00] hover:text-[#fff] hover:p-1 cursor-pointer hover:rounded-lg">
            <FaRegHeart size={23} />
            <h3 className='font-medium text-base' >Wishlist</h3>
          </div>
          <div className="logout flex items-center gap-2 mt-4 hover:bg-[#108a00] hover:text-[#fff] hover:p-1 cursor-pointer hover:rounded-lg">
            <RiLogoutCircleLine size={23} />
            <h3 className='font-medium text-base'>Logout</h3>
          </div>
        </div>}
      </div>}
      {props.user.role === 'freelancer' && <div className='profile-freelancer flex items-center ml-14 cursor-pointer' onClick={() => setDropDown(!dropDown)}>
        <div className="client-prof flex items-center">
          <img src={ProfileImage} className='h-12'></img>
          <h3 className='font-medium cursor-pointer'>Username ▼</h3>
        </div>
        {dropDown && <div className="drop-down-user  absolute ml-2.5 mt-64 p-6">
          <div className="wishList flex gap-2 items-center hover:bg-[#108a00] hover:text-[#fff] hover:p-1 cursor-pointer hover:rounded-lg">
            <RiAlignItemLeftLine size={23} />
            <h3 className='font-medium text-base' >Orders</h3>
            <div className="order-number flex items-center justify-center">
              <span className='font-bold text-sm'>3</span>
            </div>
          </div>
          <div className="wishList flex gap-2 mt-4 items-center hover:bg-[#108a00] hover:text-[#fff] hover:p-1 cursor-pointer hover:rounded-lg">
            <IoSettingsOutline size={23} />
            <h3 className='font-medium text-base' >Settings</h3>
          </div>

          <div className="wishList flex gap-2 mt-4 ml-4 items-center hover:bg-[#108a00] hover:text-[#fff] hover:p-1 cursor-pointer hover:rounded-lg">
            <MdPostAdd size={20} />
            <h3 className='font-medium text-sm' ><Link to="/addtalent" >Add Talent</Link></h3>
          </div>
          <div className="wishList flex gap-2 mt-4 ml-4 items-center hover:bg-[#108a00] hover:text-[#fff] hover:p-1 cursor-pointer hover:rounded-lg">
            <CiBoxList size={20} />
            <h3 className='font-medium text-sm' > <Link to="alltalent">All Talent</Link></h3>
          </div>

          <div className="logout flex items-center gap-2 mt-4 hover:bg-[#108a00] hover:text-[#fff] hover:p-1 cursor-pointer hover:rounded-lg">
            <RiLogoutCircleLine size={23} />
            <h3 className='font-medium text-base'>Logout</h3>
          </div>
        </div>}
      </div>}

    </nav>
  )
}

export default NavBar