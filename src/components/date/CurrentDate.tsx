import React, { useContext } from "react";
import { Translation } from "../../translation/TranslationContextProvider";
import { BiSun, BiMoon } from "react-icons/bi";
import "./current-date.css";

const CurrentDate = () => {

  const { content } = useContext(Translation);

  const now = new Date();
  const isDayTime = now.getHours() >= 6 && now.getHours() < 18;
  return (
    <div className="current-date-container">
      {isDayTime ? (
        <div className="current-date-text">
         {content.part_of_the_day} &nbsp; <BiSun size={40} fill="orange" />
        </div>
      ) : (
        <div className="current-date-text">
          {content.part_of_the_day} &nbsp; <BiMoon size={40} fill="gray" />
        </div>
      )}
    </div>
  );
};

export default CurrentDate;
