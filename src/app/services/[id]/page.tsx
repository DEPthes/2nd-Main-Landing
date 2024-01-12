"use client";
import SEO from "@/components/SEO";
import UpBtn from "@/components/upBtn";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import Service1Detail from "../../../../public/images/service1Detail.png";
import Service2Detail from "../../../../public/images/service2Detail.png";
import Service3Detail from "../../../../public/images/service3Detail.png";

const serviceDetails = [
  { id: 1, img: <Image src={Service1Detail} alt="Service1Detail" /> },
  { id: 2, img: <Image src={Service2Detail} alt="Service2Detail" /> },
  { id: 3, img: <Image src={Service3Detail} alt="Service3Detail" /> },
];
const Page = () => {
  const { id: pathId } = useParams();
  const id = Number(pathId);
  const service = serviceDetails.find((i) => i.id === id);
  console.log(service);
  return (
    <>
      {" "}
      <SEO />{" "}
      <div className="mt-110">
        <div className="px-16 tablet:px-0">{service?.img}</div>
        <UpBtn />
      </div>
    </>
  );
};

export default Page;
