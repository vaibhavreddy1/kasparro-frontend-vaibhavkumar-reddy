export default function AuditScore({ score }: { score: number }) {
  return (
    <div className="border rounded p-4 bg-white w-fit">
      <p className="text-sm text-gray-500">Score</p>
      <p className="text-3xl font-semibold mt-1">{score}</p>
    </div>
  );
}
