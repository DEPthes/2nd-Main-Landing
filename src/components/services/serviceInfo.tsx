"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Service1Logo from "../../../public/images/service1Logo.png";
import Service2Logo from "../../../public/images/service2Logo.png";
import Service3Logo from "../../../public/images/service3Logo.png";

export const servicesInfo = [
  {
    id: 1,
    Logo: (
      <Image
        className="w-204 h-204 tablet:w-360 tablet:h-360 object-cover"
        src={Service1Logo}
        alt="Service1Logo"
      />
    ),
  },
  {
    id: 2,
    Logo: (
      <Image
        className="w-204 h-204 tablet:w-360 tablet:h-360 object-cover"
        src={Service2Logo}
        alt="Service2Logo"
      />
    ),
  },
  {
    id: 3,
    Logo: (
      <Image
        className="w-204 h-204 tablet:w-360 tablet:h-360 object-cover"
        src={Service3Logo}
        alt="Service3Logo"
      />
    ),
  },
];

const serviceInfo = () => {
  return (
    <ul className="flex flex-col tablet:flex tablet:flex-row justify-center items-center tablet:mt-142 tablet:px-65">
      {servicesInfo.map((i) => (
        <li
          className="tablet:px-17 mb-25 tablet:mb-0 hover:scale-[1.1] object-cover box-border transition-transform duration-300"
          key={i.id}
        >
          <Link href={`/services/${i.id}`}>{i.Logo}</Link>
        </li>
      ))}
    </ul>
  );
};

export default serviceInfo;
