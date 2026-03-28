import { motion } from 'framer-motion'
import { BookOpen, Check, GraduationCap, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

const OPTIONS = [
  {
    id: 'Admin',
    icon: Shield,
    label: 'Admin',
    description: 'Full system access',
  },
  {
    id: 'Faculty',
    icon: BookOpen,
    label: 'Faculty',
    description: 'Manage courses & students',
  },
  {
    id: 'Student',
    icon: GraduationCap,
    label: 'Student',
    description: 'Access learning materials',
  },
]

export function RoleSelector({ value, onChange }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {OPTIONS.map((opt) => {
        const Icon = opt.icon
        const selected = value === opt.id
        return (
          <motion.button
            key={opt.id}
            type="button"
            layout
            onClick={() => onChange(opt.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              'relative rounded-xl border bg-black/15 p-4 text-left transition-colors',
              selected
                ? 'border-accent/80 bg-accent/15 shadow-[0_0_20px_rgba(79,142,247,0.25)]'
                : 'border-surface-border hover:border-white/20',
            )}
          >
            {selected && (
              <motion.span
                layoutId="role-check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white shadow-sm"
              >
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </motion.span>
            )}
            <Icon
              className={cn(
                'mb-2 h-8 w-8',
                selected ? 'text-accent' : 'text-[var(--text-muted)]',
              )}
            />
            <p className="font-display font-semibold text-[var(--text-primary)]">
              {opt.label}
            </p>
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              {opt.description}
            </p>
          </motion.button>
        )
      })}
    </div>
  )
}
