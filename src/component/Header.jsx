import React from "react";
import headerimg from "../assets/headertop.jpg";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <>
      <div
      className="absolute"
      style={{
        backgroundImage: `url(${headerimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "12vh",
        width: "100%",
      }}
    >
      
    </div>
      <img src={logo} alt="logo" className="h-14 relative z-30 top-16 md:top-9 left-4"/>
    </>
  );
};

export default Header;
