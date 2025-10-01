import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-zinc-100">
      {/* SIMPLIFIED BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/20 to-black" />
      
      {/* CONTENT */}
      <section className="relative container mx-auto max-w-[1400px] px-4 pt-20 pb-20">
        {/* HEADLINE */}
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Smith Agency <span className="text-cyan-300">AI</span>
          </h1>
          <p className="mt-3 text-zinc-300">5M autonomous Smith Agents powering the Exoverse—governed, mirrored, and notarized.</p>
        </div>

        {/* BOTTOM TABS */}
        <nav className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
          <Tab href="/smith-agency" title="Smith Agency AI" desc="Massive multi-brain workforce" />
          <Tab href="/services" title="Services" desc="Deployment • Ops • Governance" />
          <Tab href="/pricing" title="Transparent Pricing" desc="$99 Family • $399 Executive" />
          <Tab href="/start" title="Get Started" desc="Spin up agents now" highlight />
        </nav>
      </section>
    </main>
  )
}

function Tab({ href, title, desc, highlight = false }: { href: string; title: string; desc: string; highlight?: boolean }) {
  return (
    <Link href={href} prefetch
      className={["group block rounded-2xl border px-5 py-4 backdrop-blur outline-none",
        "border-white/15 bg-white/5 hover:bg-white/10 transition",
        "focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        highlight ? "ring-1 ring-cyan-300/50" : ""].join(" ")}
      aria-label={`${title}: ${desc}`}>
      <div className="text-sm font-bold uppercase tracking-wide text-white/90">{title}</div>
      <div className="mt-1 text-xs text-zinc-200/80">{desc}</div>
    </Link>
  )
}

export const metadata = {
  title: "Smith Agency AI",
  description: "5M autonomous Smith Agents powering the Exoverse—governed, mirrored, and notarized.",
  openGraph: { images: ["/bg-continuum.jpg"] },
}