import Link from "next/link";

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow z-10">
      <div className="max-w-screen-xl mx-auto flex justify-around p-4">
        <div className="cursor-default flex flex-row items-center space-x-8 select-none">
          <Link href="/">
            {" "}
           
              <span className="text-black text-xl"></span>

          </Link>
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
          <Link href="/">🔍</Link>
          <Link href="/">🧺</Link>
        </div>
      </div>
    </div>
  );
}
