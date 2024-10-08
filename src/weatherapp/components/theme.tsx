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
  if (theme === "dark") {
    return (
      <div
        className="rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-blue-300 dark:hover:bg-neutral-900 transition-all duration-300 h-20 w-20 p-1"
        onClick={onClick}
      >
        <Image
          className="rounded-full h-full w-full bg-blue-300 dark:bg-neutral-900 hover:bg-blue-300 dark:hover:bg-neutral-900"
          src={ImNightMode}
          alt="menutab"
        />
      </div>
    );
  }
  return (
    <div
      className="rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-blue-300 dark:hover:bg-neutral-900 transition-all duration-300 h-20 w-20 p-1"
      onClick={onClick}
    >
      <Image
        className="rounded-full h-full w-full bg-blue-300 dark:bg-neutral-900 hover:bg-blue-300 dark:hover:bg-neutral-900"
        src={ImDayMode}
        alt="menutab"
      />
    </div>
  );
};
