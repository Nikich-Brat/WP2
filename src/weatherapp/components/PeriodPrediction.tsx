import { PlacePredictPanel } from "./PlacePredictPanel";

export const GetPredictPanel = ({
  theme,
  city,
  interval,
  setInterval,
}: {
  theme: string;
  city: number;
  interval: string;
  setInterval: (text: string) => void;
}) => {
  function DayPeriod() {
    localStorage.interval = "Day";
    setInterval(localStorage.interval);
  }
  function WeekPeriod() {
    localStorage.interval = "Week";
    setInterval(localStorage.interval);
  }
  function MonthPeriod() {
    localStorage.interval = "Month";
    setInterval(localStorage.interval);
  }
  return (
    <div className="w-full h-auto flex flex-col dark:bg-neutral-800 dark:text-neutral-200 bg-neutral-200 text-neutral-800">
      <div className="w-full mb-1 h-auto flex-col flex lg:flex-row md:flex-col sm:flex-col">
        <button
          onClick={DayPeriod}
          type="button"
          className="border-2 border-neutral-300 dark:border-neutral-700 transition-all duration-500 h-full m-1 p-1 dark:bg-neutral-700  dark:text-neutral-300 bg-neutral-300 text-neutral-700 rounded-full dark:hover:bg-neutral-300  dark:hover:text-neutral-700 hover:bg-neutral-700 hover:text-neutral-300 hover:text-base sm:w-full md:w-full lg:w-auto"
        >
          на день
        </button>
        <button
          onClick={WeekPeriod}
          type="button"
          className="border-2 border-neutral-300 dark:border-neutral-700 transition-all duration-500 h-full m-1 p-1 dark:bg-neutral-700  dark:text-neutral-300 bg-neutral-300 text-neutral-700 rounded-full dark:hover:bg-neutral-300  dark:hover:text-neutral-700 hover:bg-neutral-700 hover:text-neutral-300 hover:text-base sm:w-full md:w-full lg:w-auto"
        >
          на неделю
        </button>
        <button
          onClick={MonthPeriod}
          type="button"
          className="border-2 border-neutral-300 dark:border-neutral-700 transition-all duration-500 h-full m-1 p-1 dark:bg-neutral-700  dark:text-neutral-300 bg-neutral-300 text-neutral-700 rounded-full dark:hover:bg-neutral-300  dark:hover:text-neutral-700 hover:bg-neutral-700 hover:text-neutral-300 hover:text-base sm:w-full md:w-full lg:w-auto"
        >
          на месяц
        </button>
      </div>
      <div className="w-full h-auto flex flex-wrap">
        <PlacePredictPanel interval={interval}/>
      </div>
    </div>
  );
};
