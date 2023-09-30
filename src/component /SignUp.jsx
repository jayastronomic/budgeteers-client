import React from "react";
import Logo from "./Logo";

const SignUp = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full px-36">
        <Logo />
        <form className="flex flex-col items-center shadow-lg p-6  border border-gray-200 box-content">
          <div className="flex flex-col">
            <h1 className="self-start mb-4 font-semibold text-2xl">Sign up</h1>
            <h4 className="mb-4 font-light">It's quick and easy.</h4>
            <div className="flex space-x-2 pb-4">
              <input
                placeholder="First name"
                className="border rounded p-2 bg-gray-100 border-gray-300 focus:outline-none focus:ring-2"
              />
              <input
                placeholder="Last name"
                className="border rounded p-2 bg-gray-100 border-gray-300 focus:outline-none focus:ring-2"
              />
            </div>
            <div className="flex flex-col space-y-6 w-full">
              <div>
                <input
                  className="border p-2 bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 rounded w-full"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  className="border p-2 bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 rounded w-full"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  className="border p-2 bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 rounded w-full"
                  placeholder="Confirm password"
                />
              </div>
              <button className="bg-green-400 text-white py-2 rounded font-semibold">
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
