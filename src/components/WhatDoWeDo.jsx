import React from "react";
import CardCampaign from "./reusableComponents/CardCampaign";

const WhatDoWeDo = () => {
  return (
    <div className=" w-full mt-28 mb-12 flex justify-center items-center flex-col">
      <h2 className="text-3xl "> What do we do?</h2>

      <div className="flex justify-center items-center">
        <div className="w-full  p-20 grid auto-cols-auto grid-cols-4 grid-rows-2 gap-x-16 gap-y-16">
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
