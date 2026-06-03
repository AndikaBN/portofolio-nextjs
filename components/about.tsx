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
    <section id="about" className="neo-dark-section-muted relative border-b-2 border-black bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <div className="mb-4 inline-block border-2 border-black bg-primary px-3 py-1 text-sm font-black text-black shadow-[3px_3px_0px_#000]">
              About
            </div>
            <h2 className="neo-dark-text font-space text-4xl font-black leading-tight text-black md:text-5xl">
              About Me
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="neo-dark-surface border-2 border-black bg-white p-6 shadow-[6px_6px_0px_#000] md:p-8">
              <motion.p
                variants={itemVariants}
                className="neo-dark-text mb-5 text-lg font-medium leading-8 text-black"
              >
                I am an Information Technology student with experience in
                organizing and training in technology. Have expertise in
                managing projects and collaborating with teams in a dynamic
                environment.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="neo-dark-text mb-5 text-lg font-medium leading-8 text-black"
              >
                Proficient in Mobile Development using Flutter, as well as
                Laravel using Bootstrap and Tailwind frameworks as Fullstack
                Development. I have also successfully implemented innovative
                technology solutions in previous projects.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="neo-dark-text text-lg font-medium leading-8 text-black"
              >
                With my dedication to
                continuous learning and improving, I am ready to take on new
                challenges and contribute to future technological developments.
              </motion.p>

              {/* <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {["Mobile-first UI", "Laravel + APIs", "Team training"].map((item) => (
                  <div key={item} className="border-2 border-black bg-accent px-4 py-3 text-sm font-black text-black">
                    {item}
                  </div>
                ))}
              </div> */}
            </div>

            <motion.div
              variants={itemVariants}
              className="neo-dark-accent-panel relative border-2 border-black bg-primary p-6 text-black shadow-[6px_6px_0px_#000]"
            >
              <div className="absolute -left-3 -top-3 h-6 w-6 border-2 border-black bg-secondary"></div>
              <div className="absolute -bottom-3 -right-3 h-6 w-6 border-2 border-black bg-accent"></div>

              <h3 className="mb-5 font-space text-2xl font-black">Personal Info</h3>

              <div className="space-y-4">
                <div className="border-b-2 border-black pb-3">
                  <span className="text-xs font-black uppercase">Name</span>
                  <p className="font-bold">Andika Bintang Nursalih</p>
                </div>
                <div className="border-b-2 border-black pb-3">
                  <span className="text-xs font-black uppercase">Email</span>
                  <p className="break-words font-bold">bintangnursalih275@gmail.com</p>
                </div>
                <div className="border-b-2 border-black pb-3">
                  <span className="text-xs font-black uppercase">Phone</span>
                  <p className="font-bold">+62 82340058195</p>
                </div>
                <div className="border-b-2 border-black pb-3">
                  <span className="text-xs font-black uppercase">Location</span>
                  <p className="font-bold">Nusa Tenggara Barat, Indonesia</p>
                </div>
                <div>
                  <span className="text-xs font-black uppercase">Education</span>
                  <p className="font-bold">Bumigora University</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
