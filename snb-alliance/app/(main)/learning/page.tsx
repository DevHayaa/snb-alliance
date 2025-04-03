"use client"
import Link from "next/link"
import Image from "next/image"
import { BookOpen, ArrowRight, Calendar, Users, BarChart, Sparkles, Star } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getLearningPageData } from "@/lib/wordpress"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface LearningData {
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

export default function LearningPage() {
  const [learningData, setLearningData] = useState<LearningData | null>(null)
  const { language } = useLanguage()

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
  const [journeyRef, journeyInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [workshopsRef, workshopsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getLearningPageData(language)
        setLearningData(data)
      } catch (error) {
        console.error("Error fetching learning page data:", error)
      }
    }
    fetchData()
  }, [language])

  if (!learningData) {
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
        className="relative w-full overflow-hidden min-h-[80vh] flex items-center"
      >
        {learningData.acf.hero_banner && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${learningData.acf.hero_banner})`,
              filter: "brightness(0.7)",
            }}
          ></div>
        )}

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

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
              className="text-center mb-8"
            >
              {/* <motion.div
                variants={scaleIn}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white font-medium">Educational Excellence</span>
              </motion.div> */}

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
                className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                {learningData.acf.hero_title}
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
                }}
                className="text-white text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
              >
                {learningData.acf.hero_description}
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } },
                }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {/* <motion.a
                  href="#learning-journey"
                  className="relative overflow-hidden group bg-[#ed8523] hover:bg-[#ed8523]/90 text-white font-bold px-10 py-4 text-lg rounded-xl shadow-lg inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="#workshops"
                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-bold px-10 py-4 text-lg rounded-xl shadow-lg inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Workshops
                </motion.a> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Learning Journey Section */}
      <motion.section
        ref={journeyRef}
        initial="hidden"
        animate={journeyInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="bg-white relative overflow-hidden"
        id="learning-journey"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#057e8d] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#ed8523] to-transparent opacity-30"></div>

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
            <circle cx="50" cy="50" r="48" stroke="#057e8d" strokeWidth="1" strokeDasharray="5 5" />
            <circle cx="50" cy="50" r="30" stroke="#ed8523" strokeWidth="1" />
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
            <rect x="10" y="10" width="80" height="80" stroke="#9c242a" strokeWidth="1" strokeDasharray="5 5" />
            <rect x="25" y="25" width="50" height="50" stroke="#057e8d" strokeWidth="1" />
          </svg>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="inline-flex items-center gap-2 bg-[#057e8d]/10 px-4 py-2 rounded-full mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#057e8d] animate-pulse"></span>
              <span className="text-[#057e8d] font-medium text-sm tracking-wide uppercase">Your Path to Success</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-4xl font-bold text-[#9c242a] mb-6 relative"
            >
              {learningData.acf.learning_journey_heading}
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
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {/* Step 1 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="relative group"
            >
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#057e8d] to-[#057e8d]/60 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div> */}
              <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#057e8d]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/enrollmentIcon.png"
                    alt="Enrollment process"
                    width={60}
                    height={60}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{learningData.acf.enrollment_title}</h3>
                <p className="text-gray-600">{learningData.acf.enrollment_description}</p>
                <div className="hidden md:block absolute top-1/2 -right-12 transform translate-y-[-50%] z-10">
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    <ArrowRight className="h-8 w-8 text-[#057e8d]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
              }}
              className="relative group"
            >
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#ed8523] to-[#ed8523]/60 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div> */}
              <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#ed8523]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/flexibalIcon.png"
                    alt="Flexible learning options"
                    width={60}
                    height={60}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{learningData.acf.flexible_learning_title}</h3>
                <p className="text-gray-600">{learningData.acf.flexible_learning_description}</p>
                <div className="hidden md:block absolute top-1/2 -right-12 transform translate-y-[-50%] z-10">
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    <ArrowRight className="h-8 w-8 text-[#ed8523]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
              }}
              className="relative group"
            >
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#9c242a] to-[#9c242a]/60 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div> */}
              <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#9c242a]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/practicalIcon.png"
                    alt="Practical skills training"
                    width={60}
                    height={60}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{learningData.acf.practical_skills_title}</h3>
                <p className="text-gray-600">{learningData.acf.practical_skills_description}</p>
                <div className="hidden md:block absolute top-1/2 -right-12 transform translate-y-[-50%] z-10">
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    <ArrowRight className="h-8 w-8 text-[#9c242a]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
              }}
              className="relative group"
            >
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#057e8d] to-[#057e8d]/60 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div> */}
              <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#057e8d]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/certificationIcon.png"
                    alt="Certification achievement"
                    width={60}
                    height={60}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{learningData.acf.certification_title}</h3>
                <p className="text-gray-600">{learningData.acf.certification_description}</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
            }}
            className="flex justify-center mt-16"
          >
            <motion.a
              href="/contact"
              className="relative overflow-hidden group bg-[#057e8d] hover:bg-[#057e8d]/90 text-white font-bold px-10 py-4 text-lg rounded-xl shadow-lg inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Begin Your Learning Journey</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Workshops & Webinars Section */}
      <motion.section
        ref={workshopsRef}
        initial="hidden"
        animate={workshopsInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        id="workshops"
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
              <span className="text-[#ed8523] font-medium text-sm tracking-wide uppercase">Live Learning</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-4xl font-bold text-[#9c242a] mb-6 relative"
            >
              {learningData.acf.workshops_webinars_heading}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]"></div>
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-gray-600 text-lg mt-8"
            >
              {learningData.acf.workshops_webinars_subheading}
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523] rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#057e8d]/20 to-[#ed8523]/20 mix-blend-overlay z-10"></div>
                    <Image
                      src="/webinar.png"
                      alt="Featured workshop"
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
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
                  <div className="md:w-1/2 p-8 md:p-10">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-5 w-5 text-[#057e8d] mr-2" />
                      <span className="text-[#057e8d] font-medium">{learningData.acf.webinar_date_time}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{learningData.acf.webinar_title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">{learningData.acf.webinar_description}</p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.a
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#057e8d] text-white font-medium rounded-xl hover:bg-[#057e8d]/90 transition-colors shadow-md"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {learningData.acf.webinar_btn_1} <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.a>

                      <motion.a
                        href="/learning/events&Calendar#upcoming-events"
                        className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#057e8d] text-[#057e8d] font-medium rounded-xl hover:bg-gray-50 transition-colors shadow-md"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {learningData.acf.webinar_btn_2}
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

