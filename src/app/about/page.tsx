export default function AboutPage() {
  return (
    <main className="px-8 py-16 space-y-12 max-w-4xl">
      <h1 className="text-4xl font-bold">About Kasparro</h1>

      <section>
        <h2 className="text-2xl font-semibold">Mission</h2>
        <p className="text-gray-600">
          Help brands remain visible and trusted in an AI-first search world.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">
          Product Philosophy
        </h2>
        <p className="text-gray-600">
          We build systems, not dashboards — clarity over noise, insight over
          metrics.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">
          Vision
        </h2>
        <p className="text-gray-600">
          A future where brands understand how AI interprets them — before
          customers do.
        </p>
      </section>
    </main>
  );
}
