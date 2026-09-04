"use client";

import { useState } from "react";

const INFO_BLOCKS = [
  {
    icon: "📍",
    label: "Location",
    value: "San Francisco, CA (Remote-first)",
  },
  {
    icon: "📧",
    label: "Email",
    value: "hello@nexaai.com",
  },
  {
    icon: "🕐",
    label: "Response time",
    value: "Within 24 hours",
  },
];

const WHY_NEXA = [
  "Senior engineers, not junior outsourcing",
  "Transparent pricing, no retainer lock-in",
  "Results in weeks, not quarters",
];

const inputClasses =
  "bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-violet-500";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-black">
      <section className="px-6 py-24 text-center">
        <span className="rounded-full border border-zinc-700 px-4 py-1 text-xs text-zinc-400">
          Get in Touch
        </span>

        <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
          Let&apos;s build something great together
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-zinc-400">
          Tell us about your project and we&apos;ll get back to you within a
          day.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="flex flex-col gap-4"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={inputClasses}
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-sm text-violet-400">
                Thanks! We&apos;ll be in touch soon.
              </p>
            )}
          </form>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {INFO_BLOCKS.map((block) => (
                <div key={block.label} className="flex items-start gap-4">
                  <span className="text-2xl">{block.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {block.label}
                    </p>
                    <p className="text-sm text-zinc-400">{block.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white">
                Why teams choose NexaAI
              </h2>
              <ul className="mt-4 flex flex-col gap-2">
                {WHY_NEXA.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-zinc-400">
                    <span className="text-violet-400">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
