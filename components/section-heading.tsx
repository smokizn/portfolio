import { Reveal } from '@/components/reveal'

type SectionHeadingProps = {
  index: string
  label: string
  title: string
  description?: string
}

export function SectionHeading({ index, label, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 flex flex-col gap-4 md:mb-16">
      <p className="flex items-center gap-3 font-mono text-xs tracking-wider text-muted-foreground uppercase">
        <span className="text-primary">{index}</span>
        <span className="h-px w-8 bg-border" aria-hidden="true" />
        {label}
      </p>
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">{title}</h2>
      {description && <p className="max-w-xl leading-relaxed text-pretty text-muted-foreground">{description}</p>}
    </Reveal>
  )
}
