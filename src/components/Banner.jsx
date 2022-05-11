import React from "react";
import mobile1 from "../assets/Mobiles/mobile1.png";
import mobile2 from "../assets/Mobiles/mobile2.png";
import mobile3 from "../assets/Mobiles/mobile3.png";

const Banner = () => {
  return (
    <div className="w-full mt-20 pb-20 bg-slate-100 flex flex-col justify-center">
      <h2 className="text-3xl mt-14 mb-36 text-center ">
        We are a creative groups who works with ad game and ...
      </h2>
      <div className="w-full flex justify-center m-auto gap-16">
        <img style={{width:145, height:348}} className="" src={mobile2} alt="mobile1" />
        <img style={{width:195, height:357}} className="" src={mobile1} alt="mobile1" />
        <img style={{width:145, height:348}} className="" src={mobile3} alt="mobile1" />
      </div>
    </div>
  );
};

export default Banner;
