import Image from "next/image";
import type { GetStaticProps, NextPage, GetServerSideProps } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { fetchProjects } from "@/utils/notion";

const inter = Inter({ subsets: ["latin"] });

interface Project {
  pageId: string;
  start_date: string;
  project_title: string;
  tags?: string[];
  url: string;
}

interface HomeProps {
  projects: Project[];
}

// export const getStaticProps: GetStaticProps<HomeProps> = async () => {
//   // JSONファイルをインポート（パスは適宜修正）
//   const projects: Project[] = await import("./components/dummydata.json").then(
//     (module) => module.default
//   );

//   return {
//     props: {
//       projects,
//     },
//   };
// };

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const results = await fetchProjects();
    const projects = results;
    console.log("result ", projects);
    return { props: { results } ? { results } : {} };
  } catch (error) {
    console.error(error);
    return { props: { results: undefined } };
  }
};

const Home: NextPage<HomeProps> = ({ projects }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <AboutMe />
        {/* <Projects projects={projects} /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
