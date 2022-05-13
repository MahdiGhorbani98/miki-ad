import React from "react";
import mobile1 from "../assets/Mobiles/mobile1.png";
import mobile2 from "../assets/Mobiles/mobile2.png";
import mobile3 from "../assets/Mobiles/mobile3.png";
import "../css/Banner.css";
import videoMobile1 from "../assets/Mobiles/1.mp4";

const Banner = () => {
  return (
    <div className="w-full mt-20 pb-20 bg-slate-100 flex flex-col justify-center">
      <h2 className="px-4 mt-6 lg:mt-14  mb-36 text-center md:text-2xl lg:text-3xl text-xl ">
        We are a creative groups who works with ad game and ...
      </h2>

      <div className="w-full flex justify-center m-auto gap-2 sm:gap-10 md:gap-16 ">
        <div className="relative" style={{ width: 145, height: 348 }}>
          <video
            loop
            muted
            autoplay="autoplay"
            className="absolute top-0 left-0 origin-bottom-left rounded-lg rotationVideo"
            src={videoMobile1}
          ></video>
          <img className="w-full relative " src={mobile2} alt="mobile1" />
        </div>

        <div className="relative" style={{ width: 195, height: 357 }}>
          <video
            loop
            muted
            autoplay="autoplay"
            className="absolute top-0 left-0 origin-center rounded-xl scale-x-95 scale-y-97 "
            src={videoMobile1}
          ></video>
          <img className="w-full relative" src={mobile1} alt="mobile1" />
        </div>

        <div
          className="relative rotationYReverse"
          style={{ width: 145, height: 348 }}
        >
          <video
            loop
            muted
            autoplay="autoplay"
            className="absolute top-0 left-0 origin-bottom-left rounded-lg rotationVideo"
            src={videoMobile1}
          ></video>
          <img className="w-full relative " src={mobile2} alt="mobile1" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
