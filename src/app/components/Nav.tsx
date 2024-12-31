import Link from "next/link";

export default function Nav() {
  return (
    <div className="w-1/2 mx-auto flex justify-between">
      <div className="cursor-default flex flex-row items-center space-x-10 select-none">
        <Link href="/" >애플로고</Link>
        <Link href="/">Store</Link>
        <Link href="/">Mac</Link>
        <Link href="/">iPad</Link>
        <Link href="/">iPhone</Link>
        <Link href="/">Vision</Link>
        <Link href="/">AirPods</Link>
        <Link href="/">TV & Home</Link>
        <Link href="/">Entertainment</Link>
        <Link href="/">Accessories</Link>
        <Link href="/">Support</Link>
        <Link href="/">검색</Link>
        <Link href="/">장바구니</Link>
      </div>
    </div>
  );
}
