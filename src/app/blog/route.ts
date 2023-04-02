import { Client } from "@notionhq/client";
import { NOTION_SECRET, NOTION_DATABASE_ID } from "@/config";
export const fetchFromNotion = async () => {
  const notionSecret = NOTION_SECRET;
  const notionDatabaseId = NOTION_DATABASE_ID;
  const notion = new Client({ auth: notionSecret });

  const response = await notion.databases.query({
    database_id: <string>notionDatabaseId,
  });
  //@ts-ignore
  const rows = response.results.map((res) => res.properties) as Row[];

  const rowsStructured: rowStructured = rows.map((row) => ({
    name: row.name.title[0].text.content,
    first_name: row.first_name.rich_text?.[0].text.content,
    url: row.link_to_youtube.url,
  }));

  return rowsStructured;
};
