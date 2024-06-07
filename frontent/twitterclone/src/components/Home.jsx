import React from 'react'
import LeftSideBar from './LeftSideBar';
import RightsideBar from './RightsideBar';
import Feed from './Feed';
import {Outlet} from "react-router-dom"

const Home = () => {
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSideBar/>
      <Outlet/>
      <RightsideBar/>
    </div>
  )
}

export default Home;
