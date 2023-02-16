"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [show, setShow] = useState<boolean>(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     console.log(window.screenY);
  //     window.screenY > 100 ? setShow(true) : setShow(false);
  //   });
  //   return () => window.removeEventListener("scroll", () => {});
  // }, []);

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
    <nav
      className={`${
        show && "bg-slate-100 text-slate-500"
      } xs:text-sm md:text-lg xs:h-[50px] md:h-[80px] h-[100px] flex items-center justify-end gap-7 pr-6 z-10 transition-all sticky top-[0]`}
    >
      <div>프로필</div>
      <div>포트폴리오</div>
      <div>자기소개</div>
      <div>교육/학력</div>
    </nav>
  );
}
