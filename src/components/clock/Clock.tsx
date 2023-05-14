import React, { useState, useEffect } from "react";
import "./clock.css"

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div>
      <h2 id="data-time-text">{formattedTime}</h2>
    </div>
  );
};

export default Clock;
