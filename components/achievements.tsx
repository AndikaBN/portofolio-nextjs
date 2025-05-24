"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy } from "lucide-react"

const achievements = [
  {
    title: "Winner, 1st Place Web Development",
    competition: "Proxo x Coris International Championship 2025",
    organizer: "Klabat University",
    date: "February 2025 – April 2025",
    level: "International",
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <section id="achievements" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Achievements</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Recognition and awards received throughout my professional journey.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative p-6 rounded-xl border border-border bg-background/50 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-10"></div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-foreground/80 font-medium">{achievement.competition}</p>
                    <div className="mt-3 space-y-1 text-foreground/70">
                      <p>Organizer: {achievement.organizer}</p>
                      <p>Date: {achievement.date}</p>
                      <p>
                        Level: <span className="text-yellow-500 font-medium">{achievement.level}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
