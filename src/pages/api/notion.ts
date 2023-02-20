// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

type Row = {
  first_name: { id: string; rich_text: { text: { content: string } }[] };
  link_to_youtube: { id: string; url: string };
  name: { id: string; title: { text: { content: string } }[] };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!notionSecret || !notionDatabaseId)
    throw new Error("notionSecret or DatabaseId 가 없어요!");
  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  });
  console.log(query);
  //@ts-ignore
  const rows = query.results.map((res) => res.properties) as Row[];
  // const test = query.results.map((res) => console.log(res));
  // test;
  const rowsStructured: rowStructured = rows.map((row) => ({
    name: row.name.title[0].text.content,
    first_name: row.first_name.rich_text?.[0].text.content,
    url: row.link_to_youtube.url,
  }));

  res.status(200).json(JSON.stringify(rowsStructured));
}
