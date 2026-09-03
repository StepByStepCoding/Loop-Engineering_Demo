import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:justify-between">
        <div>
          <p className="font-bold text-white">NexaAI</p>
          <p className="mt-2 max-w-xs text-sm text-zinc-400">
            AI consulting and product engineering for ambitious teams.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="text-sm font-medium text-white">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Work</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/contact" className="hover:text-white">
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-6">
        <p className="text-xs text-zinc-500">
          © 2026 NexaAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
