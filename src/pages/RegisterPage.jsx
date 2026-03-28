import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  Eye,
  EyeOff,
  GraduationCap,
  Loader2,
  Mail,
  Phone,
  User,
} from 'lucide-react'
import { AuthCard } from '@/components/AuthCard.jsx'
import { RoleSelector } from '@/components/RoleSelector.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.jsx'

function isValidEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).trim())
}

const staggerParent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.06 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export default function RegisterPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [role, setRole] = useState('Student')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const passwordsMatch =
    password.length > 0 && confirm.length > 0 && password === confirm

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (
      !fullName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !password ||
      !confirm
    ) {
      setError('Please fill in all fields.')
      return
    }
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
  }

  return (
    <div className="auth-bg relative min-h-screen overflow-y-auto">
      <div
        className="pointer-events-none absolute h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: '#4f8ef7',
          top: '12%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <AuthCard className="relative z-[1] my-8 max-h-[calc(100vh-4rem)] max-w-[500px] overflow-y-auto">
        <CardHeader className="space-y-4 text-center sm:text-left">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-border bg-white/5 sm:mx-0">
            <GraduationCap className="h-8 w-8 text-accent" />
          </div>
          <div>
            <CardTitle>Create Account</CardTitle>
            <CardDescription className="mt-1.5">
              Join the platform
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <motion.form
            className="space-y-4"
            onSubmit={handleSubmit}
            noValidate
            variants={staggerParent}
            initial="hidden"
            animate="show"
          >
            <motion.div className="space-y-2" variants={staggerItem}>
              <Label htmlFor="reg-name">Full Name</Label>
              <div className="input-glow flex items-center gap-2 rounded-lg border border-surface-border bg-black/20 px-3 transition-[box-shadow,border-color]">
                <User className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
                <Input
                  id="reg-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className="border-0 bg-transparent px-0 focus-visible:ring-0"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </motion.div>
            <motion.div className="space-y-2" variants={staggerItem}>
              <Label htmlFor="reg-email">Email Address</Label>
              <div className="input-glow flex items-center gap-2 rounded-lg border border-surface-border bg-black/20 px-3 transition-[box-shadow,border-color]">
                <Mail className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
                <Input
                  id="reg-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="border-0 bg-transparent px-0 focus-visible:ring-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </motion.div>
            <motion.div className="space-y-2" variants={staggerItem}>
              <Label htmlFor="reg-phone">Phone Number</Label>
              <div className="input-glow flex items-center gap-2 rounded-lg border border-surface-border bg-black/20 px-3 transition-[box-shadow,border-color]">
                <Phone className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
                <Input
                  id="reg-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+1 555 000 0000"
                  className="border-0 bg-transparent px-0 focus-visible:ring-0"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </motion.div>
            <motion.div className="space-y-2" variants={staggerItem}>
              <Label htmlFor="reg-password">Password</Label>
              <div className="input-glow flex items-center gap-2 rounded-lg border border-surface-border bg-black/20 px-3 transition-[box-shadow,border-color]">
                <Input
                  id="reg-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="Min. 8 characters"
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
            </motion.div>
            <motion.div className="space-y-2" variants={staggerItem}>
              <Label htmlFor="reg-confirm">Confirm Password</Label>
              <div className="input-glow flex items-center gap-2 rounded-lg border border-surface-border bg-black/20 px-3 transition-[box-shadow,border-color]">
                <Input
                  id="reg-confirm"
                  type={showConfirm ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="Repeat password"
                  className="border-0 bg-transparent px-0 focus-visible:ring-0"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />
                <div className="flex shrink-0 items-center gap-1">
                  <AnimatePresence mode="wait">
                    {passwordsMatch && (
                      <motion.span
                        key="ok"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--success)]/20 text-[var(--success)]"
                        aria-label="Passwords match"
                      >
                        <Check className="h-4 w-4" strokeWidth={3} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <button
                    type="button"
                    className="rounded-md p-1 text-[var(--text-muted)] hover:bg-white/10 hover:text-[var(--text-primary)]"
                    onClick={() => setShowConfirm((v) => !v)}
                    aria-label={
                      showConfirm ? 'Hide confirm password' : 'Show confirm password'
                    }
                  >
                    {showConfirm ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div className="space-y-2" variants={staggerItem}>
              <Label>Role</Label>
              <RoleSelector value={role} onChange={setRole} />
            </motion.div>
            {error && (
              <p className="text-sm text-[var(--danger)]" role="alert">
                {error}
              </p>
            )}
            <motion.div variants={staggerItem} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button
                type="submit"
                className="h-12 w-full font-semibold"
                disabled={loading}
              >
                <motion.span className="inline-flex items-center gap-2">
                  {loading && (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  )}
                  Create Account
                </motion.span>
              </Button>
            </motion.div>
          </motion.form>
          <p className="mt-5 text-center text-sm text-[var(--text-muted)]">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-semibold text-accent hover:underline"
            >
              Sign in
            </Link>
          </p>
        </CardContent>
      </AuthCard>
    </div>
  )
}
