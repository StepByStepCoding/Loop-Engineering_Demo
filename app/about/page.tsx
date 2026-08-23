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

export default function AboutPage() {
  return (
    <div className="bg-black px-6 py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <span className="rounded-full border border-zinc-700 px-4 py-1 text-xs text-zinc-400">
          Who We Are
        </span>

        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          AI expertise, applied with judgment
        </h1>

        <p className="max-w-xl text-zinc-400">
          We believe the best AI products come from pairing deep technical
          expertise with a clear-eyed read of what actually moves the needle
          for a business.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-4 text-zinc-400">
          <p>
            NexaAI started when a small group of engineers, tired of watching
            AI initiatives stall out in slide decks, decided to focus
            exclusively on shipping AI products that survive contact with
            real users and real data.
          </p>
          <p>
            We believe responsible AI isn&apos;t a compliance checkbox — it&apos;s
            built in from the first architecture decision, through careful
            evaluation, guardrails, and monitoring that keeps systems
            trustworthy long after launch.
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

      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((value) => (
          <div key={value.title} className="glass-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-2xl">
              {value.icon}
            </div>
            <h2 className="mt-4 font-semibold text-white">{value.title}</h2>
            <p className="mt-2 text-sm text-zinc-400">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
