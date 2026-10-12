import { site } from '@/lib/site'

const links = [
  { label: 'GitHub', href: site.github },
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'Email', href: `mailto:${site.email}` },
]

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 pt-8 pb-10 md:px-8">
      <div className="flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold tracking-tight">
            Sakar<span className="text-primary">.</span>
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">Built with curiosity &amp; caffeine.</p>
        </div>
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-8 font-mono text-xs text-muted-foreground/70">© 2026 Sakar Adhikari</p>
    </footer>
  )
}
