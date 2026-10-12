import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading index="04" label="Education" title="Where I'm learning." />

        <Reveal delay={80}>
          <ol className="relative border-l border-border pl-8">
            <li className="relative">
              <span className="absolute top-1.5 -left-[37px] flex size-[9px] items-center justify-center" aria-hidden="true">
                <span className="absolute size-5 rounded-full bg-primary/15" />
                <span className="relative size-[9px] rounded-full bg-primary" />
              </span>
              <p className="font-mono text-xs tracking-wider text-primary uppercase">Currently pursuing</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">Bachelor of Computer Applications</h3>
              <p className="mt-1 text-muted-foreground">Bengaluru North University</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-pretty text-muted-foreground">
                Coursework in data structures, databases, operating systems, and web technologies, alongside a steady
                stream of side projects.
              </p>
            </li>
            <li className="relative mt-10">
              <span
                className="absolute top-1.5 -left-[36px] size-[7px] rounded-full border border-border bg-background"
                aria-hidden="true"
              />
              <p className="font-mono text-xs text-muted-foreground">Next commit pending…</p>
            </li>
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
