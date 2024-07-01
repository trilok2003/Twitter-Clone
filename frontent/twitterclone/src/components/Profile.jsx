import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import Avatar from "react-avatar";
import useGetProfile from '../hooks/useGetProfile';
import { useSelector } from 'react-redux';

const Profile = () => {

  const {user, profile} = useSelector(store=>store.user);

  const {id} = useParams();

  useGetProfile(id);

  return (
    <div className="w-[50%] border-l border-r border-gray-200">
      <div className="w-[100%]">
        <div className="flex items-center py-2">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer"
          >
            <IoMdArrowRoundBack size={"24px"} />
          </Link>
          <div className="px-1">
            <h1 className="font-bold text-lg">{profile?.name}</h1>
            <p className="text-gray-600 text-sm">10 Post</p>
          </div>
        </div>
            <img
            className="w-[100%] h-40"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hTcBR2bxd4eA7u-iSC_nTzvST9vi8XJaSQ&s"
            alt="banner"
            />
            <div className="absolute top-44 ml-2 border-4 border-white rounded-full">
                <Avatar src='https://static.vecteezy.com/system/resources/previews/011/490/381/non_2x/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg' size="120" round={true} />
            </div>
            <div className="text-right m-4">
                <button className="px-4 py-1 rounded-full text-right border border-gray-400 hover:bg-gray-200 font-bold text-md">Edit Profile</button>
            </div>
            <div className="mt-8 m-4">
                <h1 className="font-bold text-xl">{profile?.name}</h1>
                <p>{`@${profile?.username}`}</p>
            </div>
            <div className="m-4 text-sm">
                <p>Bio:lorem10 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, corrupti!</p>
            </div>
      </div>
    </div>
  );
};

export default Profile;
