"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Server, Brain, Lightbulb, Clock, Search, MessageSquare, Database } from "lucide-react"

const technicalSkills = [
  {
    name: "Frontend Development",
    description: "React.js, Next.js, Flutter, Tailwind CSS",
    icon: <Code className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Backend Development",
    description: "Laravel, PHP, Express.js, Node.js",
    icon: <Server className="w-6 h-6" />,
    color: "from-indigo-500 to-blue-500",
  },
  {
    name: "Machine Learning",
    description: "TensorFlow, PyTorch, Keras, Scikit-Learn",
    icon: <Brain className="w-6 h-6" />,
    color: "from-orange-500 to-amber-400",
  },
  {
    name: "Programming Languages",
    description: "Dart, PHP, JavaScript, Python",
    icon: <Database className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
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
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Technical Expertise</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Fullstack Developer & Machine Learning Engineer with expertise in web and mobile development
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="mb-16">
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 text-center">
              Technical Skills
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 rounded-xl"></div>
                  <div className="relative p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm h-full flex flex-col">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4`}
                    >
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{skill.name}</h4>
                    <p className="text-foreground/70">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={containerVariants}>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 text-center">
              Soft Skills
            </motion.h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {softSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl border border-border bg-accent/10 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
