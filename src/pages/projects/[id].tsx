import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import projectsData from "../components/dummydata.json";

interface Project {
  id: number;
  start_date: string;
  project_title: string;
  description: string;
}

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails: NextPage<ProjectDetailsProps> = ({ project }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{project.project_title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectsData.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const project = projectsData.find((project) => project.id.toString() === id);

  return {
    props: {
      project,
    },
  };
};

export default ProjectDetails;
