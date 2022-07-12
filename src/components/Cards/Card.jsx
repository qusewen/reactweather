import React from "react";
import Wind from "../../assets/img/wind.svg";
import "./Card.scss";
import Pressure from "../../assets/img/pressure.svg";
export default function Card({
  imgCardUrl,
  clouds,
  date,
  temperatura,
  wind,
  Pressur,
  dayWeek
}) {





  return (
    <>
      <div className="card__item">
        <div className="dayWeek">{dayWeek}</div>
        <div className="card__img">{imgCardUrl}</div>
        <div className="cloud">{clouds}</div>
        <div className="card__title">{date}</div>
        <div className="temp_body">
          <div>
            <div className="windbody">
              <img src={Wind} alt="wind" /> {wind}
            </div>
            <div className="humidity">
              <img src={Pressure} alt="Pressure" /> {Pressur}
            </div>
          </div>
          {temperatura}
        </div>
      </div>
    </>
  );
}
