'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  // Enhanced stat counter animation
  const StatCard = ({ number, label }: { number: string; label: string }) => (
    <motion.div
      className="glass p-4 text-center rounded-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.2)' }}
    >
      <div className="text-2xl font-bold text-primary">{number}</div>
      <div className="text-xs text-foreground/60 mt-1">{label}</div>
    </motion.div>
  )

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 flex items-center overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow text */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 glass mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-foreground/80">CEO | AI Innovator | Business Strategist</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Building the Future of{' '}
            <span className="gradient-text">Edge AI Healthcare</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            Welcome to the executive portfolio of Chandra Sekhar Kola. Pioneering innovation in AI on the Edge, 
            transforming healthcare through strategic vision and technological excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('about')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              Explore Portfolio
              <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-white/20 text-foreground hover:bg-white/10 gap-2"
            >
              <Download size={18} />
              Download Resume
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 max-w-xl mx-auto pt-12"
          >
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '20+', label: 'Projects Delivered' },
              { number: '10+', label: 'Industry Awards' },
            ].map((stat, idx) => (
              <StatCard key={idx} number={stat.number} label={stat.label} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-foreground/50 uppercase tracking-widest">Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-foreground/30 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
