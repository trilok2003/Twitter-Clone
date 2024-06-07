import React from 'react'
import Avatar from "react-avatar";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const Tweet = () => {
  return (
    <div>
        <div className='border-b border-gray-200'>
            <div className='flex p-4'>
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4Dqh4R8yEv_zh5AqAoxXkyk3JrzpAj-hMQ&s' size="40" round={true} />
                <div className='ml-2 w-full'>
                    <div className='flex items-center'>
                        <h1 className='font-bold'>Trilok Singh</h1>
                        <p className='text-gray-500 text-sm ml-2'>username@123  .1m</p>
                    </div>
                    <div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <div className='p-2 cursor-pointer hover:bg-red-100 rounded-full'>
                                <FaRegHeart size={"20px"}/>
                            </div>
                            <p>0</p>
                        </div >
                        <div className='flex items-center'>
                            <div className='p-2 cursor-pointer hover:bg-green-100 rounded-full'>
                                <FaRegComment size={"20px"}/>
                            </div>
                            <p>0</p>
                        </div >
                        <div className='flex items-center'>
                            <div className='p-2 cursor-pointer hover:bg-yellow-100 rounded-full'>
                                <CiBookmark size={"20px"}/>
                            </div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tweet;
