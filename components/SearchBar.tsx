"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const json = await res.json();
      if (!cancelled) setData(json);
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [query]);

  console.log(data);

  const router = useRouter();
  const handleSearch = () => {
  if (!query.trim()) return;

  router.push(`/search?q=${encodeURIComponent(query)}`);
};

  return (
    <div className="mt-10 flex gap-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="e.g. AI professors working on LLMs in Europe"
        className="flex-1 rounded-2xl bg-[#1A1A22] border border-gray-700 p-5 outline-none"
      />

      <button
        onClick={handleSearch}
        className="rounded-2xl bg-blue-600 px-8 hover:bg-blue-500 transition"
      >
        Search
      </button>
    </div>
  );
}
