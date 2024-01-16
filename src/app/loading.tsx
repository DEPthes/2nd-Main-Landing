import React from "react";
import Basketball from "../../public/images/basketball.png";
import Image from "next/image";

const loading = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen font-bold">
      <Image
        src={Basketball}
        alt="loading basketball"
        className="tablet:w-390 tablet:h-390 w-162 h-162 "
      />
      loading...
    </div>
  );
};

export default loading;
