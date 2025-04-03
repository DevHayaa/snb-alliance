"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Building,
  Users,
  BarChart,
  Settings,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Award,
  Clock,
  Briefcase,
  LineChart,
  Target,
  MessageSquare,
  Sparkles,
} from "lucide-react"

export default function BusinessesPage() {
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
  const [corporateRef, corporateInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [certificationRef, certificationInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [whyTrainRef, whyTrainInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [customRef, customInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [comparisonRef, comparisonInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with animated elements */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="relative py-20 min-h-[80vh] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image src="/homeBanner.png" alt="Abstract geometric background" fill className="object-cover" priority />
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
              <Building className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Corporate Solutions</span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="text-4xl md:text-5xl font-bold text-[#f8a02e] mb-6"
            >
              Businesses
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
              }}
              className="text-xl opacity-90 mb-6 text-white"
            >
              Empower Your Workforce with Industry-Recognized Training
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
              }}
              className="text-lg opacity-80 text-white"
            >
              SnB Alliance offers customized corporate training programs designed to enhance skills, improve efficiency,
              and ensure compliance in the bidding and recruitment industries. Whether you need to certify your team,
              compare training options, or build a tailored learning solution, we have the right programs for your
              organization.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Corporate Training Program Section */}
      <motion.section
        id="corporate-training"
        ref={corporateRef}
        initial="hidden"
        animate={corporateInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39a3b1] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0932a] to-transparent opacity-30"></div>

        {/* Decorative shapes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
            y: [0, -10, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute top-[10%] right-[5%] w-24 h-24"
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="#39a3b1" strokeWidth="1" strokeDasharray="5 5" />
            <circle cx="50" cy="50" r="30" stroke="#f0932a" strokeWidth="1" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
            y: [0, 10, 0],
          }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-[15%] left-[5%] w-16 h-16"
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="80" height="80" stroke="#f0932a" strokeWidth="1" strokeDasharray="5 5" />
            <rect x="25" y="25" width="50" height="50" stroke="#39a3b1" strokeWidth="1" />
          </svg>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInLeft}>
              <div className="inline-flex items-center gap-2 bg-[#39a3b1]/10 px-4 py-2 rounded-lg mb-4">
                <span className="w-2 h-2 rounded-full bg-[#39a3b1] animate-pulse"></span>
                <span className="text-[#39a3b1] font-medium text-sm tracking-wide uppercase">Corporate Training</span>
              </div>

              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 text-[#39a3b1] mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Corporate Training Program</h2>
              </div>
              <h3 className="text-xl font-semibold text-[#f0932a] mb-4">Train Your Team for Long-Term Success</h3>
              <p className="text-gray-600 mb-6">
                Our Corporate Training Program provides structured learning experiences tailored to your organization's
                needs. Designed for HR teams, recruiters, bid writers, and project managers, this program ensures your
                workforce is equipped with best practices, compliance knowledge, and advanced skills.
              </p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-4">🏢 Why Choose Corporate Training?</h4>
                <motion.ul variants={staggerContainer} className="space-y-3">
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex items-start group"
                  >
                    <div className="bg-[#39a3b1]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#39a3b1]/20 transition-colors">
                      <CheckCircle className="h-5 w-5 text-[#39a3b1]" />
                    </div>
                    <div>
                      <strong className="text-gray-800">Industry-Relevant Curriculum</strong> – Covering bidding
                      strategies, talent acquisition, and compliance.
                    </div>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex items-start group"
                  >
                    <div className="bg-[#39a3b1]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#39a3b1]/20 transition-colors">
                      <CheckCircle className="h-5 w-5 text-[#39a3b1]" />
                    </div>
                    <div>
                      <strong className="text-gray-800">Flexible Learning Formats</strong> – Choose from on-site
                      workshops, virtual training, or hybrid models.
                    </div>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex items-start group"
                  >
                    <div className="bg-[#39a3b1]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#39a3b1]/20 transition-colors">
                      <CheckCircle className="h-5 w-5 text-[#39a3b1]" />
                    </div>
                    <div>
                      <strong className="text-gray-800">Expert Instructors</strong> – Learn from industry professionals
                      with real-world experience.
                    </div>
                  </motion.li>
                </motion.ul>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                }}
                className="text-center md:text-left"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#39a3b1] to-[#39a3b1]/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    <span>Get a Custom Training Plan</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl group"
            >
              <Image
                src="/CorporateTraining.jpg"
                alt="Corporate Training"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Expert-Led Training</h3>
                  <p>Customized programs for your organization's specific needs</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Certification Packages Section */}
      <motion.section
        id="team-certification"
        ref={certificationRef}
        initial="hidden"
        animate={certificationInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-gray-50 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0932a] to-transparent opacity-30"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#39a3b1]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-[#f0932a]/10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl group"
            >
              <Image
                src="/TeamCertification.jpg"
                alt="Team Certification"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Team Certification</h3>
                  <p>Cost-effective solutions for certifying multiple employees</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-[#f0932a]/10 px-4 py-2 rounded-lg mb-4">
                <span className="w-2 h-2 rounded-full bg-[#f0932a] animate-pulse"></span>
                <span className="text-[#f0932a] font-medium text-sm tracking-wide uppercase">Team Certification</span>
              </div>

              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-[#39a3b1] mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Team Certification Packages</h2>
              </div>
              <h3 className="text-xl font-semibold text-[#f0932a] mb-4">
                Certify Your Team & Build Industry Expertise
              </h3>
              <p className="text-gray-600 mb-6">
                SnB Alliance makes it easy and cost-effective to certify multiple employees at once. Our Team
                Certification Packages provide bundled pricing and structured training to ensure your workforce is
                aligned with industry standards and best practices.
              </p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                }}
                className="bg-white p-6 rounded-xl border border-gray-100 mb-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-4">🎓 Team Certification Benefits</h4>
                <motion.ul variants={staggerContainer} className="space-y-3">
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex items-start group"
                  >
                    <div className="bg-[#f0932a]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#f0932a]/20 transition-colors">
                      <CheckCircle className="h-5 w-5 text-[#f0932a]" />
                    </div>
                    <div>
                      <strong className="text-gray-800">Bulk Pricing Discounts</strong> – Certify multiple employees at
                      reduced rates.
                    </div>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex items-start group"
                  >
                    <div className="bg-[#f0932a]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#f0932a]/20 transition-colors">
                      <CheckCircle className="h-5 w-5 text-[#f0932a]" />
                    </div>
                    <div>
                      <strong className="text-gray-800">Tailored Learning Tracks</strong> – Select programs based on job
                      roles and industry requirements.
                    </div>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex items-start group"
                  >
                    <div className="bg-[#f0932a]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#f0932a]/20 transition-colors">
                      <CheckCircle className="h-5 w-5 text-[#f0932a]" />
                    </div>
                    <div>
                      <strong className="text-gray-800">Performance Tracking</strong> – Monitor progress and completion
                      with a dedicated dashboard.
                    </div>
                  </motion.li>
                </motion.ul>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                }}
                className="text-center md:text-left"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/learning/teamPackages"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#f0932a] to-[#f0932a]/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    <span>Explore Team Packages</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Train with SnB Alliance Section */}
      <motion.section
        id="why-train"
        ref={whyTrainRef}
        initial="hidden"
        animate={whyTrainInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-gradient-to-r from-[#39a3b1] to-[#39a3b1]/90 text-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[#f0932a]/20 blur-3xl"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
            className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#f0932a]/20 blur-3xl"
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Why Choose Us</span>
            </div>

            <h2 className="text-3xl font-bold mb-4">Why Train with SnB Alliance?</h2>
            <div className="w-20 h-1 bg-[#f0932a] mx-auto mb-6"></div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors duration-300"
            >
              <Award className="h-10 w-10 text-[#f0932a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry-Leading Certifications</h3>
              <p className="text-white/80">Ensure your team meets global standards.</p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors duration-300"
            >
              <Clock className="h-10 w-10 text-[#f0932a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Training Options</h3>
              <p className="text-white/80">Virtual, in-person, and hybrid learning models available.</p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors duration-300"
            >
              <LineChart className="h-10 w-10 text-[#f0932a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-white/80">Programs designed for both small teams and large enterprises.</p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors duration-300"
            >
              <MessageSquare className="h-10 w-10 text-[#f0932a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-white/80">Access post-training resources and mentorship opportunities.</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
            }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#f0932a] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Briefcase className="mr-2 h-5 w-5" />
                <span>Partner with SnB Alliance</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Custom Learning Solution Section */}
      <motion.section
        id="custom-learning"
        ref={customRef}
        initial="hidden"
        animate={customInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39a3b1] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0932a] to-transparent opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInLeft}>
              <div className="inline-flex items-center gap-2 bg-[#39a3b1]/10 px-4 py-2 rounded-lg mb-4">
                <span className="w-2 h-2 rounded-full bg-[#39a3b1] animate-pulse"></span>
                <span className="text-[#39a3b1] font-medium text-sm tracking-wide uppercase">Custom Solutions</span>
              </div>

              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-[#39a3b1] mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Custom Learning Solution</h2>
              </div>
              <h3 className="text-xl font-semibold text-[#f0932a] mb-4">
                Tailored Training for Your Unique Business Needs
              </h3>
              <p className="text-gray-600 mb-6">
                Every organization has unique challenges. Our Custom Learning Solution allows businesses to design
                training programs that address specific skill gaps, compliance requirements, and operational goals.
              </p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-4">🛠 How Custom Training Works:</h4>
                <motion.ul variants={staggerContainer} className="space-y-3">
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex items-start group"
                  >
                    <div className="bg-[#39a3b1]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#39a3b1]/20 transition-colors">
                      <Target className="h-5 w-5 text-[#39a3b1]" />
                    </div>
                    <div>
                      <strong className="text-gray-800">Needs Assessment</strong> – Identify your team's skill gaps and
                      learning objectives.
                    </div>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex items-start group"
                  >
                    <div className="bg-[#39a3b1]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#39a3b1]/20 transition-colors">
                      <BookOpen className="h-5 w-5 text-[#39a3b1]" />
                    </div>
                    <div>
                      <strong className="text-gray-800">Tailored Course Development</strong> – Work with our experts to
                      create role-specific training.
                    </div>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex items-start group"
                  >
                    <div className="bg-[#39a3b1]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#39a3b1]/20 transition-colors">
                      <BarChart className="h-5 w-5 text-[#39a3b1]" />
                    </div>
                    <div>
                      <strong className="text-gray-800">Flexible Implementation</strong> – Choose on-site, virtual, or
                      blended learning models.
                    </div>
                  </motion.li>
                </motion.ul>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                }}
                className="text-center md:text-left"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#39a3b1] to-[#39a3b1]/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    <span>Request a Consultation</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl group"
            >
              <Image
                src="/CustomLearningSolution.jpg"
                alt="Custom Learning Solutions"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
                  <p>Custom training programs designed for your specific business needs</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Program Comparison Section */}
      <motion.section
        id="program-comparison"
        ref={comparisonRef}
        initial="hidden"
        animate={comparisonInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-gray-50 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0932a] to-transparent opacity-30"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#39a3b1]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-[#f0932a]/10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#f0932a]/10 px-4 py-2 rounded-lg mb-4">
              <span className="w-2 h-2 rounded-full bg-[#f0932a] animate-pulse"></span>
              <span className="text-[#f0932a] font-medium text-sm tracking-wide uppercase">Program Comparison</span>
            </div>

            <div className="flex items-center justify-center mb-4">
              <BarChart className="h-8 w-8 text-[#39a3b1] mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Program Comparison</h2>
            </div>
            <h3 className="text-xl font-semibold text-[#f0932a] mb-4">
              Find the Right Training Solution for Your Business
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Not sure which program fits your team's needs? Compare our training options and choose the best fit based
              on your business goals, budget, and workforce requirements.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
            }}
            className="mb-10"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">📊 Quick Comparison Guide</h4>
            <div className="overflow-x-auto rounded-xl shadow-lg">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-[#39a3b1]/10">
                    <th className="border border-gray-200 px-4 py-3 text-left text-gray-700">Program</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-gray-700">Best For</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-gray-700">Format</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-gray-700">Key Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-200 px-4 py-3 font-medium text-[#39a3b1]">Corporate Training</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Large organizations needing structured learning
                    </td>
                    <td className="border border-gray-200 px-4 py-3">On-site, virtual, hybrid</td>
                    <td className="border border-gray-200 px-4 py-3">Custom curriculum, expert-led sessions</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="border border-gray-200 px-4 py-3 font-medium text-[#39a3b1]">Team Certification</td>
                    <td className="border border-gray-200 px-4 py-3">Businesses certifying multiple employees</td>
                    <td className="border border-gray-200 px-4 py-3">Online, self-paced</td>
                    <td className="border border-gray-200 px-4 py-3">Cost savings, compliance assurance</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-200 px-4 py-3 font-medium text-[#39a3b1]">Custom Learning</td>
                    <td className="border border-gray-200 px-4 py-3">Companies with specific skill gaps</td>
                    <td className="border border-gray-200 px-4 py-3">Fully customized</td>
                    <td className="border border-gray-200 px-4 py-3">Targeted training, flexible delivery</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
            }}
            className="text-center"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#39a3b1] to-[#39a3b1]/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>Talk to Our Training Advisors</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

