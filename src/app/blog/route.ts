export const fetchFromNotion = async () => {
  const res = await fetch(
    "https://portfolio-seunghoonkang.vercel.app/api/notion"
  );
  if (!res.ok) {
    const res = await fetch("http://localhost:3000/api/notion");
    const data = await res.json();
    return JSON.parse(data);
  }
  const data = await res.json();
  return JSON.parse(data);
};
