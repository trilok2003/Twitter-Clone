import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-evenly w-[75%]">
        <div>
          <img
            className="ml-5"
            width={"500px"}
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?t=st=1717744024~exp=1717747624~hmac=524986aafb0132885512ada0b319fb9238b404df57369921736327e8028cc4dc&w=740"
            alt="twitter-logo"
          />
        </div>
        <div>
          <div className="my-5">
            <h1 className="font-bold text-6xl">Happening Now.</h1>
          </div>
          <h1 className="font-bold text-2xl mt-4 mb-2">
            {isLogin ? "Login" : "Sign Up"}
          </h1>
          <form className="flex flex-col w-[55%]">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  className="outline-blue-500 border border-gray-600 px-3 py-2 rounded-full my-1 font-semibold"
                />
                <input
                  type="text"
                  placeholder="UserName"
                  className="outline-blue-500 border border-gray-600 px-3 py-2 rounded-full my-1 font-semibold"
                />
              </>
            )}
            <input
              type="text"
              placeholder="Email"
              className="outline-blue-500 border border-gray-600 px-3 py-2 rounded-full my-1 font-semibold"
            />
            <input
              type="text"
              placeholder="Password"
              className="outline-blue-500 border border-gray-600 px-3 py-2 rounded-full my-1 font-semibold"
            />
            <button className="bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white">
              {isLogin ? "Login" : "Create Account"}
            </button>
            <h1>
              {isLogin ? "Do not have a account?" : "Already have a acount?"}{" "}
              <span
                onClick={loginSignupHandler}
                className=" font-bold text-blue-500 cursor-pointer hover:text-blue-600"
              >
                {isLogin ? "Sign Up" : "Login"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
