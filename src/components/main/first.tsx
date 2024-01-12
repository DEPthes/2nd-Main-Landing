import Image from "next/image";
import React from "react";
import mainAnimation from "../../../public/images/landingMainAnimation.gif";

const First = () => {
  return (
    <div className=" tablet:min-h-screen w-full">
      <Image
        className="relative w-full left-0 top-0 right-0"
        src={mainAnimation}
        alt="mainAnimation"
        priority
      />
    </div>
  );
};

export default First;
