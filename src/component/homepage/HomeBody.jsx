import React from "react";
import study from "../../assets/study.jpg";
import planner from "../../assets/planner.jpg";
import wishlist from "../../assets/wishlist.jpg";
import schedule from "../../assets/schedule.jpg";
import leisure from "../../assets/leisure.jpg";
import work from "../../assets/work.jpg";

const HomeBody = () => {
  return (
    <div className="w-full flex max-h-screen flex-col-reverse md:flex-row gap=5">
      <div className="w-full md:w-[75%] mt-5">
        {/* boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#88d18a] shadow-md border border-gray-200 rounded-lg">
            <img src={study} className="h-[28vh] w-full" />
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full">
              Study
            </button>
          </div>
          <div className="bg-[#88d18a] shadow-md border border-gray-200 rounded-lg">
            <img src={planner} className="h-[28vh] w-full" />
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full">
              Planner
            </button>
          </div>
          <div className="bg-[#88d18a] shadow-md border border-gray-200 rounded-lg">
            <img src={wishlist} className="h-[28vh] w-full" />
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full">
              Wishlist
            </button>
          </div>
          <div className="bg-[#88d18a] shadow-md border border-gray-200 rounded-lg">
            <img src={schedule} className="h-[28vh] w-full" />
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full">
              Schedule
            </button>
          </div>
          <div className="bg-[#88d18a] shadow-md border border-gray-200 rounded-lg">
            <img src={leisure} className="h-[28vh] w-full" />
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full">
              Leisure
            </button>
          </div>
          <div className="bg-[#88d18a] shadow-md border border-gray-200 rounded-lg">
            <img src={work} className="h-[28vh] w-full" />
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full">
              Work
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[25%] p-4">progress bar</div>
    </div>
  );
};

export default HomeBody;
