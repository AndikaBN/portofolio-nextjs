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
    <section id="achievements" className="neo-dark-section relative border-b-2 border-black bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-5xl"
        >
          <motion.div variants={itemVariants} className="mb-12 max-w-3xl">
            <div className="mb-4 inline-block border-2 border-black bg-primary px-3 py-1 text-sm font-black text-black shadow-[3px_3px_0px_#000]">
              Achievements
            </div>
            <h2 className="neo-dark-text mb-4 font-space text-4xl font-black leading-tight text-black md:text-5xl">
              Achievements
            </h2>
            <p className="neo-dark-text text-lg font-medium leading-8 text-black">
              Recognition and awards received throughout my professional journey.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ x: 2, y: 2 }}
                className="neo-dark-surface-lg neo-dark-hover relative overflow-hidden border-2 border-black bg-white p-6 text-black shadow-[7px_7px_0px_#000] transition hover:shadow-[3px_3px_0px_#000]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black bg-primary">
                    <Trophy className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="mb-2 font-space text-2xl font-black leading-tight">{achievement.title}</h3>
                    <p className="font-bold">{achievement.competition}</p>
                    <div className="mt-4 space-y-2 font-medium leading-7">
                      <p>Organizer: {achievement.organizer}</p>
                      <p>Date: {achievement.date}</p>
                      <p>
                        Level: <span className="border-2 border-black bg-primary px-2 py-1 font-black">{achievement.level}</span>
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
