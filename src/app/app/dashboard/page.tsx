import brands from "@/data/brands.json";
import dashboard from "@/dashboard.json";

export default function DashboardPage() {
  const brand = brands.find((b) => b.id === dashboard.brand.id);
  const snapshot = dashboard.snapshot; // { aiVisibility, eet, nonBrandedCoverage, lastAudit }

  return (
    <div className="p-6 space-y-6">
      {/* Brand selector */}
      <div>
        <p className="text-sm text-gray-500">Brand</p>
        <p className="text-lg font-semibold">{brand?.name}</p>
      </div>

      {/* Snapshot cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Metric title="AI Visibility" value={snapshot.aiVisibility} />
        <Metric title="Trust / EEAT" value={snapshot.eeat} />
        <Metric
          title="Non-Branded Coverage"
          value={`${snapshot.nonBrandedCoverage}%`}
        />
        <Metric
          title="Last Audit"
          value={new Date(snapshot.lastAudit).toLocaleDateString()}
        />
      </div>
    </div>
  );
}

function Metric({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="border rounded p-4 bg-white">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}
