import React from "react";
import DEPthSlogan from "../../../public/images/mainDEPthSlogan.png";
import Image from "next/image";

const second2 = () => {
  return (
    <div className=" text-12 tablet:text-30 px-16">
      <div className="mt-100 tablet:mt-200 flex flex-col items-end text-right ">
        <Image
          className="w-238 h-70 tablet:w-[433px] tablet:h-auto object-cover"
          src={DEPthSlogan}
          alt="depthslogan"
        />
        <div className="mt-18 tablet:font-30 font-semibold ">
          ‘Do Evolve Potential in-DEPth’
        </div>
        <div className="font-thin pb-20">
          라는 슬로건을 가지고 <br />
          회원들이 DEPth 내의 스터디 및 협업 프로젝트 활동을 통해
          <br /> 실천하고, 성장하고, 잠재력을 펼칠 수 있도록 <br />
          길을 제시하는 것을 목표로 운영되고 있습니다
        </div>
        <div className=" border-b-1 w-[227px] tablet:w-[540px]" />
      </div>
    </div>
  );
};

export default second2;
