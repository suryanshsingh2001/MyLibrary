import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer group">
      <h1 className="sm:text-3xl logoFont flex gap-2 text-xl pl-2 text-white items-center group-hover:text-black transition-colors duration-500">
        My Library
      </h1>
      <div className="icon flex gap-1">
        <div className="logoIcon transition-colors duration-[900ms]"></div>
        <div className="logoIcon opacity-70  transition-colors duration-[1200ms]"></div>
        <div className="logoIcon opacity-40 transition-colors duration-[1500ms]"></div>
      </div>
    </div>
  );
};

export default Logo;
