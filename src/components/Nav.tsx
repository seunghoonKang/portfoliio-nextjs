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
  }, [setTheme]);

  return (
    <nav className="sticky top-[0] z-50 ">
      <ul
        className={`${
          show && "z-50 bg-slate-100 text-slate-500 dark:opacity-80"
        } z-50 flex h-14 items-center justify-end gap-7 pr-6 transition-all xs:text-sm md:text-lg  `}
      >
        <li className="cursor-pointer">
          <a href="#home">
            <div className="hoverNavItem">홈</div>
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="#about">
            <div className="hoverNavItem">소개</div>
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="#portfolio">
            <div className="hoverNavItem">포트폴리오</div>
          </a>
        </li>
        {/* <li className="cursor-pointer">
          <a href="#experience">
            <div className="hoverNavItem">경험</div>
          </a>
        </li> */}
        {currentTheme === "dark" ? (
          <li>
            <button
              onClick={() => setTheme("light")}
              className=" p-1"
              aria-label="Change from Dark Mode to Light Mode"
            >
              <BsFillSunFill size={15} />
            </button>
          </li>
        ) : (
          <li>
            <button
              onClick={() => setTheme("dark")}
              className=" rounded-xl bg-slate-100 p-1"
              aria-label="Change from Light Mode to Dark Mode"
            >
              <RiMoonFill size={15} />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
