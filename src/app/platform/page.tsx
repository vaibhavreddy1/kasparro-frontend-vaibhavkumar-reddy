export default function PlatformPage() {
  return (
    <main className="px-8 py-16 space-y-16 max-w-5xl">
      <h1 className="text-4xl font-bold">
        Kasparro Platform Overview
      </h1>

      {/* PIPELINE */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Audit Pipeline
        </h2>
        <p className="text-gray-600">
          Input → AI Analysis → Structured Outputs
        </p>
      </section>

      {/* INPUTS */}
      <section>
        <h2 className="text-xl font-semibold">Data Inputs</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Website content</li>
          <li>Brand entities</li>
          <li>Public citations</li>
          <li>AI-generated answers</li>
        </ul>
      </section>

      {/* OUTPUTS */}
      <section>
        <h2 className="text-xl font-semibold">Outputs</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>AI visibility score</li>
          <li>Trust & EEAT signals</li>
          <li>Actionable recommendations</li>
        </ul>
      </section>

      {/* DIFFERENCE */}
      <section>
        <h2 className="text-xl font-semibold">
          How This Differs from Traditional SEO
        </h2>
        <p className="text-gray-600">
          Kasparro is built for AI reasoning systems, not keyword rankings.
        </p>
      </section>
    </main>
  );
}
