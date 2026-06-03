"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Clock, Code, Database, Lightbulb, RefreshCw, Search, Server, Smartphone, Users, Wrench } from "lucide-react"

const skillGroups = [
  {
    name: "Mobile",
    description: "Flutter, Dart, responsive mobile interfaces",
    icon: <Smartphone className="h-6 w-6" />,
    accent: "bg-primary",
    skills: ["Flutter", "Dart", "Mobile UI"],
  },
  {
    name: "Frontend",
    description: "React.js, Next.js, Tailwind CSS",
    icon: <Code className="h-6 w-6" />,
    accent: "bg-secondary",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    description: "Laravel, PHP, Express.js, Node.js",
    icon: <Server className="h-6 w-6" />,
    accent: "bg-accent",
    skills: ["Laravel", "PHP", "Express.js", "Node.js"],
  },
  {
    name: "Data & ML",
    description: "Python-based ML workflows and model experiments",
    icon: <Brain className="h-6 w-6" />,
    accent: "bg-[#FF6B6B]",
    skills: ["Python", "TensorFlow", "PyTorch", "Keras", "Scikit-Learn"],
  },
  {
    name: "Database",
    description: "Data modeling for web and mobile apps",
    icon: <Database className="h-6 w-6" />,
    accent: "bg-white",
    skills: ["MySQL", "API data flow", "CRUD systems", "MongoDB"],
  },
  {
    name: "Tools",
    description: "Delivery, collaboration, and product handoff",
    icon: <Wrench className="h-6 w-6" />,
    accent: "bg-primary",
    skills: ["Git", "GitHub", "VS Code"],
  },
]

const softSkills = [
  {
    name: "Problem Solving",
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    name: "Critical Thinking",
    icon: <Search className="w-5 h-5" />,
  },
  {
    name: "Time Management",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    name: "Teamwork",
    icon: <Users className="w-5 h-5" />,
  },
  {
    name: "Adaptability",
    icon: <RefreshCw className="w-5 h-5" />,
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

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
    <section id="skills" className="neo-dark-section relative border-b-2 border-black bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={itemVariants} className="mb-12 max-w-3xl">
            <div className="mb-4 inline-block border-2 border-black bg-secondary px-3 py-1 text-sm font-black text-black shadow-[3px_3px_0px_#000]">
              Skills
            </div>
            <h2 className="neo-dark-text mb-4 font-space text-4xl font-black leading-tight text-black md:text-5xl">
              Technical Expertise
            </h2>
            <p className="neo-dark-text text-lg font-medium leading-8 text-black">
              Fullstack Developer and Machine Learning Engineer with practical experience across mobile,
              web, backend, and model experimentation.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="mb-14">
            <motion.h3 variants={itemVariants} className="neo-dark-text mb-6 font-space text-2xl font-black text-black">
              Technical Skills
            </motion.h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ x: 2, y: 2, transition: { duration: 0.2 } }}
                  className="neo-dark-surface neo-dark-hover border-2 border-black bg-white p-5 text-black shadow-[6px_6px_0px_#000] transition hover:shadow-[3px_3px_0px_#000]"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center border-2 border-black ${skill.accent}`}>
                      {skill.icon}
                    </div>
                    <span className="border-2 border-black bg-muted px-2 py-1 text-xs font-black">
                      {skill.skills.length} tools
                    </span>
                  </div>
                  <h4 className="mb-2 text-xl font-black">{skill.name}</h4>
                  <p className="mb-4 font-medium leading-7">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((item) => (
                      <span key={item} className="border border-black bg-muted px-2.5 py-1 text-sm font-bold">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={containerVariants}>
            <motion.h3 variants={itemVariants} className="neo-dark-text mb-6 font-space text-2xl font-black text-black">
              Soft Skills
            </motion.h3>
            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ x: 2, y: 2 }}
                  className="neo-dark-accent-panel flex items-center gap-3 border-2 border-black bg-primary p-4 text-black shadow-[4px_4px_0px_#000] transition hover:shadow-[2px_2px_0px_#000]"
                >
                  <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-white">
                    {skill.icon}
                  </div>
                  <span className="font-black">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
