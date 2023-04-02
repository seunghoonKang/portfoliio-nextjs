import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
import { fetchFromNotion } from "./route";

export default async function Blog() {
  const rows = await fetchFromNotion();
  return (
    <div>
      <Suspense fallback={<Loading />}>
        {rows.map((row) => {
          return (
            <div key={row.name} className="flex">
              <h1>{row.name}</h1>
              <p>{row.first_name}</p>
              <Link href={row.url}>{row.url}</Link>
            </div>
          );
        })}
      </Suspense>
    </div>
  );
}
