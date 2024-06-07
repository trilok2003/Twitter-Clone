import React from 'react'
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatPost = () => {
  return (
    <div className='w-[100%]'>
        <div>
            <div className='flex items-center justify-between border border-bottom-200'>
                <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                    <h1 className='font-semibold text-gray-600 text-lg'>For you</h1>
                </div>
                <div className='cursor-pointer  hover:bg-gray-200 w-full text-center px-4 py-3'>
                    <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
                </div>
            </div>

            <div>
                <div>
                    <div className='flex p-4'>
                        <Avatar src='https://static.vecteezy.com/system/resources/previews/011/490/381/non_2x/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg' size="40" round={true} />

                        <input className='w-full outline-none border-none text-xl ml-2' type="text" placeholder='What is happening ?!'/>
                    </div>
                    <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                        <div>
                            <CiImageOn size={"24px"}/>
                        </div>
                        <button className='px-3 py-1 bg-[#1D9BF0] border-none rounded-full text-lg text-white'>Post</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatPost;
