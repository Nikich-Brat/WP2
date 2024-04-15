import Image from "next/image";
import ImDayMode from "../constants/svgs/DayMode.svg";
import ImNightMode from "../constants/svgs/NightMode.svg";

export function ThemeInit(setTheme: (text: string) => void) {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    setTheme("dark");
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    setTheme("light");
  }
}

export const ThemeChanger = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (text: string) => void;
}) => {
  function onClick() {
    if (theme === "dark") {
      localStorage.theme = "light";
      setTheme("light");
    } else {
      localStorage.theme = "dark";
      setTheme("dark");
    }
  }
  return localStorage.theme === "dark" ? (
    <div
      className="rounded-full hover:bg-blue-300 dark:hover:bg-neutral-900 transition-all duration-300 h-20 w-20 p-1"
      onClick={onClick}
    >
      <Image
        className="rounded-full h-full w-full"
        src={ImNightMode}
        alt="menutab"
      />
    </div>
  ) : (
    <div
      className="rounded-full hover:bg-blue-300 dark:hover:bg-neutral-900 transition-all duration-300 h-20 w-20 p-1"
      onClick={onClick}
    >
      <Image
        className="rounded-full h-full w-full"
        src={ImDayMode}
        alt="menutab"
      />
    </div>
  );
};
