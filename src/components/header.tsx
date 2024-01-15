"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/icons/Logo.png";
import Hamburger from "../../public/icons/Hamburger.png";
import Close from "../../public/icons/close.png";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const pathname = usePathname();
  const isCurrentPage = (href: string) => {
    const cleanHref = href.replace(/^\/+/g, ""); // href에서 앞에 오는 모든 '/' 제거
    const cleanPathname = pathname.replace(/^\/+/g, ""); // pathname에서 앞에 오는 모든 '/' 제거

    // 현재 페이지 pathname이 href와 정확히 일치하거나 href로 시작하는 경우 true를 반환
    return (
      cleanPathname === cleanHref || cleanPathname.startsWith(`${cleanHref}/`)
    );
  };
  const handleHamburgerClick = () => {
    setIsOpened(!isOpened);
  };

  const menuItem = [
    { index: 0, label: "Main", href: "/" },
    { index: 1, label: "Services", href: "/services" },
    { index: 2, label: "Help", href: "/help" },
  ];

  return (
    <nav className=" font-medium z-header fixed w-full top-0 bg-[#00000030] backdrop-blur-sm   px-28 py-12 tablet:px-64 flex items-center justify-between ">
      <div className="">
        <Image className="w-159 tablet:w-218 h-auto" src={Logo} alt="logo" />
      </div>

      <div className="hidden tablet:flex ">
        {menuItem.map((i) => (
          <div
            className={`${
              isCurrentPage(i.href) ? "text-white" : "text-[#b2b2b2]"
            } mr-10 hover:text-white font-medium text-18 transition-all flex w-120 h-47 items-center justify-center`}
            key={i.index}
          >
            <Link className="" href={i.href}>
              {i.label}
            </Link>
          </div>
        ))}
      </div>

      <div
        onClick={handleHamburgerClick}
        className='flex items-center justify-center tablet:hidden object-cover"
      '
      >
        <Image
          className={`${isOpened ? "hidden" : "flex"} hover:cursor-pointer `}
          src={Hamburger}
          alt="hamburger"
        />
        {isOpened && (
          <div className="fixed z-100 top-0 left-0 w-screen h-screen bg-[#00000060] ">
            <div className=" relative bg-emerald-500">
              <Image
                className="absolute top-18 right-28 hover:cursor-pointer "
                src={Close}
                alt="close"
              ></Image>
            </div>
            <div>
              <ul className="absolute top-60 right-16">
                {menuItem.map((i) => (
                  <li
                    className={`${
                      isCurrentPage(i.href) ? "" : ""
                    }  mr-10 mb-4 hover:opacity-90 text-black mobile-header text-14 transition-all w-71 h-26 p-4 bg-white text-center rounded-90  `}
                    key={i.index}
                  >
                    <Link href={i.href}>{i.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
