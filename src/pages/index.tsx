import Image from "next/image";
import type { GetStaticProps, NextPage } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

const inter = Inter({ subsets: ["latin"] });

interface Project {
  id: number;
  start_date: string;
  project_title: string;
  description: string;
}

interface HomeProps {
  projects: Project[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // JSONファイルをインポート（パスは適宜修正）
  const projects: Project[] = await import("./components/dummydata.json").then(
    (module) => module.default
  );

  return {
    props: {
      projects,
    },
  };
};

const Home: NextPage<HomeProps> = ({ projects }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <AboutMe />
        <Projects projects={projects} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
