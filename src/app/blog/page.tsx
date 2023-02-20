import { Suspense } from "react";
import Loading from "./loading";

// const fetchFromNotion = async () => {
//   const res = await fetch("/api/notion");
//   const data = await res.json();
//   return JSON.parse(data);
// };

export default async function Blog() {
  // const rows: rowStructured = await fetchFromNotion();

  return (
    <div>
      <Suspense fallback={<Loading />}>
        {/* {rows.map((row) => {
          return (
            <div key={row.name}>
              <h1>{row.name}</h1>
              <p>{row.first_name}</p>
              <p>{row.url}</p>
            </div>
          );
        })} */}
      </Suspense>
    </div>
  );
}
