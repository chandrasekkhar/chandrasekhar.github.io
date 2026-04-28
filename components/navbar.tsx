'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Linkedin, Github, Mail, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'RAPHA AI EDGE', id: 'startup' },
    { label: 'Contact', id: 'contact' },
  ]

  const socialLinks = [
    {
      icon: Globe,
      href: 'https://raphaedgeai.com/',
      label: 'Website',
      color: 'hover:text-primary',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/chandra-sekhar-kola',
      label: 'LinkedIn',
      color: 'hover:text-[#0A66C2]',
    },
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
      color: 'hover:text-gray-400',
    },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'glass border-b border-white/10 py-3'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="text-xl font-bold gradient-text">Chandra Sekhar Kola</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-lg hover:bg-white/5"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-3 items-center">
          {/* Social Icons */}
          <div className="flex items-center gap-2 pr-3 border-r border-white/10">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className={`p-2 text-foreground/70 transition-colors rounded-lg hover:bg-white/5 ${social.color}`}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:bg-white/10"
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/10 mt-4 animate-fadeInUp">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-white/5 transition-colors rounded-lg"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-white/10 space-y-3">
              {/* Mobile Social Icons */}
              <div className="flex gap-2 px-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      className={`p-2 text-foreground/70 transition-colors rounded-lg hover:bg-white/5 ${social.color}`}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
              <Button
                className="w-full"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
