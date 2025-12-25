// Brand related
export interface Brand {
  id: string;
  name: string;
  domain: string;
}

// Dashboard snapshot
export interface DashboardSnapshot {
  aiVisibilityScore: number;
  eeatScore: number;
  nonBrandedCoverage: number;
  lastAuditAt: string;
}

// Audit module
export interface AuditModule {
  id: string;
  name: string;
  score: number;
  insights: string[];
  issues: string[];
  recommendations: string[];
}
