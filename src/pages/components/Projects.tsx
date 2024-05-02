import type { NextPage } from "next";
import Card from "./Card";

interface Project {
  pageId: string;
  date: string;
  project_title: string;
}

interface ProjectProps {
  projects: Project[];
}

const Projects: NextPage<ProjectProps> = ({ projects }) => {
  return (
    <div className="container">
      <h1>Projects</h1>
      {projects?.map((project) => (
        <Card
          key={`card-${project.pageId}`}
          project_title={project.project_title}
          start_date={project.date}
        />
      ))}
    </div>
  );
};

export default Projects;
