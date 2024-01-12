"use client";
import { NextSeo } from "next-seo";
import Main from "@/components/main/main";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <>
      {" "}
      <SEO />
      <div>
        <Main />
      </div>
    </>
  );
}
