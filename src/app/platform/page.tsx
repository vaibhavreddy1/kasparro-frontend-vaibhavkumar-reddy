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

        {/* ✅ ADDED: pipeline example */}
        <p className="text-sm text-gray-600 max-w-xl">
          Example: A brand submits its website and public mentions. Kasparro
          analyzes how that brand appears in AI-generated answers for
          non-branded queries like “best HR software” or “top cloud security
          platforms.”
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

        {/* ✅ ADDED: input example */}
        <p className="text-sm text-gray-600 mt-3 max-w-xl">
          For example, Kasparro evaluates whether your product pages, blog
          content, and third-party mentions are actually used by AI systems
          when generating answers.
        </p>
      </section>

      {/* OUTPUTS */}
      <section>
        <h2 className="text-xl font-semibold">Outputs</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>AI visibility score</li>
          <li>Trust & EEAT signals</li>
          <li>Actionable recommendations</li>
        </ul>

        {/* ✅ ADDED: output example */}
        <p className="text-sm text-gray-600 mt-3 max-w-xl">
          Instead of just showing rankings, Kasparro highlights why a competitor
          is cited in AI answers and what specific content or authority signals
          your brand is missing.
        </p>
      </section>

      {/* DIFFERENCE */}
      <section>
        <h2 className="text-xl font-semibold">
          How This Differs from Traditional SEO
        </h2>
        <p className="text-gray-600">
          Kasparro is built for AI reasoning systems, not keyword rankings.
        </p>

        {/* ✅ ADDED: side-by-side mental model */}
        <div className="mt-3 text-sm text-gray-600 max-w-xl space-y-2">
          <p>
            Traditional SEO tools may tell you that a page ranks well for a
            keyword.
          </p>
          <p>
            Kasparro tells you whether your brand is actually cited, trusted, or
            ignored when AI systems generate answers for that topic.
          </p>
        </div>
      </section>
    </main>
  );
}
