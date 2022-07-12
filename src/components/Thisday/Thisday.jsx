import React from "react";
import "./Thisday.scss";
export default function Thisday({temp,urlImg,tim,timeText,city,cityText, days} ) {

  return (
    <div className="date">
      <div className="temp__body">

        {temp}
        {urlImg}

      </div>
      <div className="day">{days}</div>
      <div className="time">{timeText}: {tim}</div>
      <div className="city">{cityText}: {city}</div>
    </div>
  );

}

