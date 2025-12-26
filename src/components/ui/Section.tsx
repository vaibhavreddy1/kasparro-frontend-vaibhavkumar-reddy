export default function Section({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h2 className="font-semibold mb-1">{title}</h2>

      {items.length === 0 ? (
        <p className="text-sm text-gray-500 italic">
  No issues detected
</p>

      ) : (
        <ul className="list-disc pl-5 text-sm space-y-1">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
