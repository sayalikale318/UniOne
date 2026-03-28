import {
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
} from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

const pageTransition = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

function AnimatedLayout() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
        className="min-h-screen"
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<AnimatedLayout />}>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Route>
    </Routes>
  )
}
