"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle, Clock, FileText, Users } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CSMPCertificationPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const floatingAnimation = {
    y: ["-10px", "10px"],
    transition: {
      y: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Full-width header with gradient background */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full mb-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c6978] to-[#0a5c6a] opacity-90"></div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white opacity-10"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-16 h-16 rounded-full bg-white opacity-10"
          animate={{
            ...floatingAnimation,
            transition: { delay: 0.5, ...floatingAnimation.transition },
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-white opacity-10"
          animate={{
            ...floatingAnimation,
            transition: { delay: 1, ...floatingAnimation.transition },
          }}
        />

        <div className="relative py-16 px-6 text-white max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Logo with glass effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative "
              style={{
                boxShadow: ")",
              }}
            >
              {/* Animated dashed border */}
              <div className="absolute inset-0 rounded-xl border-2 border-dashed border-white/30 animate-[spin_20s_linear_infinite]"></div>

              <motion.img
                src="/csmp.png"
                alt="CSMP Logo"
                className="h-46 w-52 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
            </motion.div>

            <div className="text-center md:text-left max-w-2xl">
              {/* Intermediate certification badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="inline-flex items-center bg-amber-500/90 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow-lg"
              >
                <Award className="h-4 w-4 mr-2" />
                INTERMEDIATE CERTIFICATION
              </motion.div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-4xl font-bold tracking-tight mb-4"
              >
                Certified Staffing Management Professional (CSMP)
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-white/80"
              >
                Become an expert in resource management and staffing operations
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid gap-10">
            {/* Eligibility Section */}
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="h-2 bg-gradient-to-r from-[#0c6978] to-[#0a5c6a]"></div>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center text-[#0c6978]">
                    <span className="bg-[#0c6978]/10 p-2 rounded-full mr-3">
                      <Users className="h-6 w-6 text-[#0c6978]" />
                    </span>
                    Eligibility
                  </h2>
                  <ul className="ml-12 space-y-3 list-disc text-lg">
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      Resource Manager
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      Prerequisite: CSBA certification
                    </motion.li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Value Section */}
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="h-2 bg-gradient-to-r from-[#0c6978] to-[#0a5c6a]"></div>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center text-[#0c6978]">
                    <span className="bg-[#0c6978]/10 p-2 rounded-full mr-3">
                      <CheckCircle className="h-6 w-6 text-[#0c6978]" />
                    </span>
                    Value
                  </h2>

                  <div className="ml-12 space-y-8">
                    {[
                      {
                        title: "Staffing",
                        description:
                          "Understand the overview of industry & types of staffing agencies. Trending recruiting techniques. Tip & tricks for sourcing. Attract the new talent.",
                      },
                      {
                        title: "Managing resource process",
                        description:
                          "Deep diving into the recruitment process i.e. searching the right candidate, interviewing, hiring and retaining process. Develop talent pool. Assess skill gap. Training of employees. Built the network & close talent pool.",
                      },
                      {
                        title: "Budgeting",
                        description:
                          "Understand the salary structure of employees. Grasp the consulting rates, incorporate rates vs term employees vs self employees.",
                      },
                      {
                        title: "Communication boundaries",
                        description:
                          "Learning the communication skills to effectively communicate with candidates. Build rapport and manage expectations. Learn how to handle internal communication expertly.",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="p-4 rounded-lg hover:bg-[#0c6978]/5 transition-colors"
                      >
                        <h3 className="text-xl font-semibold mb-2 text-[#0c6978]">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Duration & Assessment */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="h-2 bg-gradient-to-r from-[#0c6978] to-[#0a5c6a]"></div>
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <h2 className="text-2xl font-bold mb-4 flex items-center text-[#0c6978]">
                    <span className="bg-[#0c6978]/10 p-2 rounded-full mr-3">
                      <Clock className="h-6 w-6 text-[#0c6978]" />
                    </span>
                    Duration
                  </h2>
                  <p className="text-4xl font-bold text-[#0c6978]">16</p>
                  <p className="text-lg text-muted-foreground">hours course</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-lg">
                <div className="h-2 bg-gradient-to-r from-[#0c6978] to-[#0a5c6a]"></div>
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <h2 className="text-2xl font-bold mb-4 flex items-center text-[#0c6978]">
                    <span className="bg-[#0c6978]/10 p-2 rounded-full mr-3">
                      <FileText className="h-6 w-6 text-[#0c6978]" />
                    </span>
                    Assessment
                  </h2>
                  <p className="text-4xl font-bold text-[#0c6978]">4</p>
                  <p className="text-lg text-muted-foreground">hours exam</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Apply Button */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`/membership`}
                className="px-8 py-3 text-lg font-medium rounded-lg bg-gradient-to-r from-[#0c6978] to-[#0a5c6a] text-white shadow-lg hover:shadow-xl transition-all"
              >
                Apply Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

