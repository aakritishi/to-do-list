import React, { useEffect, useState } from "react";
import sidebarimg from "../assets/sidebarimg.jpg";
import sidebarimg2 from "../assets/sidebarimg2.jpg";
import Calendar from "./homepage/Calendar";
import { IoMenu } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";

const SideBar = () => {
  const [time, setTime] = useState();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const now = new Date();
  console.log("current time", now);
  useEffect(() => {
    const timeUpdate = () => {
      const now = new Date();
      console.log("current time", now);
      const Isotime = now.toISOString().split("T")[1];
      const hourMinute = Isotime.split(":");
      const formattedTime = `${hourMinute[0]}:${hourMinute[1]}`;
      console.log("current time", formattedTime);
      setTime(formattedTime);
    };

    timeUpdate();

    const interval = setInterval(timeUpdate, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* side bar for large screen */}
      <div className="md:flex fixed -z-10 hidden mt-6 flex-col h-[89vh] bg-[#88d18a] shadow-md border border-gray-200">
        <ul className="">
          <li className="p-2 font-semibold text-xl text-center my-2 text-white">
            Home
          </li>
          <li className="p-2 bg-green-500 text-xl text-center text-white rounded font-semibold">
            Time: {time}
          </li>
          <li>
            <img
              src={sidebarimg}
              alt="sidebarimg"
              className="w-full h-[25vh] mb-2"
            />
          </li>
          <li className="p-2 text-xl text-center mt-2 text-white bg-green-500 font-semibold">
            Calender
          </li>
          <li className="w-full overflow-x-auto px-3 rounded-lg shadow-md">
            <Calendar />
          </li>
        </ul>
      </div>

      {/* menu icon for small screen */}
      <div className="md:hidden fixed z-10">
        <button>
          <IoMenu
            onClick={toggleMobileMenu}
            className="font-semibold text-green-500 text-lg mt-14"
          />
        </button>
      </div>

      {/* side bar for small screen */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed top-0 left-0 w-56 h-full overflow-y-hidden z-40 bg-[#88d18a]"
          onClick={toggleMobileMenu}
        >
          <div onCliclk={(e)=> e.stopPropagation()}>
          <ul className="">
            <li className="p-2 font-semibold text-xl text-center my-2 text-white">
              <div className="flex gap-5 items-center justify-between">
                <p className="p-2 font-semibold text-xl text-center my-2 text-white">
                  Home
                </p>
                <span>
                  <FaArrowLeftLong />
                </span>
              </div>
            </li>
            <li className="p-2 bg-green-500 text-xl text-center text-white rounded font-semibold">
              Time: {time}
            </li>
            <li>
              <img
                src={sidebarimg}
                alt="sidebarimg"
                className="w-full h-[25vh] mb-2"
              />
            </li>
            <li className="p-2 text-xl text-center mt-2 text-white bg-green-500 font-semibold">
              Calender
            </li>
            <li className="w-full overflow-x-auto px-3 rounded-lg shadow-md">
              <Calendar />
            </li>
            <li>
              <img
                src={sidebarimg2}
                alt="sidebarimg2"
                className="w-full h-auto mb-2"
              />
            </li>
          </ul>
            </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
