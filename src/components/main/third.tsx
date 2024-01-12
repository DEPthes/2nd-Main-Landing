import Image from "next/image";
import React from "react";
import mainLogo from "../../../public/images/mainLogo.png";

const Third = () => {
  return (
    <div className="font-pretendard  flex flex-col tablet:flex-row-reverse items-center justify-center text-center  px-16">
      <Image
        className=" w-[162px] h-[162px] tablet:w-[394px] tablet:h-[394px] mb-24"
        src={mainLogo}
        alt="mainLogo"
      />
      <div>
        <div className="text-20 tablet:text-[45px] font-semibold mb-27">
          긴 여정의 끝, Main Project
        </div>
        <div className="whitespace-nowrap text-[10.5px] tablet:text-20  ">
          약 3개월 간, 기획•개발•디자인 파트의 협업으로 세 가지 서비스를
          탄생시켰습니다. <br />
          회원들의 결실물을 체험할 수 있는 부스와 서비스 발표 및 시상식이
          진행됩니다. <br /> 이외에도 다양한 컨텐츠와 이벤트가 준비되어 있으니{" "}
          <br />
          DEPth의 첫 Main Project Demo Day, 많은 관심과 참여 부탁드립니다.
        </div>
      </div>
    </div>
  );
};

export default Third;
