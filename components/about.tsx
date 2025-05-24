"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
              About Me
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          >
            <div className="col-span-1 md:col-span-2">
              <motion.p
                variants={itemVariants}
                className="text-lg mb-4 text-foreground/80"
              >
                I am an Information Technology student with experience in
                organizing and training in technology. Have expertise in
                managing projects and collaborating with teams in a dynamic
                environment.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg mb-4 text-foreground/80"
              >
                Proficient in Mobile Development using Flutter, as well as
                Laravel using Bootstrap and Tailwind frameworks as Fullstack
                Development. I have also successfully implemented innovative
                technology solutions in previous projects.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg text-foreground/80"
              >
                With my dedication to
                continuous learning and improving, I am ready to take on new
                challenges and contribute to future technological developments.
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative p-6 rounded-2xl border border-border bg-accent/10 backdrop-blur-sm"
            >
              <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-cyan-500"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-purple-600"></div>

              <h3 className="text-xl font-bold mb-4">Personal Info</h3>

              <div className="space-y-3">
                <div>
                  <span className="text-sm text-foreground/60">Name</span>
                  <p className="font-medium">Andika Bintang Nursalih</p>
                </div>
                <div>
                  <span className="text-sm text-foreground/60">Email</span>
                  <p className="font-medium">bintangnursalih275@gmail.com</p>
                </div>
                <div>
                  <span className="text-sm text-foreground/60">Phone</span>
                  <p className="font-medium">+62 82340058195</p>
                </div>
                <div>
                  <span className="text-sm text-foreground/60">Location</span>
                  <p className="font-medium">Nusa Tenggara Barat, Indonesia</p>
                </div>
                <div>
                  <span className="text-sm text-foreground/60">Education</span>
                  <p className="font-medium">Bumigora University</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
