"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <footer className="bg-[#0c6978] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/5"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-white/5"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-white/5"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo Section */}
          <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start">
            <Link href="/" className="block mb-6">
              <motion.div
                className="h-24 w-48 relative p-4 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img src="/logo.png" alt="SnB Alliance Logo" className="" width={180}
                height={100}/>
              </motion.div>
            </Link>
            <p className="text-white/80 text-sm mt-4 max-w-xs text-center lg:text-left">
              Empowering professionals in the staffing and bidding industry through certification and education.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-5 text-[#f0932a]">Quick Links</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/resources"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  Resources
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/learning/events&Calendar"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  Events
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/resources/templatesTools"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  Templates
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/resources/learningCommunity"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  Webinars
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/resources/industryBestPractice"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  Best Practices
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/privacyPolicy"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  Privacy Policy
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-5 text-[#f0932a]">Certifications</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/certifications/cbmp"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  CBMP Certification
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/certifications/csba"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  CSBA Certification
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/certifications/csmp"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  CSMP Certification
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/certifications/csbl"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  CSBL Certification
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/certifications"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  Compare Certifications
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Membership */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-5 text-[#f0932a]">Membership</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/membership"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  Become a Member
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/resources#faqs"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  Membership FAQs
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/membership#benefits"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  Member Benefits
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Organization & Support */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-5 text-[#f0932a]">Organization</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="about#mission-vision"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  Our Mission & Vision
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  Contact Us
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/about#careers"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  Career
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/about#news"
                  className="text-white/80 hover:text-[#f0932a] transition-colors text-sm flex items-center"
                >
                  Latest News
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} SnB Alliance. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

