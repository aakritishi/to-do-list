import React from "react";
import SideBar from "../SideBar";
import HomeBody from "./HomeBody";
import "./homepage.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path)=> {
    return location.pathname === `/${path}` || (path === 'homebody' && location.pathname === '/')
  }

  return (
    <div className="w-full flex">
      <div className="md:w-[20%] w-0">
        <SideBar className="w-full" />
      </div>
      <div className="w-full md:w-[84%] md:mt-6 mt-10 p-6">
        <div className="w-full ">
          <ul className="flex flex-row gap-7 justify-center items-center md:items-start md:justify-start">
            <li className={`text-lg font-semibold ${isActive('homebody')? 'text-green-700' : 'text-green-500 hover:text-green-700'} cursor-pointer`} onClick={()=> navigate('homebody')}>
              Dashboard
            </li>
            <li className={`text-lg font-semibold ${isActive('about')? 'text-green-700' : 'text-green-500 hover:text-green-700'} cursor-pointer`} onClick={()=> navigate('about')}>
              About us
            </li>
            <li className={`text-lg font-semibold ${isActive('contact')? 'text-green-700' : 'text-green-500 hover:text-green-700'} cursor-pointer`} onClick={()=> navigate('contact')}>
              Contact
            </li>
          </ul>
        </div>
        

        {/* the body component will render here */}
        <Outlet/>
      </div>
    </div>
  );
};

export default HomePage;
