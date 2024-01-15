import React from "react";
import Image from "next/image";
import poster from "../../../public/images/mainposter.png";
import mainMap from "../../../public/images/map.png";
import SEO from "@/components/SEO";

const Page = () => {
  return (
    <>
      <SEO />{" "}
      <div className="mt-110">
        <Image
          src={poster}
          className="mb-22 tablet:mb-80 w-358 h-477 object-contain tablet:w-[1147px] tablet:h-[1529px]"
          alt="poster"
          priority
        />
        <div>
          <div className="border-b-1 mb-23 tablet:mb-80 font-pretendard font-semibold pb-8 tablet:pb-26 tablet:text-30 text-9 ">
            부스 배치도
          </div>
          <Image
            src={mainMap}
            className="object-contain w-358 h-417 tablet:w-[1147px] tablet:h-[1529px] "
            alt="map"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Page;
