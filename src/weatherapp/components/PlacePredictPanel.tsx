import Item from "antd/es/list/Item";
import{WholeWeather} from "../constants/weatherstek/list"
export const PlacePredictPanel = ({interval}:{interval:string}) =>{ 

  let city = WholeWeather[0].place;
  let val = WholeWeather[0].Date;

  if (interval === 'Day'){
    return((val[0].weather.map((item) =>
      <div className="cursor-pointer h-40 flex-1 min-w-42 rounded-md dark:bg-neutral-600 bg-neutral-400 transition-all duration-500 m-1 p-1 dark:hover:bg-neutral-400 dark:hover:text-neutral-600 hover:bg-neutral-600 hover:text-neutral-400">
        <ul>
          <li>место:{ city }</li>
          <li>температура:{item.temprature}</li>
          <li>влажность: {item.humidity}%</li>
          <li>давление:{item.pressure}мм.рт.ст</li>
          <li>скорость ветра:{item.windspeed}м/с</li>
          <li>время:{item.id}:00</li>
        </ul>
      </div>
    )));
  }else if  (interval==='Week') {
    return((val.slice(0,7).map((item) =>
      <div className="cursor-pointer h-40 flex-1 min-w-42 rounded-md dark:bg-neutral-600 bg-neutral-400 transition-all duration-500 m-1 p-1 dark:hover:bg-neutral-400 dark:hover:text-neutral-600 hover:bg-neutral-600 hover:text-neutral-400">
        <ul>
          <li>место:{city}</li>
          <li>Ср.температура:{Number(item.getaveragetemprature()).toFixed(1)}</li>
          <li>Ср.влажность: {Number(item.getaveragehumidity()).toFixed(1)}%</li>
          <li>Ср.давление:{Number(item.getaveragepressure()).toFixed(1)}мм.рт.ст</li>
          <li>Ср.скорость ветра:{Number(item.getaveragewindspeed()).toFixed(1)}м/с</li>
          <li>Дата:{item.byTime.getDay()}</li>
        </ul>
      </div>
  )));   
  } else {
    return((val.map((item) =>
      <div className="cursor-pointer h-40 flex-1 min-w-42 rounded-md dark:bg-neutral-600 bg-neutral-400 transition-all duration-500 m-1 p-1 dark:hover:bg-neutral-400 dark:hover:text-neutral-600 hover:bg-neutral-600 hover:text-neutral-400">
        <ul>
          <li>место:{city}</li>
          <li>Ср.температура:{Number(item.getaveragetemprature()).toFixed(1)}</li>
          <li>Ср.влажность: {Number(item.getaveragehumidity()).toFixed(1)}%</li>
          <li>Ср.давление:{Number(item.getaveragepressure()).toFixed(1)}мм.рт.ст</li>
          <li>Ср.скорость ветра:{Number(item.getaveragewindspeed()).toFixed(1)}м/с</li>
          <li>Дата:{item.byTime.getDay()}</li>
        </ul>
      </div>
  )));
  }
}
