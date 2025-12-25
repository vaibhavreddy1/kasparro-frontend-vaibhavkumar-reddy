export default function ArchitecturePage() {
  return (
    <div className="p-6 space-y-8 max-w-4xl">
      <h1 className="text-2xl font-semibold">Kasparro System Architecture</h1>

      <Block
        title="Input Assembler"
        description="Collects brand data, website content, and AI-generated responses."
      />

      <Block
        title="Context Pack"
        description="Normalizes entities, trust signals, and contextual brand data."
      />

      <Block
        title="Audit Modules"
        description="Runs specialized AI-SEO evaluations across multiple dimensions."
      />

      <Block
        title="Output Surfaces"
        description="Dashboards, recommendations, and actionable insights."
      />
    </div>
  );
}

function Block({ title, description }: { title: string; description: string }) {
  return (
    <div className="border rounded p-4 bg-white">
      <h2 className="font-semibold">{title}</h2>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
}
