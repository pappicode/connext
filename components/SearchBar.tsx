"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
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