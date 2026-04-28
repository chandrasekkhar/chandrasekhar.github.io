'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

export function Certifications() {
  const certifications = [
    {
      title: 'JPMorgan Software Engineering',
      issuer: 'JPMorgan Chase',
      description: 'Comprehensive software engineering and financial technology program',
      year: '2020',
      icon: '💼',
    },
    {
      title: 'Investment Banking Simulation',
      issuer: 'JPMorgan Chase',
      description: 'Advanced investment banking and M&A analysis certification',
      year: '2020',
      icon: '📊',
    },
    {
      title: 'Accenture Data Analytics',
      issuer: 'Accenture',
      description: 'Professional data analytics and business intelligence certification',
      year: '2021',
      icon: '📈',
    },
    {
      title: 'AI Upskilling Certificate',
      issuer: 'Leading AI Institute',
      description: 'Advanced artificial intelligence and machine learning specialization',
      year: '2023',
      icon: '🤖',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="certifications" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Certifications & Credentials</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            <p className="text-foreground/70 max-w-2xl">
              Recognized professional certifications and continuous learning achievements.
            </p>
          </div>

          {/* Certifications grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.3)' }}
              >
                <div className="space-y-4">
                  {/* Header with icon and year */}
                  <div className="flex items-start justify-between">
                    <motion.div 
                      className="text-3xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {cert.icon}
                    </motion.div>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <Award size={16} className="text-primary" />
                      <span className="font-semibold">{cert.issuer}</span>
                    </div>
                    <p className="text-sm text-foreground/70 leading-relaxed">{cert.description}</p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="h-0.5 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 rounded-full" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Continuous learning statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-xl border-l-2 border-primary"
          >
            <div className="flex gap-4">
              <div className="text-2xl">📚</div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Continuous Learning</h3>
                <p className="text-foreground/70 text-sm">
                  Committed to staying at the forefront of AI innovation and industry trends. 
                  Actively pursuing advanced certifications in emerging technologies including 
                  edge computing, advanced NLP, and healthcare AI solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
