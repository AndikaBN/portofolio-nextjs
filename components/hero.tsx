"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-28 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1 md:pl-12"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 inline-block"
            >
              <div className="flex gap-4">
                <div className="px-4 py-1.5 rounded-full border border-border bg-accent/30 text-sm font-medium">
                  Fullstack Developer
                </div>
                <div className="px-4 py-1.5 rounded-full border border-border bg-accent/30 text-sm font-medium">
                  Machine Learning
                </div>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 animate-gradient"
            >
              Andika Bintang Nursalih
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-foreground/80 mb-8 max-w-lg"
            >
              Information Technology student with expertise in Fullstack Development and Machine Learning. 
              Experienced in Laravel, MERN Stack, and Next.js. Passionate about implementing innovative 
              technology solutions and continuous learning.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild className="rounded-full group">
                <Link href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild className="rounded-full">
                <Link href="/CV_SAYA_ASLI.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
              <div className="flex items-center gap-3 ml-1">
                <Button asChild className="rounded-full">
                  <Link
                    href="https://linkedin.com/in/andikabintangnursalih"
                    target="_blank"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button asChild className="rounded-full">
                  <Link href="mailto:bintangnursalih275@gmail.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
                <Button asChild className="rounded-full">
                  <Link href="tel:082340058195">
                    <Phone className="h-5 w-5" />
                    <span className="sr-only">Phone</span>
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
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-2 border-cyan-500/30 overflow-hidden">
                <Image
                  src="/andika.png"
                  alt="Andika Bintang Nursalih"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background/80 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg">
                <div className="text-sm font-medium">Experience</div>
                <div className="text-2xl font-bold text-cyan-500">2+ Years</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-foreground/60 mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-1.5 h-3 bg-cyan-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
