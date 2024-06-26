import type { NextPage } from "next";
import Card from "./Card";

interface Project {
  id: number;
  start_date: string;
  project_title: string;
  description: string;
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
          key={`card-${project.id}`}
          id={project.id}
          project_title={project.project_title}
          start_date={project.start_date}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default Projects;
