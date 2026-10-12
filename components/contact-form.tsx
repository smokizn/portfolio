'use client'

import { ArrowUpRight } from 'lucide-react'
import type { FormEvent } from 'react'
import { site } from '@/lib/site'

const inputClass =
  'w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground/60 transition-colors outline-none hover:border-foreground/20 focus:border-primary/60 focus:ring-2 focus:ring-primary/15'

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Hello from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-border bg-card/60 p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm text-muted-foreground">Name</span>
          <input name="name" required autoComplete="name" placeholder="Your name" className={inputClass} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-muted-foreground">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-sm text-muted-foreground">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your idea…"
          className={`${inputClass} resize-none`}
        />
      </label>
      <button
        type="submit"
        className="group mt-2 inline-flex h-11 items-center justify-center gap-2 self-start rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_24px_-4px_var(--primary)]"
      >
        Send Message
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </form>
  )
}
