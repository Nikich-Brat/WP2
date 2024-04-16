"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Wind,
  ThermometerSnowflake,
  Droplets,
  CircleGauge,
} from "lucide-react";
import ImCloud from "../constants/Images/Cloud.png";
import { ThemeInit, ThemeChanger } from "./theme";
import { CityChanger } from "./SelectPlace";
import { GetPredictPanel } from "./PeriodPrediction";

export const WeatherPrediction = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.theme ? localStorage.theme : "light",
  );
  const [city, setCity] = useState<number>(
    localStorage.place ? localStorage.place : (localStorage.place = 0),
  );
  const [interval, setInterval] = useState<string>(
    localStorage.interval
      ? localStorage.interval
      : (localStorage.interval = "Day"),
  );

  useEffect(() => {
    ThemeInit((text: string) => setTheme(text));
  }, []);

  if (theme === "light") {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  } else {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  }

  return (
    <div className="flex w-full h-full bg-neutral-900 justify-center">
      <div
        className="w-full h-auto flex flex-col text-sm p-1 dark:bg-neutral-800 dark:text-neutral-200 bg-neutral-200 text-neutral-800"
        style={{ maxWidth: "1920px" }}
      >
        <div className="w-full h-auto flex flex-row justify-between p-1">
          <div className="flex flex-row">
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
          <CityChanger setCity={(text: number) => setCity(text)} />
        </div>

        <div className="w-full h-auto flex flex-col dark:bg-neutral-800 dark:text-neutral-200 bg-neutral-200 text-neutral-800 lg:flex-row md:flex-col sm:flex-col">
          <div className="m-1 h-48 w-full flex flex-col dark:bg-neutral-600 bg-neutral-400 rounded-md p-1 sm:w-full md:w-full lg:w-1/4">
            <div className="w-full h-auto">
              <h1 className="h1forshow font-normal text-5xl m-4">20</h1>
            </div>
            <div className="w-full h-auto flex flex-col">
              <p>Погода:</p>
              <p>Дата:</p>
              <p>Время:</p>
              <p>Место:</p>
            </div>
          </div>
          <div className="m-1 h-48 w-full flex flex-row justify-between dark:bg-neutral-600 bg-neutral-400 rounded-md sm:w-full md:w-full lg:w-3/4">
            <div className="h-full w-auto flex flex-col">
              <ul>
                <h1 className="text-base font-bold p-1">
                  Дополнительные характеристики
                </h1>
                <li className="flex flex-row whitespace-nowrap p-1">
                  <Wind />
                  <p className="m-1">скорость ветра</p>
                </li>

                <li className="flex flex-rowwhitespace-nowrap p-1">
                  <Droplets />
                  <p className="m-1">влажность</p>
                </li>

                <li className="flex flex-row whitespace-nowrap p-1 ">
                  <ThermometerSnowflake />
                  <p className="m-1">температура</p>
                </li>

                <li className="flex flex-row whitespace-nowrap p-1">
                  <CircleGauge />
                  <p className="m-1">давление</p>
                </li>
              </ul>
            </div>
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
          city={city}
          interval={interval}
          setInterval={(text: string) => setInterval(text)}
        />
      </div>
    </div>
  );
};
