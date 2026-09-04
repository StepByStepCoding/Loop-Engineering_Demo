import Link from "next/link";

export default function Home() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      <div
        aria-hidden
        className="animate-gradient-slow absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-violet-600/40 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-gradient-slow-reverse absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue-600/40 blur-3xl"
      />

      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        <span className="rounded-full border border-zinc-700 px-4 py-1 text-xs text-zinc-400">
          AI Consulting for ambitious teams
        </span>

        <h1 className="mt-6 text-4xl font-bold text-white sm:text-6xl">
          Build the future with{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            AI-native products
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-zinc-400">
          NexaAI partners with ambitious teams to design, build, and ship
          AI-native products from prototype to production.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
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
    </section>
  );
}
