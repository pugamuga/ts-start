import * as React from "react";

interface HtagProps {
  tag: "h1" | "h2" | "h3";
  children: React.ReactNode;
}

export default function Htag({tag, children}:HtagProps): JSX.Element {
  return <>
  {tag =="h1"&&<h1 className=" text-[26px] leading-[35px] font-[500] text-primaryBlack">{children}</h1>}
  {tag =="h2"&&<h1 className=" text-[22px] leading-[30px] font-[500] text-primaryBlack">{children}</h1>}
  {tag =="h3"&&<h1 className=" text-[20px] leading-[27px] font-[600] text-primaryBlack">{children}</h1>}
  </>
}
