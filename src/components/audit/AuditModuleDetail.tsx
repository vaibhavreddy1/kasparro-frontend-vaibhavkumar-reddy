type AuditModule = {
  id: string;
  name: string;
  score: number;
  insights: string[];
  issues: string[];
  recommendations: string[];
};

import Section from "../ui/Section";
import AuditScore from "@/components/audit/AuditScore";


export default function AuditModuleDetail({ module }: { module: AuditModule }) {
  return (
    <main className="flex-1 p-6 space-y-6 bg-gray-50 text-gray-900">

      <h1 className="text-2xl font-semibold">{module.name}</h1>

      <AuditScore score={module.score} />

      <Section title="Insights" items={module.insights} />
      <Section title="Issues" items={module.issues} />
      <Section title="Recommendations" items={module.recommendations} />
    </main>
  );
}
