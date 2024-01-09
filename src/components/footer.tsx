"use client";

import Link from "next/link";
import React from "react";
import MainLogo from "../../public/icons/mainLogo.svg";
import Mail from "../../public/icons/mail.svg";
import Instagram from "../../public/icons/Instagram.svg";
import Depth from "../../public/icons/DEPth.svg";

const Footer = () => {
  return (
    <div className="bg-[#00000030] font-pretendard font-regular  w-full py-24 px-12 box-border tablet:p-64">
      <div>
        <MainLogo className=" object-contain" />
      </div>

      <div className="tablet:mt-32 mt-10 flex items-center">
        <Link
          className="flex flex-col tablet:flex-row items-start mr-13 tablet:mr-50"
          href="https://www.instagram.com/depth_mju.co.kr/?igshid=YmMyMTA2M2Y%3D"
          target="_blank"
        >
          <Instagram />
          <div className="tablet:ml-3 tablet:text-12 text-[10.5px]">
            depth_mju.co.kr
          </div>
        </Link>
        <div className="flex flex-col tablet:flex-row items-start mr-13 tablet:mr-50 ">
          <Mail />
          <div className="tablet:ml-3 tablet:text-12 text-[10.5px]">
            2022depth@gmail.com
          </div>
        </div>
        <Link
          className="flex flex-col  tablet:flex-row items-start tablet:items-center "
          href="https://depth-mju.co.kr/"
          target="_blank"
        >
          <Depth width="41" height="13" />
          <div className="tablet:ml-3 tablet:text-12 text-10 ">
            뎁스 홈페이지
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
