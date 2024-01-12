import React, { Suspense } from "react";

import ServiceInfo from "@/components/services/serviceInfo";
import SEO from "@/components/SEO";

const page = () => {
  return (
    <>
      {" "}
      <SEO />{" "}
      <div className="mt-110">
        <ServiceInfo />
      </div>
    </>
  );
};

export default page;
