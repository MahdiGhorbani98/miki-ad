// import briefImage2 from "../../assets/briefImages/2.png";
import { BsArrowDownRightSquare } from "react-icons/bs";

const ThreePhone = ({ ThreePhoneData, direction }) => {
  return (
    <div
      className={`flex gap-10 mb-14 items-center w-full ${
        direction === "ltr" ? "" : "flex-row-reverse"
      }`}
    >
      <div className="w-1/2 ">
        <h2 className="font-bold text-4xl mb-4 leading-normal">
          {ThreePhoneData.title} <br /> {ThreePhoneData.altTitle}
        </h2>
        <p className="text-xl text-justify">
          {ThreePhoneData.campaignDescription}
        </p>
        <div className="flex items-center mt-6">
          <h2 className="font-bold text-3xl relative bottom-1  ">
            Sample campaign
          </h2>
          <BsArrowDownRightSquare className="w-12 h-12  cursor-pointer ml-4  hover:-rotate-45 duration-300" />
        </div>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/briefImages/${ThreePhoneData.img}.png`}
        alt="briefImage"
        className="w-1/2 "
      />
    </div>
  );
};

export default ThreePhone;
