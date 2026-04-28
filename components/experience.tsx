'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      company: 'RAPHA AI EDGE',
      role: 'Chief Executive Officer',
      duration: 'Present',
      year: '2023',
      description: 'Founded and leading a healthcare AI company focused on edge AI solutions. Driving innovation in real-time healthcare applications using advanced ML and AI technologies.',
      achievements: [
        'Established scalable edge AI platform for healthcare',
        'Built high-performing technical and business teams',
        'Secured strategic partnerships in healthcare sector',
      ],
    },
    {
      company: 'SANVAN SOFTWARE',
      role: 'Business Analyst',
      duration: '2021 - 2023',
      year: '2021',
      description: 'Analyzed business requirements and delivered strategic solutions for enterprise clients. Bridged technical and business teams for successful project delivery.',
      achievements: [
        'Delivered 15+ analytics projects to major clients',
        'Improved process efficiency by 40%',
        'Led data visualization initiatives',
      ],
    },
    {
      company: 'Accenture',
      role: 'Data Analytics Intern',
      duration: '2020 - 2021',
      year: '2020',
      description: 'Worked with enterprise clients on data analysis and business intelligence. Gained exposure to cloud platforms and advanced analytics tools.',
      achievements: [
        'Completed 5+ analytics projects successfully',
        'Mastered Power BI and SQL',
        'Provided insights driving client decisions',
      ],
    },
    {
      company: 'JPMorgan Chase',
      role: 'Investment Banking Intern',
      duration: '2019 - 2020',
      year: '2019',
      description: 'Supported investment banking team with financial analysis and market research. Developed deep understanding of financial markets and M&A processes.',
      achievements: [
        'Analyzed 10+ deal opportunities',
        'Created financial models and valuations',
        'Presented insights to senior leadership',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6">
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
            <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          {/* Timeline */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative glass p-6 sm:p-8 rounded-xl border-l-2 border-primary hover:border-accent transition-colors duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute -left-4 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background" />

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  {/* Company & Role */}
                  <div className="md:col-span-2 space-y-2">
                    <div className="flex items-start gap-2">
                      <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                        <p className="text-foreground/80 font-semibold">{exp.company}</p>
                      </div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-start gap-2 md:justify-end">
                    <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div className="text-right">
                      <p className="text-sm font-semibold text-accent">{exp.duration}</p>
                      <p className="text-xs text-foreground/50">{exp.year}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/70 mb-4 leading-relaxed">{exp.description}</p>

                {/* Achievements */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground/80">Key Achievements:</p>
                  <ul className="grid gap-2 text-sm text-foreground/70">
                    {exp.achievements.map((achievement, aidx) => (
                      <li key={aidx} className="flex gap-2 items-start">
                        <span className="text-accent font-bold">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
