import React from "react";

const NavBar = (): JSX.Element => {
  return (
    <>
  
      <div
        className="bg-black/50 h-20 backdrop-blur-md 
        w-[600px] rounded-[30px] 
        flex items-center justify-between  px-12 ring-[1px] ring-white/10"
      >
        <p className=" text-white font-extrabold">Some Text</p>
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <p className=" text-white font-extrabold">Some Text</p>
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <p className=" text-white font-extrabold">Some Text</p>
      </div>
    </>
  );
};

export default NavBar;
