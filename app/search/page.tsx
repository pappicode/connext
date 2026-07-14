import PersonCard from "@/components/Personcard";
export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
  <main className="min-h-screen bg-[#0B0B0F] text-white p-10">
    <h1 className="text-4xl font-bold">Search Results</h1>

    <p className="mt-6 text-gray-400">
      Searching for: <span className="text-blue-400">{q}</span>
    </p>

    <div className="mt-8">
      <PersonCard
        name="Andrew Ng"
        title="Professor"
        organization="Stanford University"
        match={98}
      />
    </div>
  </main>
);
}