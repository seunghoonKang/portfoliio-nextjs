import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
import { fetchFromNotion } from "./route";

export default async function Projects() {
  const rows = await fetchFromNotion();

  return (
    <div>
      <Suspense fallback={<Loading />}>
        {rows.map((row) => {
          return (
            <>
              <div key={row.id} className="flex">
                {/* <h1>{row.name}</h1> */}
                {/* <p>{row.image.file.url}</p> */}
                <Image
                  src={row.image?.file.url}
                  alt="image"
                  width={300}
                  height={300}
                  priority
                  style={{ width: "auto", height: "auto" }}
                />
                {/* <Link href={row.image.file.url}>d</Link> */}
              </div>
            </>
          );
        })}
      </Suspense>
    </div>
  );
}
