import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Htag from "../components/Htag";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Htag tag="h1">Some text</Htag>
      <Htag tag="h2">Some text</Htag>
      <Htag tag="h3">Some text</Htag>
    </div>
  );
};

export default Home;
