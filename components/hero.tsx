import { ArrowRight, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { Terminal } from '@/components/terminal'
import { site } from '@/lib/site'

const socials = [
  { label: 'GitHub', href: site.github, icon: GithubIcon },
  { label: 'LinkedIn', href: site.linkedin, icon: LinkedinIcon },
  { label: 'Email', href: `mailto:${site.email}`, icon: Mail },
]

const floatingTags = [
  { label: '<code />', className: '-top-4 left-6', delay: '0s' },
  { label: 'git commit', className: 'top-16 -right-8', delay: '1.5s' },
  { label: 'Linux', className: 'bottom-28 -right-6', delay: '3s' },
  { label: 'React', className: '-bottom-4 right-16', delay: '4.5s' },
]

export function Hero() {
  return (
    <section id="home" className="relative mx-auto w-full max-w-6xl px-5 pt-36 pb-24 md:px-8 md:pt-44 md:pb-32">
      <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div className="flex flex-col items-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-[11px] tracking-wider text-muted-foreground">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </Reveal>

          <Reveal delay={60} className="mt-8">
            <p className="text-lg text-muted-foreground">{"Hi, I'm"}</p>
            <h1 className="mt-1 text-5xl font-semibold tracking-tighter text-balance sm:text-6xl lg:text-7xl">
              Sakar Adhikari
            </h1>
          </Reveal>

          <Reveal delay={120} className="mt-5">
            <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-base font-medium text-foreground/85 md:text-lg">
              CS Student
              <span className="text-primary" aria-hidden="true">
                /
              </span>
              Developer
              <span className="text-primary" aria-hidden="true">
                /
              </span>
              Linux Enthusiast
            </p>
          </Reveal>

          <Reveal delay={180} className="mt-6 max-w-lg">
            <p className="leading-relaxed text-pretty text-muted-foreground">
              I build clean, functional web experiences and enjoy exploring the intersection of software, Linux, and
              modern technology.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_24px_-4px_var(--primary)]"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-6 text-sm font-medium transition-colors hover:border-foreground/25 hover:bg-card"
            >
              GitHub
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>

          <Reveal delay={300} className="mt-10 flex items-center gap-5">
            <ul className="flex items-center gap-1">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
            <span className="h-4 w-px bg-border" aria-hidden="true" />
            <p className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <MapPin className="size-3.5" aria-hidden="true" />
              Bengaluru, IN
            </p>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative isolate mx-auto w-full max-w-sm lg:mr-0">
          <div
            className="pointer-events-none absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)]"
            aria-hidden="true"
          />

          <div className="relative">
            <figure className="relative overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-2xl shadow-black/40">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
                <Image
                  src="https://i.pinimg.com/736x/29/76/3a/29763af21c31ecf568e18e19c9237cf4.jpg"
                  alt="Portrait of Sakar Adhikari"
                  fill
                  priority
                  sizes="(min-width: 1024px) 384px, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between text-white">
                <div>
                  <p className="text-sm font-medium">Sakar Adhikari</p>
                  <p className="font-mono text-[11px] text-white/60">~/bengaluru</p>
                </div>
                <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[10px] text-white/80 backdrop-blur">
                  v2026.1
                </span>
              </figcaption>
            </figure>

            {floatingTags.map((tag) => (
              <span
                key={tag.label}
                aria-hidden="true"
                style={{ animationDelay: tag.delay }}
                className={`animate-float absolute hidden rounded-lg border border-border bg-card/80 px-2.5 py-1 font-mono text-[11px] text-muted-foreground shadow-lg backdrop-blur-md sm:block ${tag.className}`}
              >
                {tag.label}
              </span>
            ))}

            <Terminal className="mt-4 w-full sm:w-60 lg:absolute lg:bottom-28 lg:-left-20 lg:mt-0" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
