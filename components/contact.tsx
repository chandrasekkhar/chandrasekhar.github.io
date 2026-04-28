'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@raphaiege.com',
      href: 'mailto:hello@raphaiege.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6309697294',
      href: 'tel:+916309697294',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '2nd floor, Corporate Bhawan, GSI Post, Nagole, Bandlaguda, Hyderabad 500068, Telangana',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/chandrasekkhar',
      color: 'hover:text-gray-400',
    },

  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            <p className="text-foreground/70">
              I&apos;d love to hear from you. Whether you have a question, partnership opportunity, or investment proposal,
              feel free to reach out.
            </p>
          </div>

          {/* Contact info & form grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Contact details */}
              <div className="space-y-4">
                {contactInfo.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={idx}
                      href={item.href}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="glass p-4 rounded-lg flex items-start gap-3 group hover:border-primary/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground/60 uppercase">{item.label}</p>
                        <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Social links */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground/70 uppercase">Follow</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className={`glass w-12 h-12 rounded-lg flex items-center justify-center text-foreground/70 transition-all duration-300 hover:border-primary/50 ${social.color}`}
                      >
                        <Icon size={20} />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground/80">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground/80">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-foreground/80">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Your message subject"
                    className="w-full px-4 py-2.5 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Tell me more about your inquiry..."
                    className="w-full px-4 py-2.5 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-2.5 rounded-lg font-semibold transition-all duration-300 ${submitted
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                    : 'bg-primary hover:bg-primary/90 text-primary-foreground border border-primary'
                    }`}
                >
                  {submitted ? '✓ Message Sent Successfully' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
