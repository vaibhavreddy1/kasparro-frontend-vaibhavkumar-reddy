import { CORE_MODULES } from "@/lib/constants";

export default function HomePage() {
  return (
    <main className="px-8 py-16 space-y-24">
      {/* HERO */}
      <section className="max-w-3xl space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          Understand How AI Sees Your Brand
        </h1>

        <p className="text-lg text-gray-600">
          Kasparro helps brands measure and improve their visibility across
          AI-first search platforms like ChatGPT, Gemini, and Perplexity.
        </p>

        <a
          href="/app/audit"
          className="inline-block px-6 py-3 bg-black text-white rounded"
        >
          Run AI-SEO Audit
        </a>
      </section>
      {/* WHY AI-SEO */}
      <section className="max-w-4xl space-y-4">
        <h2 className="text-2xl font-semibold">Why AI-SEO is Different</h2>

        <p className="text-gray-600">
          Traditional SEO optimizes for blue links. AI-SEO optimizes for how
          large language models interpret, trust, and cite your brand.
        </p>

        <ul className="list-disc pl-6 text-gray-600">
          <li>AI answers replace ranked links</li>
          <li>Entity trust matters more than keywords</li>
          <li>Brand context is continuously re-evaluated</li>
        </ul>
      </section>
      {/* CORE MODULES */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Core Audit Modules</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {CORE_MODULES.map((m) => (
            <div key={m} className="border p-4 rounded text-sm">
              {m}
            </div>
          ))}
        </div>
      </section>
      {/* PIPELINE */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Kasparro Works</h2>

        <div className="flex flex-col md:flex-row gap-4 text-sm">
          <div className="border p-4 rounded">Brand Inputs</div>
          <div className="border p-4 rounded">AI Audit Modules</div>
          <div className="border p-4 rounded">Actionable Insights</div>
        </div>
      </section>
    </main>
  );
}
