import React from "react";
import campaignLead from "../../assets/CardCampaign/campaign-lead.png";
const CardCampaign = ({ title, description }) => {
  return (
    <div className="w-full shadow-my-shadow rounded-xl px-8 py-8 lg:py-12 flex flex-col items-center cursor-pointer hover:bg-primary hover:text-white ease-out	duration-200">
      <img src={campaignLead} alt="campaign-lead" className="w-28 m-4" />
      <h2 className="text-2xl mb-4 text-center">{title}</h2>
      <p className=" w-full text-center">{description}</p>
    </div>
  );
};

export default CardCampaign;
