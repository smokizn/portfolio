import { ArrowUpRight } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { projects, site } from '@/lib/site'

export function Projects() {
  const [featured, automation, bot, browser] = projects

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          index="03"
          label="Projects"
          title="Things I've built."
          description="A few projects I'm proud of, from polished apps to weekend experiments."
        />
        <Reveal className="mb-12 md:mb-16">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All repositories
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>

      <div className="grid gap-4 lg:grid-cols-5 lg:grid-rows-[auto_auto]">
        <Reveal className="lg:col-span-3 lg:row-span-2">
          <ProjectCard project={featured} variant="featured" />
        </Reveal>
        <Reveal delay={80} className="lg:col-span-2">
          <ProjectCard project={automation} />
        </Reveal>
        <Reveal delay={140} className="lg:col-span-2">
          <ProjectCard project={bot} />
        </Reveal>
        <Reveal delay={200} className="lg:col-span-5">
          <ProjectCard project={browser} variant="compact" />
        </Reveal>
      </div>
    </section>
  )
}
