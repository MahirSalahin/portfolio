import { motion, useInView } from "framer-motion"
import { useTheme } from "next-themes"
import { useState, useEffect, useRef } from "react"
import { FaCode, FaTrophy, FaMedal, FaChartLine } from "react-icons/fa"

interface Platform {
  name: string
  handle: string
  rating: string
  solved: number
  rank?: string
  link: string
  color: string
}

const platforms: Platform[] = [
  {
    name: "LeetCode",
    handle: "zorlan",
    rating: "1900+",
    solved: 500,
    rank: "Knight",
    link: "https://leetcode.com/zorlan/",
    color: "from-[#FFA116] to-[#FF6B6B]",
  },
  {
    name: "CodeForces",
    handle: "sorcerer_21",
    rating: "1400+",
    solved: 600,
    rank: "Specialist",
    link: "https://codeforces.com/profile/sorcerer_21",
    color: "from-[#1890FF] to-[#36CFC9]",
  },
]

const stats = [
  {
    label: "Problems Solved",
    value: 1200,
    icon: FaCode,
    color: "from-emerald-500 to-teal-500",
  },
  {
    label: "Contests Participated",
    value: 100,
    icon: FaTrophy,
    color: "from-orange-500 to-amber-500",
  },
  {
    label: "On LeetCode",
    value: 4.4,
    suffix: "%",
    prefix: "Top ",
    icon: FaChartLine,
    color: "from-blue-500 to-cyan-500",
  },
]

const Counter = ({ value, duration = 2000, decimals = 0 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })  // Add once: true here
  const countStarted = useRef(false)

  useEffect(() => {
    if (isInView && !countStarted.current) {
      countStarted.current = true
      const steps = Math.floor(duration / (1000 / 60))
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Number(current.toFixed(decimals)))
        }
      }, 1000 / 60)
      return () => clearInterval(timer)
    }
  }, [isInView, value, duration, decimals])

  // Always show final value if animation has completed
  if (!isInView && countStarted.current) {
    return <span>{value}</span>
  }

  return <span ref={ref}>{count}</span>
}

const PlatformCard = ({ platform }: { platform: Platform }) => {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })  // Add once: true here

  const extractNumber = (rating: string) => {
    return parseInt(rating.replace(/[^0-9]/g, ''))
  }

  return (
    <motion.a
      ref={ref}
      href={platform.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block p-6 sm:p-8 rounded-2xl ${
        isDark ? "bg-dark-800/60" : "bg-white/80"
      } backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100/20 dark:border-dark-700/50`}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center justify-between">
          <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
            {platform.name}
          </div>
          <motion.div 
            className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300"
            whileHover={{ rotate: 15 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.div>
        </div>
        <div className="space-y-2 sm:space-y-3">
          {[
            { label: "Handle", value: platform.handle },
            { 
              label: "Rating", 
              value: isInView ? (
                <><Counter value={extractNumber(platform.rating)} />+</> 
              ) : platform.rating 
            },
            { 
              label: "Problems Solved", 
              value: isInView ? (
                <><Counter value={platform.solved} />+</> 
              ) : `${platform.solved}+`
            },
            ...(platform.rank ? [{ label: "Rank", value: platform.rank }] : [])
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between">
              <div className={`text-xs sm:text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                {label}
              </div>
              <div className="font-semibold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                {typeof value === "number" ? `${value}+` : value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

const StatCard = ({ stat }: { stat: (typeof stats)[0] }) => {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const Icon = stat.icon
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })  // Add once: true here

  return (
    <motion.div
      ref={ref}
      className={`p-6 sm:p-8 rounded-2xl ${
        isDark ? "bg-dark-800/60" : "bg-white/80"
      } backdrop-blur-lg shadow-xl border border-gray-100/20 dark:border-dark-700/50 w-full`}
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4 sm:gap-6">
        <div className={`p-4 sm:p-5 rounded-xl bg-gradient-to-br ${stat.color}`}>
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        <div>
          <div className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {stat.prefix || ""}
            {isInView ? (
              <Counter 
                value={stat.value} 
                decimals={Number.isInteger(stat.value) ? 0 : 1} 
              />
            ) : stat.value}
            {stat.suffix || "+"}
          </div>
          <div className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400">{stat.label}</div>
        </div>
      </div>
    </motion.div>
  )
}

export const CompetitiveProgramming = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === "dark"

  return (
    <section id="cp" className="relative py-12 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mt-8 mb-4 sm:mb-6 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Competitive Programming
          </h2>
          <p className={`text-lg sm:text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-3xl mx-auto`}>
            Solving complex algorithmic challenges and competing in programming contests
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
          >
            {platforms.map((platform, index) => (
              <PlatformCard key={index} platform={platform} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

