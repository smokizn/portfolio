import {
  siC,
  siCplusplus,
  siCss,
  siExpress,
  siFastapi,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siLinux,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPython,
  siReact,
  siTailwindcss,
} from 'simple-icons'
import { SimpleIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

type Tech = { name: string; path: string }

const groups: { title: string; caption: string; items: Tech[] }[] = [
  {
    title: 'Frontend',
    caption: 'Interfaces that feel fast',
    items: [
      { name: 'HTML', path: siHtml5.path },
      { name: 'CSS', path: siCss.path },
      { name: 'JavaScript', path: siJavascript.path },
      { name: 'React', path: siReact.path },
      { name: 'Next.js', path: siNextdotjs.path },
      { name: 'Tailwind CSS', path: siTailwindcss.path },
    ],
  },
  {
    title: 'Backend',
    caption: 'APIs and services',
    items: [
      { name: 'Node.js', path: siNodedotjs.path },
      { name: 'Express.js', path: siExpress.path },
      { name: 'Python', path: siPython.path },
      { name: 'FastAPI', path: siFastapi.path },
    ],
  },
  {
    title: 'Languages',
    caption: 'What I think in',
    items: [
      { name: 'JavaScript', path: siJavascript.path },
      { name: 'Python', path: siPython.path },
      { name: 'Java', path: siOpenjdk.path },
      { name: 'C', path: siC.path },
      { name: 'C++', path: siCplusplus.path },
    ],
  },
  {
    title: 'Tools',
    caption: 'Daily drivers',
    items: [
      { name: 'Git', path: siGit.path },
      { name: 'GitHub', path: siGithub.path },
      { name: 'Linux', path: siLinux.path },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        index="02"
        label="Skills"
        title="Tools I reach for."
        description="A stack I use regularly and keep sharpening, from the browser down to the shell."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 70}
            className="rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-foreground/15"
          >
            <div className="mb-5 flex items-baseline justify-between gap-4">
              <h3 className="font-medium">{group.title}</h3>
              <p className="font-mono text-[11px] text-muted-foreground">{group.caption}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <li
                  key={tech.name}
                  className="group flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-foreground/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground hover:shadow-[0_6px_20px_-10px_var(--primary)]"
                >
                  <SimpleIcon
                    path={tech.path}
                    className="size-3.5 text-muted-foreground transition-colors group-hover:text-primary"
                  />
                  {tech.name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
