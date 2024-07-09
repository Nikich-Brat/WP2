"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImCloud from "../constants/Images/Cloud.png";
import { ThemeInit, ThemeChanger } from "./theme";
import { CityChanger } from "./SelectPlace";
import { GetPredictPanel } from "./PeriodPrediction";
import { MainPanelCurrCharacteristics } from "./mainpanel";
import { MainPanelGeneralCharacteristics } from "./mainpanel"; 

export const WeatherPrediction = () => {
  let currentmoment = (new Date);
  let currentminute = (new Date).getMinutes();

  const [theme, setTheme] = useState<string>(
    typeof localStorage === "undefined" ? "light" : localStorage.theme,
  );

  const [city, setCity] = useState<number>(
    typeof localStorage === "undefined" ? 0 : localStorage.city,
  );

  const [interval, setInterval] = useState<string>(
    typeof localStorage === "undefined" ? "Day" : localStorage.interval,
  );

  const [timepoint, setTimepoint] = useState<Date>(currentmoment);

  useEffect(() => {
    ThemeInit((text: string) => setTheme(text));
    DoUpdate;
  }, []);

  if (theme === "light") {
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  } else if (typeof document !== "undefined") {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  }
  
  function DoUpdate(){
    if (currentminute !== (new Date).getMinutes()){
      currentmoment = (new Date);
      setTimepoint(currentmoment);
      currentminute = (new Date).getMinutes();
    }
    setTimeout(DoUpdate, 1000);
  };

  
  
  return (
    <div className="flex w-full h-full bg-neutral-900 justify-center">
      <div
        className="w-full h-auto flex flex-col text-sm p-1 dark:bg-neutral-800 dark:text-neutral-200 bg-neutral-200 text-neutral-800"
        style={{ maxWidth: "1920px" }}
      >
        <div className="w-full h-auto justify-center lg:justify-between md:justify-center sm:justify-center p-1 flex flex-col lg:flex-row md:flex-col sm:flex-col ">
          <div className="flex flex-row justify-between lg:justify-start md:justify-between sm:justify-between">
            <ThemeChanger
              theme={theme}
              setTheme={(text: string) => setTheme(text)}
            />
            <article className="h-full w-auto ml-1">
              <h1 className="text-lg font-bold">
                Погода в Беларуси <br /> сегодня
              </h1>
              <p>Язык: RU</p>
            </article>
          </div>
          <CityChanger
            themenow={theme}
            setCity={(text: number) => setCity(text)}
          />
        </div>

        <div className="w-full h-auto flex flex-col dark:bg-neutral-800 dark:text-neutral-200 bg-neutral-200 text-neutral-800 lg:flex-row md:flex-col sm:flex-col p-1">

          <MainPanelGeneralCharacteristics city={city} currmom={timepoint}/>
          <div className="transition-all duration-500 m-1 h-48 w-full flex flex-row justify-between dark:bg-neutral-600 bg-neutral-400 rounded-md sm:w-full md:w-full lg:w-3/4">
            <MainPanelCurrCharacteristics city={city}/>
            <div className="h-auto w-auto flex justify-end">
              <Image
                className="absolute h-48 w-48 opacity-20"
                src={ImCloud}
                alt="menutab"
                priority
              />
            </div>
          </div>
        </div>

        <GetPredictPanel
          theme={theme}
          city={city}
          interval={interval}
          setInterval={(text: string) => setInterval(text)}
        />
      </div>
    </div>
  );
};
