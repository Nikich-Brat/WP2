export interface IWeather {
  temprature: number;
  pressure: number;
  humidity: number;
  windspeed: number;
  id: number;
}


export interface IDate {
  weather: IWeather[];
  byTime: Date;
  id: number;
  getaveragetemprature(): void;
  getaveragepressure(): void;    
  getaveragehumidity(): void;
  getaveragewindspeed(): void;    

}



export interface IPlace {
  Date:IDate[];
  place: string;
  id:number;
}

export interface PlaceList {
  value: string;
  label: string;
}
