'use client'

import { motion } from 'framer-motion'
import { Zap, Heart, Leaf, Target, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function StartupVision() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const pillars = [
    {
      icon: Heart,
      title: 'Healthcare Focused',
      description: 'Solutions specifically designed for healthcare industry challenges',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Edge AI Powered',
      description: 'Real-time AI processing at the edge for immediate insights',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Leaf,
      title: 'Privacy First',
      description: 'On-device processing protects patient data and privacy',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Rocket,
      title: 'Innovation Driven',
      description: 'Cutting-edge technology deployment for competitive advantage',
      color: 'from-blue-500 to-cyan-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="startup" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-primary/10 via-transparent to-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">RAPHA AI EDGE</h2>
              <div className="flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Pioneering the convergence of artificial intelligence and edge computing to revolutionize healthcare delivery
            </p>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass p-6 rounded-xl space-y-3">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                  <Target size={20} />
                  Our Mission
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  To democratize advanced AI capabilities through edge computing, enabling faster, 
                  more efficient, and privacy-preserving healthcare solutions that transform patient outcomes.
                </p>
              </div>

              <div className="glass p-6 rounded-xl space-y-3">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                  <Rocket size={20} />
                  Our Vision
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  A future where AI-powered healthcare is accessible, affordable, and personal — 
                  delivered at the edge for maximum efficiency and minimal latency.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-widest">The Problem We Solve</h3>
                <ul className="space-y-2 text-foreground/80">
                  {[
                    'Healthcare systems overwhelmed with data processing delays',
                    'Privacy concerns with cloud-based healthcare solutions',
                    'Lack of real-time AI-driven clinical insights',
                    'High latency in critical healthcare applications',
                  ].map((problem, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="text-primary font-bold">→</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right: Innovation & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass p-6 rounded-xl space-y-3">
                <h3 className="text-xl font-bold text-primary mb-4">Our Innovation</h3>
                <ul className="space-y-3">
                  {[
                    'Proprietary edge AI algorithms optimized for healthcare',
                    'Real-time processing with sub-100ms latency',
                    'Privacy-preserving on-device model inference',
                    'Seamless integration with existing healthcare systems',
                    'Explainable AI for clinical trust and transparency',
                  ].map((innovation, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-foreground/80">
                      <span className="text-accent font-bold text-lg leading-none mt-0.5">✓</span>
                      <span>{innovation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '50ms', label: 'Response Time' },
                  { number: '99.9%', label: 'Uptime' },
                  { number: '100%', label: 'Data Privacy' },
                  { number: '24/7', label: 'Support' },
                ].map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-4 text-center rounded-lg"
                  >
                    <div className="text-2xl font-bold text-primary">{metric.number}</div>
                    <div className="text-xs text-foreground/60 mt-1">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Four pillars */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group glass p-5 rounded-xl text-center hover:border-primary/50 transition-all duration-300"
                  whileHover={{ y: -8, rotate: 1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${pillar.color} p-3 mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-sm text-foreground/70">{pillar.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-xl text-center space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Interested in Partnership or Investment?</h3>
              <p className="text-foreground/70">
                Let&apos;s discuss how RAPHA AI EDGE can transform healthcare through edge AI innovation.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
