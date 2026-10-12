import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site'

const channels = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: 'GitHub', value: '@sakaradhikari', href: site.github, icon: GithubIcon },
  { label: 'LinkedIn', value: 'in/sakaradhikari', href: site.linkedin, icon: LinkedinIcon },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-card/40 px-6 py-14 md:px-12 md:py-20">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)]"
          aria-hidden="true"
        />
        <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col">
            <p className="flex items-center gap-3 font-mono text-xs tracking-wider text-muted-foreground uppercase">
              <span className="text-primary">05</span>
              <span className="h-px w-8 bg-border" aria-hidden="true" />
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tighter text-balance md:text-5xl">
              {"Let's build something."}
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
              Have an idea, project, or just want to talk tech?
            </p>

            <ul className="mt-10 flex flex-col divide-y divide-border border-y border-border">
              {channels.map(({ label, value, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 py-4"
                  >
                    <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    <span className="w-20 text-sm text-muted-foreground">{label}</span>
                    <span className="min-w-0 flex-1 truncate text-sm">{value}</span>
                    <ArrowUpRight
                      className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
