import rawBrands from "@/data/brands.json";
import rawDashboard from "@/data/dashboard.json";

import { Brand, DashboardSnapshot } from "@/lib/types";

/**
 * Explicitly type mocked JSON data
 * This removes implicit `any` and enforces schema correctness
 */
const brands = rawBrands as Brand[];

const dashboard = rawDashboard as  {
  brandId: string;
  snapshot: DashboardSnapshot;
};

export default function DashboardPage() {
  /**
   * Resolve selected brand from mocked data
   * Enforce existence instead of optional chaining
   */
  const brand = brands.find((b) => b.id === dashboard.brandId);

  if (!brand) {
    throw new Error("Brand not found for dashboard snapshot");
  }

  const snapshot = dashboard.snapshot;

  return (
    <div className="p-6 space-y-6">
      {/* Brand selector (mocked) */}
      <div>
        <p className="text-sm text-gray-500">Brand</p>
        <p className="text-lg font-semibold">{brand.name}</p>
      </div>

      {/* Snapshot cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Metric title="AI Visibility" value={snapshot.aiVisibilityScore} />
        <Metric title="Trust / EEAT" value={snapshot.eeatScore} />
        <Metric
          title="Non-Branded Coverage"
          value={`${snapshot.nonBrandedCoverage}%`}
        />
        <Metric
          title="Last Audit"
          value={new Date(snapshot.lastAuditAt).toLocaleDateString()}
        />
      </div>
    </div>
  );
}

/**
 * UI primitive – purely presentational
 */
function Metric({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="border rounded p-4 bg-white">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}
