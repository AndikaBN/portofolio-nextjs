"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const buttonBase =
  "rounded-none border-2 border-black px-5 py-3 font-black text-black shadow-[4px_4px_0px_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] dark:shadow-[4px_4px_0px_#C99F42] dark:hover:shadow-[2px_2px_0px_#E0B64A]";

export default function Hero() {
  return (
    <section
      id="home"
      className="neo-dark-section relative overflow-hidden border-b-2 border-black pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-5"
            >
              <div className="flex flex-wrap gap-3">
                <div className="border-2 border-black bg-primary px-3 py-1.5 text-sm font-black text-black shadow-[3px_3px_0px_#000]">
                  Fullstack Developer
                </div>
                <div className="border-2 border-black bg-secondary px-3 py-1.5 text-sm font-black text-black shadow-[3px_3px_0px_#000]">
                  Machine Learning
                </div>
                <div className="border-2 border-black bg-accent px-3 py-1.5 text-sm font-black text-black shadow-[3px_3px_0px_#000]">
                  Mobile Developer
                </div>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="neo-dark-text mb-5 max-w-4xl font-space text-5xl font-black leading-[0.95] text-black md:text-6xl lg:text-7xl"
            >
              Andika Bintang Nursalih
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="neo-dark-text neo-dark-border mb-8 max-w-2xl border-l-4 border-black pl-5 text-lg font-medium leading-8 text-black md:text-xl"
            >
              I build mobile and web products with Flutter, Laravel, MERN Stack, and Next.js. I am an
              Information Technology student focused on clean UI, practical APIs, and reliable delivery.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button asChild className={`${buttonBase} bg-primary group`}>
                <Link href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild className={`${buttonBase} neo-dark-control bg-white`}>
                <Link href="/CV_SAYA_ASLI.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <Button asChild size="icon" className={`${buttonBase} h-11 w-11 bg-secondary p-0`}>
                  <Link
                    href="https://linkedin.com/in/andikabintangnursalih"
                    target="_blank"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button asChild size="icon" className={`${buttonBase} neo-dark-control h-11 w-11 bg-white p-0`}>
                  <Link href="https://www.instagram.com/anbin_007x" target="_blank">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
                <Button asChild size="icon" className={`${buttonBase} h-11 w-11 bg-accent p-0`}>
                  <Link href="https://github.com/AndikaBN" target="_blank">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[360px]">
              <div className="absolute -left-4 top-5 h-full w-full border-2 border-black bg-secondary"></div>
              <div className="neo-dark-surface-lg relative aspect-square overflow-hidden border-4 border-black bg-white shadow-[8px_8px_0px_#000]">
                <Image
                  src="/andika.webp"
                  alt="Andika Bintang Nursalih"
                  fill
                  className="object-cover grayscale-[20%]"
                  priority
                />
              </div>
              <div className="neo-dark-accent-panel absolute -bottom-5 -right-3 border-2 border-black bg-primary p-4 text-black shadow-[5px_5px_0px_#000] sm:-right-8">
                <div className="text-xs font-black uppercase">Experience</div>
                <div className="font-space text-3xl font-black">3+ Years</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center md:flex"
      >
        <span className="neo-dark-control mb-2 border-2 border-black bg-white px-3 py-1 text-xs font-black text-black shadow-[3px_3px_0px_#000]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="neo-dark-control flex h-10 w-6 justify-center border-2 border-black bg-white p-1"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="h-3 w-1.5 bg-black dark:bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
