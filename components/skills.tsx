'use client'

import { motion } from 'framer-motion'
import {
  Cpu,
  Bot,
  MessageSquare,
  BarChart3,
  Database,
  Zap,
  TrendingUp,
  Lightbulb,
  Target,
  Trophy,
} from 'lucide-react'

export function Skills() {
  const skills = [
    { name: 'Artificial Intelligence', icon: Bot, color: 'from-blue-500 to-cyan-500' },
    { name: 'Edge AI', icon: Cpu, color: 'from-purple-500 to-pink-500' },
    { name: 'NLP', icon: MessageSquare, color: 'from-cyan-500 to-blue-500' },
    { name: 'Large Language Models', icon: Lightbulb, color: 'from-amber-500 to-orange-500' },
    { name: 'Power BI', icon: BarChart3, color: 'from-orange-500 to-red-500' },
    { name: 'SQL', icon: Database, color: 'from-green-500 to-emerald-500' },
    { name: 'Business Analysis', icon: TrendingUp, color: 'from-pink-500 to-rose-500' },
    { name: 'Data Visualization', icon: Zap, color: 'from-red-500 to-pink-500' },
    { name: 'Strategic Planning', icon: Target, color: 'from-indigo-500 to-blue-500' },
    { name: 'Fundraising', icon: Trophy, color: 'from-yellow-500 to-amber-500' },
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
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Core Competencies</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            <p className="text-foreground/70 max-w-2xl">
              A comprehensive skill set spanning AI innovation, business strategy, and data intelligence.
            </p>
          </div>

          {/* Skills grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, idx) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="space-y-3">
                    {/* Icon container */}
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} p-2.5 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-full h-full text-white" />
                    </div>

                    {/* Name and description */}
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                    </div>

                    {/* Hover indicator */}
                    <div className="h-0.5 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 rounded-full" />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Skill categories summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Technical',
                  skills: ['AI/ML', 'Edge Computing', 'NLP/LLMs', 'SQL', 'Python'],
                },
                {
                  title: 'Data & Analytics',
                  skills: ['Power BI', 'Data Visualization', 'Statistical Analysis', 'Business Intelligence'],
                },
                {
                  title: 'Leadership',
                  skills: ['Strategy', 'Business Analysis', 'Fundraising', 'Team Management', 'Innovation'],
                },
              ].map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-primary">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, sidx) => (
                      <li key={sidx} className="flex items-center gap-2 text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
