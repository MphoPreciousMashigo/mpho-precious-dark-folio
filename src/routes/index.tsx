import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Boxes,
  CheckCircle2,
  Download,
  Cpu,
  Gauge,
  Mail,
  MapPin,
  Menu,
  Network,
  ScanBarcode,
  ShieldCheck,
  Sparkles,
  Store,
  Workflow,
  X,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RESUME_URL = "/Mpho-Precious-Mashigo-Resume.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mpho Precious Mashigo | Retail Ops & Automation Technologist" },
      {
        name: "description",
        content:
          "Portfolio of Mpho Precious Mashigo — enterprise retail operations and intelligent automation technologist building resilient store systems, RPA workflows and operational intelligence.",
      },
      {
        property: "og:title",
        content: "Mpho Precious Mashigo | Retail Ops & Automation Technologist",
      },
      {
        property: "og:description",
        content:
          "Enterprise retail operations, intelligent automation and operational intelligence — selected work, capabilities and contact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { href: "#expertise", label: "Expertise" },
  { href: "#work", label: "Impact" },
  { href: "#stack", label: "Technology" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const METRICS = [
  { value: "8+", label: "Years in retail operations" },
  { value: "120+", label: "Store workflows optimised" },
  { value: "40%", label: "Average manual effort removed" },
  { value: "24/7", label: "Monitored automation coverage" },
];

const SERVICES = [
  {
    icon: Store,
    title: "Retail Operations Engineering",
    body: "Store-to-head-office process design: replenishment, shrinkage control, stock accuracy and shift-level execution playbooks.",
    points: ["Process mapping & SOPs", "Store readiness audits", "Ops KPI frameworks"],
  },
  {
    icon: Bot,
    title: "Intelligent Automation (RPA + AI)",
    body: "Automating high-volume back-office work — from supplier reconciliation to reporting packs — with human-in-the-loop controls.",
    points: ["Bot design & orchestration", "Document/OCR pipelines", "Exception handling"],
  },
  {
    icon: BarChart3,
    title: "Operational Intelligence",
    body: "Turning POS, WMS and ERP data into dashboards leaders actually use for daily trading decisions.",
    points: ["Trading dashboards", "Forecast & variance views", "Data quality guardrails"],
  },
  {
    icon: Network,
    title: "Systems Integration",
    body: "Connecting fragmented retail estates so data flows once, cleanly, from till to ledger.",
    points: ["API & middleware design", "Master data alignment", "Legacy modernisation"],
  },
  {
    icon: ShieldCheck,
    title: "Governance & Compliance",
    body: "Auditable automation: access control, change management and evidence trails that survive review.",
    points: ["Control matrices", "Audit-ready logging", "Risk & failover design"],
  },
  {
    icon: Workflow
,
    title: "Transformation Delivery",
    body: "Leading cross-functional rollouts across regions with adoption, training and measurable handover.",
    points: ["Roadmaps & business cases", "Change enablement", "Benefit tracking"],
  },
];

const CASES = [
  {
    tag: "Placeholder case study",
    title: "Replenishment Intelligence for a National Grocery Chain",
    context:
      "Manual store ordering across a large footprint caused inconsistent availability and excess markdown.",
    action:
      "Designed a demand-signal driven replenishment workflow with automated exception queues and store-level accountability views.",
    results: [
      "Availability lifted from 91% to 97%",
      "Markdown waste reduced 18%",
      "Ordering time per store cut by 6 hours weekly",
    ],
    stack: ["SAP Retail", "Power BI", "Power Automate", "SQL"],
  },
  {
    tag: "Placeholder case study",
    title: "Back-Office Automation Programme",
    context:
      "Finance and supply-chain teams spent thousands of hours a year on invoice matching and manual reporting.",
    action:
      "Delivered an automation portfolio of 14 attended and unattended bots with a shared exception-handling framework.",
    results: [
      "11,000+ manual hours returned annually",
      "Invoice match accuracy at 99.2%",
      "Month-end reporting cycle shortened by 3 days",
    ],
    stack: ["UiPath", "Python", "Azure", "Snowflake"],
  },
  {
    tag: "Placeholder case study",
    title: "Store Operations Command Centre",
    context:
      "Regional managers lacked a single, trusted view of trading, stock and compliance performance.",
    action:
      "Built a unified operations command centre with daily trading scorecards, alerting and drill-down to store and SKU level.",
    results: [
      "Single source of truth across 200+ sites",
      "Issue response time down 45%",
      "Adoption above 85% within one quarter",
    ],
    stack: ["Power BI", "Databricks", "REST APIs", "Teams alerts"],
  },
];

const STACK = [
  { icon: Cpu, group: "Automation", items: ["UiPath", "Power Automate", "Python", "n8n"] },
  { icon: Boxes, group: "Retail Platforms", items: ["SAP Retail", "Oracle RMS", "WMS", "POS"] },
  { icon: BarChart3, group: "Data & BI", items: ["Power BI", "SQL", "Databricks", "Excel modelling"] },
  { icon: ScanBarcode, group: "Ops Practice", items: ["Lean Six Sigma", "Agile", "ITIL", "Process mining"] },
];

const PRINCIPLES = [
  "Automate the process only after it is worth doing.",
  "Every dashboard must change a decision.",
  "Design for the store colleague, not the slide deck.",
  "Measure the benefit, then defend it.",
];

function Portfolio() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#main" className="group flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-lg bg-primary/15 font-display text-sm font-bold text-primary">
              MM
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
              Mpho Precious Mashigo
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="sm" className="ml-2">
              <a href="#contact">Let&apos;s talk</a>
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-md border border-border text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="border-t border-border bg-background px-5 py-3 md:hidden"
          >
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-3 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild className="w-full">
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Let&apos;s talk
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main id="main">
        {/* Hero */}
        <section className="hero-aura relative overflow-hidden">
          <div className="grid-veil absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
          <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-24 lg:pb-28">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <Reveal>
                <Badge
                  variant="outline"
                  className="mb-6 gap-2 border-primary/30 bg-primary/10 px-3 py-1 text-primary"
                >
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  Enterprise Retail Operations &amp; Intelligent Automation
                </Badge>

                <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="text-gradient">Mpho Precious Mashigo</span>
                  <span className="mt-4 block text-2xl font-medium text-muted-foreground sm:text-3xl">
                    I make retail operations run quieter, faster and measurably better.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Operations technologist working at the intersection of store execution,
                  process automation and data. I redesign the workflows behind trading —
                  then automate what should never have been manual.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg">
                    <a href="#contact">
                      Start a conversation
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="#work">View selected impact</a>
                  </Button>
                  <Button asChild size="lg" variant="ghost">
                    <a href={RESUME_URL} download>
                      <Download className="size-4" aria-hidden="true" />
                      Download resume (PDF)
                    </a>
                  </Button>

                </div>

                <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-accent" aria-hidden="true" />
                  Based in South Africa — available for enterprise and remote engagements
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-elevated backdrop-blur-sm sm:p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    Operating snapshot
                  </p>
                  <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7">
                    {METRICS.map((m) => (
                      <div key={m.label}>
                        <dt className="sr-only">{m.label}</dt>
                        <dd className="font-display text-3xl font-bold text-primary sm:text-4xl">
                          {m.value}
                        </dd>
                        <p className="mt-1 text-xs leading-snug text-muted-foreground">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-7 border-t border-border pt-5 text-xs text-muted-foreground">
                    Figures are editable placeholders — replace with verified numbers.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Positioning */}
        <section className="border-y border-border bg-surface/40" aria-label="Positioning">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-3">
            {[
              {
                icon: Gauge,
                title: "Operations first",
                body: "Technology only earns its place when the underlying process is sound. I start on the floor, not in the tool.",
              },
              {
                icon: Bot,
                title: "Automation with judgement",
                body: "Bots, integrations and AI applied where volume, risk and repetition justify them — with clear ownership.",
              },
              {
                icon: BarChart3,
                title: "Evidence to the boardroom",
                body: "Benefits tracked in the language leaders trade in: availability, cost to serve, hours returned.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <item.icon className="size-6 text-primary" aria-hidden="true" />
                <h2 className="mt-4 font-display text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Expertise &amp; services
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Six capabilities, one operating outcome
            </h2>
            <p className="mt-4 text-muted-foreground">
              Engagements usually combine two or three of these — diagnosis, redesign, then
              automation with a measurement layer around it.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 3) * 90}>
                <article className="group h-full rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary/20">
                    <s.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <ul className="mt-4 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Work */}
        <section
          id="work"
          className="scroll-mt-24 border-y border-border bg-surface/40 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Selected impact
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Case studies in context, action and result
              </h2>
              <p className="mt-4 text-muted-foreground">
                Illustrative placeholder engagements — swap the context, actions, metrics and
                stack for your verified project history.
              </p>
            </Reveal>

            <div className="mt-12 space-y-6">
              {CASES.map((c, i) => (
                <Reveal as="article" key={c.title} delay={i * 80}>
                  <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-elevated sm:p-9">
                    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
                      <div>
                        <Badge variant="secondary" className="mb-4 font-mono text-[11px]">
                          {c.tag}
                        </Badge>
                        <h3 className="font-display text-xl font-semibold sm:text-2xl">
                          {c.title}
                        </h3>
                        <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                          <div>
                            <dt className="font-medium text-foreground">Context</dt>
                            <dd className="mt-1 text-muted-foreground">{c.context}</dd>
                          </div>
                          <div>
                            <dt className="font-medium text-foreground">What I did</dt>
                            <dd className="mt-1 text-muted-foreground">{c.action}</dd>
                          </div>
                        </dl>
                        <ul className="mt-6 flex flex-wrap gap-2">
                          {c.stack.map((t) => (
                            <li
                              key={t}
                              className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-primary/20 bg-primary/[0.06] p-5 sm:p-6">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                          Outcomes
                        </p>
                        <ul className="mt-4 space-y-3">
                          {c.results.map((r) => (
                            <li key={r} className="flex items-start gap-2 text-sm">
                              <ArrowUpRight
                                className="mt-0.5 size-4 shrink-0 text-primary"
                                aria-hidden="true"
                              />
                              <span className="text-foreground/90">{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Technology &amp; automation capability
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              The toolkit behind the outcomes
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STACK.map((group, i) => (
              <Reveal as="li" key={group.group} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card/60 p-6">
                  <group.icon className="size-5 text-accent" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-base font-semibold">{group.group}</h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24 border-y border-border bg-surface/40 py-20 lg:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_0.8fr]">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Retail is operational. So is my approach.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I&apos;m Mpho Precious Mashigo, an enterprise retail operations and intelligent
                  automation technologist. My work sits between the shop floor and the systems
                  that are supposed to support it — replenishment, stock integrity, supplier
                  processes, reporting and the daily rhythm of trading.
                </p>
                <p>
                  I&apos;ve spent my career untangling processes that grew faster than the tooling
                  around them, then rebuilding them with automation, integration and clear
                  ownership. The result is fewer manual handoffs, cleaner data and teams that
                  spend their time on trade instead of admin.
                </p>
                <p>
                  This biography is placeholder copy — replace it with your own career narrative,
                  qualifications and certifications.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-3xl border border-border bg-card/70 p-7">
                <h3 className="font-display text-lg font-semibold">How I work</h3>
                <ul className="mt-5 space-y-4">
                  {PRINCIPLES.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative scroll-mt-24 overflow-hidden">
          <div className="hero-aura absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-5 py-24 text-center lg:py-32">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Have a process that shouldn&apos;t still be manual?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                Available for retail operations reviews, automation programmes and interim
                delivery leadership. Replace the details below with your preferred contact
                channels.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="mailto:hello@example.com">
                    <Mail className="size-4" aria-hidden="true" />
                    hello@example.com
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener">
                    LinkedIn profile
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <a href={RESUME_URL} download>
                    <Download className="size-4" aria-hidden="true" />
                    Download resume (PDF)
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Mpho Precious Mashigo. All rights reserved.</p>
          <p className="font-mono text-xs">
            Enterprise Retail Operations &amp; Intelligent Automation
          </p>
        </div>
      </footer>
    </div>
  );
}
