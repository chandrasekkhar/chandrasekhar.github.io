'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Sitemap', href: '#' },
  ]

  return (
    <footer className="bg-gradient-to-t from-card/50 to-transparent border-t border-white/10 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold gradient-text">Chandra Sekhar Kola</h3>
              <p className="text-sm text-foreground/70">
                CEO at RAPHA AI EDGE. Building the future of healthcare through edge AI innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-1">
                {[
                  { label: 'About', id: 'about' },
                  { label: 'Experience', id: 'experience' },
                  { label: 'Skills', id: 'skills' },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      const element = document.getElementById(link.id)
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="block text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <div className="space-y-1">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
            <p className="flex items-center gap-2">
              © {currentYear} Chandra Sekhar Kola. Crafted with{' '}
              <Heart size={14} className="text-primary fill-primary" /> for innovation.
            </p>
            <p>
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
