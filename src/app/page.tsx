import Image from "next/image";
import StoreSpan from "./components/StoreSpan";
import Helper from "./components/Helper";
import FirstCarousel from "./components/FirstCarousel";
import SecCarousel from "./components/SecCarousel";
import StoreSpan2 from "./components/StoreSpan2";
export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-around">
        <StoreSpan />
        <Helper />
      </div>
      <div>
        <FirstCarousel />
      </div>
      <div className="ml-48">
        <StoreSpan2 />
      </div>
      <SecCarousel />
    </div>
  );
}
