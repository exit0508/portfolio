import { FC } from "react";
import Link from "next/link";

interface CardProps {
  pageId: string;
  project_title: string;
  start_date: string;
}

const Card: FC<CardProps> = ({ pageId, project_title, start_date }) => {
  return (
    <Link
      href={`/projects/${pageId}`}
      className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4"
    >
      <div className="font-bold text-xl mb-2">{project_title}</div>
      <p>{start_date}</p>
    </Link>
  );
};

export default Card;
