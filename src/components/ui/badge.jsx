import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold font-body transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-accent/20 text-accent shadow-sm',
        secondary: 'border-transparent bg-white/10 text-[var(--text-primary)]',
        outline: 'border-surface-border text-[var(--text-muted)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
