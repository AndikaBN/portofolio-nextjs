"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Nusantara Universal Education",
    category: "Education Website",
    images: ["/NUE MCKP.webp"],
    description:
      "NUE (Nusantara Universal Education) aims to address social disparities in access to education. This website was developed to provide proper educational opportunities for children in remote areas or villages, who often lack the facilities and resources available to children in big cities.",
    stack: ["Frontend Web", "Responsive UI", "Team Delivery", "React JS"],
    highlight: "Educational access for remote areas",
  },
  {
    title: "ExotiScan",
    category: "Bangkit Capstone ML",
    images: ["/exotiscan.webp"],
    description:
      "Collected rare-animal image datasets with 50 images per species, trained an image-classification model, and delivered the TensorFlow.js model package for the Cloud Computing team to deploy.",
    stack: ["Machine Learning", "Image Dataset", "TensorFlow.js"],
    highlight: "Rare animal image classifier",
  },
  {
    title: "Mitra Abadi Apps",
    category: "Mobile App and Web Interface",
    images: [
      "/porto-mitra-abadi/Cuplikan layar 2025-02-03 015525.webp",
      "/porto-mitra-abadi/Gambar WhatsApp 2025-01-06 pukul 00.45.43_e5a97bd7.webp",
      "/porto-mitra-abadi/Gambar WhatsApp 2025-01-06 pukul 00.47.22_2ca4992b.webp",
    ],
    description:
      "Website Development for Stock Monitoring, Visits, and Outlet Additions for Owner, Warehouse, and Inputer, as well as Applications for Check-in, Outlet Additions for Sales, and Order Monitoring for Inputer.",
    stack: ["Full-Stack Developer", "Google Maps API", "Laravel"],
    highlight: "Design system and prototype",
  },
  {
    title: "Sakuya Project",
    category: "Mobile App",
    images: ["/porto-sakuya/1.webp"],
    description:
      "Developed and integrated the Sakuya Mobile application frontend using Flutter, ensuring smooth communication with backend APIs.",
    stack: ["Mobile Development", "Flutter", "Payement Gateway"],
    highlight: "Mobile app with payment gateway",
  },
  {
    title: "Biro Dinamika Psikologi",
    category: "CMS & Web Platform",
    images: ["/proto-dinamika/upscalemedia-transformed.webp"],
    description:
      "Built a Laravel-based CMS and web platform for managing psychologist services, appointments, client data, APIs, routes, and secure admin workflows.",
    stack: ["Full-Stack Developer", "Laravel", "REST API", "CMS"],
    highlight: "Psychology service CMS",
  },
  {
    title: "POS Application with Flutter",
    category: "Mobile App",
    images: ["/fic14.webp"],
    description:
      "Built a full-stack Flutter POS system with a Laravel dashboard, product and order synchronization, Bluetooth receipt printing, sales reports, charts, and PDF export.",
    stack: ["Full-Stack Developer", "Flutter", "BLoC", "Laravel REST API", "MySQL"],
    highlight: "Flutter-based POS app",
    demoUrl: "https://www.youtube.com/watch?v=aIsydcacBq8&t=253s",
  }
]

const buttonClass =
  "rounded-none border-2 border-black bg-primary px-5 py-3 font-black text-black shadow-[4px_4px_0px_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] dark:shadow-[4px_4px_0px_#C99F42] dark:hover:shadow-[2px_2px_0px_#E0B64A]"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [activeImages, setActiveImages] = useState<Record<string, number>>({})

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

  const changeProjectImage = (projectTitle: string, imageCount: number, direction: number) => {
    setActiveImages((currentImages) => {
      const currentIndex = currentImages[projectTitle] ?? 0
      const nextIndex = (currentIndex + direction + imageCount) % imageCount

      return {
        ...currentImages,
        [projectTitle]: nextIndex,
      }
    })
  }

  return (
    <section id="projects" className="neo-dark-section relative border-b-2 border-black bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={itemVariants} className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-4 inline-block border-2 border-black bg-primary px-3 py-1 text-sm font-black text-black shadow-[3px_3px_0px_#000]">
                Projects
              </div>
              <h2 className="neo-dark-text font-space text-4xl font-black leading-tight text-black md:text-5xl">
                Selected Client and Product Work
              </h2>
            </div>
            <p className="neo-dark-text max-w-2xl text-lg font-medium leading-8 text-black lg:pt-10">
              Real projects, product interfaces, and delivery-focused work across education, mobile app
              design, and responsive web experiences.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {projects.map((project, index) => {
              const activeImageIndex = activeImages[project.title] ?? 0
              const hasMultipleImages = project.images.length > 1

              return (
                <motion.article
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ x: 2, y: 2 }}
                  className="neo-dark-surface-lg neo-dark-hover group overflow-hidden border-2 border-black bg-white text-black shadow-[5px_5px_0px_#000] transition hover:shadow-[2px_2px_0px_#000]"
                >
                  <div className="relative aspect-[16/9] border-b-2 border-black bg-muted">
                    <Image
                      src={project.images[activeImageIndex]}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute left-3 top-3 border-2 border-black bg-primary px-2.5 py-1 text-xs font-black text-black shadow-[3px_3px_0px_#000]">
                      0{index + 1}
                    </div>

                    {project.demoUrl && (
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open demo for ${project.title}`}
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center border-2 border-black bg-primary text-black opacity-100 shadow-[3px_3px_0px_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#000] focus:opacity-100 md:opacity-0 md:group-hover:opacity-100"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                    )}

                    {hasMultipleImages && (
                      <>
                        <button
                          type="button"
                          aria-label={`Previous image for ${project.title}`}
                          onClick={(event) => {
                            event.preventDefault()
                            event.stopPropagation()
                            changeProjectImage(project.title, project.images.length, -1)
                          }}
                          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border-2 border-black bg-primary text-black opacity-0 shadow-[3px_3px_0px_#000] transition hover:translate-x-[2px] hover:translate-y-[calc(-50%+2px)] hover:shadow-[1px_1px_0px_#000] focus:opacity-100 group-hover:opacity-100"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          type="button"
                          aria-label={`Next image for ${project.title}`}
                          onClick={(event) => {
                            event.preventDefault()
                            event.stopPropagation()
                            changeProjectImage(project.title, project.images.length, 1)
                          }}
                          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border-2 border-black bg-primary text-black opacity-0 shadow-[3px_3px_0px_#000] transition hover:translate-x-[2px] hover:translate-y-[calc(-50%+2px)] hover:shadow-[1px_1px_0px_#000] focus:opacity-100 group-hover:opacity-100"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </>
                    )}
                  </div>
                  <div className="p-4 xl:p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-2.5">
                      <span className="border-2 border-black bg-muted px-2.5 py-1 text-[11px] font-black uppercase leading-none">
                        {project.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-black leading-tight">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                        {project.highlight}
                      </span>
                    </div>
                    <h3 className="mb-2 font-space text-xl font-black leading-tight xl:text-[1.35rem]">{project.title}</h3>
                    <p className="mb-4 line-clamp-2 min-h-12 text-sm font-medium leading-6">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((item) => (
                        <span key={item} className="border border-black bg-background px-2 py-1 text-xs font-bold">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10">
            <Button asChild className={buttonClass}>
              <Link href="#contact">
                Discuss a Project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
