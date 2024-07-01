import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { Link } from 'react-router-dom';

const RightsideBar = ({ otherUsers }) => {
  return (
    <div className="w-[22%]">
      <div className="flex h-10 items-center p2 bg-gray-100 rounded-full outline-none width-full">
        <CiSearch size={"24px"} className="ml-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none px-2 text-gray-800"
        />
      </div>
      <div className="p-4  bg-gray-100 rounded-2xl my-4">
        <div>
          <h1 className="font-bold text-lg">Who to follow</h1>
          {otherUsers?.map((user) => {
            return (
              <div
                key={user?._id}
                className="flex items-center justify-between my-3"
              >
                <div className="flex items-center">
                  <Avatar
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4Dqh4R8yEv_zh5AqAoxXkyk3JrzpAj-hMQ&s"
                    size="40"
                    round={true}
                  />
                  <div className="p-1 items-center">
                    <h1 className="font-bold">{user?.name}</h1>
                    <p className="text-sm p-1">{`@${user?.username}`}</p>
                  </div>
                </div>
                <div>
                  <Link to={`/profile/${user?._id}`} >
                    <button className="px-4 py-1 bg-black text-white rounded-full">
                      Profile
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightsideBar;
