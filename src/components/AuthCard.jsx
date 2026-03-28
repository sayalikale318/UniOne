import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card.jsx'

export function AuthCard({ children, className, ...props }) {
  return (
    <Card
      className={cn(
        'glass-card relative z-[1] w-full shadow-2xl border-surface-border',
        className,
      )}
      {...props}
    >
      {children}
    </Card>
  )
}
