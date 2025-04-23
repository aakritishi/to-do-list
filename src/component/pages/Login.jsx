import React from "react";
import backgroundImg from "../../assets/back2-.jpg";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="flex justify-center items-center">
        <form className="w-[94%] bg-white mt-28 mx-auto md:w-[30%] rounded-lg border border-gray-200 shadow-md">
          <h1 className="text-xl text-center font-normal pb-2 rounded-t-lg w-full p-3 bg-green-500 text-white">
            Login Form
          </h1>
          <div className="grid-cols-1 p-4">
            <label for="username" className="text-gray-800 w-full">
              Username:
            </label>
            <input
              type="text"
              name="username"
              className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:border-gray-300 text-gray-800"
            />
          </div>

          <div className="grid-cols-1 p-4">
            <label for="password" className="text-gray-800 w-full">
              Password:
            </label>
            <input
              type="text"
              name="password"
              className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:border-gray-300 text-gray-800"
            />
          </div>

          <div className="px-4 pt-2 pb-4 flex items-center justify-center">
            <button className="px-3 py-1.5 text-white bg-green-500 hover:bg-green-600 rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
