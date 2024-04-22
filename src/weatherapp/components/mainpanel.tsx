import {
    Wind,
    ThermometerSnowflake,
    Droplets,
    CircleGauge,
  } from "lucide-react";
  import { WholeWeather } from "../constants/weatherstek";

export const MainPanelCurrCharacteristics = ({city}:{city:number}) =>{
    return(
 <div className="h-full w-auto flex flex-col">
<ul>
  <h1 className="text-base font-bold p-1">
    Дополнительные характеристики
  </h1>
  <li className="flex flex-row whitespace-nowrap p-1">
    <Wind />
    <p className="m-1">скорость ветра:</p>
  </li>

  <li className="flex flex-rowwhitespace-nowrap p-1">
    <Droplets />
    <p className="m-1">влажность:</p>
  </li>

  <li className="flex flex-row whitespace-nowrap p-1 ">
    <ThermometerSnowflake />
    <p className="m-1">температура:</p>
  </li>

  <li className="flex flex-row whitespace-nowrap p-1">
    <CircleGauge />
    <p className="m-1">давление:</p>
  </li>
</ul>
</div>  
    ) 
};

export const MainPanelGeneralCharacteristics = ({city,currmom}:{city:number;currmom:Date}) =>{
    return(
      <div className="transition-all duration-500 m-1 h-48 w-full flex flex-col dark:bg-neutral-600 bg-neutral-400 rounded-md p-1 sm:w-full md:w-full lg:w-1/4">
        <div className="w-full h-auto">
          <h1 className="h1forshow font-normal text-5xl m-4">20</h1>
        </div>
        <div className="w-full h-auto flex flex-col">
          <p>Погода: солнечно</p>
          <p>Дата: {String(currmom.getFullYear())}.{String(currmom.getMonth())}.{String(currmom.getDay())}</p>
          <p>Время: {String(currmom.getHours())}:{String(currmom.getMinutes())}</p>
          <p>Место: {city}</p>
        </div>
      </div>  
    ) 
}


