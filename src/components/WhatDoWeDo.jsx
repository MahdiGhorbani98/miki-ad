import React from "react";
import CardCampaign from "./reusableComponents/CardCampaign";

const WhatDoWeDo = () => {
  return (
    <div className=" w-full mt-28 mb-12 flex justify-center items-center flex-col">
      <h2 className="text-3xl "> What do we do?</h2>

      <div className="flex w-full justify-center items-center">
        <div className="w-full px-6 md:px-4 py-20 xl:p-20  grid auto-cols-auto grid-cols-1 grid-rows-1 0sm:grid-cols-2 0sm:grid-rows-4 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 gap-6 md:gap-4 lg:gap-8 xl:gap-16 ">
          <CardCampaign
            title={"Lead Generation"}
            description={"These campaigns are by far our best campaign"}
          />
          <CardCampaign
            title={"Lead Generation"}
            description={"These campaigns are by far our best campaign"}
          />
          <CardCampaign
            title={"Lead Generation"}
            description={"These campaigns are by far our best campaign"}
          />
          <CardCampaign
            title={"Lead Generation"}
            description={"These campaigns are by far our best campaign"}
          />
          <CardCampaign
            title={"Lead Generation"}
            description={"These campaigns are by far our best campaign"}
          />
          <CardCampaign
            title={"Lead Generation"}
            description={"These campaigns are by far our best campaign"}
          />
          <CardCampaign
            title={"Lead Generation"}
            description={"These campaigns are by far our best campaign"}
          />
          <CardCampaign
            title={"Lead Generation"}
            description={"These campaigns are by far our best campaign"}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatDoWeDo;
