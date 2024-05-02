import { Client, isFullPageOrDatabase } from "@notionhq/client";
import {
  type PageObjectResponse,
  type PartialPageObjectResponse,
  type QueryDatabaseResponse,
  type RichTextItemResponse,
  type MentionRichTextItemResponse,
  type SelectPropertyResponse
} from "@notionhq/client/build/src/api-endpoints";

export interface NotionPageList {
  pageId: string;
  title: RichTextItemResponse['plain_text'];
  tags: string[];
  url: string;
}

const notion = new Client({
  auth: process.env.NOTION_SECRET_TOKEN as string,
});
const databaseId = process.env.NOTION_DATABASE_ID as string;

export const fetchProjects = async () => {
  let cursor: string | undefined;
  let hasMore = false;
  const data = []

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
      data.push({
        pageId: page.id,
        title: fetchPropety(page, title)
      })
      })

      
    }
    return response.results;
  } catch (error) {
    console.log(error);
    return;
  }
};

//必要なプロパティを取得するフィルタリング

function fetchPropety(
  page: PageObjectResponse,
  propertyType: string
){
  while(isFullPageOrDatabase(page)){
    
    }
  }
};

