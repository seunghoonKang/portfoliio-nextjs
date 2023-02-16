"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [show, setShow] = useState<boolean>(false);

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

  return (
    <nav className="sticky top-[0]">
      <ul
        className={`${
          show && "bg-slate-100 text-slate-500"
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
      </ul>
    </nav>
  );
}
