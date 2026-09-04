const TEAM = [
  {
    initials: "AK",
    name: "Ava Kessler",
    role: "Founding Engineer",
    bio: "Leads platform architecture and takes prototypes to production.",
  },
  {
    initials: "MR",
    name: "Marcus Ruiz",
    role: "ML Lead",
    bio: "Trains and evaluates the custom models behind our clients' products.",
  },
  {
    initials: "SP",
    name: "Sana Patel",
    role: "Product Design",
    bio: "Designs interfaces that make AI systems feel trustworthy and clear.",
  },
  {
    initials: "JL",
    name: "Jonah Lin",
    role: "Infrastructure Engineer",
    bio: "Builds the pipelines and feature stores that keep models fresh.",
  },
  {
    initials: "TO",
    name: "Tara Okafor",
    role: "Agent Systems Engineer",
    bio: "Designs guardrails and evaluation harnesses for autonomous agents.",
  },
  {
    initials: "DB",
    name: "Diego Bianchi",
    role: "Engagement Lead",
    bio: "Partners with clients to turn roadmaps into shipped milestones.",
  },
];

export default function Team() {
  return (
    <div className="bg-black">
      <section className="px-6 py-24 text-center">
        <span className="rounded-full border border-zinc-700 px-4 py-1 text-xs text-zinc-400">
          Our Team
        </span>

        <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
          Senior engineers, not junior outsourcing
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-zinc-400">
          A small, senior team spanning ML engineering, infrastructure, and
          product design, with an average of six years building AI systems.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <div key={member.name} className="glass-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 text-sm font-bold text-white">
                {member.initials}
              </div>
              <h2 className="mt-4 font-semibold text-white">
                {member.name}
              </h2>
              <p className="text-sm text-zinc-400">{member.role}</p>
              <p className="mt-2 text-sm text-zinc-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
