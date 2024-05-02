import type { NextPage } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { fetchProjects } from "@/utils/notion";

const About: NextPage = () => {
  return (
    <div >
      <Header />
      <h1 className="font-bold text-[28px] md:text-[36px] lg:text-[42px] py-3">
        Yurina Deguchi
      </h1>
    </div>
  );
};

export default About;
