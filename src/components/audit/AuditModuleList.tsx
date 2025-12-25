"use client";

import { AuditModule } from "@/lib/types";
import { useAppStore } from "@/store/useAppStore";

export default function AuditModuleList({
  modules,
}: {
  modules: AuditModule[];
}) {
  const { selectedModuleId, setModule } = useAppStore();

  return (
    <aside className="w-64 border-r bg-white p-4">
      {modules.map((m) => (
        <button
          key={m.id}
          onClick={() => setModule(m.id)}
          className={`w-full text-left p-2 rounded mb-1 text-sm ${
            selectedModuleId === m.id
              ? "bg-gray-200 text-gray-900"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {m.name}
        </button>
      ))}
    </aside>
  );
}
