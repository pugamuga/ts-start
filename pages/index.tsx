import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Puga Muga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" text-red-500 font-extrabold">Test</div>
    </div>
  );
};

export default Home;
