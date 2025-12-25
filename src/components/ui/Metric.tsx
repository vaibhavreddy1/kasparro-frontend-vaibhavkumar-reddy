export default function Metric({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="border rounded p-4 bg-white">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}
