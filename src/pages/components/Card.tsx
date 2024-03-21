import { FC } from "react";
import Link from "next/link";

interface CardProps {
  id: number;
  project_title: string;
  start_date: string;
  description: string;
}

const Card: FC<CardProps> = ({
  id,
  project_title,
  start_date,
  description,
}) => {
  return (
    <Link
      href={`/projects/${id}`}
      className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4"
    >
      <div className="font-bold text-xl mb-2">{project_title}</div>
      <p>{start_date}</p>
      <p className="text-gray-700 text-base">{description}</p>
    </Link>
  );
};

export default Card;
