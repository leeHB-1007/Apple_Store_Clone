import Image from "next/image";
import StoreSpan from "./components/StoreSpan";
import Helper from "./components/Helper";

export default function Home() {
  return (
    <div className="flex items-center justify-around">
        <StoreSpan />
        <Helper/>
    </div>
  );
}
