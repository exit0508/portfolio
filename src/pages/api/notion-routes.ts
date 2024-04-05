import { fetchProjects } from "@/utils/notion";
import type { NextApiRequest, NextApiResponse } from "next";
import { NotionPageData } from "@/utils/notion";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const response = await fetchProjects();
    if (response) {
      const data = JSON.stringify(response);
      return res.status(200).json(data);
    } else {
      console.log("response is undefined");
      res.status(404).json({ error: "Requested resource not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
