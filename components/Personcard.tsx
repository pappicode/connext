type PersonCardProps = {
  name: string;
  title: string;
  organization: string;
  match: number;
};

export default function PersonCard({
  name,
  title,
  organization,
  match,
}: PersonCardProps) {
  return (
    <div className="rounded-2xl border border-gray-700 bg-[#14141A] p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-400">{title}</p>
          <p className="text-gray-500">{organization}</p>
        </div>

        <div className="rounded-full bg-blue-600 px-4 py-2 text-white font-semibold">
          {match}% Match
        </div>
      </div>

      <button className="mt-6 w-full rounded-xl bg-white py-3 text-black font-semibold hover:bg-gray-200">
        View Profile
      </button>
    </div>
  );
}