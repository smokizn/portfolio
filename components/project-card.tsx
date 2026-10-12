import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { GithubIcon } from '@/components/brand-icons'
import type { Project } from '@/lib/site'
import { cn } from '@/lib/utils'

type ProjectCardProps = {
  project: Project
  variant?: 'featured' | 'default' | 'compact'
  className?: string
}

export function ProjectCard({ project, variant = 'default', className }: ProjectCardProps) {
  const featured = variant === 'featured'
  const compact = variant === 'compact'

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 transition-colors duration-300 hover:border-foreground/20',
        compact && 'sm:flex-row',
        className,
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden border-b border-border bg-surface',
          featured ? 'aspect-[16/10] lg:aspect-auto lg:flex-1' : 'aspect-[16/10]',
          compact && 'sm:aspect-auto sm:w-2/5 sm:border-r sm:border-b-0',
        )}
      >
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes={featured ? '(min-width: 1024px) 60vw, 100vw' : '(min-width: 1024px) 30vw, 100vw'}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className={cn('flex flex-col gap-4 p-6', featured && 'md:p-8', compact && 'sm:flex-1 sm:justify-center')}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-1.5 font-mono text-[11px] tracking-wider text-primary uppercase">{project.label}</p>
            <h3 className={cn('font-semibold tracking-tight', featured ? 'text-2xl md:text-3xl' : 'text-lg')}>
              <a href={project.demo ?? project.github} target="_blank" rel="noreferrer" className="after:absolute after:inset-0">
                {project.title}
              </a>
            </h3>
          </div>
          <ArrowUpRight
            className="mt-1 size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
            aria-hidden="true"
          />
        </div>

        <p className={cn('leading-relaxed text-pretty text-muted-foreground', featured ? 'max-w-lg' : 'text-sm')}>
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
              {tag}
            </li>
          ))}
        </ul>

        {featured && (
          <div className="relative z-10 mt-2 flex flex-wrap gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-background/60 px-4 text-sm font-medium transition-colors hover:border-foreground/25"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
              >
                Live Demo
                <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
