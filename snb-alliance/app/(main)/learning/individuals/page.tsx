"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Award,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Clock,
  FileText,
  Globe,
  GraduationCap,
  Lightbulb,
  LineChart,
  MessageSquare,
  Star,
  Target,
  Users,
  Briefcase,
  Sparkles,
  ArrowRight,
} from "lucide-react"

export default function IndividualsPage() {
  const [name, setName] = useState("")
  const [story, setStory] = useState("")

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log("Story Submitted:", { name, story })
    alert("Your story has been submitted successfully!")
    setName("")
    setStory("")
  }

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
  const [learningPathRef, learningPathInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [programsRef, programsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [journeyRef, journeyInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [storiesRef, storiesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [findPathRef, findPathInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [whyChooseRef, whyChooseInView] = useInView({ triggerOnce: true, threshold: 0.1 })

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
              <GraduationCap className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Professional Development</span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="text-4xl md:text-5xl font-bold text-[#f8a02e] mb-6"
            >
              Individuals
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
              }}
              className="text-2xl md:text-3xl font-semibold text-white/90 mb-6"
            >
              Develop Your Expertise in Bidding & Recruitment
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
              }}
              className="text-xl text-white/90 mb-10"
            >
              Whether you're exploring career opportunities in bidding and recruitment or looking to refine your skills,
              SnB Alliance provides structured learning paths, industry-recognized programs, and career support to help
              you succeed.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } },
              }}
            >
              <Link
                href="#learning-path"
                className="relative overflow-hidden group bg-[#f0932a] hover:bg-[#f0932a]/90 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-lg inline-flex items-center justify-center gap-2"
              >
                <span className="relative z-10">Explore Your Path</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#f0932a] to-[#39a3b1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Learning Path Section */}
      <motion.section
        id="learning-path"
        ref={learningPathRef}
        initial="hidden"
        animate={learningPathInView ? "visible" : "hidden"}
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
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div variants={slideInLeft} className="md:w-1/2">
                <div className="inline-flex items-center gap-2 bg-[#39a3b1]/10 px-4 py-2 rounded-lg mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#39a3b1] animate-pulse"></span>
                  <span className="text-[#39a3b1] font-medium text-sm tracking-wide uppercase">Learning Path</span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  <Link href="#learning-path" className="hover:text-[#39a3b1] transition-colors">
                    Learning Path
                  </Link>
                </h2>
                <div className="w-20 h-1 bg-[#39a3b1] mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Roadmap to Success Starts Here</h3>
                <p className="text-gray-600 mb-6">
                  Navigate through a well-structured learning path designed to take you from foundational knowledge to
                  advanced expertise in the bidding and recruitment industries.
                </p>

                <motion.ul variants={staggerContainer} className="space-y-4 mb-8">
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex items-start group"
                  >
                    <div className="bg-green-100 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-green-200 transition-colors">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Step-by-Step Curriculum</span>
                      <p className="text-gray-600">
                        Progress from beginner to advanced levels with structured courses.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex items-start group"
                  >
                    <div className="bg-green-100 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-green-200 transition-colors">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Hands-On Learning</span>
                      <p className="text-gray-600">
                        Work on case studies, real-world projects, and interactive exercises.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex items-start group"
                  >
                    <div className="bg-green-100 rounded-lg p-2 mr-3 flex-shrink-0 group-hover:bg-green-200 transition-colors">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Guided Career Development</span>
                      <p className="text-gray-600">Receive mentorship and industry insights from professionals.</p>
                    </div>
                  </motion.li>
                </motion.ul>

                <div className="flex items-center">
                  <div className="bg-[#39a3b1]/10 p-2 rounded-lg mr-2">
                    <Target className="h-6 w-6 text-[#39a3b1]" />
                  </div>
                  <span className="font-semibold text-gray-900">Not sure where to start?</span>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/assessment-quiz"
                    className="mt-4 inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#39a3b1] to-[#39a3b1]/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    Take our Skill Assessment Quiz{" "}
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div variants={slideInRight} className="md:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-xl group">
                  <Image
                    src="/learningPathBg.jpg"
                    alt="Learning path illustration"
                    width={600}
                    height={400}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="text-xl font-bold mb-2">Structured Learning Paths</h4>
                      <p className="text-white/90">Tailored for every career stage and goal</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Program Section */}
      <motion.section
        id="programs"
        ref={programsRef}
        initial="hidden"
        animate={programsInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-gray-50 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0932a] to-transparent opacity-30"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#39a3b1]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-[#f0932a]/10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-[#f0932a]/10 px-4 py-2 rounded-lg mb-4">
                <span className="w-2 h-2 rounded-full bg-[#f0932a] animate-pulse"></span>
                <span className="text-[#f0932a] font-medium text-sm tracking-wide uppercase">Our Programs</span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <Link href="#our-program" className="hover:text-[#39a3b1] transition-colors">
                  Our Program
                </Link>
              </h2>
              <div className="w-20 h-1 bg-[#39a3b1] mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">A Comprehensive Training Experience</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                SnB Alliance offers flexible learning solutions tailored to your career stage and learning preferences.
                Our expert-designed courses ensure that you gain practical, job-ready skills that can be applied
                immediately.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-7 w-7 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Comprehensive Course Library</h4>
                <p className="text-gray-600">Learn everything from recruitment best practices to proposal writing.</p>
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
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-7 w-7 text-purple-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Flexible Learning Options</h4>
                <p className="text-gray-600">
                  Choose between self-paced modules, instructor-led training, or live workshops.
                </p>
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
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-7 w-7 text-teal-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Industry-Recognized Certifications</h4>
                <p className="text-gray-600">Earn credentials that enhance your professional credibility.</p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
              }}
              className="mt-12 text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-[#f0932a]/10 p-2 rounded-lg mr-2">
                  <Lightbulb className="h-6 w-6 text-[#f0932a]" />
                </div>
                <span className="font-semibold text-gray-900">Ready to build your expertise?</span>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/certifications"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#f0932a] to-[#f0932a]/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  Explore Our Programs{" "}
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Learning Journey Section */}
      <motion.section
        id="learning-journey"
        ref={journeyRef}
        initial="hidden"
        animate={journeyInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39a3b1] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0932a] to-transparent opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
              <motion.div variants={slideInLeft} className="md:w-1/2">
                <div className="bg-[#39a3b1]/10 rounded-xl p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <LineChart className="h-8 w-8 text-[#39a3b1] mb-3" />
                      <h5 className="font-bold text-gray-900 mb-2">Progress Tracking</h5>
                      <p className="text-gray-600 text-sm">Visualize your journey through interactive dashboards.</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <FileText className="h-8 w-8 text-[#39a3b1] mb-3" />
                      <h5 className="font-bold text-gray-900 mb-2">Hands-On Assignments</h5>
                      <p className="text-gray-600 text-sm">Apply your knowledge in real-world simulations.</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <Users className="h-8 w-8 text-[#39a3b1] mb-3" />
                      <h5 className="font-bold text-gray-900 mb-2">Mentor Support</h5>
                      <p className="text-gray-600 text-sm">Get career advice from seasoned professionals.</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <Globe className="h-8 w-8 text-[#39a3b1] mb-3" />
                      <h5 className="font-bold text-gray-900 mb-2">Global Community</h5>
                      <p className="text-gray-600 text-sm">Connect with learners and professionals worldwide.</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={slideInRight} className="md:w-1/2">
                <div className="inline-flex items-center gap-2 bg-[#39a3b1]/10 px-4 py-2 rounded-lg mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#39a3b1] animate-pulse"></span>
                  <span className="text-[#39a3b1] font-medium text-sm tracking-wide uppercase">Learning Journey</span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  <Link href="#learning-journey" className="hover:text-[#39a3b1] transition-colors">
                    Learning Journey
                  </Link>
                </h2>
                <div className="w-20 h-1 bg-[#39a3b1] mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Stay on Track & Achieve Your Goals</h3>
                <p className="text-gray-600 mb-6">
                  Your progress matters. Our personalized dashboard helps you monitor your learning, complete
                  assignments, and connect with industry mentors for guidance.
                </p>
                <div className="flex items-center mb-6 group">
                  <div className="w-12 h-12 bg-[#39a3b1]/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#39a3b1]/20 transition-colors">
                    <GraduationCap className="h-6 w-6 text-[#39a3b1]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Personalized Learning Experience</h4>
                    <p className="text-gray-600">Tailored to your pace, preferences, and career goals.</p>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="flex items-center">
                    <div className="bg-[#f0932a]/10 p-2 rounded-lg mr-2">
                      <Star className="h-6 w-6 text-[#f0932a]" />
                    </div>
                    <span className="font-semibold text-gray-900">Start your learning journey today!</span>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/certifications"
                      className="mt-4 inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#f0932a] to-[#f0932a]/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                    >
                      Enroll Now{" "}
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section
        id="testimonials"
        ref={storiesRef}
        initial="hidden"
        animate={storiesInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-gray-50 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0932a] to-transparent opacity-30"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#39a3b1]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-[#f0932a]/10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-[#f0932a]/10 px-4 py-2 rounded-lg mb-4">
                <span className="w-2 h-2 rounded-full bg-[#f0932a] animate-pulse"></span>
                <span className="text-[#f0932a] font-medium text-sm tracking-wide uppercase">Success Stories</span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <Link href="#success-stories" className="hover:text-[#39a3b1] transition-colors">
                  Success Stories
                </Link>
              </h2>
              <div className="w-20 h-1 bg-[#39a3b1] mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Learn from Those Who've Walked the Path</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Hear from professionals who transformed their careers with SnB Alliance. Whether it's breaking into the
                industry, landing top roles, or improving business performance, our learners have seen real impact.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
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
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative w-40 mx-auto h-48 mt-6">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#39a3b1]/5 rounded-full"></div>
                  <Image
                    src="/careerTranistion.png"
                    alt="Career transition success story"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">From Marketing to Bid Management</h4>
                  <p className="text-gray-600 mb-4">
                    "The structured learning path and mentorship helped me successfully transition into a bid management
                    role within 6 months."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-bold text-gray-900">Sarah Johnson</p>
                      <p className="text-sm text-gray-600">Senior Bid Manager</p>
                    </div>
                  </div>
                </div>
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
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative w-40 mx-auto h-48 mt-6">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#f0932a]/5 rounded-full"></div>
                  <Image src="/freelancerSuccess.png" alt="Freelancer success story" fill className="object-contain" />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Doubled My Consulting Rates</h4>
                  <p className="text-gray-600 mb-4">
                    "The certification and specialized skills I gained allowed me to secure higher-value contracts and
                    double my rates."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-bold text-gray-900">Michael Chen</p>
                      <p className="text-sm text-gray-600">Independent Consultant</p>
                    </div>
                  </div>
                </div>
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
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 w-40 mx-auto mt-6">
                  <div className="absolute top-0 left-0 w-full h-full bg-purple-100/50 rounded-full"></div>
                  <Image
                    src="/leadershipGrowth.png"
                    alt="Leadership growth success story"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Improved Team Performance</h4>
                  <p className="text-gray-600 mb-4">
                    "The leadership program gave me the tools to improve our recruitment efficiency by 35% and reduce
                    turnover."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-bold text-gray-900">Jessica Martinez</p>
                      <p className="text-sm text-gray-600">HR Director</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
              }}
              className="bg-white rounded-xl shadow-lg p-8 text-center max-w-lg mx-auto border border-gray-100"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-[#39a3b1]/10 p-2 rounded-lg mr-2">
                  <MessageSquare className="h-6 w-6 text-[#39a3b1]" />
                </div>
                <span className="font-semibold text-gray-900">Want to share your journey?</span>
              </div>
              <p className="text-gray-600 mb-6">Submit your story and inspire others on their professional journey.</p>

              {/* Story Submission Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39a3b1]/20 focus:border-[#39a3b1] transition-all"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="group">
                  <textarea
                    rows={4}
                    placeholder="Write your story here..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39a3b1]/20 focus:border-[#39a3b1] transition-all"
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#39a3b1] to-[#39a3b1]/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  Share Your Success{" "}
                  <ChevronRight className="ml-2 h-4 w-4 inline-block group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Find Your Path Section */}
      <motion.section
        id="find-your-path"
        ref={findPathRef}
        initial="hidden"
        animate={findPathInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39a3b1] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0932a] to-transparent opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div variants={slideInLeft} className="md:w-1/2">
                <div className="inline-flex items-center gap-2 bg-[#39a3b1]/10 px-4 py-2 rounded-lg mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#39a3b1] animate-pulse"></span>
                  <span className="text-[#39a3b1] font-medium text-sm tracking-wide uppercase">Find Your Path</span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  <Link href="#find-your-path" className="hover:text-[#39a3b1] transition-colors">
                    Find Your Path
                  </Link>
                </h2>
                <div className="w-20 h-1 bg-[#39a3b1] mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Choose the Right Track for Your Future</h3>
                <p className="text-gray-600 mb-6">
                  Not sure where to begin? We offer customized learning tracks based on your experience level, career
                  aspirations, and industry needs.
                </p>

                <motion.ul variants={staggerContainer} className="space-y-4 mb-8">
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex items-start group"
                  >
                    <div className="w-8 h-8 bg-[#39a3b1] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                      1
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Personalized Assessment</span>
                      <p className="text-gray-600">Identify the best starting point based on your skills.</p>
                    </div>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex items-start group"
                  >
                    <div className="w-8 h-8 bg-[#39a3b1] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                      2
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Flexible Tracks</span>
                      <p className="text-gray-600">Select from beginner, advanced, or leadership programs.</p>
                    </div>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex items-start group"
                  >
                    <div className="w-8 h-8 bg-[#39a3b1] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                      3
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Guided Enrollment</span>
                      <p className="text-gray-600">Our advisors help you choose the right courses.</p>
                    </div>
                  </motion.li>
                </motion.ul>

                <div className="flex items-center mb-4">
                  <div className="bg-[#f0932a]/10 p-2 rounded-lg mr-2">
                    <Target className="h-6 w-6 text-[#f0932a]" />
                  </div>
                  <span className="font-semibold text-gray-900">Find the right path for you!</span>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/certifications"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#f0932a] to-[#f0932a]/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    Start Here <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div variants={slideInRight} className="md:w-1/2">
                <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Learning Paths</h4>
                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      className="bg-white rounded-lg p-4 border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <h5 className="font-bold text-gray-900 mb-1">Beginner Track</h5>
                      <p className="text-gray-600 text-sm">For those new to bidding and recruitment</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      className="bg-white rounded-lg p-4 border-l-4 border-green-500 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <h5 className="font-bold text-gray-900 mb-1">Intermediate Track</h5>
                      <p className="text-gray-600 text-sm">For professionals with 1-3 years of experience</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      className="bg-white rounded-lg p-4 border-l-4 border-purple-500 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <h5 className="font-bold text-gray-900 mb-1">Advanced Track</h5>
                      <p className="text-gray-600 text-sm">For seasoned professionals looking to specialize</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      className="bg-white rounded-lg p-4 border-l-4 border-amber-500 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <h5 className="font-bold text-gray-900 mb-1">Leadership Track</h5>
                      <p className="text-gray-600 text-sm">For those aiming for management and leadership roles</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose SnB Alliance Section */}
      <motion.section
        id="why-choose"
        ref={whyChooseRef}
        initial="hidden"
        animate={whyChooseInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 relative overflow-hidden"
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
          <div className="max-w-5xl mx-auto">
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

              <h2 className="text-3xl font-bold mb-4">
                <Link href="#why-choose" className="hover:text-[#f0932a] transition-colors">
                  Why Choose SnB Alliance?
                </Link>
              </h2>
              <div className="w-20 h-1 bg-white mx-auto"></div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
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
                <h4 className="text-xl font-bold mb-3">Globally Recognized Certifications</h4>
                <p className="">Boost your credibility and career prospects.</p>
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
                <Users className="h-10 w-10 text-[#f0932a] mb-4" />
                <h4 className="text-xl font-bold mb-3">Expert-Led Training</h4>
                <p className="">Learn from professionals with years of industry experience.</p>
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
                <Clock className="h-10 w-10 text-[#f0932a] mb-4" />
                <h4 className="text-xl font-bold mb-3">Flexible & Affordable</h4>
                <p className="">Study at your own pace with options that fit any schedule.</p>
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
                <Globe className="h-10 w-10 text-[#f0932a] mb-4" />
                <h4 className="text-xl font-bold mb-3">Exclusive Community Access</h4>
                <p className="">Connect with a network of professionals and mentors.</p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
              }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/10 p-2 rounded-lg mr-2">
                  <Briefcase className="h-6 w-6 text-[#f0932a]" />
                </div>
                <span className="font-semibold">Take the next step in your career.</span>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/membership"
                  className="inline-flex items-center px-8 py-4 bg-[#f0932a] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Join SnB Alliance Today!{" "}
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

