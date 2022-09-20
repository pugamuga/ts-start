import Head from "next/head";
import Image from "next/image";
import testImage from "../assets/test.jpg";
import NavBar from "../components/NavBar";

export default function Home(): JSX.Element {
  return (
    <div className=" bg-gradient-to-tr from-violet-400 to-pink-500 w-screen h-[4000px] flex flex-col items-center">
      <div className="fixed z-10 top-5 right-1/2 translate-x-1/2 ">
        <NavBar/>
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
      <div className="w-12 h-12" />
    </div>
  );
}
