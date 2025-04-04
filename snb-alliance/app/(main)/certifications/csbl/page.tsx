"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Clock, FileText } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CSBLCertificationPage() {
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
      {/* Header with gradient background */}
      <div className="relative bg-gradient-to-r from-[#0c6978] to-[#0a5c69] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/10"
            animate={floatingAnimation}
          />
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 rounded-full bg-white/5"
            animate={{
              ...floatingAnimation,
              transition: { delay: 0.5, ...floatingAnimation.transition },
            }}
          />
          <motion.div
            className="absolute bottom-10 left-1/3 w-48 h-48 rounded-full bg-white/5"
            animate={{
              ...floatingAnimation,
              transition: { delay: 1, ...floatingAnimation.transition },
            }}
          />
        </div>

        <div className="container mx-auto py-16 px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Logo and title container with glass effect */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 inline-block relative mx-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Animated dashed border */}
              <div className="absolute inset-0 rounded-xl border-2 border-dashed border-white/30 animate-pulse" />

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <img src="/csbl.png" alt="CSBL Logo" className="h-46 w-52 object-contain" />
                </motion.div>

                <div className="text-white">
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    <motion.div
                      className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Award className="h-3 w-3" />
                      <span>ADVANCED CERTIFICATION</span>
                    </motion.div>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Certified Staffing & Bidding Leader (CSBL)
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 mt-3 max-w-2xl">
                    The highest level of certification for staffing and bidding professionals in leadership positions
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4 md:px-6">
        <motion.div className="max-w-5xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          <div className="grid gap-10">
            {/* Eligibility Section */}
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="h-2 bg-gradient-to-r from-[#0c6978] to-[#0a5c69]" />
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center text-[#0c6978]">
                    <span className="bg-[#0c6978]/10 p-2 rounded-full mr-3">
                      <CheckCircle className="h-6 w-6 text-[#0c6978]" />
                    </span>
                    Eligibility
                  </h2>
                  <motion.ul className="ml-12 space-y-3 list-disc text-lg" variants={containerVariants}>
                    {[
                      "Operation Manager (OM), General Manager (GM)",
                      "Director Consultant (DC), Account Executive (AE)",
                      "Business Development Manager (BD), Director (D)",
                      "Prerequisite: CSBA certification",
                    ].map((item, index) => (
                      <motion.li key={index} variants={itemVariants} className="text-gray-700">
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Value Section */}
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="h-2 bg-gradient-to-r from-[#0c6978] to-[#0a5c69]" />
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center text-[#0c6978]">
                    <span className="bg-[#0c6978]/10 p-2 rounded-full mr-3">
                      <CheckCircle className="h-6 w-6 text-[#0c6978]" />
                    </span>
                    Value
                  </h2>

                  <motion.div className="ml-12 space-y-8" variants={containerVariants}>
                    {[
                      {
                        title: "Recruitment tactics",
                        description:
                          "Learn how to embed the latest techniques into the recruitment process. Attract and resource the top notch and brilliant people in the industry. Evaluate competition. Search, interview, hire & retain the right candidate.",
                      },
                      {
                        title: "Bidding",
                        description:
                          "Understand details of the bidding process in depth. Identify opportunities. Review RFPs (request for proposals) & develop proposals. Usage of data effectively to inform decisions and create bidding strategies.",
                      },
                      {
                        title: "Talent & operation Management",
                        description:
                          "Develop a talent pool including assessing skill gaps, developing employee training and succession plans. Learn how to build the right team for your organisation. How to develop a salary and commission model.",
                      },
                      {
                        title: "Salary structure",
                        description:
                          "Learn about employee salary and compensation structure and how to develop profitable pricing strategy. How to structure consultancy rates and incorporate rates vs term employee and self employee.",
                      },
                      {
                        title: "Procurement",
                        description:
                          "In depth understanding of procurement, type of procurement, private vs. public, procurement process, acquiring govt. contracting vehicles.",
                      },
                      {
                        title: "Legal",
                        description:
                          "Understand the critical legal angles & compliance involved that the bidding & staffing agency need to be aware of, such as equal employment opportunity laws, wage and hour regulations, immigration requirements and contract.",
                      },
                      {
                        title: "Privacy",
                        description:
                          "Learn the privacy & confidential aspects of the industry, its importance specifically related to the bidding process. Learn the ethics and ethical boundaries and its importance in the industry.",
                      },
                      {
                        title: "Industries & their trends",
                        description:
                          "Understand different types of industries, their serving requirements & their latest technological advancements. e.g. IT, medical, clerk, janitorial services, construction worker.",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="p-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-xl font-semibold mb-2 text-[#0c6978]">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Duration & Assessment */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <Card className="overflow-hidden border-0 shadow-lg h-full">
                  <div className="h-2 bg-gradient-to-r from-[#0c6978] to-[#0a5c69]" />
                  <CardContent className="pt-6 flex flex-col h-full">
                    <h2 className="text-2xl font-bold mb-4 flex items-center text-[#0c6978]">
                      <span className="bg-[#0c6978]/10 p-2 rounded-full mr-3">
                        <Clock className="h-6 w-6 text-[#0c6978]" />
                      </span>
                      Duration
                    </h2>
                    <div className="flex items-center justify-center flex-grow">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-[#0c6978]">16</div>
                        <div className="text-gray-600 mt-1">hours course</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="overflow-hidden border-0 shadow-lg h-full">
                  <div className="h-2 bg-gradient-to-r from-[#0c6978] to-[#0a5c69]" />
                  <CardContent className="pt-6 flex flex-col h-full">
                    <h2 className="text-2xl font-bold mb-4 flex items-center text-[#0c6978]">
                      <span className="bg-[#0c6978]/10 p-2 rounded-full mr-3">
                        <FileText className="h-6 w-6 text-[#0c6978]" />
                      </span>
                      Assessment
                    </h2>
                    <div className="flex items-center justify-center flex-grow">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-[#0c6978]">4</div>
                        <div className="text-gray-600 mt-1">hours exam</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Apply Button */}
            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <Link
                href={`/membership`}
                className="inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-[#0c6978] to-[#0a5c69] rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Apply Now
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

