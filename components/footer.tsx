"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-space font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-600">
              AnbinDev
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:text-left text-foreground/70"
          >
            © {new Date().getFullYear()} Andika Bintang Nursalih. All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {/* Uncomment and update GitHub link below if you want to show your GitHub */}
            {/* <Link
              href="https://github.com/USERNAME"
              target="_blank"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link> */}
            <Link
              href="https://linkedin.com/in/andikabintangnursalih"
              target="_blank"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:bintangnursalih275@gmail.com"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
