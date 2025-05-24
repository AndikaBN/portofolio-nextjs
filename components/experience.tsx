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
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Experience</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              My professional journey and projects that have shaped my skills and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.h3 variants={itemVariants} className="text-2xl font-bold flex items-center gap-2">
                <Users className="w-6 h-6 text-cyan-500" />
                Organizations
              </motion.h3>

              <div className="space-y-6">
                {experiences
                  .filter((exp) => exp.type === "organization")
                  .map((exp, index) => (
                    <motion.div
                      key={exp.title}
                      variants={itemVariants}
                      className="relative pl-6 border-l-2 border-border"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500"></div>
                      <div className="mb-1 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-foreground/60" />
                        <span className="text-sm text-foreground/60">{exp.period}</span>
                      </div>
                      <h4 className="text-xl font-bold">{exp.title}</h4>
                      <p className="text-foreground/80 font-medium mb-2">{exp.position}</p>
                      <ul className="space-y-1">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-foreground/70 flex items-start gap-2">
                            <span className="text-cyan-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
              </div>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-6">
              <motion.h3 variants={itemVariants} className="text-2xl font-bold flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-purple-500" />
                Projects
              </motion.h3>

              <div className="space-y-6">
                {experiences
                  .filter((exp) => exp.type === "project")
                  .map((exp, index) => (
                    <motion.div
                      key={exp.title}
                      variants={itemVariants}
                      className="relative pl-6 border-l-2 border-border"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                      <div className="mb-1 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-foreground/60" />
                        <span className="text-sm text-foreground/60">{exp.period}</span>
                      </div>
                      <h4 className="text-xl font-bold">{exp.title}</h4>
                      <p className="text-foreground/80 font-medium mb-2">{exp.position}</p>
                      <ul className="space-y-1">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-foreground/70 flex items-start gap-2">
                            <span className="text-purple-500 mt-1">•</span>
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
