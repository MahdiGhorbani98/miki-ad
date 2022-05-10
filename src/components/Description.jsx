import React from "react";
import ThreePhone from "./reusableComponents/ThreePhone";
// import briefImage1 from '../assets/briefImages/2.png';

const Description = () => {
  const ThreePhoneData1 = {
    title: "Instagram games",
    altTitle: "(Pull up)",
    campaignDescription:
      " There are small online campaigns that aim to attract an audience and increase engagement. These campaigns are placed in the story (pull up), the audience plays a small game by clicking on the link and receives a gift from your page!",
    img: "2",
  };

  return (
    <div className="bg-purple-700  p-24 text-white flex flex-col  items-center">
      <h2 className="text-4xl text-center mb-16">
        A brief description of each of our creative advertising methods
      </h2>
      <ThreePhone direction={"ltr"} ThreePhoneData={ThreePhoneData1} />
      <ThreePhone direction={"rtl"} ThreePhoneData={ThreePhoneData1} />
    </div>
  );
};

export default Description;
