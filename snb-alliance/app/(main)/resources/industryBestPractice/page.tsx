"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  BarChart,
  TrendingUp,
  MessageSquare,
  CheckSquare,
  ClipboardCheck,
  Download,
  ArrowRight,
  FileText,
  Shield,
  Globe,
  Users,
  BookOpen,
  ChevronRight,
  Award,
  Zap,
  Target,
  Briefcase,
  PieChart,
  Sparkles,
} from "lucide-react"

export default function IndustryBestPracticesPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring" } },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring" } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  // Create refs for sections to trigger animations when in view
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [overviewRef, overviewInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [insightsRef, insightsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [trendsRef, trendsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [opinionsRef, opinionsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [practicesRef, practicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [complianceRef, complianceInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [whyUsRef, whyUsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with animated elements */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="relative py-24 overflow-hidden bg-gradient-to-br from-[#39a3b1] via-[#2c8d9a] to-[#1e6e79]"
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image src="/homeBanner.png" alt="Abstract background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#39a3b1]/80 to-[#39a3b1]/70 mix-blend-multiply"></div>
        </div>

        {/* Animated geometric elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Clover/cross shape */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.6, 0.8, 0.6],
              y: [0, -10, 0],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            className="absolute top-[20%] left-[10%] w-32 h-32"
          >
            <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 0C100 0 100 0 100 0C123.61 0 142.86 19.25 142.86 42.86C142.86 42.86 142.86 42.86 142.86 42.86C142.86 42.86 142.86 42.86 142.86 42.86C142.86 66.47 162.11 85.72 185.72 85.72C185.72 85.72 185.72 85.72 185.72 85.72C185.72 85.72 185.72 85.72 185.72 85.72C185.72 109.33 166.47 128.58 142.86 128.58C142.86 128.58 142.86 128.58 142.86 128.58C142.86 128.58 142.86 128.58 142.86 128.58C142.86 152.19 123.61 171.44 100 171.44C100 171.44 100 171.44 100 171.44C100 171.44 100 171.44 100 171.44C76.39 171.44 57.14 152.19 57.14 128.58C57.14 128.58 57.14 128.58 57.14 128.58C57.14 128.58 57.14 128.58 57.14 128.58C33.53 128.58 14.28 109.33 14.28 85.72C14.28 85.72 14.28 85.72 14.28 85.72C14.28 85.72 14.28 85.72 14.28 85.72C14.28 62.11 33.53 42.86 57.14 42.86C57.14 42.86 57.14 42.86 57.14 42.86C57.14 42.86 57.14 42.86 57.14 42.86C57.14 19.25 76.39 0 100 0Z"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M100 15C100 15 100 15 100 15C116.57 15 130 28.43 130 45C130 45 130 45 130 45C130 45 130 45 130 45C130 61.57 143.43 75 160 75C160 75 160 75 160 75C160 75 160 75 160 75C160 91.57 146.57 105 130 105C130 105 130 105 130 105C130 105 130 105 130 105C130 121.57 116.57 135 100 135C100 135 100 135 100 135C100 135 100 135 100 135C83.43 135 70 121.57 70 105C70 105 70 105 70 105C70 105 70 105 70 105C53.43 105 40 91.57 40 75C40 75 40 75 40 75C40 75 40 75 40 75C40 58.43 53.43 45 70 45C70 45 70 45 70 45C70 45 70 45 70 45C70 28.43 83.43 15 100 15Z"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="5 5"
                fill="none"
              />
            </svg>
          </motion.div>

          {/* Hexagon shape */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.6, 0.8, 0.6],
              y: [0, 10, 0],
            }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
            className="absolute bottom-[30%] right-[15%] w-36 h-36"
          >
            <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M150 50L100 25L50 50L25 100L50 150L100 175L150 150L175 100L150 50Z"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M140 60L100 40L60 60L40 100L60 140L100 160L140 140L160 100L140 60Z"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="5 5"
                fill="none"
              />
            </svg>
          </motion.div>

          {/* Star/sparkle elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            className="absolute top-[15%] right-[25%]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z" fill="#f8a02e" />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1.5 }}
            className="absolute bottom-[25%] left-[30%]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z" fill="white" />
            </svg>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              variants={scaleIn}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Knowledge Hub</span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-[#f8a02e]"
            >
              Industry & Best Practices
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
              }}
              className="text-xl md:text-2xl mb-8 font-light text-white"
            >
              Stay Ahead with Expert Knowledge & Proven Strategies
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
              }}
              className="text-lg mb-10 text-white/90 leading-relaxed"
            >
              The bidding and recruitment industry is constantly evolving. At SnB Alliance, we provide up-to-date
              insights, expert guidance, and best practices to help professionals and businesses stay competitive,
              compliant, and successful.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Overview Cards */}
          <motion.div
            ref={overviewRef}
            initial="hidden"
            animate={overviewInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 -mt-32 relative z-20"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-[#39a3b1] hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-4 bg-teal-50 rounded-full mr-4">
                  <BarChart className="h-7 w-7 text-[#39a3b1]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Industry Reports</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Access comprehensive data-driven reports on global and regional staffing and bidding trends.
              </p>
              <Link
                href="/membership"
                className="inline-flex items-center text-[#39a3b1] font-medium hover:text-teal-700 group"
              >
                Access Reports{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-[#f0932a] hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-4 bg-amber-50 rounded-full mr-4">
                  <TrendingUp className="h-7 w-7 text-[#f0932a]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Market Trends</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Stay ahead with real-time analysis of industry shifts and emerging opportunities.
              </p>
              <Link
                href="/membership"
                className="inline-flex items-center text-[#f0932a] font-medium hover:text-amber-700 group"
              >
                Explore Trends{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-[#39a3b1] hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-4 bg-teal-50 rounded-full mr-4">
                  <MessageSquare className="h-7 w-7 text-[#39a3b1]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Expert Opinions</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Get exclusive insights from industry leaders and subject matter experts.
              </p>
              <Link
                href="/membership"
                className="inline-flex items-center text-[#39a3b1] font-medium hover:text-teal-700 group"
              >
                Read Insights{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Comprehensive Industry Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access the tools and knowledge you need to excel in the bidding and recruitment industry
            </p>
            <div className="w-24 h-1 bg-[#39a3b1] mx-auto mt-6"></div>
          </motion.div>

          {/* Industry Insights & Reports Section */}
          <motion.div
            ref={insightsRef}
            initial="hidden"
            animate={insightsInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="mb-24 scroll-mt-24"
            id="insights"
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-teal-100 rounded-full mr-4">
                <BarChart className="h-8 w-8 text-[#39a3b1]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Industry Insights & Reports</h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <motion.div
                  variants={slideInLeft}
                  className="md:w-1/2 p-10"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    Data-Driven Insights to Inform Your Decisions
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Gain access to comprehensive reports and research on the latest trends, policies, and innovations in
                    bidding, recruitment, and workforce management.
                  </p>
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-4 flex items-center text-gray-700">
                      <FileText className="h-5 w-5 mr-2 text-[#39a3b1]" /> What You'll Find:
                    </h4>
                    <motion.ul
                      variants={staggerContainer}
                      className="space-y-4"
                    >
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <PieChart className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Annual Industry Reports</span> – Deep dives into global and
                          regional staffing and bidding trends.
                        </span>
                      </motion.li>
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <Target className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Performance Benchmarks</span> – Compare your organization's
                          metrics with industry standards.
                        </span>
                      </motion.li>
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <TrendingUp className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Data-Backed Forecasts</span> – Projections and expert analysis
                          to help you plan ahead.
                        </span>
                      </motion.li>
                    </motion.ul>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/membership"
                      className="inline-flex items-center px-6 py-3 bg-[#39a3b1] hover:bg-teal-700 text-white rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Latest Report
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  variants={slideInRight}
                  className="md:w-1/2 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center p-10"
                >
                  <div className="relative w-full h-80 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                      className="absolute w-64 h-64 bg-teal-200 rounded-full opacity-20"
                    ></motion.div>
                    <div className="relative z-10 flex flex-col items-center">
                      <PieChart className="h-24 w-24 text-[#39a3b1] mb-4" />
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#39a3b1] mb-2">85%</div>
                        <div className="text-sm text-gray-600">of successful bids follow industry best practices</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Market Trends Section */}
          <motion.div
            ref={trendsRef}
            initial="hidden"
            animate={trendsInView ? "visible" : "hidden"}
            variants={fadeIn}
            id="market-trends"
            className="mb-24 scroll-mt-24"
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-amber-100 rounded-full mr-4">
                <TrendingUp className="h-8 w-8 text-[#f0932a]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Market Trends</h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex flex-row-reverse">
                <motion.div
                  variants={slideInRight}
                  className="md:w-1/2 p-10"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    Stay Ahead of Industry Shifts & Emerging Opportunities
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The recruitment and bidding landscape is constantly changing due to technology advancements,
                    regulatory updates, and economic factors. Stay ahead with our real-time market trend analysis.
                  </p>
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-4 flex items-center text-gray-700">
                      <TrendingUp className="h-5 w-5 mr-2 text-[#f0932a]" /> Key Focus Areas:
                    </h4>
                    <motion.ul
                      variants={staggerContainer}
                      className="space-y-4"
                    >
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 p-1 bg-amber-100 rounded-full mr-3 mt-1">
                          <Zap className="h-5 w-5 text-[#f0932a]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">AI & Automation in Hiring & Bidding</span> – How technology is
                          reshaping recruitment & proposal writing.
                        </span>
                      </motion.li>
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 p-1 bg-amber-100 rounded-full mr-3 mt-1">
                          <Globe className="h-5 w-5 text-[#f0932a]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Global Workforce Shifts</span> – Hiring patterns, talent
                          shortages, and remote work trends.
                        </span>
                      </motion.li>
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 p-1 bg-amber-100 rounded-full mr-3 mt-1">
                          <Briefcase className="h-5 w-5 text-[#f0932a]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Public vs. Private Sector Opportunities</span> – Understanding
                          where the best bidding prospects are.
                        </span>
                      </motion.li>
                    </motion.ul>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/membership"
                      className="inline-flex items-center px-6 py-3 bg-[#f0932a] hover:bg-amber-600 text-white rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Explore Latest Market Trends
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  variants={slideInLeft}
                  className="md:w-1/2 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center p-10"
                >
                  <div className="w-full h-80 flex items-center justify-center">
                    <div className="relative w-full max-w-sm">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-1 bg-amber-200 rounded-full"></div>
                      </div>
                      <div className="relative flex justify-between">
                        <motion.div 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-4 h-4 bg-amber-500 rounded-full mb-2"></div>
                          <div className="text-xs text-gray-600">2023</div>
                          <div className="mt-4 text-center">
                            <div className="text-lg font-bold text-[#f0932a]">32%</div>
                            <div className="text-xs text-gray-600 w-20">AI Adoption</div>
                          </div>
                        </motion.div>
                        <motion.div 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-4 h-4 bg-amber-500 rounded-full mb-2"></div>
                          <div className="text-xs text-gray-600">2024</div>
                          <div className="mt-4 text-center">
                            <div className="text-lg font-bold text-[#f0932a]">58%</div>
                            <div className="text-xs text-gray-600 w-20">AI Adoption</div>
                          </div>
                        </motion.div>
                        <motion.div 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-4 h-4 bg-amber-500 rounded-full mb-2"></div>
                          <div className="text-xs text-gray-600">2025</div>
                          <div className="mt-4 text-center">
                            <div className="text-lg font-bold text-[#f0932a]">76%</div>
                            <div className="text-xs text-gray-600 w-20">AI Adoption</div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Expert Opinions Section */}
          <motion.div
            ref={opinionsRef}
            initial="hidden"
            animate={opinionsInView ? "visible" : "hidden"}
            variants={fadeIn}
            id="expert-opinions"
            className="mb-24 scroll-mt-24"
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-teal-100 rounded-full mr-4">
                <MessageSquare className="h-8 w-8 text-[#39a3b1]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Expert Opinions</h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <motion.div
                  variants={slideInLeft}
                  className="md:w-1/2 p-10"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    Insights from Industry Leaders & Subject Matter Experts
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Get exclusive insights and thought leadership from recruitment specialists, bidding professionals,
                    and compliance experts who shape the industry.
                  </p>
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-4 flex items-center text-gray-700">
                      <MessageSquare className="h-5 w-5 mr-2 text-[#39a3b1]" /> Featured Topics:
                    </h4>
                    <motion.ul
                      variants={staggerContainer}
                      className="space-y-4"
                    >
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <Award className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Winning Bid Strategies</span> – Learn from top consultants on
                          improving RFP success rates.
                        </span>
                      </motion.li>
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <Users className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Talent Acquisition Best Practices</span> – Expert-led
                          discussions on sourcing, hiring, and retention.
                        </span>
                      </motion.li>
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <Shield className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Risk & Compliance in Bidding</span> – Navigating legal
                          complexities and regulatory frameworks.
                        </span>
                      </motion.li>
                    </motion.ul>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/membership"
                      className="inline-flex items-center px-6 py-3 bg-[#39a3b1] hover:bg-teal-700 text-white rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Explore Expert Insights
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  variants={slideInRight}
                  className="md:w-1/2 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center p-10"
                >
                  <div className="w-full max-w-sm">
                    <div className="flex flex-col space-y-4">
                      <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start">
                          <div className="bg-teal-100 rounded-full p-2 mr-3">
                            <Users className="h-5 w-5 text-[#39a3b1]" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">Sarah Johnson</div>
                            <div className="text-sm text-gray-500">Recruitment Specialist</div>
                            <div className="mt-2 text-gray-600 text-sm">
                              "The future of recruitment lies in balancing AI efficiency with human connection."
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start">
                          <div className="bg-teal-100 rounded-full p-2 mr-3">
                            <Briefcase className="h-5 w-5 text-[#39a3b1]" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">Michael Chen</div>
                            <div className="text-sm text-gray-500">Bid Consultant</div>
                            <div className="mt-2 text-gray-600 text-sm">
                              "Successful bids focus on value creation, not just cost efficiency."
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Best Practices and Guidelines Section */}
          <motion.div
            ref={practicesRef}
            initial="hidden"
            animate={practicesInView ? "visible" : "hidden"}
            variants={fadeIn}
            id="best-practices"
            className="mb-24 scroll-mt-24"
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-amber-100 rounded-full mr-4">
                <CheckSquare className="h-8 w-8 text-[#f0932a]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Best Practices and Guidelines</h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex flex-row-reverse">
                <motion.div
                  variants={slideInRight}
                  className="md:w-1/2 p-10"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    Proven Strategies for Successful Bidding & Recruitment
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Maximize efficiency and avoid costly mistakes with our step-by-step guides and expert-approved best
                    practices.
                  </p>
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-4 flex items-center text-gray-700">
                      <BookOpen className="h-5 w-5 mr-2 text-[#f0932a]" /> What's Included:
                    </h4>
                    <motion.ul
                      variants={staggerContainer}
                      className="space-y-4"
                    >
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 p-1 bg-amber-100 rounded-full mr-3 mt-1">
                          <FileText className="h-5 w-5 text-[#f0932a]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Bid Writing & Proposal Management</span> – Techniques to create
                          compelling, compliant proposals.
                        </span>
                      </motion.li>
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 p-1 bg-amber-100 rounded-full mr-3 mt-1">
                          <Users className="h-5 w-5 text-[#f0932a]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Staffing & Talent Retention Strategies</span> – Frameworks for
                          building and maintaining high-performing teams.
                        </span>
                      </motion.li>
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 p-1 bg-amber-100 rounded-full mr-3 mt-1">
                          <Briefcase className="h-5 w-5 text-[#f0932a]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Contract & Client Management</span> – Guidelines to improve
                          partnerships and minimize legal risks.
                        </span>
                      </motion.li>
                    </motion.ul>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/membership"
                      className="inline-flex items-center px-6 py-3 bg-[#f0932a] hover:bg-amber-600 text-white rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Guidelines
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  variants={slideInLeft}
                  className="md:w-1/2 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center p-10"
                >
                  <div className="w-full max-w-sm">
                    <div className="relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-amber-300"></div>
                      <div className="space-y-6">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="relative"
                        >
                          <div className="absolute -left-6 top-1 w-5 h-5 bg-amber-300 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <div className="pl-4">
                            <h4 className="font-medium text-[#f0932a]">Research</h4>
                            <p className="text-sm text-gray-600">Understand client needs and market context</p>
                          </div>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="relative"
                        >
                          <div className="absolute -left-6 top-1 w-5 h-5 bg-amber-300 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <div className="pl-4">
                            <h4 className="font-medium text-[#f0932a]">Develop</h4>
                            <p className="text-sm text-gray-600">Create tailored, value-focused proposals</p>
                          </div>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="relative"
                        >
                          <div className="absolute -left-6 top-1 w-5 h-5 bg-amber-300 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <div className="pl-4">
                            <h4 className="font-medium text-[#f0932a]">Review</h4>
                            <p className="text-sm text-gray-600">Ensure compliance and quality control</p>
                          </div>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="relative"
                        >
                          <div className="absolute -left-6 top-1 w-5 h-5 bg-amber-300 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <div className="pl-4">
                            <h4 className="font-medium text-[#f0932a]">Submit</h4>
                            <p className="text-sm text-gray-600">Deliver on time with professional presentation</p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Compliance Checklists Section */}
          <motion.div
            ref={complianceRef}
            initial="hidden"
            animate={complianceInView ? "visible" : "hidden"}
            variants={fadeIn}
            id="compliance-checklists"
            className="mb-24 scroll-mt-24"
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-teal-100 rounded-full mr-4">
                <ClipboardCheck className="h-8 w-8 text-[#39a3b1]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Compliance Checklists</h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <motion.div
                  variants={slideInLeft}
                  className="md:w-1/2 p-10"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    Ensure Your Business Meets Industry Standards
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Compliance is critical in recruitment and bidding. Our checklists and regulatory guides help you
                    stay compliant with industry laws, contract requirements, and HR policies.
                  </p>
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-4 flex items-center text-gray-700">
                      <ClipboardCheck className="h-5 w-5 mr-2 text-[#39a3b1]" /> Essential Checklists:
                    </h4>
                    <motion.ul
                      variants={staggerContainer}
                      className="space-y-4"
                    >
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <CheckSquare className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Bid Compliance Checklist</span> – Ensure all RFP requirements
                          are met before submission.
                        </span>
                      </motion.li>
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <Shield className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">HR & Staffing Compliance Guide</span> – Stay aligned with labor
                          laws and ethical hiring practices.
                        </span>
                      </motion.li>
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <FileText className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Government Contracting Requirements</span> – Step-by-step
                          compliance guide for securing contracts.
                        </span>
                      </motion.li>
                    </motion.ul>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/membership"
                      className="inline-flex items-center px-6 py-3 bg-[#39a3b1] hover:bg-teal-700 text-white rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <ClipboardCheck className="mr-2 h-5 w-5" />
                      Get Your Compliance Checklist
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  variants={slideInRight}
                  className="md:w-1/2 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center p-10"
                >
                  <div className="w-full max-w-sm">
                    <motion.div 
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <h4 className="font-semibold text-[#39a3b1] mb-4 flex items-center">
                        <ClipboardCheck className="h-5 w-5 mr-2" /> Bid Compliance Checklist
                      </h4>
                      <ul className="space-y-3">
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="flex items-center"
                        >
                          <div className="w-5 h-5 border border-[#39a3b1] rounded flex items-center justify-center mr-3">
                            <CheckSquare className="h-3 w-3 text-[#39a3b1]" />
                          </div>
                          <span className="text-sm text-gray-700">RFP requirements review</span>
                        </motion.li>
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="flex items-center"
                        >
                          <div className="w-5 h-5 border border-[#39a3b1] rounded flex items-center justify-center mr-3">
                            <CheckSquare className="h-3 w-3 text-[#39a3b1]" />
                          </div>
                          <span className="text-sm text-gray-700">Documentation verification</span>
                        </motion.li>
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className="flex items-center"
                        >
                          <div className="w-5 h-5 border border-[#39a3b1] rounded flex items-center justify-center mr-3">
                            <CheckSquare className="h-3 w-3 text-[#39a3b1]" />
                          </div>
                          <span className="text-sm text-gray-700">Legal compliance check</span>
                        </motion.li>
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                          className="flex items-center"
                        >
                          <div className="w-5 h-5 border border-[#39a3b1] rounded flex items-center justify-center mr-3">
                            <CheckSquare className="h-3 w-3 text-[#39a3b1]" />
                          </div>
                          <span className="text-sm text-gray-700">Pricing structure validation</span>
                        </motion.li>
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 }}
                          className="flex items-center"
                        >
                          <div className="w-5 h-5 border border-[#39a3b1] rounded flex items-center justify-center mr-3">
                            <CheckSquare className="h-3 w-3 text-[#39a3b1]" />
                          </div>
                          <span className="text-sm text-gray-700">Final submission review</span>
                        </motion.li>
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Why Use SnB Alliance Resources */}
          {/* <motion.div
            ref={whyUsRef}
            initial="hidden"
            animate={whyUsInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="relative mb-24 overflow-hidden rounded-2xl bg-gradient-to-r from-[#39a3b1] to-[#2c8d9a]"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            </div>
            <div className="relative z-20 p-12 text-white">
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-3xl md:text-4xl font-bold mb-8 text-center"
              >
                Why Use SnB Alliance Resources?
              </motion.h2>
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 },
                  },
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BarChart className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Data-Driven Insights</h3>
                  <p className="opacity-90 text-center">Reports backed by real-world data and industry expertise.</p>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckSquare className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Actionable Strategies</h3>
                  <p className="opacity-90 text-center">
                    Practical guidelines to improve operations and bid success rates.
                  </p>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Exclusive Expert Access</h3>
                  <p className="opacity-90 text-center">Learn from top industry professionals and thought leaders.</p>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Compliance & Risk Mitigation</h3>
                  <p className="opacity-90 text-center">Ensure your business meets legal and industry standards.</p>
                </motion.div>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
                }}
                className="text-center mt-10"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/membership"
                    className="inline-flex items-center px-8 py-4 bg-white text-[#39a3b1] hover:bg-gray-100 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Join SnB Alliance for Full Access
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div> */}
        </div>
      </section>
  </main>
  )
}

