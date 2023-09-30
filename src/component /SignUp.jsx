import React from "react";
import Logo from "./Logo";
import { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full px-36">
        <Logo />
        <div className=" w-96 mb-4 text-center">
          Join us and take control of your finances
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center shadow-lg p-6  border border-gray-200 box-content"
        >
          <div className="flex flex-col">
            <h1 className="self-start mb-4 font-semibold text-2xl">Sign up</h1>
            <h4 className="mb-4 font-light">It's quick and easy.</h4>
            <div className="flex space-x-2 pb-4">
              <input
                onChange={handleChange}
                name="firstName"
                value={user.firstName}
                placeholder="First name"
                className="border rounded p-2 bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 hover:bg-gray-200 transition"
              />
              <input
                onChange={handleChange}
                name="lastName"
                value={user.lastName}
                placeholder="Last name"
                className="border rounded p-2 bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 hover:bg-gray-200 transition"
              />
            </div>
            <div className="flex flex-col space-y-6 w-full">
              <div>
                <input
                  onChange={handleChange}
                  name="email"
                  value={user.email}
                  className="border p-2 bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 rounded w-full hover:bg-gray-200 transition"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  onChange={handleChange}
                  name="password"
                  value={user.password}
                  className="border p-2 bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 rounded w-full hover:bg-gray-200 transition"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  onChange={handleChange}
                  name="confirmPassword"
                  value={user.password}
                  className="border p-2 bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 rounded w-full hover:bg-gray-200 transition"
                  placeholder="Confirm password"
                />
              </div>
              <button
                type="submit"
                className="bg-green-400 text-white py-2 rounded font-semibold hover:bg-green-500 transition"
              >
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
