"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Figma } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "NUE (Nusantara Universal Education)",
    description:
      "A website project aimed at addressing the education access gap by providing learning opportunities for children in remote areas. Developed with a focus on accessibility and user-friendly interface.",
    image: "/NUE MCKP.png",
    tags: ["Web Development", "React.js", "Tailwind CSS"],
    links: {
      github: "#",
    },
  },
  {
    title: "ExotiScan Bangkit Capstone Project",
    description:
      "A mobile application designed to help users identify and learn about exotic plants. Features include plant recognition, detailed information, and care instructions.",
    image: "/exotiscan.png",
    tags: ["Machine Learning", "Mobile App"],
    links: {
      figma: "#",
    },
  },
  {
    title: "POS Resto Nursalih",
    description:
      "Creating Tablet version of the Offline Online POS Resto Application. Restful API Integration with Laravel 10, BloC State Management, Save data in the local storage with sqflite, Sync Product to Server Laravel.",
    image: "/fic14.png",
    tags: ["Flutter", "Laravel"],
    links: {
      live: "https://youtu.be/aIsydcacBq8",
    },
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-cyan-500/10 rounded-full blur-[80px] sm:blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-600/10 rounded-full blur-[80px] sm:blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/3 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-blue-500/10 rounded-full blur-[60px] sm:blur-[80px] -z-10 animate-pulse delay-300"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              Featured Projects
            </h2>
            <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto px-4">
              A showcase of my recent work in UI/UX design and frontend development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-2xl overflow-hidden border border-border/50 bg-background/30 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 sm:p-8 relative">
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 sm:px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-foreground/80 border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.links.live && (
                      <Button asChild variant="outline" size="sm" className="rounded-full border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-500/80 transition-all duration-300 text-xs sm:text-sm">
                        <Link href={project.links.live} target="_blank">
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button asChild variant="outline" size="sm" className="rounded-full border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-500/80 transition-all duration-300 text-xs sm:text-sm">
                        <Link href={project.links.github} target="_blank">
                          <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {project.links.figma && (
                      <Button asChild variant="outline" size="sm" className="rounded-full border-blue-500/50 hover:bg-blue-500/10 hover:border-blue-500/80 transition-all duration-300 text-xs sm:text-sm">
                        <Link href={project.links.figma} target="_blank">
                          <Figma className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          Design
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-24 sm:w-32 h-24 sm:h-32"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
