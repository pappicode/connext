import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-3xl text-center">
        <Hero />
        <SearchBar />
      </div>
    </main>
  );
}