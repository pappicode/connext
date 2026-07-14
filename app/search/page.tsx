"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import PersonCard from "@/components/Personcard";

type Person = {
  id: number;
  name: string;
  title: string;
  organization: string;
  match: number;
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [results, setResults] = useState<Person[]>([]);

  useEffect(() => {
    async function search() {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      setResults(data.results);
    }

    search();
  }, [query]);

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white p-10">
      <h1 className="text-4xl font-bold">Search Results</h1>

      <p className="mt-6 text-gray-400">
        Searching for:{" "}
        <span className="text-blue-400">{query}</span>
      </p>

      <div className="mt-10 space-y-6">
        {results.map((person) => (
          <PersonCard
            key={person.id}
            name={person.name}
            title={person.title}
            organization={person.organization}
            match={person.match}
          />
        ))}
      </div>
    </main>
  );
}