export const PlacePredictPanel = () => (
  <div className="w-full h-auto flex flex-wrap">
    <div className="cursor-pointer h-40 flex-1 min-w-40 rounded-md dark:bg-neutral-600 bg-neutral-400 transition-all duration-500 m-1 p-1 dark:hover:bg-neutral-400 dark:hover:text-neutral-600 hover:bg-neutral-600 hover:text-neutral-400">
      <ul>
        <li>место:</li>
        <li>погода:</li>
        <li>температура:</li>
        <li>влажность: %</li>
        <li>давление: мм.рт.ст</li>
        <li>скорость ветра: м/с</li>
        <li>время: :00</li>
      </ul>
    </div>
  </div>
);
