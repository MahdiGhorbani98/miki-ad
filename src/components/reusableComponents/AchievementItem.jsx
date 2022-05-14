import React from "react";

const AchievementItem = ({ statistics, description }) => {
  return (
    <div className="flex items-center flex-col">
      <span className="font-bold text-6xl sm:text-4xl lg:text-6xl text-primary mb-2">
        {statistics}
      </span>
      <span className="text-gray-600 px-4 text-center">{description}</span>
    </div>
  );
};

export default AchievementItem;
