"use client"
import Image from "next/image"
import Link from "next/link"
import { Check, Users, FileText, Award, ArrowRight, Star, Sparkles } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState, useEffect } from "react"
import { getHomePageData } from "@/lib/wordpress"
import { useLanguage } from "@/contexts/LanguageContext"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface HomeData {
  acf: {
    hero_bg_image: string
    hero_title: string
    hero_subtitle: string
    button_text: string
    what_is_snb_alliance: string
    snb_alliance_paragraph: string
    why_us: string
    benifit_1: string
    benifit_2: string
    benifit_3: string
    benifit_4: string
    benifit_5: string
    certification_pathways_heading: string
    csba_heading: string
    csba_subheading: string
    csba_paragraph: string
    bmp_heading: string
    bmp_subheading: string
    bmp_paragraph: string
    csmp_heading: string
    csmp_subheading: string
    csmp_paragraph: string
    csbl_heading: string
    csbl_subheading: string
    csbl_paragraph: string
    learning_and_training_heading: string
    individual_title: string
    individual_description: string
    self_paced: string
    self_paced_description: string
    instructor_led_title: string
    instructor_led_description: string
    mock_exams_title: string
    mock_exams_description: string
    business_title: string
    business_description: string
    corporate_training_title: string
    corporate_training_description: string
    team_certification_title: string
    team_certification_description: string
    compliance_solutions_title: string
    compliance_solutions_description: string
    learning_guidelines_heading: string
    prerequisite_1: string
    certification_1: string
    target_role_1: string
    prerequisite_2: string
    certification_2: string
    target_role_2: string
    prerequisite_3: string
    certification_3: string
    target_role_3: string
    prerequisite_4: string
    certification_4: string
    target_role_4: string
    learning_guidelines_btn_1: string
    learning_guidelines_btn_2: string
  }
}

export default function HomePage() {
  const [homeData, setHomeData] = useState<HomeData | null>(null)
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
  const [whatIsRef, whatIsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [whyUsRef, whyUsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [certPathsRef, certPathsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [learningRef, learningInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [guidelinesRef, guidelinesInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getHomePageData(language)
        setHomeData(data)
      } catch (error) {
        console.error("Error fetching home page data:", error)
      }
    }
    fetchData()
  }, [language])

  if (!homeData) {
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
      <Header />

      {/* Hero Section with 3D elements */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="relative w-full overflow-hidden min-h-[60vh] flex items-center"
      >
        {homeData.acf.hero_bg_image && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${homeData.acf.hero_bg_image})`,
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

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-16">
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
                <span className="text-white font-medium">The Future of Education</span>
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                dangerouslySetInnerHTML={{ __html: homeData?.acf?.hero_title || "" }}
              ></motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
                }}
                className="text-white text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
              >
                {homeData.acf.hero_subtitle}
              </motion.p>

              {homeData.acf.button_text && (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } },
                  }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <motion.a
                    href="/learning"
                    className="relative overflow-hidden group bg-[#ed8523] hover:bg-[#ed8523]/90 text-white font-bold px-10 py-4 text-lg rounded-xl shadow-lg inline-flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="relative z-10">{homeData.acf.button_text}</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  <motion.a
                    href="/about"
                    className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-bold px-10 py-4 text-lg rounded-xl shadow-lg inline-flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Learn More
                  </motion.a>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="relative mt-16 hidden md:block"
            ></motion.div>
          </div>
        </div>
      </motion.section>

      {/* What is SNB ALLIANCE? Section */}
      <motion.section
        ref={whatIsRef}
        initial="hidden"
        animate={whatIsInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-32 bg-white relative overflow-hidden"
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <motion.div className="space-y-8 relative md:col-span-5 order-2 md:order-1" variants={slideInLeft}>
              <div className="inline-flex items-center gap-2 bg-[#057e8d]/10 px-4 py-2 rounded-lg mb-2">
                <span className="w-2 h-2 rounded-full bg-[#057e8d] animate-pulse"></span>
                <span className="text-[#057e8d] font-medium text-sm tracking-wide uppercase">About Us</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#9c242a] relative">
                {homeData.acf.what_is_snb_alliance}
                <div className="absolute -bottom-4 left-0 w-24 h-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]"></div>
              </h2>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p className="text-xl leading-relaxed">{homeData.acf.snb_alliance_paragraph}</p>
              </div>
            </motion.div>

            <motion.div className="relative md:col-span-7 order-1 md:order-2" variants={slideInRight}>
              <div className="relative">
                {/* Image container with modern styling */}
                <div className="relative overflow-hidden rounded-2xl">
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 z-10 mix-blend-overlay"></div>

                  {/* Main image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/about.png"
                      alt="Students collaborating"
                      width={900}
                      height={600}
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

                {/* Accent image */}
                {/* <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-xl overflow-hidden shadow-xl hidden md:block">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#057e8d]/80 to-[#9c242a]/80 z-10 mix-blend-multiply"></div>
                  <Image
                    src="/about.png"
                    alt="Detail view"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div> */}
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
                    <p className="text-[#9c242a] font-bold">Trusted by</p>
                    <p className="text-gray-600">500+ Organizations</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Us Section with 3D cards */}
      <motion.section
        ref={whyUsRef}
        initial="hidden"
        animate={whyUsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-[#057e8d]/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-[#ed8523]/10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 bg-[#ed8523]/10 px-4 py-2 rounded-full mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#ed8523] animate-pulse"></span>
              <span className="text-[#ed8523] font-medium text-sm">Why Choose Us</span>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-4xl font-bold text-[#9c242a] mb-6">
              {homeData.acf.why_us}
            </motion.h2>

            <motion.p variants={fadeIn} className="text-gray-600">
              We provide exceptional value through our comprehensive approach to education and certification.
            </motion.p>
          </div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Check className="h-6 w-6 text-[#057e8d]" />,
                description: homeData.acf.benifit_1,
                color: "from-[#057e8d]/10 to-[#057e8d]/5",
              },
              {
                icon: <Check className="h-6 w-6 text-[#ed8523]" />,
                description: homeData.acf.benifit_2,
                color: "from-[#ed8523]/10 to-[#ed8523]/5",
              },
              {
                icon: <Check className="h-6 w-6 text-[#9c242a]" />,
                description: homeData.acf.benifit_3,
                color: "from-[#9c242a]/10 to-[#9c242a]/5",
              },
              {
                icon: <Check className="h-6 w-6 text-[#057e8d]" />,
                description: homeData.acf.benifit_4,
                color: "from-[#057e8d]/10 to-[#057e8d]/5",
              },
              {
                icon: <Check className="h-6 w-6 text-[#ed8523]" />,
                description: homeData.acf.benifit_5,
                color: "from-[#ed8523]/10 to-[#ed8523]/5",
              },
              {
                icon: <Check className="h-6 w-6 text-[#9c242a]" />,
                description: "Access to mentorship and resources even after certification.",
                color: "from-[#9c242a]/10 to-[#9c242a]/5",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="flex bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100 shadow-md"
              >
                <div
                  className={`w-24 h-12 rounded-xl bg-gradient-to-br flex ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {benefit.icon}
                </div>
                <p className="text-gray-600 mx-2">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Certification Pathways with 3D cards */}
      <motion.section
        ref={certPathsRef}
        initial="hidden"
        animate={certPathsInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-24 bg-[#057e8d] relative overflow-hidden"
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
              <span className="text-white font-medium text-sm">Certification Paths</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-4xl font-bold text-white mb-6"
            >
              {homeData.acf.certification_pathways_heading}
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-white/90"
            >
              Choose the certification path that aligns with your career goals and aspirations.
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: homeData.acf.csba_heading,
                subtitle: homeData.acf.csba_subheading,
                description: homeData.acf.csba_paragraph,
                link: "/certifications/csba",
                color: "#057e8d",
              },
              {
                title: homeData.acf.bmp_heading,
                subtitle: homeData.acf.bmp_subheading,
                description: homeData.acf.bmp_paragraph,
                link: "/certifications/cbmp",
                color: "#ed8523",
              },
              {
                title: homeData.acf.csmp_heading,
                subtitle: homeData.acf.csmp_subheading,
                description: homeData.acf.csmp_paragraph,
                link: "/certifications/csmp",
                color: "#9c242a",
              },
              {
                title: homeData.acf.csbl_heading,
                subtitle: homeData.acf.csbl_subheading,
                description: homeData.acf.csbl_paragraph,
                link: "/certifications/csbl",
                color: "#057e8d",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group relative"
              >
                {/* Card with hover effect */}
                <div className="relative h-full">
                  {/* Glowing border on hover */}
                  {/* <div className="absolute -inset-0.5 bg-white rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-300"></div> */}

                  <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col group-hover:bg-white/20 transition-all duration-300">
                    {/* Top gradient bar */}
                    <div className="h-2 w-full bg-[${cert.color}] rounded-full mb-6"></div>

                    <div className="flex-grow space-y-4">
                      <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
                      <p className="text-sm text-white/80">{cert.subtitle}</p>
                      <p className="text-white/90 text-sm">{cert.description}</p>
                    </div>

                    <Link
                      href={cert.link}
                      className="mt-6 inline-block w-full text-center py-3 bg-white text-[#057e8d] font-medium rounded-xl transition-colors group-hover:shadow-lg hover:bg-white/90"
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        Explore More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Learning & Training with modern cards */}
      <motion.section
        ref={learningRef}
        initial="hidden"
        animate={learningInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-24 bg-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#057e8d] to-transparent opacity-30"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#057e8d]/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-[#ed8523]/10 blur-3xl"></div>

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
              <span className="text-[#057e8d] font-medium text-sm">Learning Options</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-4xl font-bold text-[#9c242a] mb-6"
            >
              {homeData.acf.learning_and_training_heading}
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-gray-600"
            >
              Flexible learning paths designed to fit your schedule and learning style.
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* For Individuals */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
              className="relative group"
            >
              {/* Card with hover effect */}
              <div className="relative h-full">
                {/* Glowing border on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#057e8d] to-[#ed8523] rounded-3xl blur opacity-0 group-hover:opacity-70 transition duration-300"></div>

                <div className="relative h-full bg-gradient-to-br from-[#ed8523] to-[#ed8523]/90 rounded-3xl p-10 group-hover:from-[#ed8523]/90 group-hover:to-[#ed8523]/80 transition-all duration-300 shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-16 -mr-16 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -mb-16 -ml-16 blur-2xl"></div>

                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-6">{homeData.acf.individual_title}</h3>
                    <p className="mb-10 text-white/90 text-lg">{homeData.acf.individual_description}</p>

                    <motion.ul variants={staggerContainer} className="space-y-8">
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start gap-5 group/item"
                      >
                        <div className="bg-white/20 p-3 rounded-xl group-hover/item:bg-white/30 transition-colors duration-300">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-xl text-white">{homeData.acf.self_paced}</p>
                          <p className="text-white/90">{homeData.acf.self_paced_description}</p>
                        </div>
                      </motion.li>

                      <motion.li
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start gap-5 group/item"
                      >
                        <div className="bg-white/20 p-3 rounded-xl group-hover/item:bg-white/30 transition-colors duration-300">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-xl text-white">{homeData.acf.instructor_led_title}</p>
                          <p className="text-white/90">{homeData.acf.instructor_led_description}</p>
                        </div>
                      </motion.li>

                      <motion.li
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start gap-5 group/item"
                      >
                        <div className="bg-white/20 p-3 rounded-xl group-hover/item:bg-white/30 transition-colors duration-300">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-xl text-white">{homeData.acf.mock_exams_title}</p>
                          <p className="text-white/90">{homeData.acf.mock_exams_description}</p>
                        </div>
                      </motion.li>
                    </motion.ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* For Businesses */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
              className="relative group"
            >
              {/* Card with hover effect */}
              <div className="relative h-full">
                {/* Glowing border on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#057e8d] to-[#ed8523] rounded-3xl blur opacity-0 group-hover:opacity-70 transition duration-300"></div>

                <div className="relative h-full bg-gradient-to-br from-[#057e8d] to-[#057e8d]/90 rounded-3xl p-10 group-hover:from-[#057e8d]/90 group-hover:to-[#057e8d]/80 transition-all duration-300 shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-16 -mr-16 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -mb-16 -ml-16 blur-2xl"></div>

                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-6">{homeData.acf.business_title}</h3>
                    <p className="mb-10 text-white/90 text-lg">{homeData.acf.business_description}</p>

                    <motion.ul variants={staggerContainer} className="space-y-8">
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start gap-5 group/item"
                      >
                        <div className="bg-white/20 p-3 rounded-xl group-hover/item:bg-white/30 transition-colors duration-300">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-xl text-white">{homeData.acf.corporate_training_title}</p>
                          <p className="text-white/90">{homeData.acf.corporate_training_description}</p>
                        </div>
                      </motion.li>

                      <motion.li
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start gap-5 group/item"
                      >
                        <div className="bg-white/20 p-3 rounded-xl group-hover/item:bg-white/30 transition-colors duration-300">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-xl text-white">{homeData.acf.team_certification_title}</p>
                          <p className="text-white/90">{homeData.acf.team_certification_description}</p>
                        </div>
                      </motion.li>

                      <motion.li
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        }}
                        className="flex items-start gap-5 group/item"
                      >
                        <div className="bg-white/20 p-3 rounded-xl group-hover/item:bg-white/30 transition-colors duration-300">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-xl text-white">{homeData.acf.compliance_solutions_title}</p>
                          <p className="text-white/90">{homeData.acf.compliance_solutions_description}</p>
                        </div>
                      </motion.li>
                    </motion.ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Learning Guidelines with glassmorphism */}
      <motion.section
        ref={guidelinesRef}
        initial="hidden"
        animate={guidelinesInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-24 bg-gray-50 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9c242a] to-transparent opacity-30"></div>
        <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#ed8523]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-[#057e8d]/10 blur-3xl"></div>

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
              <span className="text-[#9c242a] font-medium text-sm">Learning Paths</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-4xl font-bold text-[#9c242a] mb-6"
            >
              {homeData.acf.learning_guidelines_heading}
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-gray-600"
            >
              Find the perfect certification path based on your experience and career goals.
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-3xl p-10 shadow-xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#057e8d]/20">
                    <th className="text-left py-5 px-4 font-semibold text-[#057e8d] text-lg">Prerequisite</th>
                    <th className="text-left py-5 px-4 font-semibold text-[#057e8d] text-lg">Certification</th>
                    <th className="text-left py-5 px-4 font-semibold text-[#057e8d] text-lg">Target Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                    <td className="py-5 px-4 text-gray-700">{homeData.acf.prerequisite_1}</td>
                    <td className="py-5 px-4 font-medium text-[#9c242a]">{homeData.acf.certification_1}</td>
                    <td className="py-5 px-4 text-gray-700">{homeData.acf.target_role_1}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                    <td className="py-5 px-4 text-gray-700">{homeData.acf.prerequisite_2}</td>
                    <td className="py-5 px-4 font-medium text-[#9c242a]">{homeData.acf.certification_2}</td>
                    <td className="py-5 px-4 text-gray-700">{homeData.acf.target_role_2}</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                    <td className="py-5 px-4 text-gray-700">{homeData.acf.prerequisite_3}</td>
                    <td className="py-5 px-4 font-medium text-[#9c242a]">{homeData.acf.certification_3}</td>
                    <td className="py-5 px-4 text-gray-700">{homeData.acf.target_role_3}</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="py-5 px-4 text-gray-700">{homeData.acf.prerequisite_4}</td>
                    <td className="py-5 px-4 font-medium text-[#9c242a]">{homeData.acf.certification_4}</td>
                    <td className="py-5 px-4 text-gray-700">
                      <p>{homeData.acf.target_role_4}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
            }}
            className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/learning/events&Calendar"
                className="px-8 py-4 bg-[#ed8523] hover:bg-[#ed8523]/90 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                {homeData.acf.learning_guidelines_btn_1}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/learning"
                className="px-8 py-4 bg-[#057e8d] hover:bg-[#057e8d]/90 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                {homeData.acf.learning_guidelines_btn_2}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  )
}

