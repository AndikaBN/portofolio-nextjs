"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setFormSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Get In Touch</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={containerVariants} className="space-y-8">
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email</h4>
                      <a
                        href="mailto:bintangnursalih275@gmail.com"
                        className="text-foreground/70 hover:text-cyan-500 transition-colors"
                      >
                        bintangnursalih275@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Phone</h4>
                      <a
                        href="tel:+6282340058195"
                        className="text-foreground/70 hover:text-purple-500 transition-colors"
                      >
                        +62 823 4005 8195
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Location</h4>
                      <p className="text-foreground/70">Nusa Tenggara Barat, Indonesia</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className="text-foreground/70 mb-6">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                <div className="flex gap-4">
                  <Button asChild variant="outline" className="rounded-full">
                    <a href="https://linkedin.com/in/andikabintangnursalih" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full">
                    <a href="mailto:bintangnursalih275@gmail.com">Email Me</a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="p-6 rounded-xl border border-border bg-background/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 rounded-lg bg-green-500/10 border border-green-500/30 text-center"
                  >
                    <h4 className="text-xl font-bold mb-2 text-green-500">Message Sent!</h4>
                    <p className="text-foreground/80">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                          className="rounded-lg border-border bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          required
                          className="rounded-lg border-border bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Subject of your message"
                        required
                        className="rounded-lg border-border bg-background/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        required
                        className="rounded-lg border-border bg-background/50 min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" className="w-full rounded-lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
