'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
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
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Right: Professional Headshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative order-2 md:order-2"
            >
              {/* Glassmorphic frame */}
              <div className="relative rounded-2xl overflow-hidden glass p-1 shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-shadow duration-300">
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none rounded-xl" />
                
                {/* Image container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src="/chandra-headshot.jpg"
                    alt="Chandra Sekhar Kola - CEO of RAPHA AI EDGE"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                    quality={85}
                  />
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
              />
            </motion.div>

            {/* Left: Bio text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 md:order-1"
            >
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  I am <span className="font-semibold text-primary">Chandra Sekhar Kola</span>, Chief Executive Officer and founder of 
                  <span className="font-semibold text-primary"> RAPHA AI EDGE PRIVATE LIMITED</span>, a pioneering company at the 
                  intersection of artificial intelligence and edge computing for healthcare solutions.
                </p>

                <p>
                  With a strong foundation in <span className="font-semibold">Electronics and Computer Science</span>, I have 
                  dedicated my career to advancing the frontiers of AI technology. My expertise spans across:
                </p>

                <ul className="space-y-2 ml-4">
                  {[
                    'Artificial Intelligence & Machine Learning',
                    'Edge AI & Real-time Processing',
                    'Natural Language Processing (NLP)',
                    'Large Language Models (LLMs)',
                    'Healthcare AI Solutions',
                    'Business Strategy & Leadership',
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-primary font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p>
                  As a visionary leader, I combine technical innovation with strategic business acumen to transform 
                  how healthcare leverages cutting-edge AI technologies. My mission is to democratize advanced AI capabilities 
                  through edge computing, enabling faster, more efficient, and privacy-preserving healthcare solutions.
                </p>
              </div>
            </motion.div>

            {/* Right: Key highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4 order-3 md:order-3"
            >
              {[
                {
                  title: 'Current Role',
                  description: 'CEO & Founder, RAPHA AI EDGE',
                  icon: '🚀',
                },
                {
                  title: 'Background',
                  description: 'Electronics & Computer Science',
                  icon: '🎓',
                },
                {
                  title: 'Expertise',
                  description: 'Edge AI, NLP, LLMs, Healthcare Tech',
                  icon: '⚙️',
                },
                {
                  title: 'Location',
                  description: 'Vijayawada, Andhra Pradesh, India',
                  icon: '📍',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-5 space-y-2 rounded-xl hover:border-primary/30 transition-colors"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
