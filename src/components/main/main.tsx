"use client";
import React, { useRef } from "react";
import First from "./first";
import Second from "./second";
import Second2 from "./second2";
import Third from "./third";

import { useIsVisible } from "./useIsVisible";

const Main = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);

  return (
    <div style={{ height: "fit-content", overflow: "hidden" }}>
      <div
        ref={ref1}
        className={`transition-opacity ease-in duration-700 ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <First />
      </div>
      <div
        ref={ref2}
        className={`my-50 tablet:my-[250px] ${
          isVisible2
            ? "animate-fade-right animate-once animate-ease-in-out"
            : "opacity-0"
        }`}
        style={{
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Second />
      </div>
      <div
        ref={ref3}
        className={` ${
          isVisible3
            ? "animate-fade-left animate-once animate-ease-in-out"
            : "opacity-0"
        }`}
        style={{
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Second2 />
      </div>
      <div
        ref={ref4}
        className={`  my-[280px]  ${
          isVisible4 ? "animate-fade-up animate-ease-in-out" : "opacity-0"
        }`}
        style={{
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Third />
      </div>
    </div>
  );
};

export default Main;
