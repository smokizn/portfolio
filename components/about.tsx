import { Reveal } from '@/components/reveal'

const stats = [
  { value: 'CS', label: 'Currently studying' },
  { value: '10+', label: 'Projects built' },
  { value: 'Full-stack', label: 'Primary focus' },
]

const learning = ['TypeScript', 'System design', 'Docker', 'Rust basics']

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs tracking-wider text-muted-foreground uppercase">
            <span className="text-primary">01</span>
            <span className="h-px w-8 bg-border" aria-hidden="true" />
            About
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">A little about me.</h2>
        </Reveal>

        <div className="flex flex-col gap-10">
          <Reveal delay={80} className="space-y-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            <p>
              {"I'm a "}
              <span className="text-foreground">Bachelor of Computer Applications</span>
              {
                " student who learns best by building. Most of my time goes into web apps, small tools that remove friction from my day, and tinkering with my Linux setup."
              }
            </p>
            <p>
              I care about the details that make software feel good to use: fast interfaces, readable code, and
              sensible defaults.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1 bg-card p-5">
                  <dt className="order-2 text-sm text-muted-foreground">{stat.label}</dt>
                  <dd className="order-1 text-2xl font-semibold tracking-tight">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={200} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">Currently learning</p>
            <ul className="flex flex-wrap gap-2">
              {learning.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-dashed border-border px-3 py-1 text-sm text-foreground/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
