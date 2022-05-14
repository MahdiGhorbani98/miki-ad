// import briefImage2 from "../../assets/briefImages/2.png";
import { BsArrowDownRightSquare } from "react-icons/bs";

const ThreePhone = ({ ThreePhoneData, direction }) => {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row gap-4 md:gap-10 mb-14 items-center w-full ${
        direction === "ltr" ? "" : "md:flex-row-reverse"
      }`}
    >
      <div className="w-4/5 sm:w-3/4 md:w-1/2 ">
        <h2 className="font-bold text-2xl lg:text-4xl mb-4 lg:leading-normal">
          {ThreePhoneData.title} <br /> {ThreePhoneData.altTitle}
        </h2>
        <p className="md:text-lg md:leading-snug lg:text-xl text-justify">
          {ThreePhoneData.campaignDescription}
        </p>
        <div className="flex items-center mt-6">
          <h2 className="font-bold text-xl lg:text-3xl relative bottom-1  ">
            Sample campaign
          </h2>
          <BsArrowDownRightSquare className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-12 lg:h-12  cursor-pointer ml-4  hover:-rotate-45 duration-300" />
        </div>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/briefImages/${ThreePhoneData.img}.png`}
        alt="briefImage"
        className="w-4/5 sm:w-3/4 md:w-1/2 "
      />
    </div>
  );
};

export default ThreePhone;
