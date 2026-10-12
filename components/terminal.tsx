import { cn } from '@/lib/utils'

export function Terminal({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'w-60 overflow-hidden rounded-xl border border-border bg-card/90 font-mono text-[11px] leading-relaxed shadow-2xl shadow-black/30 backdrop-blur-md',
        className,
      )}
      role="img"
      aria-label="Terminal: whoami returns sakar@dev, currently returns building cool stuff"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="size-2 rounded-full bg-foreground/15" />
        <span className="size-2 rounded-full bg-foreground/15" />
        <span className="size-2 rounded-full bg-foreground/15" />
        <span className="ml-auto text-[10px] text-muted-foreground">zsh</span>
      </div>
      <div className="space-y-2 px-3 py-3" aria-hidden="true">
        <div>
          <p>
            <span className="text-primary">$</span> whoami
          </p>
          <p className="text-muted-foreground">sakar@dev</p>
        </div>
        <div>
          <p>
            <span className="text-primary">$</span> currently
          </p>
          <p className="caret text-muted-foreground">building cool stuff</p>
        </div>
      </div>
    </div>
  )
}
