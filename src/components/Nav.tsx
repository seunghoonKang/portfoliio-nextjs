"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiMoonFill } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";

export default function Nav() {
  const [show, setShow] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  useEffect(() => {
    setTheme("system");
  }, []);

  return (
    <nav className="sticky top-[0]">
      <ul
        className={`${
          show && "bg-slate-100 text-slate-500 dark:opacity-50"
        } xs:text-sm md:text-lg h-14 flex items-center justify-end gap-7 pr-6 z-10 transition-all  `}
      >
        <li className="cursor-pointer">
          <a href="/">홈</a>
        </li>
        <li className="cursor-pointer">
          <a href="#portfolio">포트폴리오</a>
        </li>
        <li className="cursor-pointer">
          <a href="#about">소개</a>
        </li>
        <li className="cursor-pointer">
          <a href="#experience">경험</a>
        </li>

        {currentTheme === "dark" ? (
          <li>
            <button onClick={() => setTheme("light")} className=" p-1">
              <BsFillSunFill size={15} />
            </button>
          </li>
        ) : (
          <li>
            <button
              onClick={() => setTheme("dark")}
              className=" p-1 bg-slate-100 rounded-xl"
            >
              <RiMoonFill size={15} />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
