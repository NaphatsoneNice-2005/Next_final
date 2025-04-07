"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  let pathname = usePathname() || "/";
  pathname = pathname.replace(/\/$/, "") || "/";

  const pageTitles: { [key: string]: string } = {
    "/": "Home",
    "/products": "Product",
    "/pre_order": "Pre-order",
    "/contact": "Contact",
  };

  const currentPage = pageTitles[pathname] || "Home";

  return (
    <nav className="h-40 bg-[url('/bg2.jpg')] bg-cover bg-center bg-no-repeat flex items-center px-10">
      <ul className="flex w-full items-center">
        {/* แสดงชื่อหน้าปัจจุบัน */}
        <li className="mr-auto">
          <span className="text-yellow-500 text-6xl font-bold italic">
            {currentPage}
          </span>
        </li>

        {/* เมนูหลัก */}
        <div className="flex space-x-10">
        <Link
            className="text-yellow-500 text-xl italic font-semibold hover:font-bold text-4xl hover:text-yellow-300"
            href="/"
          >
            Home
          </Link>

          <Link
            className="text-yellow-500 text-xl italic font-semibold hover:font-bold text-4xl hover:text-yellow-300 flex items-center gap-1"
            href="/products"
          >
            Product 
          </Link>

          <Link
            className="text-yellow-500 text-xl italic font-semibold hover:font-bold text-4xl hover:text-yellow-300 flex items-center gap-1"
            href="/pre_order"
          >
            Pre-order 
          </Link>

          <Link
            className="text-yellow-500 text-xl italic font-semibold hover:font-bold text-4xl hover:text-yellow-300 flex items-center gap-1"
            href="/contact"
          >
            Contact 
          </Link>
          <Link
            className="text-yellow-500 text-xl italic font-semibold hover:font-bold text-4xl hover:text-yellow-300 flex items-center gap-1"
            href="/about"
          >
            About
          </Link>
        </div>
      </ul>
    </nav>
  );
}
