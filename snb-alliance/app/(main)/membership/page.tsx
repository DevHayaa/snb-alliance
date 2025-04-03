"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Check,
  Globe,
  TrendingUp,
  FileText,
  Users,
  Trophy,
  ArrowRight,
  Calendar,
  Building,
  GraduationCap,
  Briefcase,
  CheckCircle,
  HelpCircle,
  Sparkles,
} from "lucide-react"

export default function MembershipPage() {
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

  // Brand colors
  const brandColors = {
    teal: "#39a3b1",
    orange: "#f0932a",
  }

  // Create refs for sections to trigger animations when in view
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [plansRef, plansInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [eventsRef, eventsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [joinRef, joinInView] = useInView({ triggerOnce: true, threshold: 0.1 })

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
          <Image
            src="/membershipBanner.png"
            alt="Abstract geometric background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Animated geometric elements */}
        <div className="absolute inset-0 overflow-hidden z-20">
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
              <path d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z" fill="#f0932a" />
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

        <div className="container mx-auto px-4 relative z-30">
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
              <span className="text-white font-medium">Exclusive Community</span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Want to be a boss; Think like One
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
              }}
              className="text-xl text-white/90 mb-10"
            >
              Be a member of a community of like-minded people who are extremely professional and are highly supportive
              to you in attaining your career goals.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } },
              }}
            >
              <Link
                href="#join"
                className="relative overflow-hidden group bg-[#f0932a] hover:bg-[#f0932a]/90 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-lg inline-flex items-center justify-center gap-2"
              >
                <span className="relative z-10">Be A Member</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#f0932a] to-[#39a3b1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Join Section */}
      <motion.section
        ref={benefitsRef}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-white relative overflow-hidden"
        id="benefits"
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
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#39a3b1]/10 px-4 py-2 rounded-lg mb-4">
              <span className="w-2 h-2 rounded-full bg-[#39a3b1] animate-pulse"></span>
              <span className="text-[#39a3b1] font-medium text-sm tracking-wide uppercase">Membership Benefits</span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Should I Join?</h2>
            <div className="w-24 h-1 bg-[#39a3b1] mx-auto"></div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="max-w-5xl mx-auto"
            id="network"
          >
            <motion.h3 variants={fadeIn} className="text-2xl font-bold text-center text-gray-900 mb-12">
              MEMBERSHIP BENEFITS
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Network Benefit */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                id="network"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#39a3b1]/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-8 w-8 text-[#39a3b1]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Create your web</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  In the modern world it is extremely important to have connections & contacts, so develop your network
                  by joining as a member to collaborate with people who are practising strategies day in & day out.
                </p>
                <Link
                  href="#join"
                  className="text-[#39a3b1] font-medium hover:text-[#2d8a96] inline-flex items-center group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Career Growth Benefit */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                id="career"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#f0932a]/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-8 w-8 text-[#f0932a]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Professional surge</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Grow in your profession and get immense ideas to explore new opportunities. It's high time to take
                  charge of your career.
                </p>
                <Link
                  href="#join"
                  className="text-[#f0932a] font-medium hover:text-[#e0862c] inline-flex items-center group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Resources Benefit */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                id="resources"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#39a3b1]/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="h-8 w-8 text-[#39a3b1]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Resources</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Scroll freely through the resources provided to our members. Easily stay up to date with the
                  industrial trends and shift by our provided material.
                </p>
                <Link
                  href="#join"
                  className="text-[#39a3b1] font-medium hover:text-[#2d8a96] inline-flex items-center group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Leadership Benefit */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                id="leadership"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#f0932a]/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="h-8 w-8 text-[#f0932a]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Leadership</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Evolve as a leader and pioneer by the guidance of SNB Alliance and by participating in various
                  activities that our membership club offers.
                </p>
                <Link
                  href="#join"
                  className="text-[#f0932a] font-medium hover:text-[#e0862c] inline-flex items-center group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Detailed Membership Plans */}
      <motion.section
        ref={plansRef}
        initial="hidden"
        animate={plansInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-gray-50 relative overflow-hidden"
        id="plans"
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
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#f0932a]/10 px-4 py-2 rounded-lg mb-4">
              <span className="w-2 h-2 rounded-full bg-[#f0932a] animate-pulse"></span>
              <span className="text-[#f0932a] font-medium text-sm tracking-wide uppercase">Choose Your Path</span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Membership Plans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the membership plan that best fits your professional needs and career goals.
            </p>
            <div className="w-24 h-1 bg-[#39a3b1] mx-auto mt-6"></div>
          </motion.div>

          {/* Individual Membership */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-6 bg-gradient-to-r from-[#39a3b1] to-[#39a3b1]/90 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-16 -mr-16 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -mb-16 -ml-16 blur-2xl"></div>

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mr-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Basic/Individual Membership</h3>
                      <p className="text-white/80">Perfect for newcomers and solo professionals</p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <Link
                      href="/register?plan=basic"
                      className="inline-block px-6 py-3 bg-[#f0932a] text-white font-bold rounded-xl hover:bg-[#f0932a]/90 transition-colors shadow-lg"
                    >
                      Join Basic Membership
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h4>
                  <motion.ul variants={staggerContainer} className="space-y-4">
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                      }}
                      className="flex group"
                    >
                      <div className="bg-[#39a3b1]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#39a3b1]/20 transition-colors">
                        <Check className="h-6 w-6 text-[#39a3b1]" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Exclusive Resources:</span>
                        <p className="text-gray-600">
                          Access essential tools, templates, and articles in our Resources Library.
                        </p>
                      </div>
                    </motion.li>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                      }}
                      className="flex group"
                    >
                      <div className="bg-[#39a3b1]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#39a3b1]/20 transition-colors">
                        <Check className="h-6 w-6 text-[#39a3b1]" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Discounted Training:</span>
                        <p className="text-gray-600">Enjoy a reduced rate on select courses and certification exams.</p>
                      </div>
                    </motion.li>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                      }}
                      className="flex group"
                    >
                      <div className="bg-[#39a3b1]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#39a3b1]/20 transition-colors">
                        <Check className="h-6 w-6 text-[#39a3b1]" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Community Forums:</span>
                        <p className="text-gray-600">Connect with peers and get advice from industry veterans.</p>
                      </div>
                    </motion.li>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                      }}
                      className="flex group"
                    >
                      <div className="bg-[#39a3b1]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#39a3b1]/20 transition-colors">
                        <Check className="h-6 w-6 text-[#39a3b1]" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Membership Dashboard:</span>
                        <p className="text-gray-600">
                          Track your progress, view upcoming courses, and manage your profile in one place.
                        </p>
                      </div>
                    </motion.li>
                  </motion.ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Ideal For</h4>
                  <motion.ul variants={staggerContainer} className="space-y-3">
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                      }}
                      className="flex items-start group"
                    >
                      <div className="bg-[#39a3b1]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#39a3b1]/20 transition-colors">
                        <GraduationCap className="h-6 w-6 text-[#39a3b1]" />
                      </div>
                      <p className="text-gray-600">Students or recent graduates exploring career opportunities.</p>
                    </motion.li>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                      }}
                      className="flex items-start group"
                    >
                      <div className="bg-[#39a3b1]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#39a3b1]/20 transition-colors">
                        <Briefcase className="h-6 w-6 text-[#39a3b1]" />
                      </div>
                      <p className="text-gray-600">
                        Freelancers or independent consultants building a foundational knowledge base.
                      </p>
                    </motion.li>
                  </motion.ul>
                </div>

                <div className="md:hidden">
                  <Link
                    href="/register?plan=basic"
                    className="block w-full py-3 px-4 bg-[#39a3b1] hover:bg-[#2d8a96] text-center text-white font-medium rounded-xl transition-colors shadow-lg"
                  >
                    Join Basic Membership
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Corporate/Team Membership */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
            }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-6 bg-gradient-to-r from-[#f0932a] to-[#f0932a]/90 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-16 -mr-16 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -mb-16 -ml-16 blur-2xl"></div>

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mr-4">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Corporate/Team Membership</h3>
                      <p className="text-white/80">Tailored for organizations seeking to train multiple team members</p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <Link
                      href="/register?plan=corporate"
                      className="inline-block px-6 py-3 bg-[#39a3b1] text-white font-bold rounded-xl hover:bg-[#39a3b1]/90 transition-colors shadow-lg"
                    >
                      Enroll Your Team
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h4>
                  <motion.ul variants={staggerContainer} className="space-y-4">
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                      }}
                      className="flex group"
                    >
                      <div className="bg-[#f0932a]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#f0932a]/20 transition-colors">
                        <Check className="h-6 w-6 text-[#f0932a]" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Team Certification Packages:</span>
                        <p className="text-gray-600">
                          Certify multiple employees simultaneously with bundled pricing and flexible scheduling.
                        </p>
                      </div>
                    </motion.li>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                      }}
                      className="flex group"
                    >
                      <div className="bg-[#f0932a]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#f0932a]/20 transition-colors">
                        <Check className="h-6 w-6 text-[#f0932a]" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Customizable Corporate Training:</span>
                        <p className="text-gray-600">
                          Work with our experts to design training programs and workshops that address your company's
                          specific needs.
                        </p>
                      </div>
                    </motion.li>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                      }}
                      className="flex group"
                    >
                      <div className="bg-[#f0932a]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#f0932a]/20 transition-colors">
                        <Check className="h-6 w-6 text-[#f0932a]" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Dedicated Account Manager:</span>
                        <p className="text-gray-600">
                          Receive personalized support for onboarding, progress tracking, and renewal coordination.
                        </p>
                      </div>
                    </motion.li>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                      }}
                      className="flex group"
                    >
                      <div className="bg-[#f0932a]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#f0932a]/20 transition-colors">
                        <Check className="h-6 w-6 text-[#f0932a]" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Bulk Discounts & Priority Booking:</span>
                        <p className="text-gray-600">
                          Get the best value when enrolling multiple team members and secure priority spots for any
                          limited-seat webinars or live sessions.
                        </p>
                      </div>
                    </motion.li>
                  </motion.ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Ideal For</h4>
                  <motion.ul variants={staggerContainer} className="space-y-3">
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                      }}
                      className="flex items-start group"
                    >
                      <div className="bg-[#f0932a]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#f0932a]/20 transition-colors">
                        <Building className="h-6 w-6 text-[#f0932a]" />
                      </div>
                      <p className="text-gray-600">
                        Small to large businesses looking to standardize and elevate their bidding and recruitment
                        capabilities.
                      </p>
                    </motion.li>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                      }}
                      className="flex items-start group"
                    >
                      <div className="bg-[#f0932a]/10 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-[#f0932a]/20 transition-colors">
                        <Users className="h-6 w-6 text-[#f0932a]" />
                      </div>
                      <p className="text-gray-600">
                        HR departments seeking a streamlined approach to onboarding and certifying new talent.
                      </p>
                    </motion.li>
                  </motion.ul>
                </div>

                <div className="md:hidden">
                  <Link
                    href="/register?plan=corporate"
                    className="block w-full py-3 px-4 bg-[#f0932a] hover:bg-[#e08a28] text-center text-white font-medium rounded-xl transition-colors shadow-lg"
                  >
                    Enroll Your Team
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* All Plans Include */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
            }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-700 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-16 -mr-16 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -mb-16 -ml-16 blur-2xl"></div>

                <div className="flex items-center relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mr-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">All Plans Include</h3>
                </div>
              </div>

              <div className="p-8">
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex group"
                  >
                    <div className="bg-gray-100 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-gray-200 transition-colors">
                      <Check className="h-6 w-6 text-gray-800" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Full Access to SnB Alliance Community:</span>
                      <p className="text-gray-600">
                        Participate in discussion boards, share insights, and collaborate with peers across the globe.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex group"
                  >
                    <div className="bg-gray-100 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-gray-200 transition-colors">
                      <Check className="h-6 w-6 text-gray-800" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Continual Learning Opportunities:</span>
                      <p className="text-gray-600">
                        Explore live webinars, expert-led workshops, and a growing library of self-paced materials.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex group"
                  >
                    <div className="bg-gray-100 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-gray-200 transition-colors">
                      <Check className="h-6 w-6 text-gray-800" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Ongoing Industry Updates:</span>
                      <p className="text-gray-600">
                        Stay informed with newsletters and reports covering the latest trends and best practices in
                        bidding and recruitment.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex group"
                  >
                    <div className="bg-gray-100 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-gray-200 transition-colors">
                      <Check className="h-6 w-6 text-gray-800" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Membership Dashboard:</span>
                      <p className="text-gray-600">
                        Manage your account, track certification progress, and view resources all in one place.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* How to Choose the Right Plan */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } },
            }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-6 bg-gradient-to-r from-[#39a3b1] to-[#39a3b1]/90 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-16 -mr-16 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -mb-16 -ml-16 blur-2xl"></div>

                <div className="flex items-center relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mr-4">
                    <HelpCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">How to Choose the Right Plan</h3>
                </div>
              </div>

              <div className="p-8">
                <motion.ol variants={staggerContainer} className="space-y-6">
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex"
                  >
                    <div className="w-8 h-8 bg-[#39a3b1] rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold shadow-md">
                      1
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Assess Your Goals:</span>
                      <p className="text-gray-600">
                        Are you an individual focusing on personal skill development, or do you lead a team aiming to
                        standardize processes across your organization?
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex"
                  >
                    <div className="w-8 h-8 bg-[#39a3b1] rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold shadow-md">
                      2
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Review the Benefits:</span>
                      <p className="text-gray-600">
                        Compare the resources, discounts, and support options offered by each plan to see which aligns
                        best with your aspirations.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex"
                  >
                    <div className="w-8 h-8 bg-[#39a3b1] rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold shadow-md">
                      3
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Join or Upgrade Anytime:</span>
                      <p className="text-gray-600">
                        Start with the tier that suits your needs now; you can always upgrade your membership as your
                        career or company grows.
                      </p>
                    </div>
                  </motion.li>
                </motion.ol>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39a3b1] to-transparent opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#f0932a]/10 px-4 py-2 rounded-lg mb-4">
              <span className="w-2 h-2 rounded-full bg-[#f0932a] animate-pulse"></span>
              <span className="text-[#f0932a] font-medium text-sm tracking-wide uppercase">Success Stories</span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
            <div className="w-24 h-1 bg-[#39a3b1] mx-auto"></div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {/* Testimonial 1 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#39a3b1]/10 rounded-xl flex items-center justify-center mr-3">
                  <Users className="h-6 w-6 text-[#39a3b1]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Bid Manager</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Joining the SnB Alliance membership has been transformative for my career. The networking opportunities
                and resources have helped me secure multiple high-value contracts."
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#39a3b1]/10 rounded-xl flex items-center justify-center mr-3">
                  <Users className="h-6 w-6 text-[#39a3b1]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Recruitment Specialist</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The professional development resources and leadership training have accelerated my growth. I've been
                promoted twice since becoming a member!"
              </p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#39a3b1]/10 rounded-xl flex items-center justify-center mr-3">
                  <Users className="h-6 w-6 text-[#39a3b1]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">David Rodriguez</h4>
                  <p className="text-sm text-gray-600">Operations Director</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The executive membership has connected me with industry leaders and mentors who have helped shape my
                leadership style and strategic thinking."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Events section */}
      <motion.section
        ref={eventsRef}
        initial="hidden"
        animate={eventsInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-gray-50 relative overflow-hidden"
        id="events"
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
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#39a3b1]/10 px-4 py-2 rounded-lg mb-4">
              <span className="w-2 h-2 rounded-full bg-[#39a3b1] animate-pulse"></span>
              <span className="text-[#39a3b1] font-medium text-sm tracking-wide uppercase">Exclusive Events</span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Member Events</h2>
            <div className="w-24 h-1 bg-[#39a3b1] mx-auto"></div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Event 1 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-[#39a3b1] font-bold mb-2">September 10-11, 2025</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mastering Bid & Proposal Writing</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive training on creating winning proposals with hands-on exercises and expert feedback.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>10:00 AM - 4:00 PM EST (both days)</span>
                </div>
              </motion.div>

              {/* Event 2 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-[#39a3b1] font-bold mb-2">November 5, 2025</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Recruitment Metrics & Performance Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to leverage data analytics to measure and improve recruitment performance.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>1:00 PM - 2:30 PM EST</span>
                </div>
              </motion.div>

              {/* Event 3 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-[#39a3b1] font-bold mb-2">October 7-8, 2025</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">RFP Compliance & Risk Management</h3>
                <p className="text-gray-600 mb-4">
                  In-depth workshop on navigating compliance requirements and mitigating risks in the bidding process.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>9:00 AM - 5:00 PM EST (both days)</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
              }}
              className="text-center mt-8"
            >
              <Link
                href="/learning/events&Calendar"
                className="inline-flex items-center px-6 py-3 bg-[#39a3b1] text-white font-medium rounded-xl hover:bg-[#39a3b1]/90 transition-colors shadow-lg group"
              >
                View All Events <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

     
    </div>
  )
}

