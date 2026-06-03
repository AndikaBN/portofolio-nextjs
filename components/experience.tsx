"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Users, Calendar } from "lucide-react"

const experiences = [
  {
    title: "PROGRAMMING COMMUNITY BUMIGORA UNIVERSITY",
    position: "Member, Curriculum Division",
    period: "October 2022 – Present",
    description: [
      "Managed web and mobile development classes with a structured and targeted learning approach.",
      "Contributed to the development of training materials to support participants' skill enhancement.",
      "Supported members in collaboratively completing community projects.",
    ],
    type: "organization",
  },
  {
    title: "GOOGLE DEVELOPER STUDENT CLUBS BUMIGORA UNIVERSITY",
    position: "Member GDSC 2022",
    period: "October 2022 – October 2023",
    description: [
      "Participated in various training sessions and coding challenges, such as the cashier algorithm challenge.",
      "Engaged in training and collaboration sessions to broaden understanding of technology.",
      "Contributed to web application development projects within the club.",
    ],
    type: "organization",
  },
  {
    title: "NUSANTARA UNIVERSAL EDUCATION (NUE) – Indonesia",
    position: "Web Developer",
    period: "March 2025 – April 2025",
    description: [
      "Developed a website to provide educational access for children in remote areas.",
      "Implemented user-friendly interface and responsive design for optimal learning experience.",
      "Collaborated with team to ensure smooth functionality and accessibility of the platform.",
    ],
    type: "project",
  },
  {
    title: "EXOTISCAN BANGKIT CAPSTONE PROJECT",
    position: "UI/UX Designer",
    period: "February 2024 – July 2024",
    description: [
      "Designed user interface and user experience for ExotiScan application using Figma.",
      "Created wireframes, mockups, and interactive prototypes for mobile application.",
      "Collaborated with development team to ensure design implementation meets user needs.",
    ],
    type: "project",
  },
  {
    title: "MITRA ABADI APPS",
    position: "UI/UX Designer",
    period: "January 2024 – March 2024",
    description: [
      "Designed user interface for Mitra Abadi mobile application using Figma.",
      "Created comprehensive design system including components, typography, and color palette.",
      "Developed interactive prototypes for user testing and stakeholder review.",
    ],
    type: "project",
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

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
    <section id="experience" className="neo-dark-section-muted relative border-b-2 border-black bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={itemVariants} className="mb-12 max-w-3xl">
            <div className="mb-4 inline-block border-2 border-black bg-accent px-3 py-1 text-sm font-black text-black shadow-[3px_3px_0px_#000]">
              Experience
            </div>
            <h2 className="neo-dark-text mb-4 font-space text-4xl font-black leading-tight text-black md:text-5xl">
              Work, Community, and Project Delivery
            </h2>
            <p className="neo-dark-text text-lg font-medium leading-8 text-black">
              My professional journey and projects that have shaped my skills and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.h3 variants={itemVariants} className="neo-dark-surface flex items-center gap-3 border-2 border-black bg-white px-4 py-3 font-space text-2xl font-black text-black shadow-[4px_4px_0px_#000]">
                <Users className="h-6 w-6" />
                Organizations
              </motion.h3>

              <div className="space-y-6">
                {experiences
                  .filter((exp) => exp.type === "organization")
                  .map((exp) => (
                    <motion.div
                      key={exp.title}
                      variants={itemVariants}
                      className="neo-dark-surface relative border-2 border-black bg-white p-5 text-black shadow-[6px_6px_0px_#000]"
                    >
                      <div className="absolute -left-3 top-5 h-6 w-6 border-2 border-black bg-secondary"></div>
                      <div className="mb-3 inline-flex items-center gap-2 border-2 border-black bg-muted px-3 py-1 text-sm font-black">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <h4 className="mb-2 text-xl font-black leading-tight">{exp.title}</h4>
                      <p className="mb-4 font-bold">{exp.position}</p>
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 font-medium leading-7">
                            <span className="mt-2 h-2 w-2 shrink-0 border border-black bg-secondary"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
              </div>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-6">
              <motion.h3 variants={itemVariants} className="neo-dark-surface flex items-center gap-3 border-2 border-black bg-white px-4 py-3 font-space text-2xl font-black text-black shadow-[4px_4px_0px_#000]">
                <Briefcase className="h-6 w-6" />
                Projects
              </motion.h3>

              <div className="space-y-6">
                {experiences
                  .filter((exp) => exp.type === "project")
                  .map((exp) => (
                    <motion.div
                      key={exp.title}
                      variants={itemVariants}
                      className="neo-dark-surface relative border-2 border-black bg-white p-5 text-black shadow-[6px_6px_0px_#000]"
                    >
                      <div className="absolute -left-3 top-5 h-6 w-6 border-2 border-black bg-primary"></div>
                      <div className="mb-3 inline-flex items-center gap-2 border-2 border-black bg-muted px-3 py-1 text-sm font-black">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <h4 className="mb-2 text-xl font-black leading-tight">{exp.title}</h4>
                      <p className="mb-4 font-bold">{exp.position}</p>
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 font-medium leading-7">
                            <span className="mt-2 h-2 w-2 shrink-0 border border-black bg-primary"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
