import Link from "next/link";

export default function AppSidebar() {
  return (
    <aside className="w-56 border-r bg-white p-4 text-sm text-gray-900">

      <p className="font-semibold mb-4">Kasparro</p>

      <nav className="space-y-2">
  <a href="/app/dashboard" className="block text-gray-700 hover:text-black">
    Dashboard
  </a>
  <a href="/app/audit" className="block text-gray-700 hover:text-black">
    Audit
  </a>
  <a href="/app/architecture" className="block text-gray-700 hover:text-black">
    Architecture
  </a>
</nav>

    </aside>
  );
}
