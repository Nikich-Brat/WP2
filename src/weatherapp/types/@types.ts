export interface IWeather {
  temprature: number;
  pressure: number;
  humidity: number;
  windspeed: number;
  id: number;
}

export interface IPlace {
  weather: IWeather[];
  place: string;
  time: Date;
  id: number;
}

export interface PlaceList {
  value: string;
  label: string;
}
