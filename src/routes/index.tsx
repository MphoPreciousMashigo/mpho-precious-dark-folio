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

import cvAsset from "@/assets/mpho-cv.pdf.asset.json";

const RESUME_URL = cvAsset.url;
const EMAIL = "mphomash27@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/precious-mashigo-b68422200/";
const GITHUB_URL = "https://github.com/MphoPreciousMashigo";

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
  { value: "8+", label: "Years in operations, assets & QA" },
  { value: "180", label: "Property portfolio managed" },
  { value: "500+", label: "Tenants & stakeholders supported" },
  { value: "R100k+", label: "Monthly procurement supported" },
];

const SERVICES = [
  {
    icon: Workflow,
    title: "ServiceNow & ITSM",
    body: "Platform fundamentals through to incident lifecycle: impact, urgency, priority, assignment groups and clean record hygiene.",
    points: ["Incident & request management", "Problem & change concepts", "Lists, records, modules"],
  },
  {
    icon: Network,
    title: "Business Process Analysis",
    body: "Requirements gathering, process documentation and root-cause work on recurring operational issues.",
    points: ["Requirements & BRDs", "Process documentation", "Root-cause analysis"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    body: "Expert Excel data cleaning, validation and operational reporting, moving toward Power BI dashboards.",
    points: ["Data cleaning & validation", "Pivot tables & tracking systems", "Operational reporting"],
  },
  {
    icon: Boxes,
    title: "Enterprise Business Systems",
    body: "Hands-on administration in MRI Software, TPN and CYBEL across property, tenant and compliance processes.",
    points: ["MRI Software — 4 years", "TPN — 4 years", "CYBEL — 2 years"],
  },
  {
    icon: Bot,
    title: "AI & Digital Transformation",
    body: "AI fundamentals, 4IR technologies and practical automation workflows applied to everyday business admin.",
    points: ["AI tools & prompting", "Automation workflows", "Digital productivity"],
  },
  {
    icon: ShieldCheck,
    title: "Quality, Compliance & Reporting",
    body: "Audit support, compliance documentation and structured reporting built for management review.",
    points: ["Internal audit support", "Compliance documentation", "Monthly management reporting"],
  },
];

const CASES = [
  {
    tag: "Professional experience",
    title: "Office Manager — Bobjack International Ventures (2022 – Present)",
    context:
      "A growing operation needed structured workflows, reliable records and reporting that management could act on.",
    action:
      "Coordinated four business functions supporting eight employees and built Excel-based tracking and reporting systems for decision-making.",
    results: [
      "6 monthly management reports delivered",
      "R100,000+ monthly procurement supported",
      "50 monthly invoices processed accurately",
    ],
    stack: ["Excel (Expert)", "Microsoft 365", "Google Workspace", "Procurement"],
  },
  {
    tag: "Professional experience",
    title: "Asset Manager — Louya Properties (2018 – 2021)",
    context:
      "A 180-property portfolio required disciplined records, compliance documentation and responsive service-request handling.",
    action:
      "Managed property databases, lease records and operational documentation while resolving tenant service requests through structured business systems.",
    results: [
      "180-property portfolio managed",
      "500+ tenants and stakeholders supported",
      "4 years' hands-on MRI Software and TPN use",
    ],
    stack: ["MRI Software", "TPN", "Compliance", "Service requests"],
  },
  {
    tag: "Capstone project — in progress",
    title: "Retail Operations Analytics & Intelligent Automation Capstone",
    context:
      "Historical retail transaction data hid underperforming regional metrics and stock-outs on high-margin lines.",
    action:
      "Mapped margin and performance data into a reporting framework linked to a custom ServiceNow-style workflow, with an AI text-classification concept to read unstructured support requests, predict urgency and route tickets to the right fulfilment group.",
    results: [
      "Margin mapping and revenue-leakage views",
      "Ticket urgency prediction concept via Google AI",
      "Automated routing to fulfilment groups",
    ],
    stack: ["ServiceNow", "Excel / Power BI", "Google AI", "NLP classification"],
  },
];

const STACK = [
  { icon: Workflow, group: "ServiceNow & ITSM", items: ["Incident Management", "Request & Change", "Assignment groups", "CSA (in progress)"] },
  { icon: Boxes, group: "Business Systems", items: ["MRI Software", "TPN", "CYBEL", "Microsoft 365"] },
  { icon: BarChart3, group: "Data & BI", items: ["Excel — Expert", "Power BI — Basic", "Data validation", "Business metrics"] },
  { icon: Cpu, group: "AI & Development", items: ["AI fundamentals", "Automation workflows", "Google AI Certificate track", "4IR technologies"] },
];

const CREDENTIALS = [
  "Artificial Intelligence in the 4IR — University of Johannesburg (in progress)",
  "BEd Senior & FET Phase — University of South Africa (in progress)",
  "Higher Certificate, Adult Education & Training — UNISA",
  "ServiceNow Certified System Administrator (CSA) — in progress",
  "Google AI Certificate — via CAPACITI AI Skills Acceleration Programme",
  "Betechified Data Analytics Scholarship & Capstone — selected cohort",
  "ITIL 4 Foundation and ECBA — planned",
];

const PRINCIPLES = [
  "Understand the process before configuring the tool.",
  "Clean data first — every report depends on it.",
  "Document it so the next person can run it.",
  "Automate the repetitive, escalate the exceptions.",
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
                  Next-Generation Systems Architect &amp; Intelligent Automation Technologist
                </Badge>

                <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="text-gradient">Mpho Precious Mashigo</span>
                  <span className="mt-4 block text-2xl font-medium text-muted-foreground sm:text-3xl">
                    I build where data meets the cloud — driving automated value from day one.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Systems architect dismantling traditional silos to engineer interconnected,
                  fluid digital structures. Specialising in ServiceNow ITSM, data analytics,
                  cloud intelligence and AI-powered automation workflows.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg">
                    <a href="#contact">
                      Start a conversation
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener">
                      LinkedIn
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="ghost">
                    <a href={RESUME_URL} download>
                      <Download className="size-4" aria-hidden="true" />
                      Download CV
                    </a>
                  </Button>
                </div>

                <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-accent" aria-hidden="true" />
                  Johannesburg, South Africa — available for enterprise and remote engagements
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
                    Across operations, asset management, quality assurance and developing enterprise technology capability.
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
                icon: Network,
                title: "Systems first",
                body: "I dismantle technical silos by connecting workflows, data and cloud infrastructure into one coherent architecture.",
              },
              {
                icon: Bot,
                title: "Automation with judgement",
                body: "Intelligent automation applied where repetition, risk and volume justify it — with human oversight and clear ownership.",
              },
              {
                icon: BarChart3,
                title: "Data to decisions",
                body: "Raw operational data becomes structured insight: dashboards, metrics and reporting that leaders can act on.",
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
              Six capabilities, one systems outcome
            </h2>
            <p className="mt-4 text-muted-foreground">
              My current capability spans ServiceNow ITSM, business process analysis, data
              analytics, enterprise business systems and AI-driven automation — unified by the
              goal of turning workflows into scalable ecosystems.
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
                Architecting the next generation of intelligent systems.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I am Mpho Precious Mashigo, a Next-Generation Systems Architect and Intelligent
                  Automation Technologist. My journey is defined by a profound evolution—dismantling
                  traditional technical silos to engineer interconnected, fluid, and highly automated
                  digital structures.
                </p>
                <p>
                  Operating at the cutting edge of modern infrastructure, I specialize in transforming
                  raw enterprise workflows into scalable ecosystems. Currently, my expansion journey is
                  driven by an elite, multi-track alignment: mastering data systems with BeTechified,
                  structuring enterprise service management networks through ServiceNow CSA
                  architectures, and accelerating my cloud intelligence capabilities across both the
                  Capaciti Google AI and Netcampus AWS Cloud &amp; AI programs.
                </p>
                <p>
                  I build where data meets the cloud, driving automated value from day one.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" variant="outline">
                  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener">
                    LinkedIn profile
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <a href={`mailto:${EMAIL}`}>
                    <Mail className="size-4" aria-hidden="true" />
                    {EMAIL}
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-3xl border border-border bg-card/70 p-7">
                <h3 className="font-display text-lg font-semibold">Credentials &amp; current tracks</h3>
                <ul className="mt-5 space-y-4">
                  {CREDENTIALS.map((p) => (
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
                  <a href={`mailto:${EMAIL}`}>
                    <Mail className="size-4" aria-hidden="true" />
                    {EMAIL}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener">
                    LinkedIn profile
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <a href={RESUME_URL} download>
                    <Download className="size-4" aria-hidden="true" />
                    Download CV (PDF)
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
