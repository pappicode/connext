export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">
        Search Results
      </h1>

      <p className="mt-6 text-gray-400">
        Searching for
      </p>

      <h2 className="mt-2 text-3xl font-semibold text-blue-400">
        {params.q}
      </h2>
    </main>
  );
}