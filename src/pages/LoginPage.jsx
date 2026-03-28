import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Eye,
  EyeOff,
  GraduationCap,
  Loader2,
  Lock,
  Mail,
  Shield,
} from 'lucide-react'
import { AuthCard } from '@/components/AuthCard.jsx'
import { RoleToggle } from '@/components/RoleToggle.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.jsx'

const roleIcons = {
  Admin: Shield,
  Faculty: BookOpen,
  Student: GraduationCap,
}

function isValidEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).trim())
}

export default function LoginPage() {
  const [role, setRole] = useState('Student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const Icon = roleIcons[role] ?? GraduationCap

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!email.trim() || !password) {
      setError('Please enter email and password.')
      return
    }
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
  }

  const label = `Sign in as ${role}`

  return (
    <div className="auth-bg relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: '#4f8ef7',
          top: '18%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <AuthCard className="relative z-[1] max-w-[420px]">
        <CardHeader className="space-y-4 text-center sm:text-left">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-border bg-white/5 sm:mx-0">
            <motion.div
              key={role}
              initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.28 }}
            >
              <Icon className="h-8 w-8 text-accent" />
            </motion.div>
          </div>
          <div>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription className="mt-1.5">
              Sign in to continue
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <RoleToggle value={role} onChange={setRole} />
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="space-y-2">
              <Label htmlFor="login-email">Email</Label>
              <div className="input-glow flex items-center gap-2 rounded-lg border border-surface-border bg-black/20 px-3 transition-[box-shadow,border-color]">
                <Mail className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
                <Input
                  id="login-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="border-0 bg-transparent px-0 focus-visible:ring-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="login-password">Password</Label>
                <button
                  type="button"
                  className="text-xs text-[var(--text-muted)] underline-offset-2 hover:text-accent hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="input-glow flex items-center gap-2 rounded-lg border border-surface-border bg-black/20 px-3 transition-[box-shadow,border-color]">
                <Lock className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
                <Input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="border-0 bg-transparent px-0 focus-visible:ring-0"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="rounded-md p-1 text-[var(--text-muted)] hover:bg-white/10 hover:text-[var(--text-primary)]"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            {error && (
              <p className="text-sm text-[var(--danger)]" role="alert">
                {error}
              </p>
            )}
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button
                type="submit"
                className="h-12 w-full font-semibold"
                disabled={loading}
              >
                <motion.span
                  className="inline-flex items-center gap-2"
                  initial={false}
                  animate={{ opacity: loading ? 0.85 : 1 }}
                >
                  {loading && (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  )}
                  {label}
                </motion.span>
              </Button>
            </motion.div>
          </form>
          <p className="text-center text-sm text-[var(--text-muted)]">
            Don&apos;t have an account?{' '}
            <Link
              to="/register"
              className="font-semibold text-accent hover:underline"
            >
              Register
            </Link>
          </p>
        </CardContent>
      </AuthCard>
    </div>
  )
}
