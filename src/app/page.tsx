import { Noto_Sans } from "@next/font/google";
import Introduce from "../components/Introduce";
import Portfolio from "@/components/Portfolio";

const notoSans = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${notoSans.className} `}>
      <Introduce />
      <Introduce />
      <Introduce />

      <Portfolio />
    </main>
  );
}
