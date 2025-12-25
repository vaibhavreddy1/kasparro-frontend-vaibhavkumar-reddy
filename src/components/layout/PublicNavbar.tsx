import Link from "next/link";

export default function PublicNavbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      <div className="text-xl font-bold">Kasparro</div>

      <div className="space-x-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/platform">Platform</Link>
        <Link href="/about">About</Link>
        <Link
          href="/app/audit"
          className="px-4 py-2 bg-black text-white rounded"
        >
          Run Audit
        </Link>
      </div>
    </nav>
  );
}
