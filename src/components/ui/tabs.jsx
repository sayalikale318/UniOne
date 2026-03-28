import * as React from 'react'
import { cn } from '@/lib/utils'

const TabsContext = React.createContext({ value: '', onValueChange: () => {} })

function Tabs({ className, value, onValueChange, children, ...props }) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className={cn('w-full', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

function TabsList({ className, ...props }) {
  return (
    <div
      role="tablist"
      className={cn(
        'inline-flex h-11 items-center justify-center rounded-full border border-surface-border bg-black/20 p-1',
        className,
      )}
      {...props}
    />
  )
}

function TabsTrigger({ className, value: tabValue, children, ...props }) {
  const { value, onValueChange } = React.useContext(TabsContext)
  const active = value === tabValue
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={cn(
        'relative z-10 inline-flex flex-1 items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors',
        active
          ? 'text-white'
          : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]',
        className,
      )}
      onClick={() => onValueChange(tabValue)}
      {...props}
    >
      {children}
    </button>
  )
}

export { Tabs, TabsList, TabsTrigger }
