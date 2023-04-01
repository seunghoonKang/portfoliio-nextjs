const { Client } = require("@notionhq/client");

export const fetchFromNotion = async () => {
  const notionSecret = process.env.NOTION_SECRET;
  const notionDatabaseId = process.env.NOTION_DATABASE_ID;
  const notion = new Client({ auth: notionSecret });

  const response = await notion.databases.query({
    database_id: notionDatabaseId,
  });
  //@ts-ignore
  const rows = response.results.map((res) => res.properties) as Row[];
  // const test = query.results.map((res) => console.log(res));
  const rowsStructured: rowStructured = rows.map((row) => ({
    name: row.name.title[0].text.content,
    first_name: row.first_name.rich_text?.[0].text.content,
    url: row.link_to_youtube.url,
  }));
  return rowsStructured;
};
