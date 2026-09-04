const SERVICES = [
  {
    icon: "🧭",
    title: "AI Strategy & Roadmapping",
    description:
      "Identify high-leverage AI opportunities and translate them into a prioritised, buildable roadmap.",
  },
  {
    icon: "⚙️",
    title: "Applied ML Engineering",
    description:
      "Design, train, and productionise custom machine learning models tailored to your data and performance requirements.",
  },
  {
    icon: "🤖",
    title: "LLM & Agent Integration",
    description:
      "Embed large language models and autonomous agents into your product with robust prompting, evaluation, and guardrails.",
  },
  {
    icon: "🗄️",
    title: "Data Infrastructure",
    description:
      "Build the pipelines, warehouses, and feature stores your AI systems need to stay fast, reliable, and auditable.",
  },
  {
    icon: "🎨",
    title: "AI Product Design",
    description:
      "UX research and interface design for AI-powered products that users actually trust and enjoy.",
  },
  {
    icon: "📈",
    title: "Ongoing Optimisation",
    description:
      "Continuous monitoring, fine-tuning, and iteration so your models stay accurate as your data evolves.",
  },
];

export default function Services() {
  return (
    <div className="bg-black">
      <section className="px-6 py-24 text-center">
        <span className="rounded-full border border-zinc-700 px-4 py-1 text-xs text-zinc-400">
          Our Services
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold text-white sm:text-5xl">
          Everything you need to go from idea to AI in production
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-zinc-400">
          From strategy to shipped product, we cover the full lifecycle of
          building AI systems that hold up in the real world.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="glass-card p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-2xl">
                {service.icon}
              </div>
              <h2 className="mt-4 text-lg font-semibold text-white">
                {service.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
