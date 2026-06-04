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
      "GPA: 3.79/4.00",
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
    <section id="education" className="neo-dark-section-muted relative border-b-2 border-black bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={itemVariants} className="mb-12 max-w-3xl">
            <div className="mb-4 inline-block border-2 border-black bg-primary px-3 py-1 text-sm font-black text-black shadow-[3px_3px_0px_#000]">
              Education
            </div>
            <h2 className="neo-dark-text mb-4 font-space text-4xl font-black leading-tight text-black md:text-5xl">
              Education & Training
            </h2>
            <p className="neo-dark-text text-lg font-medium leading-8 text-black">
              My academic background and professional development journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div variants={containerVariants} className="space-y-8">
              <motion.h3 variants={itemVariants} className="neo-dark-surface flex items-center gap-3 border-2 border-black bg-white px-4 py-3 font-space text-2xl font-black text-black shadow-[4px_4px_0px_#000]">
                <GraduationCap className="h-6 w-6" />
                Education
              </motion.h3>

              <div className="space-y-8">
                {education.map((edu) => (
                  <motion.div
                    key={edu.institution}
                    variants={itemVariants}
                    className="neo-dark-surface relative border-2 border-black bg-white p-5 text-black shadow-[6px_6px_0px_#000]"
                  >
                    <div className="absolute -left-3 top-5 h-6 w-6 border-2 border-black bg-secondary"></div>
                    <div className="mb-3 inline-flex items-center gap-2 border-2 border-black bg-muted px-3 py-1 text-sm font-black">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <h4 className="mb-2 text-xl font-black">{edu.institution}</h4>
                    <p className="mb-4 font-bold">{edu.degree}</p>
                    <ul className="space-y-3">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 font-medium leading-7">
                          <span className="mt-2 h-2 w-2 shrink-0 border border-black bg-secondary"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-8">
              <motion.h3 variants={itemVariants} className="neo-dark-surface flex items-center gap-3 border-2 border-black bg-white px-4 py-3 font-space text-2xl font-black text-black shadow-[4px_4px_0px_#000]">
                <Award className="h-6 w-6" />
                Certifications & Training
              </motion.h3>

              <div className="space-y-8">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.title}
                    variants={itemVariants}
                    className="neo-dark-surface relative border-2 border-black bg-white p-5 text-black shadow-[6px_6px_0px_#000]"
                  >
                    <div className="absolute -left-3 top-5 h-6 w-6 border-2 border-black bg-primary"></div>
                    <div className="mb-3 inline-flex items-center gap-2 border-2 border-black bg-muted px-3 py-1 text-sm font-black">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                    <h4 className="mb-2 text-xl font-black">{cert.title}</h4>
                    <p className="mb-3 font-bold">{cert.institution}</p>
                    <p className="font-medium leading-7">{cert.description}</p>
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
