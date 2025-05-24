"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Calendar } from "lucide-react"

const education = [
  {
    institution: "Bumigora University",
    degree: "Bachelor of Information Technology",
    period: "September 2022 - Present",
    details: [
      "GPA: 3.80/4.00",
      "Relevant Courses: Web Design, Android, Web Programming, Mobile Programming."
    ],
  },
]

const certifications = [
  {
    title: "Machine Learning",
    institution: "COURSERA – United States of America",
    date: "August 2024",
    description:
      "Build supervised ML models (regression, decision tree, ensemble, neural network) with NumPy, scikit-learn, and TensorFlow. Implement clustering, anomaly detection, recommendation system, and reinforcement learning.",
  },
  {
    title: "Web Developer and Machine Learning",
    institution: "DICODING INDONESIA – Bandung, Indonesia",
    date: "March 2023 - Present",
    description:
      "Learn to use basic widgets to build interactive interfaces in web applications. The system design and ML pipeline includes predictive analysis, sentiment analysis, computer vision, and recommendation systems.",
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    <section id="education" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Education & Training</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              My academic background and professional development journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={containerVariants} className="space-y-8">
              <motion.h3 variants={itemVariants} className="text-2xl font-bold flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-cyan-500" />
                Education
              </motion.h3>

              <div className="space-y-8">
                {education.map((edu) => (
                  <motion.div
                    key={edu.institution}
                    variants={itemVariants}
                    className="relative pl-6 border-l-2 border-border"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500"></div>
                    <div className="mb-1 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-foreground/60" />
                      <span className="text-sm text-foreground/60">{edu.period}</span>
                    </div>
                    <h4 className="text-xl font-bold">{edu.institution}</h4>
                    <p className="text-foreground/80 font-medium mb-2">{edu.degree}</p>
                    <ul className="space-y-1">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="text-foreground/70 flex items-start gap-2">
                          <span className="text-cyan-500 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-8">
              <motion.h3 variants={itemVariants} className="text-2xl font-bold flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-500" />
                Certifications & Training
              </motion.h3>

              <div className="space-y-8">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.title}
                    variants={itemVariants}
                    className="relative pl-6 border-l-2 border-border"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div className="mb-1 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-foreground/60" />
                      <span className="text-sm text-foreground/60">{cert.date}</span>
                    </div>
                    <h4 className="text-xl font-bold">{cert.title}</h4>
                    <p className="text-foreground/80 font-medium mb-2">{cert.institution}</p>
                    <p className="text-foreground/70">{cert.description}</p>
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
