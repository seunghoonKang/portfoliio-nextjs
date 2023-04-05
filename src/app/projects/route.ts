import { Client } from "@notionhq/client";
import { NOTION_SECRET, NOTION_DATABASE_ID } from "@/config";

export const fetchFromNotion = async () => {
  const notionSecret = NOTION_SECRET;
  const notionDatabaseId = NOTION_DATABASE_ID;
  const notion = new Client({ auth: notionSecret });

  // const response = await notion.databases.query({
  //   database_id: <string>notionDatabaseId,
  // });
  //@ts-ignore
  // response.results.map((res) => console.log(res.properties));
  //@ts-ignore
  //const rows = response.results.map((res) => res.properties) as Row[];
  // console.log(rows);
  //rows.map((row) => console.log(row));
  // const rowsStructured: rowStructured = rows.map((row) => ({
  //   name: row.name.title[0].text.content,
  //   first_name: row.first_name.rich_text?.[0].text.content,
  //   url: row.link_to_youtube.url,
  // }));

  // return rowsStructured;

  const pageId = "25540b6f-bb13-477f-b20a-bb85f47bae74";
  const propertyId = "%3B%3D%3E%5D";
  const response = await notion.blocks.retrieve({
    block_id: pageId,
  });
  const blockChildData = await notion.blocks.children.list({
    block_id: pageId,
  });
  return blockChildData.results.map((res) => res);
};
