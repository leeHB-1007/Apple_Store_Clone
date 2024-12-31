import Image from "next/image";
import StoreSpan from "./components/StoreSpan";
import Helper from "./components/Helper";

export default function Home() {
  return (
    <div className="flex ">
        <h1>Main 페이지</h1>
        <StoreSpan />
        <Helper/>
    </div>
  );
}
