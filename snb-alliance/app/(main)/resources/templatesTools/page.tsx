"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  FileText,
  Download,
  CheckCircle,
  ArrowRight,
  Database,
  Users,
  Briefcase,
  Zap,
  PieChart,
  Layers,
  ChevronRight,
  FileSpreadsheet,
  ClipboardList,
  UserCheck,
  Sparkles,
  BarChart3,
  Clock,
  Award,
  Rocket,
} from "lucide-react"

export default function TemplatesToolsPage() {
  // Animation variants - enhanced
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } },
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  }

  const pulse = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
  }

  // Create refs for sections to trigger animations when in view
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [overviewRef, overviewInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [biddingTemplatesRef, biddingTemplatesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [staffingRef, staffingInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [biddingSoftwareRef, biddingSoftwareInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [processesRef, processesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [whyUsRef, whyUsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Enhanced with animations and teal color */}
      <section className="relative py-20 bg-gradient-to-br from-[#0c6978] to-[#084955] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
        </div>

        {/* Animated shapes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#0c6978] blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#0c6978] blur-3xl"
        />

        {/* Floating elements */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: 0.7 }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute top-1/4 right-1/4 text-white/20"
        >
          <FileText className="w-16 h-16" />
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: [0, 10, 0], opacity: 0.5 }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-1/3 left-1/5 text-white/20"
        >
          <Database className="w-12 h-12" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Professional Resources</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Templates & Tools
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-6"
            >
              Leverage the Best Tools & Processes for Bidding and Recruitment
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 mb-10"
            >
              Success in bidding and recruitment requires the right tools, templates, and streamlined processes. At SnB
              Alliance, we provide high-quality resources, software insights, and outsourcing solutions to help
              professionals increase efficiency, win more contracts, and build high-performing teams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/membership"
                className="inline-flex bg-[#f0932a] items-center px-6 py-3 text-white rounded-lg hover:bg-[#f0932a]transition-colors font-medium"
              >
                Download Resources <Download className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section - Enhanced with animations and teal color */}
      <section ref={overviewRef} className="py-16 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6978] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6978] to-transparent opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              animate={overviewInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center"
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center gap-2 bg-[#0c6978]/10 px-4 py-2 rounded-lg mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-[#0c6978] animate-pulse"></span>
                <span className="text-[#0c6978] font-medium text-sm tracking-wide uppercase">Overview</span>
              </motion.div>

              <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Access Ready-to-Use Templates & Professional Tools
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-600 max-w-3xl mx-auto mb-12">
                We've compiled a library of pre-built templates and tools to simplify bidding and recruitment workflows.
                Whether you're writing proposals, managing candidates, or optimizing bid submissions, our collection
                helps you save time and reduce errors.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial="hidden"
                animate={overviewInView ? "visible" : "hidden"}
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-[#0c6978]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0c6978]/20 transition-all duration-300">
                    <FileText className="h-7 w-7 text-[#0c6978]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Bidding Proposal Templates</h3>
                  <p className="text-gray-600">
                    Professionally structured RFP response templates to help you win more contracts.
                  </p>
                </div>
                <Link
                  href="#bidding-templates"
                  className="text-[#0c6978] font-medium hover:text-[#084955] inline-flex items-center group"
                >
                  View Templates <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={overviewInView ? "visible" : "hidden"}
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-[#0c6978]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0c6978]/20 transition-all duration-300">
                    <Users className="h-7 w-7 text-[#0c6978]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Recruitment & Staffing Tools</h3>
                  <p className="text-gray-600">
                    Customizable job descriptions, interview guides, and offer letters for efficient hiring.
                  </p>
                </div>
                <Link
                  href="#staffing"
                  className="text-[#0c6978] font-medium hover:text-[#084955] inline-flex items-center group"
                >
                  Explore Tools <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={overviewInView ? "visible" : "hidden"}
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-[#0c6978]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0c6978]/20 transition-all duration-300">
                    <BarChart3 className="h-7 w-7 text-[#0c6978]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Software Reviews</h3>
                  <p className="text-gray-600">
                    Side-by-side comparisons of leading bid and recruitment platforms to make informed decisions.
                  </p>
                </div>
                <Link
                  href="#bidding-software"
                  className="text-[#0c6978] font-medium hover:text-[#084955] inline-flex items-center group"
                >
                  Read Reviews <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              animate={overviewInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="mt-12 text-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/membership"
                  className="inline-flex items-center px-5 py-2.5 bg-[#0c6978] text-white rounded-lg hover:bg-[#084955] transition-colors"
                >
                  Start streamlining your workflow today! <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bidding Templates Section - Enhanced with animations and teal color */}
      <section id="bidding-templates" ref={biddingTemplatesRef} className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6978] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6978] to-transparent opacity-30"></div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#0c6978]/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#0c6978]/5 rounded-tr-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              animate={biddingTemplatesInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center"
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center gap-2 bg-[#0c6978]/10 px-4 py-2 rounded-lg mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-[#0c6978] animate-pulse"></span>
                <span className="text-[#0c6978] font-medium text-sm tracking-wide uppercase">Templates</span>
              </motion.div>

              <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Win More Contracts with Pre-Designed RFP & Proposal Templates
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-600 max-w-3xl mx-auto">
                Crafting a winning bid requires a clear, structured, and compelling proposal. Our bidding templates are
                designed to help you respond to RFPs efficiently, meet compliance requirements, and improve success
                rates.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial="hidden"
                animate={biddingTemplatesInView ? "visible" : "hidden"}
                variants={slideInLeft}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#0c6978]/10 rounded-xl flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-[#0c6978]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Technical Proposal Formats</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Pre-filled sections for technical proposals that are easy to customize for your specific needs.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <motion.li variants={staggerContainer} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0c6978] mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Executive summary templates</span>
                    </motion.li>
                    <motion.li variants={staggerContainer} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0c6978] mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Capability statement formats</span>
                    </motion.li>
                    <motion.li variants={staggerContainer} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0c6978] mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Professional formatting and layout</span>
                    </motion.li>
                  </ul>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/membership"
                      className="inline-flex items-center px-5 py-2.5 bg-[#0c6978] text-white rounded-lg hover:bg-[#084955] transition-colors"
                    >
                      Get Your Templates <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={biddingTemplatesInView ? "visible" : "hidden"}
                variants={slideInRight}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#0c6978]/10 rounded-xl flex items-center justify-center mr-4">
                      <FileSpreadsheet className="h-6 w-6 text-[#0c6978]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Pricing & Cost Breakdown Sheets</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Professionally structured pricing sheets and budget templates for transparent financial proposals.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <motion.li variants={staggerContainer} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0c6978] mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Automated calculations and formulas</span>
                    </motion.li>
                    <motion.li variants={staggerContainer} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0c6978] mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Multiple pricing model options</span>
                    </motion.li>
                    <motion.li variants={staggerContainer} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0c6978] mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Profit margin and cost analysis tools</span>
                    </motion.li>
                  </ul>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/membership"
                      className="inline-flex items-center px-5 py-2.5 bg-[#0c6978] text-white rounded-lg hover:bg-[#084955] transition-colors"
                    >
                      Get Your Templates <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              animate={biddingTemplatesInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="bg-[#0c6978]/5 rounded-xl p-6 border border-[#0c6978]/20"
            >
              <div className="flex items-start">
                <div className="bg-[#0c6978]/10 p-3 rounded-xl mr-4 flex-shrink-0">
                  <ClipboardList className="h-6 w-6 text-[#0c6978]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Bid Compliance Checklists</h4>
                  <p className="text-gray-600 mb-4">
                    Avoid disqualification with structured response outlines. Our checklists ensure your proposals meet
                    all requirements and improve your chances of winning.
                  </p>
                  <Link
                    href="/membership"
                    className="text-[#0c6978] font-medium hover:text-[#084955] inline-flex items-center group"
                  >
                    Get Checklists{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Staffing & Recruiting Software - Enhanced with animations and teal color */}
      <section id="staffing" ref={staffingRef} className="py-16 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6978] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6978] to-transparent opacity-30"></div>

        {/* Animated background elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#0c6978]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.03, 0.05, 0.03],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-[#0c6978]"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              animate={staffingInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center"
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center gap-2 bg-[#0c6978]/10 px-4 py-2 rounded-lg mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-[#0c6978] animate-pulse"></span>
                <span className="text-[#0c6978] font-medium text-sm tracking-wide uppercase">Software</span>
              </motion.div>

              <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                The Best Tools for Recruitment & Talent Acquisition
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-600 max-w-3xl mx-auto">
                The right Applicant Tracking System (ATS) and staffing software can transform hiring efficiency. Here's
                a breakdown of the industry's top recruitment platforms.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={staffingInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              <motion.div
                variants={slideInLeft}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-[#0c6978] text-white p-4">
                  <div className="flex items-center">
                    <Database className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-semibold">Sphere</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    AI-driven Applicant Tracking System (ATS) tailored for staffing firms and HR teams.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">Smart candidate matching</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">Compliance tracking</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">Seamless RPO support</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      href="/membership"
                      className="text-[#0c6978] font-medium hover:text-[#084955] inline-flex items-center group"
                    >
                      Try Sphere Today{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-[#0c6978] text-white p-4">
                  <div className="flex items-center">
                    <Database className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-semibold">Bullhorn</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">A widely used recruitment CRM and ATS for staffing firms.</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">Candidate relationship management</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">Automation capabilities</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">High-volume recruitment tools</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      href="/membership"
                      className="text-[#0c6978] font-medium hover:text-[#084955] inline-flex items-center group"
                    >
                      Read Review <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={slideInRight}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-[#0c6978] text-white p-4">
                  <div className="flex items-center">
                    <Database className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-semibold">GenKnox</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    AI-powered HR & talent acquisition software with advanced assessment capabilities.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">Competency-based hiring</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">Video assessments</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">Employer branding tools</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      href="/membership"
                      className="text-[#0c6978] font-medium hover:text-[#084955] inline-flex items-center group"
                    >
                      Read Review <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={staffingInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="bg-[#0c6978]/5 rounded-xl p-6 border border-[#0c6978]/20"
            >
              <div className="flex items-start">
                <div className="bg-[#0c6978]/10 p-3 rounded-xl mr-4 flex-shrink-0">
                  <UserCheck className="h-6 w-6 text-[#0c6978]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">HR Tools Comparison</h4>
                  <p className="text-gray-600 mb-4">
                    Access our comprehensive comparison of all major HR and recruitment platforms. Find the perfect
                    solution for your specific needs and budget.
                  </p>
                  <Link
                    href="/membership"
                    className="text-[#0c6978] font-medium hover:text-[#084955] inline-flex items-center group"
                  >
                    Explore Our Reviews{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bidding Software - Enhanced with animations and teal color */}
      <section id="bidding-software" ref={biddingSoftwareRef} className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6978] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6978] to-transparent opacity-30"></div>

        {/* Animated background elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.03, 0.05, 0.03],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute top-40 left-20 w-80 h-80 rounded-full bg-[#0c6978]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.02, 0.04, 0.02],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-[#0c6978]"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              animate={biddingSoftwareInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center"
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center gap-2 bg-[#0c6978]/10 px-4 py-2 rounded-lg mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-[#0c6978] animate-pulse"></span>
                <span className="text-[#0c6978] font-medium text-sm tracking-wide uppercase">Software</span>
              </motion.div>

              <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Automate & Optimize Your Proposal Writing Process
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-600 max-w-3xl mx-auto">
                Bid management is time-sensitive and complex—the right software reduces workload and improves win rates.
                Below are two leading bidding automation platforms.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={biddingSoftwareInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
              <motion.div
                variants={slideInLeft}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-[#0c6978] text-white p-4">
                  <div className="flex items-center">
                    <Zap className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-semibold">GenRapide</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    AI-driven bid writing and RFP automation platform for efficient proposal creation.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">Extracts & structures proposal content</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">Optimizes content in minutes</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">Built for staffing & consulting firms</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      href="/membership"
                      className="text-[#0c6978] font-medium hover:text-[#084955] inline-flex items-center group"
                    >
                      Try GenRapide Today{" "}
                      <Rocket className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={slideInRight}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-[#0c6978] text-white p-4">
                  <div className="flex items-center">
                    <Layers className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-semibold">Loopio</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Helps teams centralize bid responses and standardize RFP processes for better results.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">Content libraries and management</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">Collaboration tools</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">Project management features</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      href="/membership"
                      className="text-[#0c6978] font-medium hover:text-[#084955] inline-flex items-center group"
                    >
                      Read Review <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={biddingSoftwareInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="bg-[#0c6978]/5 rounded-xl p-6 border border-[#0c6978]/20"
            >
              <div className="flex items-start">
                <div className="bg-[#0c6978]/10 p-3 rounded-xl mr-4 flex-shrink-0">
                  <PieChart className="h-6 w-6 text-[#0c6978]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Software Selection Guide</h4>
                  <p className="text-gray-600 mb-4">
                    Our comprehensive guide helps you select the right bidding software based on your organization's
                    size, budget, and specific requirements.
                  </p>
                  <Link
                    href="/membership"
                    className="text-[#0c6978] font-medium hover:text-[#084955] inline-flex items-center group"
                  >
                    See Full Software Guide{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Processes (RPO & BPO) Trends - Enhanced with animations and teal color */}
      <section id="processes" ref={processesRef} className="py-16 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6978] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6978] to-transparent opacity-30"></div>

        {/* Animated background elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-[#0c6978]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.02, 0.04, 0.02],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-[#0c6978]"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              animate={processesInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center"
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center gap-2 bg-[#0c6978]/10 px-4 py-2 rounded-lg mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-[#0c6978] animate-pulse"></span>
                <span className="text-[#0c6978] font-medium text-sm tracking-wide uppercase">Outsourcing</span>
              </motion.div>

              <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Streamline Recruitment & Bidding with Outsourcing
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-600 max-w-3xl mx-auto">
                RPO and BPO help businesses cut costs, scale faster, and improve efficiency by streamlining recruitment
                and bidding processes, but their success relies on skilled, certified professionals. SnB Alliance
                ensures this with industry-recognized certifications.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={processesInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
              <motion.div
                variants={slideInLeft}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#0c6978]/10 rounded-xl flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-[#0c6978]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">RPO (Recruitment Process Outsourcing)</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Outsource your hiring process to experts for faster, cost-effective, and efficient talent
                    acquisition.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">End-to-end candidate sourcing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">AI-powered talent matching</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">Flexible hiring models</span>
                    </div>
                  </div>
                  <Link
                    href="https://bnr360.com/service" target="_blank"
                    className="text-[#0c6978] font-medium hover:text-[#084955] inline-flex items-center group"
                  >
                    Explore RPO Services{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                variants={slideInRight}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#0c6978]/10 rounded-xl flex items-center justify-center mr-4">
                      <Briefcase className="h-6 w-6 text-[#0c6978]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">BPO (Bidding Process Outsourcing)</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Streamline bid writing and proposal management by outsourcing to specialists for higher success
                    rates.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">AI-assisted proposal writing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">Expert-led bid strategy consulting</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-[#0c6978]" />
                      </div>
                      <span className="text-gray-700">24/7 support for tight deadlines</span>
                    </div>
                  </div>
                  <Link
                    href="https://bnr360.com/service" target="_blank"
                    className="text-[#0c6978] font-medium hover:text-[#084955] inline-flex items-center group"
                  >
                    Learn More About BPO{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={processesInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="bg-[#0c6978]/5 rounded-xl p-6 border border-[#0c6978]/20"
            >
              <div className="flex items-start">
                <div className="bg-[#0c6978]/10 p-3 rounded-xl mr-4 flex-shrink-0">
                  <Award className="h-6 w-6 text-[#0c6978]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">BnR 360 Services & Solutions</h4>
                  <p className="text-gray-600 mb-4">
                    Our comprehensive BnR 360 services provide end-to-end solutions for both recruitment and bidding
                    processes, helping your organization achieve maximum efficiency and success.
                  </p>
                  <Link
                    href="https://bnr360.com/service" target="_blank"
                    className="text-[#0c6978] font-medium hover:text-[#084955] inline-flex items-center group"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Use SnB Alliance Resources - Enhanced with animations and teal color */}
      <section ref={whyUsRef} className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6978] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6978] to-transparent opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              animate={whyUsInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center"
            >
              <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Why Use SnB Alliance Resources?
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial="hidden"
                animate={whyUsInView ? "visible" : "hidden"}
                variants={slideInLeft}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-[#0c6978]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Time-Saving Templates & Tools</h3>
                    <p className="text-gray-600">
                      Ready-to-use documents and automation resources that save you hours of work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Database className="h-5 w-5 text-[#0c6978]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted Software Recommendations</h3>
                    <p className="text-gray-600">
                      Compare leading ATS & bid management platforms with expert insights.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={whyUsInView ? "visible" : "hidden"}
                variants={slideInRight}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Briefcase className="h-5 w-5 text-[#0c6978]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Insights on RPO & BPO Trends</h3>
                    <p className="text-gray-600">Leverage outsourcing for efficiency and growth with our guidance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#0c6978]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="h-5 w-5 text-[#0c6978]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Exclusive Access to AI-Powered Solutions
                    </h3>
                    <p className="text-gray-600">
                      Try SnB Alliance's proprietary tools designed specifically for bidding and staffing professionals.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              animate={whyUsInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center mt-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/membership"
                  className="inline-flex items-center px-6 py-3 bg-[#0c6978] text-white rounded-lg hover:bg-[#084955] transition-colors font-medium"
                >
                  Join SnB Alliance <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.p variants={fadeIn} className="mt-4 text-gray-600">
                Get full access to our resource library today!
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

