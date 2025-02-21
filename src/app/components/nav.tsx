"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // ใช้แทน useRouter

export default function Nav() {
  const pathname = usePathname(); // ดึง path ของหน้าปัจจุบัน

  // กำหนดชื่อหน้าตามเส้นทาง
  const pageTitles = {
    "/": "Home",
    "/products": "Product",
    "/pre_order": "Pre-order",
    "/contact": "Contact",
  };

  // หาชื่อหน้าปัจจุบัน (ถ้าไม่มีใน list ให้แสดง "Home")
  const currentPage = pageTitles[pathname] || "Home";

  return (
    <nav className="h-40 bg-[url('/bg2.jpg')] bg-cover bg-center bg-no-repeat flex items-center px-10">
      <ul className="flex w-full items-center">
        {/* ชื่อหน้าอยู่ซ้ายมือ และเปลี่ยนตามเส้นทาง */}
        <li className="mr-auto">
          <span className="text-yellow-500 text-6xl font-bold italic">{currentPage}</span>
        </li>

        {/* เมนูอื่น ๆ */}
        <div className="flex space-x-20 mr-8">
          {/* ลิงก์ไปที่หน้า Home */}
          <li>
            <Link className="text-yellow-500 text-3xl italic hover:font-bold hover:text-yellow-300  " href="/">
              Home 
            </Link>
          </li>
          <li>
            <Link className="text-yellow-500 text-3xl italic hover:font-bold hover:text-yellow-300" href="/products">
              Product 
            </Link>
          </li>
          <li>
            <Link className="text-yellow-500 text-3xl italic  hover:font-bold hover:text-yellow-300" href="/pre_order">
              Pre-order 
            </Link>
          </li>
          <li>
            <Link className="text-yellow-500 text-3xl italic  hover:font-bold hover:text-yellow-300" href="/contact">
              Contact 
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
