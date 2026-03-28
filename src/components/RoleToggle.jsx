import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const ROLES = ['Admin', 'Faculty', 'Student']

export function RoleToggle({ value, onChange }) {
  return (
    <div
      className="relative flex rounded-full border border-surface-border bg-black/20 p-1"
      role="tablist"
      aria-label="Sign-in role"
    >
      {ROLES.map((role) => (
        <button
          key={role}
          type="button"
          role="tab"
          aria-selected={value === role}
          onClick={() => onChange(role)}
          className={cn(
            'relative min-w-0 flex-1 rounded-full py-2.5 text-center text-sm font-medium font-body transition-colors',
            value === role ? 'text-white' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]',
          )}
        >
          {value === role && (
            <motion.div
              layoutId="role-pill"
              className="absolute inset-0 rounded-full bg-accent shadow-accent-glow"
              transition={{ type: 'spring', stiffness: 420, damping: 32 }}
            />
          )}
          <span className="relative z-10 px-1">{role}</span>
        </button>
      ))}
    </div>
  )
}
