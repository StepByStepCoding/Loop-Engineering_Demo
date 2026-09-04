const STATS = [
  { value: "60+", label: "Projects shipped" },
  { value: "98%", label: "Client retention" },
  { value: "6 yrs", label: "Average team experience" },
];

const VALUES = [
  {
    icon: "🛠️",
    title: "Craftsmanship",
    description: "We ship production-grade code, not prototypes.",
  },
  {
    icon: "🔍",
    title: "Transparency",
    description: "Clear scope, clear pricing, no surprises.",
  },
  {
    icon: "⚡",
    title: "Speed",
    description: "Senior engineers move fast without cutting corners.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    description: "We work embedded with your team, not around it.",
  },
];

export default function About() {
  return (
    <div className="bg-black">
      <section className="px-6 py-24 text-center">
        <span className="rounded-full border border-zinc-700 px-4 py-1 text-xs text-zinc-400">
          Who We Are
        </span>

        <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
          AI expertise, applied with judgment
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-zinc-400">
          We believe the best AI products come from pairing deep technical
          craft with a clear-eyed read of what actually matters to users.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-4 text-zinc-400">
            <p>
              NexaAI started when a small group of engineers, tired of
              watching AI pilots stall out before they ever reached
              production, decided to focus exclusively on the last mile:
              turning promising models into reliable, shipped products.
            </p>
            <p>
              We believe responsible AI isn&apos;t a checklist bolted on at
              the end — it&apos;s a design constraint from day one. That
              means building systems that are evaluated, monitored, and
              explainable, not just impressive in a demo.
            </p>
          </div>

          <div className="glass-card flex flex-col gap-6 p-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <div key={value.title} className="glass-card p-6">
              <span className="text-2xl">{value.icon}</span>
              <h2 className="mt-4 text-lg font-semibold text-white">
                {value.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
