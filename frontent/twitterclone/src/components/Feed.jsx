import React from 'react'
import CreatPost from './CreatPost';
import Tweet from './Tweet';
import RightsideBar from './RightsideBar';

const Feed = () => {
  return (
    <div className='w-[50%] border border-gray-200'>
      <CreatPost/>
      <Tweet/>
    </div>
  )
}

export default Feed;
