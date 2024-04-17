import{WholeWeather} from "../constants/weatherstek/list"
export const PlacePredictPanelDay = ({interval}:{interval:string}) =>{ 
  let val = WholeWeather[0].Date[0].weather
return((val.map((item) =>
    <div className="cursor-pointer h-40 flex-1 min-w-40 rounded-md dark:bg-neutral-600 bg-neutral-400 transition-all duration-500 m-1 p-1 dark:hover:bg-neutral-400 dark:hover:text-neutral-600 hover:bg-neutral-600 hover:text-neutral-400">
      <ul>
        <li>место:{ WholeWeather[0].place}</li>
        <li>температура:{item.temprature}</li>
        <li>влажность: {item.humidity}%</li>
        <li>давление:{item.pressure} мм.рт.ст</li>
        <li>скорость ветра:{item.windspeed} м/с</li>
        <li>время:{item.id} :00</li>
      </ul>
    </div>
)));
}

export const PlacePredictPanelWeek = ({interval}:{interval:string}) =>{ 
  let val = WholeWeather[0].Date[0].weather
return((val.map((item) =>
    <div className="cursor-pointer h-40 flex-1 min-w-40 rounded-md dark:bg-neutral-600 bg-neutral-400 transition-all duration-500 m-1 p-1 dark:hover:bg-neutral-400 dark:hover:text-neutral-600 hover:bg-neutral-600 hover:text-neutral-400">
      <ul>
        <li>место:{ WholeWeather[0].place}</li>
        <li>температура:{item.temprature}</li>
        <li>влажность: {item.humidity}%</li>
        <li>давление:{item.pressure} мм.рт.ст</li>
        <li>скорость ветра:{item.windspeed} м/с</li>
        <li>время:{item.id} :00</li>
      </ul>
    </div>
)));
}

export const PlacePredictPanelMonth = ({interval}:{interval:string}) =>{ 
  let val = WholeWeather[0].Date[0].weather
return((val.map((item) =>
    <div className="cursor-pointer h-40 flex-1 min-w-40 rounded-md dark:bg-neutral-600 bg-neutral-400 transition-all duration-500 m-1 p-1 dark:hover:bg-neutral-400 dark:hover:text-neutral-600 hover:bg-neutral-600 hover:text-neutral-400">
      <ul>
        <li>место:{ WholeWeather[0].place}</li>
        <li>температура:{item.temprature}</li>
        <li>влажность: {item.humidity}%</li>
        <li>давление:{item.pressure} мм.рт.ст</li>
        <li>скорость ветра:{item.windspeed} м/с</li>
        <li>время:{item.id} :00</li>
      </ul>
    </div>
)));
}