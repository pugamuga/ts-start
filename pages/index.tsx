import Head from "next/head";
import Image from "next/image";
import testImage from "../assets/test.jpg";

export default function Home(): JSX.Element {
  return (
    <div className=" bg-gradient-to-tr from-violet-400 to-pink-500 w-screen h-[4000px] flex flex-col items-center">
      <div
        className="bg-black/50 h-20 backdrop-blur-md 
      right-1/2 translate-x-1/2 w-[600px] rounded-[30px] fixed z-10 top-5
      flex items-center justify-between px-12 ring-[1px] ring-white/10"
      >
        <p className=" text-white font-extrabold">Some Text</p>
        <p className=" text-white font-extrabold">Some Text</p>
        <p className=" text-white font-extrabold">Some Text</p>
      </div>

      {[1, 2, 3, 4, 5, 6].map((i) => {
        return (
          <div className=" mix-blend-screen relative h-40 w-40 bg-white/50 rounded-full my-14 flex justify-center items-center text-5xl font-extrabold">
            <h1 className="mb-2 text-black">{i}</h1>
            <div className="h-12 w-12 absolute ring-8 ring-black rounded-full"></div>
            <div className="h-20 w-20 absolute ring-[20px] ring-black rounded-md rotate-45 "></div>
          </div>
        );
      })}
      <div style={{ backgroundImage: url("../assets/test.jpg")}} className="w-12 h-12" />
    </div>
  );
}
