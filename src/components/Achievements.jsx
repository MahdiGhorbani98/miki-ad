import React from "react";
import AchievementItem from "./reusableComponents/AchievementItem";

const Achievements = () => {
  return (
    <div className=" w-full my-12 flex justify-center items-center flex-col ">
      <p className="text-3xl">
        To date, we have been able to achieve these successes with the use of
        gamification tools:
      </p>
      <div className="flex justify-around w-full mt-10">
        <AchievementItem statistics={"+450K"} description={"Real Lead"} />
        <AchievementItem
          statistics={"Up to 80%"}
          description={"View to Lead conversion rate in campaigns"}
        />
        <AchievementItem
          statistics={"+1M"}
          description={"Minute engage audience with campaigns"}
        />
        <AchievementItem statistics={"+80"} description={"Happy customer"} />
      </div>
    </div>
  );
};

export default Achievements;
