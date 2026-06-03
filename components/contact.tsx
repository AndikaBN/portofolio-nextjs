"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

const buttonClass =
  "rounded-none border-2 border-black px-5 py-3 font-black text-black shadow-[4px_4px_0px_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] dark:shadow-[4px_4px_0px_#C99F42] dark:hover:shadow-[2px_2px_0px_#E0B64A]"

const inputClass =
  "neo-dark-input rounded-none border-2 border-black bg-white text-black placeholder:text-black/50 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-background"

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
    <section id="contact" className="neo-dark-section relative border-b-2 border-black bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={itemVariants} className="mb-12 max-w-3xl">
            <div className="mb-4 inline-block border-2 border-black bg-secondary px-3 py-1 text-sm font-black text-black shadow-[3px_3px_0px_#000]">
              Contact
            </div>
            <h2 className="neo-dark-text mb-4 font-space text-4xl font-black leading-tight text-black md:text-5xl">Get In Touch</h2>
            <p className="neo-dark-text text-lg font-medium leading-8 text-black">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div variants={containerVariants} className="space-y-8">
              <motion.div variants={itemVariants} className="neo-dark-surface border-2 border-black bg-white p-6 text-black shadow-[6px_6px_0px_#000]">
                <h3 className="mb-6 font-space text-2xl font-black">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4 border-b-2 border-black pb-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black bg-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="mb-1 text-lg font-black">Email</h4>
                      <a
                        href="mailto:bintangnursalih275@gmail.com"
                        className="break-words font-medium underline decoration-2 underline-offset-4 transition hover:bg-primary hover:text-black"
                      >
                        bintangnursalih275@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-b-2 border-black pb-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black bg-secondary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-black">Phone</h4>
                      <a
                        href="tel:+6282340058195"
                        className="font-medium underline decoration-2 underline-offset-4 transition hover:bg-secondary hover:text-black"
                      >
                        +62 823 4005 8195
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black bg-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-black">Location</h4>
                      <p className="font-medium">Nusa Tenggara Barat, Indonesia</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="neo-dark-accent-panel border-2 border-black bg-primary p-6 text-black shadow-[6px_6px_0px_#000]">
                <h3 className="mb-4 font-space text-2xl font-black">Let's Connect</h3>
                <p className="mb-6 font-medium leading-7">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="outline" className={`${buttonClass} neo-dark-control bg-white`}>
                    <a href="https://linkedin.com/in/andikabintangnursalih" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" className={`${buttonClass} bg-accent`}>
                    <a href="mailto:bintangnursalih275@gmail.com">Email Me</a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="neo-dark-surface-lg border-2 border-black bg-white p-6 text-black shadow-[7px_7px_0px_#000] md:p-8">
                <h3 className="mb-6 font-space text-2xl font-black">Send Me a Message</h3>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-2 border-black bg-accent p-6 text-center text-black shadow-[4px_4px_0px_#000]"
                  >
                    <h4 className="mb-2 text-xl font-black">Message Sent!</h4>
                    <p className="font-medium">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-black">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                          className={inputClass}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-black">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          required
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-black">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Subject of your message"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-black">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        required
                        className={`${inputClass} min-h-[140px]`}
                      />
                    </div>

                    <Button type="submit" className={`${buttonClass} w-full bg-primary`} disabled={isSubmitting}>
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
