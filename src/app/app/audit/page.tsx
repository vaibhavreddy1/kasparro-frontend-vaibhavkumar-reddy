"use client";

import React from "react";
import rawModules from "@/data/audit-modules.json";
import { AuditModule } from "@/lib/types";
import { useAppStore } from "@/store/useAppStore";

/**
 * Explicitly type mocked audit modules
 * Removes implicit `any`
 */
const modules = rawModules as AuditModule[];

export default function AuditPage() {
  const { selectedModuleId, setModule } = useAppStore();

  /**
   * Resolve selected module from typed data
   */
  const selected = modules.find((m) => m.id === selectedModuleId);

  if (!selected) {
    throw new Error("Selected audit module not found");
  }

  return (
    <div className="flex h-full">
      {/* LEFT SIDEBAR */}
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

      {/* MAIN PANEL */}
      <main className="flex-1 p-6 space-y-6 bg-gray-50 text-gray-900">
        <h1 className="text-2xl font-semibold">{selected.name}</h1>
        <p className="text-lg">Score: {selected.score}</p>

        <Section title="Insights" items={selected.insights} />
        <Section title="Issues" items={selected.issues} />
        <Section title="Recommendations" items={selected.recommendations} />
      </main>
    </div>
  );
}

/**
 * UI helper – purely presentational
 */
function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="font-semibold mb-1">{title}</h2>

      {items.length === 0 ? (
        <p className="text-sm text-gray-500">No issues</p>
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
