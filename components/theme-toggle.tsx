'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="relative inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
      aria-label="Toggle color theme"
    >
      <Sun className="size-4 scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0" />
      <Moon className="absolute size-4 scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90" />
    </button>
  )
}
