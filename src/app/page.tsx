import Image from "next/image";
import StoreSpan from "./components/StoreSpan";
import Helper from "./components/Helper";
import FirstCarousel from "./components/FirstCarousel";
import SecCarousel from "./components/SecCarousel";
import StoreSpan2 from "./components/StoreSpan2";

export default function Home() {
  return (
    <div className="pl-48">
      <div className="flex items-center ">
        <StoreSpan />
        <div className="-ml-[-400px]"> {/* Helper 위치 조정 */}
          <Helper />
        </div>
      </div>
      <div>
        <FirstCarousel />
      </div>
      <StoreSpan2 />
      <SecCarousel />
    </div>
  );
}
