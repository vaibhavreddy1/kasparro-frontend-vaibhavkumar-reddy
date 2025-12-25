"use client";

import modules from "@/app/data/audit-modules.json";
import { AuditModule } from "@/lib/types";
import { useAppStore } from "@/store/useAppStore";

export default function AuditPage() {
  const { selectedModuleId, setModule } = useAppStore();

  const modulesData = modules as AuditModule[];
  const selected = modulesData.find((m) => m.id === selectedModuleId);

  return (
    <div className="flex h-full">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 border-r bg-white p-4">
        {modulesData.map((m) => (
          <button
            key={m.id}
            onClick={() => setModule(m.id)}
            className={`block w-full text-left p-2 rounded mb-1 ${
              selectedModuleId === m.id ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
          >
            {m.name}
          </button>
        ))}
      </aside>

      {/* MAIN PANEL */}
      <main className="flex-1 p-6 space-y-4">
        {selected && (
          <>
            <h1 className="text-2xl font-semibold">{selected.name}</h1>
            <p>Score: {selected.score}</p>

            <Section title="Insights" items={selected.insights} />
            <Section title="Issues" items={selected.issues} />
            <Section title="Recommendations" items={selected.recommendations} />
          </>
        )}
      </main>
    </div>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="font-semibold">{title}</h2>
      {items.length === 0 ? (
        <p className="text-sm text-gray-500">No issues</p>
      ) : (
        <ul className="list-disc pl-5 text-sm">
          {items.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
