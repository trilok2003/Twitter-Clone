import React from 'react'
import LeftSideBar from './LeftSideBar';
import RightsideBar from './RightsideBar';
import Feed from './Feed';
import {Outlet} from "react-router-dom" ;
import { useSelector } from 'react-redux';
import useOtherUsers from '../hooks/useOtherUsers';

const Home = () => {
  //custom Hooks
  const {user, otherUsers} = useSelector(store=>store.user);
  useOtherUsers(user?._id);

  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSideBar/>
      <Outlet/>
      <RightsideBar otherUsers = {otherUsers}/>
    </div>
  )
}

export default Home;
