import React from "react";
import campaignLead from "../../assets/CardCampaign/campaign-lead.png";
const CardCampaign = ({ title, description }) => {
  return (
    <div className="w-72 shadow-my-shadow rounded-xl p-14 flex flex-col justify-center items-center cursor-pointer hover:bg-primary hover:text-white ease-out	duration-300">
      <img src={campaignLead} alt="campaign-lead" className="w-28 m-4" />
      <h2 className="text-2xl mb-4">{title}</h2>
      <p className=" w-full text-center">{description}</p>
    </div>
  );
};

export default CardCampaign;
