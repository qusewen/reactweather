import React, { useEffect, useState } from "react";
import "./Home.scss";
import Thisday from "../../components/Thisday/Thisday";
import axios from "axios";
import Clock from "../../components/Clock/Clock";
import Thisdayinfo from "../../components/Thisdayinfo/Thisdayinfo";
import Card from "../../components/Cards/Card";
import UnloadContent from "../../components/UnloadContent/UnloadContent";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
function Home({test}) {
  const [weath, setWeath] = useState();
  const [nextDay, setNextDay] = useState();
  const [nextDay2, setNextDay2] = useState();
  const [nextDay3, setNextDay3] = useState();
  const [nextDay4, setNextDay4] = useState();
  const [city, setCity] = useState();
  const [loadings, setloadings] = useState(true);

  const [tests, setTests] = useState();
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${test}&APPID=ce616969cd740fccc2086080fbc71d41&units=metric`;
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setWeath(res?.data.list[0]);
        setCity(res.data.city);
        setNextDay(res?.data.list[9]);
        setNextDay2(res?.data.list[17]);
        setNextDay3(res?.data.list[25]);
        setNextDay4(res?.data.list[33]);
        setloadings(false);
        setTests(res.data.list[7].dt_txt)
      })
      .catch((error) => console.log(error.message));
  }, [apiUrl]);


  let date = new Date();

  console.log(date.getDay())

  const getDayinWeek = (date) => {
    let days = [`${t("description.week0")}`, `${t("description.week1")}`, `${t("description.week2")}`,`${t("description.week3")}`,`${t("description.week4")}`,`${t("description.week5")}`,`${t("description.week6")}`,]
    let dayOfweek = date.getDay();
    return days[dayOfweek]
  }




  return (
    <>
     <div className="button__lang_body">
        <Button variant="outlined" onClick={() => changeLanguage("ru")}>RU</Button>
        <Button variant="outlined" onClick={() => changeLanguage("en")}>EN</Button>
 </div>
      <div className="home">
<div>{}</div>
        {
          <Thisday
            key={weath?.dt}
            temp={
              loadings ? (
                <UnloadContent width={"250"} height={"119"} rx={7} ry={7} />
              ) : (
                <div className="temp">{Math.floor(weath?.main.temp)} °</div>
              )
            }
            urlImg={
              loadings ? (
                <UnloadContent width={"100"} height={"100"} rx={100} ry={100} />
              ) : (
                <img
                  src={`http://openweathermap.org/img/wn/${weath.weather[0].icon}@2x.png`}
                />
              )
            }
            days= {t("description.part1")}
            tim={
              loadings ? (
                <UnloadContent width={"92"} height={"23"} />
              ) : (
                <Clock />
              )
            }
            timeText={t("description.part2")}
            city={
              loadings ? (
                <UnloadContent width={"100"} height={"23"} />
              ) : (
                city?.name
              )
            }
            cityText={t("description.part3")}
          />
        }

        <Thisdayinfo
          temp={
            loadings ? (
              <UnloadContent width={"384"} height={"57"} rx={7} ry={7} />
            ) : (
              <p className="weather__info_subtitle">
                <span className="weather__info_title">{t("description.part4")}</span>{" "}
                {Math.floor(weath?.main.temp)}° - {t("description.part5")}{" "}
                {Math.floor(weath?.main.feels_like)}°
              </p>
            )
          }
          pressure={
            loadings ? (
              <UnloadContent width={"384"} height={"57"} rx={7} ry={7} />
            ) : (
              <p className="weather__info_subtitle">
                {" "}
                <span className="weather__info_title">{t("description.part9")} </span>{" "}
                {weath?.main.pressure} {t("description.part6")}
              </p>
            )
          }
          humidity={
            loadings ? (
              <UnloadContent width={"384"} height={"57"} rx={7} ry={7} />
            ) : (
              <p className="weather__info_subtitle">
                {" "}
                <span className="weather__info_title">{t("description.part7")}</span>{" "}
                {weath?.main.humidity}%
              </p>
            )
          }
          wind={
            loadings ? (
              <UnloadContent width={"384"} height={"57"} rx={7} ry={7} />
            ) : (
              <p className="weather__info_subtitle">
                {" "}
                <span className="weather__info_title">{t("description.part8")}</span>{" "}
                {weath?.wind.speed} {t("description.part10")}
              </p>
            )
          }
        />
      </div>
      <div className="cards_days">
        <Card
          dayWeek={getDayinWeek(new Date(nextDay?.dt_txt.slice(0, 10)))}

          imgCardUrl={
            loadings ? (
              <UnloadContent width={"100"} height={"100"} rx={100} ry={100} />
            ) : (
              <img
                src={`http://openweathermap.org/img/wn/${nextDay.weather[0].icon}@2x.png`}
              />
            )
          }
          clouds={
            loadings ? (
              <UnloadContent width={"110"} height={"23"} rx={7} ry={7} />
            ) : (
              nextDay.weather[0].description
            )
          }
          date={
            loadings ? (
              <UnloadContent width={"110"} height={"23"} rx={7} ry={7} />
            ) : (
             `${t("description.part11")} : ${nextDay.dt_txt.slice(0, 10)}`
            )
          }
          // dayOfweek = {()}
          temperatura={
            loadings ? (
              <UnloadContent width={"87"} height={"90"} rx={7} ry={7} />
            ) : (
              <div className="tempbody">{Math.floor(nextDay?.main.temp)}°</div>
            )
          }
          wind={
            loadings ? (
              <UnloadContent width={"120"} height={"45"} rx={7} ry={7} />
            ) : (
              nextDay.wind.speed
            )
          }
          Pressur={
            loadings ? (
              <UnloadContent width={"120"} height={"45"} rx={7} ry={7} />
            ) : (
              nextDay?.main.humidity + "%"
            )
          }
        />
        <Card
          dayWeek={getDayinWeek(new Date(nextDay2?.dt_txt.slice(0, 10)))}
          imgCardUrl={
            loadings ? (
              <UnloadContent width={"100"} height={"100"} rx={100} ry={100} />
            ) : (
              <img
                src={`http://openweathermap.org/img/wn/${nextDay2.weather[0].icon}@2x.png`}
              />
            )
          }
          clouds={
            loadings ? (
              <UnloadContent width={"110"} height={"23"} rx={7} ry={7} />
            ) : (
              nextDay2.weather[0].description
            )
          }
          date={
            loadings ? (
              <UnloadContent width={"110"} height={"23"} rx={7} ry={7} />
            ) : (
              `${t("description.part11")} : ${nextDay2.dt_txt.slice(0, 10)}`
            )
          }
          // dayOfweek = {()}
          temperatura={
            loadings ? (
              <UnloadContent width={"87"} height={"90"} rx={7} ry={7} />
            ) : (
              <div className="tempbody">{Math.floor(nextDay2?.main.temp)}°</div>
            )
          }
          wind={
            loadings ? (
              <UnloadContent width={"120"} height={"45"} rx={7} ry={7} />
            ) : (
              nextDay2.wind.speed
            )
          }
          Pressur={
            loadings ? (
              <UnloadContent width={"120"} height={"45"} rx={7} ry={7} />
            ) : (
              nextDay2?.main.humidity + "%"
            )
          }
        />

        <Card
          dayWeek={getDayinWeek(new Date(nextDay3?.dt_txt.slice(0, 10)))}
          imgCardUrl={
            loadings ? (
              <UnloadContent width={"100"} height={"100"} rx={100} ry={100} />
            ) : (
              <img
                src={`http://openweathermap.org/img/wn/${nextDay3.weather[0].icon}@2x.png`}
              />
            )
          }
          clouds={
            loadings ? (
              <UnloadContent width={"110"} height={"23"} rx={7} ry={7} />
            ) : (
              nextDay3.weather[0].description
            )
          }
          date={
            loadings ? (
              <UnloadContent width={"110"} height={"23"} rx={7} ry={7} />
            ) : (
              `${t("description.part11")} : ${nextDay3.dt_txt.slice(0, 10)}`
            )
          }
          temperatura={
            loadings ? (
              <UnloadContent width={"87"} height={"90"} rx={7} ry={7} />
            ) : (
              <div className="tempbody">{Math.floor(nextDay3?.main.temp)}°</div>
            )
          }
          wind={
            loadings ? (
              <UnloadContent width={"120"} height={"45"} rx={7} ry={7} />
            ) : (
              nextDay.wind.speed
            )
          }
          Pressur={
            loadings ? (
              <UnloadContent width={"120"} height={"45"} rx={7} ry={7} />
            ) : (
              nextDay3?.main.humidity + "%"
            )
          }
        />
        <Card
          dayWeek={getDayinWeek(new Date(nextDay4?.dt_txt.slice(0, 10)))}
          imgCardUrl={
            loadings ? (
              <UnloadContent width={"100"} height={"100"} rx={100} ry={100} />
            ) : (
              <img
                src={`http://openweathermap.org/img/wn/${nextDay4.weather[0].icon}@2x.png`}
              />
            )
          }
          clouds={
            loadings ? (
              <UnloadContent width={"110"} height={"23"} rx={7} ry={7} />
            ) : (
              nextDay4.weather[0].description
            )
          }
          date={
            loadings ? (
              <UnloadContent width={"110"} height={"23"} rx={7} ry={7} />
            ) : (
              `${t("description.part11")} : ${nextDay4.dt_txt.slice(0, 10)}`
            )
          }
          // dayOfweek = {()}
          temperatura={
            loadings ? (
              <UnloadContent width={"87"} height={"90"} rx={7} ry={7} />
            ) : (
              <div className="tempbody">{Math.floor(nextDay4?.main.temp)}°</div>
            )
          }
          wind={
            loadings ? (
              <UnloadContent width={"120"} height={"45"} rx={7} ry={7} />
            ) : (
              nextDay4.wind.speed
            )
          }
          Pressur={
            loadings ? (
              <UnloadContent width={"120"} height={"45"} rx={7} ry={7} />
            ) : (
              nextDay4?.main.humidity + "%"
            )
          }
        />
      </div>
    </>
  );
}

Home.propTypes = {};

export default Home;
