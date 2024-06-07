import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoBookmarksSharp } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import {Link} from "react-router-dom"

const LeftSideBar = () => {
  return (
    <div className='w-[20%]'>
      <div>
        <img className='ml-4' width={"40px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9SAOkSMhoCGVK3b0bQRgIHnZamjNo_cVjcA&s" alt="twitter-logo" />
      </div>
      <div>
        <Link to="/" className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div><FaHome size={"24px"}/></div>
            <h1 className='font-bold text-lg ml-2'>Home</h1>
        </Link>

        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div><FaHashtag size={"24px"}/></div>
            <h1 className='font-bold text-lg ml-2'>Explore</h1>
        </div>

        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div><IoIosNotifications size={"28px"}/></div>
            <h1 className='font-bold text-lg ml-2'>Notifications</h1>
        </div>

        <Link to="/profile" className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div><FaUserCircle size={"24px"}/></div>
            <h1 className='font-bold text-lg ml-2'>Profile</h1>
        </Link>
        
        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div><IoBookmarksSharp size={"23px"}/></div>
            <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
        </div>

        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div><RiLogoutCircleLine size={"24px"}/></div>
            <h1 className='font-bold text-lg ml-2'>Logout</h1>
        </div>

        <button className='px-4 py-2 m-2 w-[90%] font-bold border-none text-md text-white bg-[#1D9BF0] rounded-full'>Post</button>

      </div>
    </div>
  )
}

export default LeftSideBar;
