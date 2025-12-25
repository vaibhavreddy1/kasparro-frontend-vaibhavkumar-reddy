export default function Card({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded p-4 bg-white">
      {title && (
        <p className="text-sm text-gray-500 mb-2">{title}</p>
      )}
      {children}
    </div>
  );
}
