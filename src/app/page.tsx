import { Noto_Sans } from "@next/font/google";
import Introduce from "../components/Introduce";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";

const notoSans = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`${notoSans.className} mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl `}
    >
      <Introduce />
      <About />
      <Portfolio />
    </main>
  );
}
