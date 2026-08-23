import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      <div
        aria-hidden
        className="animate-gradient-slow pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-[#7c3aed] opacity-30 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-gradient-slow-reverse pointer-events-none absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-[#2563eb] opacity-30 blur-3xl"
      />

      <div className="relative flex max-w-2xl flex-col items-center gap-6 text-center">
        <span className="rounded-full border border-zinc-700 px-4 py-1 text-xs text-zinc-400">
          AI Consulting for ambitious teams
        </span>

        <h1 className="text-4xl font-bold text-white sm:text-6xl">
          Build the future with{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            AI-native products
          </span>
        </h1>

        <p className="max-w-xl text-zinc-400">
          NexaAI partners with ambitious teams to design, build, and ship
          AI-native products from idea to production.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            Get Started
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-zinc-500"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}
