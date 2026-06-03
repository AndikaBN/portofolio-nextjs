"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MoonStar, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const brutalControl =
  "neo-dark-control border-2 border-black bg-white text-black shadow-[3px_3px_0px_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-primary hover:shadow-[1px_1px_0px_#000]"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "neo-dark-section border-b-2 border-black bg-background py-3 shadow-[0_4px_0px_#000] dark:shadow-[0_4px_0px_#C99F42]"
            : "neo-dark-section border-b-2 border-black bg-background py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="#home" className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex h-10 w-10 items-center justify-center border-2 border-black bg-primary shadow-[3px_3px_0px_#000]"
            >
              <span className="text-xl font-black text-black">A</span>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="neo-dark-text font-space text-xl font-black text-black"
            >
              AnbinDev
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="neo-dark-text border-2 border-transparent px-3 py-2 text-sm font-bold text-black transition hover:border-black hover:bg-white dark:hover:border-[#EAD7A7] dark:hover:bg-[#332718]"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              className="ml-2"
            >
              <Button asChild className={`h-10 rounded-none px-4 font-black ${brutalControl}`}>
                <Link href="/CV_SAYA_ASLI.pdf" target="_blank">
                  Resume
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.12 }}
              className="ml-2"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`rounded-none ${brutalControl}`}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonStar className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`rounded-none ${brutalControl}`}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonStar className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`rounded-none ${brutalControl}`}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="neo-dark-section fixed left-0 right-0 top-[72px] z-40 border-b-2 border-black bg-background shadow-[0_6px_0px_#000] dark:shadow-[0_6px_0px_#C99F42] md:hidden"
        >
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="neo-dark-control block border-2 border-black bg-white px-4 py-3 font-bold text-black transition hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-primary hover:shadow-[2px_2px_0px_#000]"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <Button asChild className={`mt-2 h-11 rounded-none px-4 font-black ${brutalControl}`}>
              <Link href="/CV_SAYA_ASLI.pdf" target="_blank" onClick={() => setMobileMenuOpen(false)}>
                Resume
              </Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </>
  )
}
