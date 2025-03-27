"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Building, Globe, GraduationCap, HandshakeIcon, LightbulbIcon, Mail, MapPin, Phone, Users, CheckCircle, Sparkles, Star } from 'lucide-react'
import { useLanguage } from "@/contexts/LanguageContext"
import { useState, useEffect } from "react"
import { getAboutPageData } from "@/lib/wordpress"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface AboutData {
  acf: {
    workshops_webinars_heading: string
    workshops_webinars_subheading: string
    webinar_date_time: any
    webinar_title: string
    webinar_description: string
    webinar_btn_1: string
    webinar_btn_2: string
    learning_journey_heading: string
    enrollment_title: string
    enrollment_description: string
    flexible_learning_title: string
    flexible_learning_description: string
    practical_skills_title: string
    practical_skills_description: string
    certification_title: string
    certification_description: string
    hero_banner: string
    hero_title: string
    hero_description: string
  }
}

export default function AboutPage() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null)
  const { language } = useLanguage()

  // Brand colors
  const brandColors = {
    teal: "#057e8d",
    red: "#9c242a",
    orange: "#ed8523",
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
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [whatWeDoRef, whatWeDoInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [partnersRef, partnersInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [careersRef, careersInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [newsRef, newsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAboutPageData(language)
        setAboutData(data)
      } catch (error) {
        console.error("Error fetching about page data:", error)
      }
    }
    fetchData()
  }, [language])

  if (!aboutData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-4 border-[#057e8d] border-t-transparent animate-spin"></div>
            <div className="absolute inset-3 rounded-full border-4 border-[#ed8523] border-b-transparent animate-spin animate-reverse"></div>
          </div>
          <p className="text-[#057e8d] text-lg font-medium mt-4">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section with 3D elements */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="relative w-full overflow-hidden min-h-[70vh] flex items-center bg-[#0c6978]"
      >
        {/* Diagonal divider at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-16 z-10">
          <svg viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 96L1440 0V96H0Z" fill="white" />
          </svg>
        </div>

        {/* Keep the Animated geometric elements */}
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
                stroke="#057e8d"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M100 15C100 15 100 15 100 15C116.57 15 130 28.43 130 45C130 45 130 45 130 45C130 45 130 45 130 45C130 61.57 143.43 75 160 75C160 75 160 75 160 75C160 75 160 75 160 75C160 91.57 146.57 105 130 105C130 105 130 105 130 105C130 105 130 105 130 105C130 121.57 116.57 135 100 135C100 135 100 135 100 135C100 135 100 135 100 135C83.43 135 70 121.57 70 105C70 105 70 105 70 105C70 105 70 105 70 105C53.43 105 40 91.57 40 75C40 75 40 75 40 75C40 75 40 75 40 75C40 58.43 53.43 45 70 45C70 45 70 45 70 45C70 45 70 45 70 45C70 28.43 83.43 15 100 15Z"
                stroke="#057e8d"
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
                stroke="#057e8d"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M140 60L100 40L60 60L40 100L60 140L100 160L140 140L160 100L140 60Z"
                stroke="#057e8d"
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
              <path d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z" fill="#ed8523" />
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
              <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z" fill="#057e8d" />
            </svg>
          </motion.div>

          {/* Plus sign */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, 45, 0],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 2 }}
            className="absolute bottom-[15%] right-[10%]"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2V18M2 10H18" stroke="#057e8d" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, 45, 0],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 3 }}
            className="absolute top-[40%] left-[40%]"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1V11M1 6H11" stroke="#ed8523" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Dot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
            className="absolute top-[30%] right-[40%] w-2 h-2 rounded-full bg-[#057e8d]"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 2 }}
            className="absolute bottom-[40%] left-[20%] w-2 h-2 rounded-full bg-[#ed8523]"
          ></motion.div>
        </div>

        {/* Floating stats cards */}
        {/* <div className="absolute top-[15%] right-[5%] z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-sm">Certified Professionals</p>
                <p className="text-white font-bold text-xl">2,500+</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-[35%] right-[10%] z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-sm">Global Reach</p>
                <p className="text-white font-bold text-xl">15+ Countries</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-[15%] left-[5%] z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-sm">Industry Partners</p>
                <p className="text-white font-bold text-xl">50+</p>
              </div>
            </div>
          </motion.div>
        </div> */}

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
              className="text-center mb-8"
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white font-medium">About Our Organization</span>
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
                className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                WHO WE ARE
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
                }}
                className="text-white text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
              >
                SnB Alliance is a non-profit organization dedicated to setting standards and providing certifications in
                the bidding and recruitment industries. Through our comprehensive programs and resources, we empower
                professionals to excel in their careers.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } },
                }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className="w-8 h-12 rounded-full border-2 border-white/50 flex items-center justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <motion.div className="w-1.5 h-3 bg-white rounded-full"></motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Mission & Vision Cards (overlapping with hero section) */}
      <div className="container mx-auto px-4 relative z-20 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto -mt-32">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#057e8d] to-[#057e8d]/60 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div>
            <div className="relative h-full bg-gradient-to-br from-[#057e8d] to-[#057e8d]/90 rounded-2xl p-8 shadow-lg group-hover:translate-y-[-5px] transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-16 -mr-16 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -mb-16 -ml-16 blur-2xl"></div>

              <div className="flex items-center gap-6 mb-6 relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">MISSION</h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed relative z-10">
                To empower individuals and organizations by providing accessible, credible certifications and training
                programs, thereby creating a more skilled, confident workforce in bidding and recruitment.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ed8523] to-[#ed8523]/60 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div>
            <div className="relative h-full bg-gradient-to-br from-[#ed8523] to-[#ed8523]/90 rounded-2xl p-8 shadow-lg group-hover:translate-y-[-5px] transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-16 -mr-16 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -mb-16 -ml-16 blur-2xl"></div>

              <div className="flex items-center gap-6 mb-6 relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <LightbulbIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">VISION</h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed relative z-10">
                To become the global benchmark for excellence in staffing and bidding, recognized for fostering
                innovation, collaboration, and professional growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>


      {/* What We Do Section */}
      <motion.section
        ref={whatWeDoRef}
        initial="hidden"
        animate={whatWeDoInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        id="what-we-do"
      >
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-[#057e8d]/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-[#ed8523]/10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="inline-flex items-center gap-2 bg-[#ed8523]/10 px-4 py-2 rounded-full mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#ed8523] animate-pulse"></span>
              <span className="text-[#ed8523] font-medium text-sm tracking-wide uppercase">Our Services</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-4xl font-bold text-[#9c242a] mb-6 relative"
            >
              WHAT WE DO?
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]"></div>
            </motion.h2>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Certifications */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="relative group"
            >
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#057e8d] to-[#057e8d]/60 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div> */}
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Certifications</h3>
                <p className="text-gray-600 mb-6">
                  We offer a range of certifications designed to validate expertise and enhance career prospects in
                  bidding and recruitment.
                </p>
                <Link
                  href="/certifications"
                  className="text-[#057e8d] hover:text-[#057e8d]/80 font-medium inline-flex items-center group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Learning & Training */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
              }}
              className="relative group"
            >
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#ed8523] to-[#ed8523]/60 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div> */}
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Learning & Training</h3>
                <p className="text-gray-600 mb-6">
                  Through interactive and hands-on sessions, we provide comprehensive training to help professionals excel
                  in their roles.
                </p>
                <Link
                  href="/learning"
                  className="text-[#ed8523] hover:text-[#ed8523]/80 font-medium inline-flex items-center group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Resources & Community */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
              }}
              className="relative group"
            >
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#9c242a] to-[#9c242a]/60 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div> */}
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Resources & Community</h3>
                <p className="text-gray-600 mb-6">
                  Our resource hub, coupled with a vibrant community, provides ongoing support and networking
                  opportunities.
                </p>
                <Link
                  href="/resources"
                  className="text-[#9c242a] hover:text-[#9c242a]/80 font-medium inline-flex items-center group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Founding Team Section */}
      <motion.section
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-32 bg-white relative overflow-hidden"
        id="team"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#057e8d] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#ed8523] to-transparent opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div variants={slideInLeft} className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#057e8d]/10 px-4 py-2 rounded-lg mb-2">
                <span className="w-2 h-2 rounded-full bg-[#057e8d] animate-pulse"></span>
                <span className="text-[#057e8d] font-medium text-sm tracking-wide uppercase">Our Leadership</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#9c242a] relative">
                Founding Team
                <div className="absolute -bottom-4 left-0 w-24 h-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]"></div>
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                Driven by years of hands-on experience, our founders created SnB Alliance with a shared passion for
                improving standards across the bidding and recruitment sectors. Their vision and expertise guide our
                offerings, ensuring we provide relevant, high-quality programs.
              </p>

              {/* <motion.a
                href="/team"
                className="inline-flex items-center px-8 py-3 bg-[#057e8d] text-white font-medium rounded-xl hover:bg-[#057e8d]/90 transition-colors shadow-md"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Meet Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a> */}
            </motion.div>

            <motion.div variants={slideInRight} className="relative">
              <div className="relative">
                {/* Image container with modern styling */}
                <div className="relative overflow-hidden rounded-2xl">
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#057e8d]/20 to-[#ed8523]/20 mix-blend-overlay"></div>

                  {/* Main image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/foundingTeam.jpg"
                      alt="SnB Alliance founding team"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 left-0 w-16 h-16">
                      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0V100" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
                        <path d="M0 0H100" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 right-0 w-16 h-16">
                      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 100V0" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
                        <path d="M100 100H0" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#ed8523]/10 flex items-center justify-center">
                      <Star className="w-6 h-6 text-[#ed8523]" />
                    </div>
                    <div>
                      <p className="text-[#9c242a] font-bold">Industry</p>
                      <p className="text-gray-600">Experts</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Partners & Collaborations Section */}
      <motion.section
        ref={partnersRef}
        initial="hidden"
        animate={partnersInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        id="partners"
      >
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-[#057e8d]/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-[#ed8523]/10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div variants={slideInLeft} className="relative order-2 md:order-1">
              <div className="relative">
                {/* Image container with modern styling */}
                <div className="relative overflow-hidden rounded-2xl">
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#ed8523]/20 to-[#057e8d]/20 mix-blend-overlay"></div>

                  {/* Main image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/partners.jpg"
                      alt="Business partners shaking hands"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 left-0 w-16 h-16">
                      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0V100" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
                        <path d="M0 0H100" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 right-0 w-16 h-16">
                      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 100V0" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
                        <path d="M100 100H0" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="space-y-8 order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-[#ed8523]/10 px-4 py-2 rounded-lg mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ed8523] animate-pulse"></span>
                <span className="text-[#ed8523] font-medium text-sm tracking-wide uppercase">Collaborations</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#9c242a] relative">
                Partners & Collaborations
                <div className="absolute -bottom-4 left-0 w-24 h-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]"></div>
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                We're actively forging partnerships with educational institutions, industry associations, and leading
                organizations. These collaborations help us expand our reach, enhance our curriculum, and connect our
                community with opportunities.
              </p>

              <div className="space-y-6 mt-8">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Building className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Educational Partners</h3>
                    <p className="text-gray-600">Leading universities and training institutions</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
                  }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <HandshakeIcon className="h-7 w-7 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Industry Associations</h3>
                    <p className="text-gray-600">Professional bodies and trade organizations</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                  }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-7 w-7 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Global Network</h3>
                    <p className="text-gray-600">International recruitment and bidding firms</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Join Our Mission Section */}
      <motion.section
        ref={careersRef}
        initial="hidden"
        animate={careersInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-32 bg-[#057e8d] relative overflow-hidden"
        id="careers"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
          <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#ed8523]/20 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-[#9c242a]/20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="text-white font-medium text-sm">Join Our Team</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-4xl font-bold text-white mb-6"
            >
              Join Our Mission
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-white/90 text-lg"
            >
              SnB Alliance is always looking for passionate professionals who share our vision of elevating the
              bidding and recruitment industries.
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pb-32"
          >
            {/* Why Work With Us */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="group relative"
            >
              <div className="relative h-full">
                <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col group-hover:bg-white/20 transition-all duration-300">
                  <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-7 w-7 text-white" />
                  </div>

                  <div className="flex-grow space-y-4">
                    <h3 className="text-2xl font-bold text-white">Why Work With Us?</h3>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mt-1 flex-shrink-0">
                          <span className="w-2 h-2 rounded-full bg-white"></span>
                        </span>
                        <span>Meaningful Impact: Be part of a team dedicated to empowering individuals and businesses.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mt-1 flex-shrink-0">
                          <span className="w-2 h-2 rounded-full bg-white"></span>
                        </span>
                        <span>Collaborative Culture: Work alongside thought leaders and industry experts.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mt-1 flex-shrink-0">
                          <span className="w-2 h-2 rounded-full bg-white"></span>
                        </span>
                        <span>Professional Growth: Access to ongoing training and certification opportunities.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Current Openings */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
              }}
              className="group relative"
            >
              <div className="relative h-full">
                <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col group-hover:bg-white/20 transition-all duration-300">
                  <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-7 w-7 text-white" />
                  </div>

                  <div className="flex-grow space-y-4">
                    <h3 className="text-2xl font-bold text-white">Current Openings</h3>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mt-1 flex-shrink-0">
                          <span className="w-2 h-2 rounded-full bg-white"></span>
                        </span>
                        <span>Program Coordinator: Assist in the development and management of our certification programs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mt-1 flex-shrink-0">
                          <span className="w-2 h-2 rounded-full bg-white"></span>
                        </span>
                        <span>Marketing Specialist: Help promote our offerings and engage the community.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mt-1 flex-shrink-0">
                          <span className="w-2 h-2 rounded-full bg-white"></span>
                        </span>
                        <span>Instructional Designer: Create and refine learning materials for both online and in-person training.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* How to Apply */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
              }}
              className="group relative"
            >
              <div className="relative h-full">
                <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col group-hover:bg-white/20 transition-all duration-300">
                  <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-7 w-7 text-white" />
                  </div>

                  <div className="flex-grow space-y-4">
                    <h3 className="text-2xl font-bold text-white">How to Apply</h3>
                    <p className="text-white/90">
                      Send your resume and a brief cover letter detailing your interest in SnB Alliance to
                      careers@snballiance.org. If we think you're a good fit, we'll reach out to schedule an interview.
                    </p>
                    <div className="pt-4">
                      <motion.a
                        href="mailto:careers@snballiance.org"
                        className="inline-block w-full text-center py-3 bg-white text-[#057e8d] font-medium rounded-xl transition-colors group-hover:shadow-lg hover:bg-white/90"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span className="inline-flex items-center justify-center gap-2">
                          Apply Now
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* News & Announcements Section */}
      <motion.section
        ref={newsRef}
        initial="hidden"
        animate={newsInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-32 bg-white relative overflow-hidden"
        id="news"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#057e8d] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#ed8523] to-transparent opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="inline-flex items-center gap-2 bg-[#9c242a]/10 px-4 py-2 rounded-full mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#9c242a] animate-pulse"></span>
              <span className="text-[#9c242a] font-medium text-sm tracking-wide uppercase">Stay Updated</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-4xl font-bold text-[#9c242a] mb-6 relative"
            >
              News & Announcements
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]"></div>
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-gray-600 text-lg mt-8"
            >
              Keep track of our latest initiatives, partnerships, and program launches. Whether you're a member, future
              candidate, or industry partner, our updates will ensure you're always in the loop.
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                title: "Upcoming Certifications",
                description: "Be among the first to learn about new courses and special early-bird registrations.",
                color: "#057e8d",
              },
              {
                title: "New Collaborations",
                description: "Discover our latest partnerships with educational institutions, companies, and industry experts.",
                color: "#ed8523",
              },
              {
                title: "Community Spotlights",
                description: "Celebrate the achievements of standout members and read success stories that inspire.",
                color: "#9c242a",
              },
              {
                title: "Event Highlights",
                description: "Recap our recent workshops, webinars, and conferences, and find out when the next event is happening.",
                color: "#057e8d",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]/60 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div>
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:translate-y-[-5px] transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-[#057e8d]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Star className="h-6 w-6 text-[#057e8d]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
            }}
            className="flex justify-center mt-16"
          >
            <motion.a
              href="/news"
              className="relative overflow-hidden group bg-[#057e8d] hover:bg-[#057e8d]/90 text-white font-bold px-10 py-4 text-lg rounded-xl shadow-lg inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">View All News</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        id="contact"
      >
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-[#057e8d]/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-[#ed8523]/10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="inline-flex items-center gap-2 bg-[#ed8523]/10 px-4 py-2 rounded-full mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#ed8523] animate-pulse"></span>
              <span className="text-[#ed8523] font-medium text-sm tracking-wide uppercase">Contact Us</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-4xl font-bold text-[#9c242a] mb-6 relative"
            >
              Get in Touch
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]"></div>
            </motion.h2>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Email */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="relative group"
            >
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#057e8d] to-[#057e8d]/60 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div> */}
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:translate-y-[-5px] transition-all duration-300 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
                <p className="text-gray-600 mb-4">info@snballiance.org</p>
                <motion.a
                  href="mailto:info@snballiance.org"
                  className="mt-auto inline-flex items-center px-6 py-2 bg-[#057e8d] text-white font-medium rounded-xl hover:bg-[#057e8d]/90 transition-colors shadow-md"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send Email <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
              }}
              className="relative group"
            >
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#ed8523] to-[#ed8523]/60 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div> */}
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:translate-y-[-5px] transition-all duration-300 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Location</h3>
                <p className="text-gray-600 mb-4 text-center">
                  PO Box 40033 Derry Heights<br />
                  Milton, ON L9T 7W4<br />
                  Canada
                </p>
                <motion.a
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center px-6 py-2 bg-[#ed8523] text-white font-medium rounded-xl hover:bg-[#ed8523]/90 transition-colors shadow-md"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View on Map <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
