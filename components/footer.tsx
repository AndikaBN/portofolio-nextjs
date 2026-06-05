"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="neo-dark-footer border-t-2 border-black bg-primary py-8 text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0px_#000] dark:bg-primary dark:text-black dark:shadow-[3px_3px_0px_#111111]">
              <span className="text-sm font-black">A</span>
            </div>
            <span className="font-space text-lg font-black">
              AnbinDev
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center font-bold md:text-left"
          >
            © {new Date().getFullYear()} Andika Bintang Nursalih. All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <Link
              href="https://linkedin.com/in/andikabintangnursalih"
              target="_blank"
              className="neo-dark-control border-2 border-black bg-white p-2 shadow-[3px_3px_0px_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#000]"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/andikabintang"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-dark-control border-2 border-black bg-white p-2 shadow-[3px_3px_0px_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#000]"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
