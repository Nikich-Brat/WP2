import { IPlace } from "../../types/index";

export const WholeWeather: IPlace[] = [
  {
    Date:[
      {    
        weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
        ],
        byTime:new Date(2024, 1, 0),
        id:0,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 2,
          id: 0,
        },
        {
          temprature: 9,
          humidity: 31,
          pressure: 138,
          windspeed: 4,
          id: 1,
        },
        {
          temprature: 8,
          humidity: 40,
          pressure: 136,
          windspeed: 3,
          id: 2,
        },
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 3,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 143,
          windspeed: 0,
          id: 4,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 5,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 6,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 144,
          windspeed: 4,
          id: 7,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 144,
          windspeed: 5,
          id: 8,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 9,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 145,
          windspeed: 4,
          id: 10,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 5,
          id: 11,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 6,
          id: 12,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 146,
          windspeed: 2,
          id: 13,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 2,
          id: 14,
        },
        {
          temprature: 17,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 15,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 143,
          windspeed: 5,
          id: 16,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 17,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 142,
          windspeed: 2,
          id: 18,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 142,
          windspeed: 3,
          id: 19,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 20,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 139,
          windspeed: 2,
          id: 21,
        },
        {
          temprature: 8,
          humidity: 30,
          pressure: 138,
          windspeed: 5,
          id: 22,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 137,
          windspeed: 2,
          id: 23,
        },
        ],
        byTime:new Date(2024, 1, 0),
        id:1,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
        ],
        byTime:new Date(2024, 1, 0),
        id:2,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 2,
          id: 0,
        },
        {
          temprature: 9,
          humidity: 31,
          pressure: 138,
          windspeed: 4,
          id: 1,
        },
        {
          temprature: 8,
          humidity: 40,
          pressure: 136,
          windspeed: 3,
          id: 2,
        },
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 3,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 143,
          windspeed: 0,
          id: 4,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 5,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 6,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 144,
          windspeed: 4,
          id: 7,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 144,
          windspeed: 5,
          id: 8,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 9,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 145,
          windspeed: 4,
          id: 10,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 5,
          id: 11,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 6,
          id: 12,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 146,
          windspeed: 2,
          id: 13,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 2,
          id: 14,
        },
        {
          temprature: 17,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 15,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 143,
          windspeed: 5,
          id: 16,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 17,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 142,
          windspeed: 2,
          id: 18,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 142,
          windspeed: 3,
          id: 19,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 20,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 139,
          windspeed: 2,
          id: 21,
        },
        {
          temprature: 8,
          humidity: 30,
          pressure: 138,
          windspeed: 5,
          id: 22,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 137,
          windspeed: 2,
          id: 23,
        },
        ],
        byTime:new Date(2024, 1, 0),
        id:3,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
        ],
        byTime:new Date(2024, 1, 0),
        id:4,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 2,
          id: 0,
        },
        {
          temprature: 9,
          humidity: 31,
          pressure: 138,
          windspeed: 4,
          id: 1,
        },
        {
          temprature: 8,
          humidity: 40,
          pressure: 136,
          windspeed: 3,
          id: 2,
        },
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 3,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 143,
          windspeed: 0,
          id: 4,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 5,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 6,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 144,
          windspeed: 4,
          id: 7,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 144,
          windspeed: 5,
          id: 8,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 9,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 145,
          windspeed: 4,
          id: 10,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 5,
          id: 11,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 6,
          id: 12,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 146,
          windspeed: 2,
          id: 13,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 2,
          id: 14,
        },
        {
          temprature: 17,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 15,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 143,
          windspeed: 5,
          id: 16,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 17,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 142,
          windspeed: 2,
          id: 18,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 142,
          windspeed: 3,
          id: 19,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 20,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 139,
          windspeed: 2,
          id: 21,
        },
        {
          temprature: 8,
          humidity: 30,
          pressure: 138,
          windspeed: 5,
          id: 22,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 137,
          windspeed: 2,
          id: 23,
        },
        ],
        byTime:new Date(2024, 1, 0),
        id:5,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
        ],
        byTime:new Date(2024, 1, 0),
        id:6,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 2,
          id: 0,
        },
        {
          temprature: 9,
          humidity: 31,
          pressure: 138,
          windspeed: 4,
          id: 1,
        },
        {
          temprature: 8,
          humidity: 40,
          pressure: 136,
          windspeed: 3,
          id: 2,
        },
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 3,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 143,
          windspeed: 0,
          id: 4,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 5,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 6,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 144,
          windspeed: 4,
          id: 7,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 144,
          windspeed: 5,
          id: 8,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 9,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 145,
          windspeed: 4,
          id: 10,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 5,
          id: 11,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 6,
          id: 12,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 146,
          windspeed: 2,
          id: 13,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 2,
          id: 14,
        },
        {
          temprature: 17,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 15,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 143,
          windspeed: 5,
          id: 16,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 17,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 142,
          windspeed: 2,
          id: 18,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 142,
          windspeed: 3,
          id: 19,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 20,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 139,
          windspeed: 2,
          id: 21,
        },
        {
          temprature: 8,
          humidity: 30,
          pressure: 138,
          windspeed: 5,
          id: 22,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 137,
          windspeed: 2,
          id: 23,
        },
        ],
        byTime:new Date(2024, 1, 0),
        id:7,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
        ],
        byTime:new Date(2024, 1, 0),
        id:8,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 2,
          id: 0,
        },
        {
          temprature: 9,
          humidity: 31,
          pressure: 138,
          windspeed: 4,
          id: 1,
        },
        {
          temprature: 8,
          humidity: 40,
          pressure: 136,
          windspeed: 3,
          id: 2,
        },
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 3,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 143,
          windspeed: 0,
          id: 4,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 5,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 6,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 144,
          windspeed: 4,
          id: 7,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 144,
          windspeed: 5,
          id: 8,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 9,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 145,
          windspeed: 4,
          id: 10,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 5,
          id: 11,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 6,
          id: 12,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 146,
          windspeed: 2,
          id: 13,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 2,
          id: 14,
        },
        {
          temprature: 17,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 15,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 143,
          windspeed: 5,
          id: 16,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 17,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 142,
          windspeed: 2,
          id: 18,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 142,
          windspeed: 3,
          id: 19,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 20,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 139,
          windspeed: 2,
          id: 21,
        },
        {
          temprature: 8,
          humidity: 30,
          pressure: 138,
          windspeed: 5,
          id: 22,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 137,
          windspeed: 2,
          id: 23,
        },
        ],
        byTime:new Date(2024, 1, 0),
        id:9,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
        ],
        byTime:new Date(2024, 1, 0),
        id:10,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 2,
          id: 0,
        },
        {
          temprature: 9,
          humidity: 31,
          pressure: 138,
          windspeed: 4,
          id: 1,
        },
        {
          temprature: 8,
          humidity: 40,
          pressure: 136,
          windspeed: 3,
          id: 2,
        },
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 3,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 143,
          windspeed: 0,
          id: 4,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 5,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 6,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 144,
          windspeed: 4,
          id: 7,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 144,
          windspeed: 5,
          id: 8,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 9,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 145,
          windspeed: 4,
          id: 10,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 5,
          id: 11,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 6,
          id: 12,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 146,
          windspeed: 2,
          id: 13,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 2,
          id: 14,
        },
        {
          temprature: 17,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 15,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 143,
          windspeed: 5,
          id: 16,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 17,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 142,
          windspeed: 2,
          id: 18,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 142,
          windspeed: 3,
          id: 19,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 20,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 139,
          windspeed: 2,
          id: 21,
        },
        {
          temprature: 8,
          humidity: 30,
          pressure: 138,
          windspeed: 5,
          id: 22,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 137,
          windspeed: 2,
          id: 23,
        },
        ],
        byTime:new Date(2024, 1, 0),
        id:11,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
        ],
        byTime:new Date(2024, 1, 0),
        id:12,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 2,
          id: 0,
        },
        {
          temprature: 9,
          humidity: 31,
          pressure: 138,
          windspeed: 4,
          id: 1,
        },
        {
          temprature: 8,
          humidity: 40,
          pressure: 136,
          windspeed: 3,
          id: 2,
        },
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 3,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 143,
          windspeed: 0,
          id: 4,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 5,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 6,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 144,
          windspeed: 4,
          id: 7,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 144,
          windspeed: 5,
          id: 8,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 9,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 145,
          windspeed: 4,
          id: 10,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 5,
          id: 11,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 6,
          id: 12,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 146,
          windspeed: 2,
          id: 13,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 2,
          id: 14,
        },
        {
          temprature: 17,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 15,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 143,
          windspeed: 5,
          id: 16,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 17,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 142,
          windspeed: 2,
          id: 18,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 142,
          windspeed: 3,
          id: 19,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 20,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 139,
          windspeed: 2,
          id: 21,
        },
        {
          temprature: 8,
          humidity: 30,
          pressure: 138,
          windspeed: 5,
          id: 22,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 137,
          windspeed: 2,
          id: 23,
        },
        ],
        byTime:new Date(2024, 1, 0),
        id:13,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
        ],
        byTime:new Date(2024, 1, 0),
        id:14,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 2,
          id: 0,
        },
        {
          temprature: 9,
          humidity: 31,
          pressure: 138,
          windspeed: 4,
          id: 1,
        },
        {
          temprature: 8,
          humidity: 40,
          pressure: 136,
          windspeed: 3,
          id: 2,
        },
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 3,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 143,
          windspeed: 0,
          id: 4,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 5,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 6,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 144,
          windspeed: 4,
          id: 7,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 144,
          windspeed: 5,
          id: 8,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 9,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 145,
          windspeed: 4,
          id: 10,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 5,
          id: 11,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 6,
          id: 12,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 146,
          windspeed: 2,
          id: 13,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 2,
          id: 14,
        },
        {
          temprature: 17,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 15,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 143,
          windspeed: 5,
          id: 16,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 17,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 142,
          windspeed: 2,
          id: 18,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 142,
          windspeed: 3,
          id: 19,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 20,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 139,
          windspeed: 2,
          id: 21,
        },
        {
          temprature: 8,
          humidity: 30,
          pressure: 138,
          windspeed: 5,
          id: 22,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 137,
          windspeed: 2,
          id: 23,
        },
        ],
        byTime:new Date(2024, 1, 0),
        id:15,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
        ],
        byTime:new Date(2024, 1, 0),
        id:16,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 2,
          id: 0,
        },
        {
          temprature: 9,
          humidity: 31,
          pressure: 138,
          windspeed: 4,
          id: 1,
        },
        {
          temprature: 8,
          humidity: 40,
          pressure: 136,
          windspeed: 3,
          id: 2,
        },
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 3,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 143,
          windspeed: 0,
          id: 4,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 5,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 6,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 144,
          windspeed: 4,
          id: 7,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 144,
          windspeed: 5,
          id: 8,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 9,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 145,
          windspeed: 4,
          id: 10,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 5,
          id: 11,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 6,
          id: 12,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 146,
          windspeed: 2,
          id: 13,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 2,
          id: 14,
        },
        {
          temprature: 17,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 15,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 143,
          windspeed: 5,
          id: 16,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 17,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 142,
          windspeed: 2,
          id: 18,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 142,
          windspeed: 3,
          id: 19,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 20,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 139,
          windspeed: 2,
          id: 21,
        },
        {
          temprature: 8,
          humidity: 30,
          pressure: 138,
          windspeed: 5,
          id: 22,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 137,
          windspeed: 2,
          id: 23,
        },
        ],
        byTime:new Date(2024, 1, 0),
        id:17,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
        ],
        byTime:new Date(2024, 1, 0),
        id:18,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 2,
          id: 0,
        },
        {
          temprature: 9,
          humidity: 31,
          pressure: 138,
          windspeed: 4,
          id: 1,
        },
        {
          temprature: 8,
          humidity: 40,
          pressure: 136,
          windspeed: 3,
          id: 2,
        },
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 3,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 143,
          windspeed: 0,
          id: 4,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 5,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 6,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 144,
          windspeed: 4,
          id: 7,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 144,
          windspeed: 5,
          id: 8,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 9,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 145,
          windspeed: 4,
          id: 10,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 5,
          id: 11,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 6,
          id: 12,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 146,
          windspeed: 2,
          id: 13,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 2,
          id: 14,
        },
        {
          temprature: 17,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 15,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 143,
          windspeed: 5,
          id: 16,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 17,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 142,
          windspeed: 2,
          id: 18,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 142,
          windspeed: 3,
          id: 19,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 20,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 139,
          windspeed: 2,
          id: 21,
        },
        {
          temprature: 8,
          humidity: 30,
          pressure: 138,
          windspeed: 5,
          id: 22,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 137,
          windspeed: 2,
          id: 23,
        },
        ],
        byTime:new Date(2024, 1, 0),
        id:19,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
        ],
        byTime:new Date(2024, 1, 0),
        id:20,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 2,
          id: 0,
        },
        {
          temprature: 9,
          humidity: 31,
          pressure: 138,
          windspeed: 4,
          id: 1,
        },
        {
          temprature: 8,
          humidity: 40,
          pressure: 136,
          windspeed: 3,
          id: 2,
        },
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 3,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 143,
          windspeed: 0,
          id: 4,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 5,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 6,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 144,
          windspeed: 4,
          id: 7,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 144,
          windspeed: 5,
          id: 8,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 9,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 145,
          windspeed: 4,
          id: 10,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 5,
          id: 11,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 6,
          id: 12,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 146,
          windspeed: 2,
          id: 13,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 2,
          id: 14,
        },
        {
          temprature: 17,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 15,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 143,
          windspeed: 5,
          id: 16,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 17,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 142,
          windspeed: 2,
          id: 18,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 142,
          windspeed: 3,
          id: 19,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 20,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 139,
          windspeed: 2,
          id: 21,
        },
        {
          temprature: 8,
          humidity: 30,
          pressure: 138,
          windspeed: 5,
          id: 22,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 137,
          windspeed: 2,
          id: 23,
        },
        ],
        byTime:new Date(2024, 1, 0),
        id:21,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
        ],
        byTime:new Date(2024, 1, 0),
        id:22,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 2,
          id: 0,
        },
        {
          temprature: 9,
          humidity: 31,
          pressure: 138,
          windspeed: 4,
          id: 1,
        },
        {
          temprature: 8,
          humidity: 40,
          pressure: 136,
          windspeed: 3,
          id: 2,
        },
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 3,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 143,
          windspeed: 0,
          id: 4,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 5,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 6,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 144,
          windspeed: 4,
          id: 7,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 144,
          windspeed: 5,
          id: 8,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 9,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 145,
          windspeed: 4,
          id: 10,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 5,
          id: 11,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 6,
          id: 12,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 146,
          windspeed: 2,
          id: 13,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 2,
          id: 14,
        },
        {
          temprature: 17,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 15,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 143,
          windspeed: 5,
          id: 16,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 17,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 142,
          windspeed: 2,
          id: 18,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 142,
          windspeed: 3,
          id: 19,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 20,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 139,
          windspeed: 2,
          id: 21,
        },
        {
          temprature: 8,
          humidity: 30,
          pressure: 138,
          windspeed: 5,
          id: 22,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 137,
          windspeed: 2,
          id: 23,
        },
        ],
        byTime:new Date(2024, 1, 0),
        id:23,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
        ],
        byTime:new Date(2024, 1, 0),
        id:24,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 2,
          id: 0,
        },
        {
          temprature: 9,
          humidity: 31,
          pressure: 138,
          windspeed: 4,
          id: 1,
        },
        {
          temprature: 8,
          humidity: 40,
          pressure: 136,
          windspeed: 3,
          id: 2,
        },
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 3,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 143,
          windspeed: 0,
          id: 4,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 5,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 6,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 144,
          windspeed: 4,
          id: 7,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 144,
          windspeed: 5,
          id: 8,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 9,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 145,
          windspeed: 4,
          id: 10,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 5,
          id: 11,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 6,
          id: 12,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 146,
          windspeed: 2,
          id: 13,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 2,
          id: 14,
        },
        {
          temprature: 17,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 15,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 143,
          windspeed: 5,
          id: 16,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 17,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 142,
          windspeed: 2,
          id: 18,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 142,
          windspeed: 3,
          id: 19,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 20,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 139,
          windspeed: 2,
          id: 21,
        },
        {
          temprature: 8,
          humidity: 30,
          pressure: 138,
          windspeed: 5,
          id: 22,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 137,
          windspeed: 2,
          id: 23,
        },
        ],
        byTime:new Date(2024, 1, 0),
        id:25,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
        ],
        byTime:new Date(2024, 1, 0),
        id:26,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 2,
          id: 0,
        },
        {
          temprature: 9,
          humidity: 31,
          pressure: 138,
          windspeed: 4,
          id: 1,
        },
        {
          temprature: 8,
          humidity: 40,
          pressure: 136,
          windspeed: 3,
          id: 2,
        },
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 3,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 143,
          windspeed: 0,
          id: 4,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 5,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 6,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 144,
          windspeed: 4,
          id: 7,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 144,
          windspeed: 5,
          id: 8,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 9,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 145,
          windspeed: 4,
          id: 10,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 5,
          id: 11,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 6,
          id: 12,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 146,
          windspeed: 2,
          id: 13,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 2,
          id: 14,
        },
        {
          temprature: 17,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 15,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 143,
          windspeed: 5,
          id: 16,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 17,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 142,
          windspeed: 2,
          id: 18,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 142,
          windspeed: 3,
          id: 19,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 20,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 139,
          windspeed: 2,
          id: 21,
        },
        {
          temprature: 8,
          humidity: 30,
          pressure: 138,
          windspeed: 5,
          id: 22,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 137,
          windspeed: 2,
          id: 23,
        },
        ],
        byTime:new Date(2024, 1, 0),
        id:27,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
        ],
        byTime:new Date(2024, 1, 0),
        id:28,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
      {    
        weather: [
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 2,
          id: 0,
        },
        {
          temprature: 9,
          humidity: 31,
          pressure: 138,
          windspeed: 4,
          id: 1,
        },
        {
          temprature: 8,
          humidity: 40,
          pressure: 136,
          windspeed: 3,
          id: 2,
        },
        {
          temprature: 10,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 3,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 143,
          windspeed: 0,
          id: 4,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 5,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 6,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 144,
          windspeed: 4,
          id: 7,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 144,
          windspeed: 5,
          id: 8,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 9,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 145,
          windspeed: 4,
          id: 10,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 5,
          id: 11,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 6,
          id: 12,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 146,
          windspeed: 2,
          id: 13,
        },
        {
          temprature: 16,
          humidity: 30,
          pressure: 145,
          windspeed: 2,
          id: 14,
        },
        {
          temprature: 17,
          humidity: 30,
          pressure: 145,
          windspeed: 3,
          id: 15,
        },
        {
          temprature: 15,
          humidity: 30,
          pressure: 143,
          windspeed: 5,
          id: 16,
        },
        {
          temprature: 13,
          humidity: 30,
          pressure: 143,
          windspeed: 1,
          id: 17,
        },
        {
          temprature: 12,
          humidity: 30,
          pressure: 142,
          windspeed: 2,
          id: 18,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 142,
          windspeed: 3,
          id: 19,
        },
        {
          temprature: 11,
          humidity: 30,
          pressure: 140,
          windspeed: 3,
          id: 20,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 139,
          windspeed: 2,
          id: 21,
        },
        {
          temprature: 8,
          humidity: 30,
          pressure: 138,
          windspeed: 5,
          id: 22,
        },
        {
          temprature: 9,
          humidity: 30,
          pressure: 137,
          windspeed: 2,
          id: 23,
        },
        ],
        byTime:new Date(2024, 1, 0),
        id:29,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },        
      },
      {    
        weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
        ],
        byTime:new Date(2024, 1, 0),
        id:30,
        getaveragetemprature() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
            0,
          );
          return avertemp;
        }, 
        getaveragepressure() {
          const averpres = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
            0,
          );
          return averpres;
        },
        getaveragehumidity() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
        getaveragewindspeed() {
          const avertemp = this.weather.reduce(
            (acc, parameter) =>
              parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
            0,
          );
          return avertemp;
        },
      },
    ],
    place: "Minsk",
    id: 0,
  },
  {
    Date:[
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:0,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:1,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:2,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:3,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:4,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:5,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:6,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:7,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:8,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:9,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:10,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:11,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:12,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:13,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:14,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:15,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:16,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:17,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:18,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:19,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:20,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:21,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:22,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:23,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:24,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:25,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:26,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:27,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:28,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:29,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },        
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:30,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    ],
    place: "Брест",
    id: 1,
  },
  {
    Date:[
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:0,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:1,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:2,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:3,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:4,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:5,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:6,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:7,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:8,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:9,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:10,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:11,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:12,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:13,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:14,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:15,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:16,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:17,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:18,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:19,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:20,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:21,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:22,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:23,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:24,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:25,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:26,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:27,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:28,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:29,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },        
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:30,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    ],
    place: "Витебск",
    id: 2,
  },
  {
    Date:[
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:0,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:1,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:2,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:3,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:4,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:5,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:6,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:7,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:8,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:9,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:10,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:11,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:12,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:13,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:14,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:15,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:16,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:17,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:18,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:19,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:20,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:21,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:22,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:23,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:24,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:25,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:26,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:27,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:28,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:29,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },        
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:30,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    ],
    place: "Гомель",
    id: 3,
  },
  {
    Date:[
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:0,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:1,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:2,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:3,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:4,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:5,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:6,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:7,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:8,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:9,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:10,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:11,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:12,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:13,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:14,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:15,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:16,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:17,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:18,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:19,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:20,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:21,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:22,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:23,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:24,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:25,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:26,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:27,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:28,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:29,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },        
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:30,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    ],
    place: "Гродно",
    id: 4,
  },
  {
    Date:[
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:0,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:1,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:2,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:3,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:4,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:5,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:6,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:7,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:8,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:9,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:10,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:11,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:12,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:13,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:14,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:15,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:16,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:17,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:18,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:19,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:20,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:21,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:22,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:23,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:24,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:25,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:26,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:27,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:28,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    {    
      weather: [
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 2,
        id: 0,
      },
      {
        temprature: 9,
        humidity: 31,
        pressure: 138,
        windspeed: 4,
        id: 1,
      },
      {
        temprature: 8,
        humidity: 40,
        pressure: 136,
        windspeed: 3,
        id: 2,
      },
      {
        temprature: 10,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 3,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 143,
        windspeed: 0,
        id: 4,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 5,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 6,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 144,
        windspeed: 4,
        id: 7,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 144,
        windspeed: 5,
        id: 8,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 9,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 145,
        windspeed: 4,
        id: 10,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 5,
        id: 11,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 6,
        id: 12,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 146,
        windspeed: 2,
        id: 13,
      },
      {
        temprature: 16,
        humidity: 30,
        pressure: 145,
        windspeed: 2,
        id: 14,
      },
      {
        temprature: 17,
        humidity: 30,
        pressure: 145,
        windspeed: 3,
        id: 15,
      },
      {
        temprature: 15,
        humidity: 30,
        pressure: 143,
        windspeed: 5,
        id: 16,
      },
      {
        temprature: 13,
        humidity: 30,
        pressure: 143,
        windspeed: 1,
        id: 17,
      },
      {
        temprature: 12,
        humidity: 30,
        pressure: 142,
        windspeed: 2,
        id: 18,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 142,
        windspeed: 3,
        id: 19,
      },
      {
        temprature: 11,
        humidity: 30,
        pressure: 140,
        windspeed: 3,
        id: 20,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 139,
        windspeed: 2,
        id: 21,
      },
      {
        temprature: 8,
        humidity: 30,
        pressure: 138,
        windspeed: 5,
        id: 22,
      },
      {
        temprature: 9,
        humidity: 30,
        pressure: 137,
        windspeed: 2,
        id: 23,
      },
      ],
      byTime:new Date(2024, 1, 0),
      id:29,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },        
    },
    {    
      weather: [
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 2,
      id: 0,
    },
    {
      temprature: 9,
      humidity: 31,
      pressure: 138,
      windspeed: 4,
      id: 1,
    },
    {
      temprature: 8,
      humidity: 40,
      pressure: 136,
      windspeed: 3,
      id: 2,
    },
    {
      temprature: 10,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 3,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 143,
      windspeed: 0,
      id: 4,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 5,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 6,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 144,
      windspeed: 4,
      id: 7,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 144,
      windspeed: 5,
      id: 8,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 9,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 145,
      windspeed: 4,
      id: 10,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 5,
      id: 11,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 6,
      id: 12,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 146,
      windspeed: 2,
      id: 13,
    },
    {
      temprature: 16,
      humidity: 30,
      pressure: 145,
      windspeed: 2,
      id: 14,
    },
    {
      temprature: 17,
      humidity: 30,
      pressure: 145,
      windspeed: 3,
      id: 15,
    },
    {
      temprature: 15,
      humidity: 30,
      pressure: 143,
      windspeed: 5,
      id: 16,
    },
    {
      temprature: 13,
      humidity: 30,
      pressure: 143,
      windspeed: 1,
      id: 17,
    },
    {
      temprature: 12,
      humidity: 30,
      pressure: 142,
      windspeed: 2,
      id: 18,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 142,
      windspeed: 3,
      id: 19,
    },
    {
      temprature: 11,
      humidity: 30,
      pressure: 140,
      windspeed: 3,
      id: 20,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 139,
      windspeed: 2,
      id: 21,
    },
    {
      temprature: 8,
      humidity: 30,
      pressure: 138,
      windspeed: 5,
      id: 22,
    },
    {
      temprature: 9,
      humidity: 30,
      pressure: 137,
      windspeed: 2,
      id: 23,
    },
      ],
      byTime:new Date(2024, 1, 0),
      id:30,
      getaveragetemprature() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.temprature / 7 : acc + 0,
          0,
        );
        return avertemp;
      }, 
      getaveragepressure() {
        const averpres = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.pressure / 7 : acc + 0,
          0,
        );
        return averpres;
      },
      getaveragehumidity() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.humidity / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
      getaveragewindspeed() {
        const avertemp = this.weather.reduce(
          (acc, parameter) =>
            parameter.id >= 11 && parameter.id <= 17 ? acc + parameter.windspeed / 7 : acc + 0,
          0,
        );
        return avertemp;
      },
    },
    ],
    place: "Могилев",
    id: 5,
  }

  
];
