import { Client, isFullPageOrDatabase } from "@notionhq/client";
import {
  type PageObjectResponse,
  type PartialPageObjectResponse,
  type QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { title } from "process";

export interface NotionPageData {
  pageId: string;
  title: string;
  tags: string[];
  data: string;
  url: string;
}

const notion = new Client({
  auth: process.env.NOTION_SECRET_TOKEN as string,
});
const databaseId = process.env.NOTION_DATABASE_ID as string;

export const fetchProjects = async () => {
  const data = [];
  try {
    const response: QueryDatabaseResponse = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: "Tags",
            multi_select: {
              does_not_contain: "draft",
            },
          },
        ],
      },
    });
    for (const page of response.results) {
      if (!isFullPageOrDatabase(page)) continue;
      console.log(typeof page);
    }
    return response.results;
  } catch (error) {
    console.log(error);
    return;
  }
};

// export const fetchPropety = async (page, pageId: string, propertyType: string) => {
//   const propertyId =
//   const pageTitle = await notion.pages.properties.retrieve({
//     page_id: pageId,
//     property_id: title,
//   });
//   return pageTitle
// };
