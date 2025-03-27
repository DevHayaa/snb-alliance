"use client"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  GraduationCap,
  type LucideIcon,
  Scroll,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react"

// Certification types
const certifications = [
  {
    id: "csba",
    title: "CSBA",
    fullTitle: "Certified Staffing & Bidding Associate",
    description:
      "This foundational certification equips you with the essential knowledge of bidding processes, proposal writing, and staffing basics.",
    icon: GraduationCap,
    color: "#057e8d",
    eligibility: "No prior experience required. Open to all professionals interested in bidding and staffing.",
    value: "Gain foundational knowledge in bidding processes, proposal writing, and staffing basics.",
    duration: "40 hours (4-6 weeks part-time)",
    assessment: "Multiple-choice exam (2 hours)",
    fee: "$299",
    image: "/csba.png",
  },
  {
    id: "cbmp",
    title: "CBMP",
    fullTitle: "Certified Bid Management Professional",
    description: "Aimed at individuals who want to specialize in bid management and manpower allocation.",
    icon: FileText,
    color: "#9c242a",
    eligibility: "1+ years of experience in bidding or staffing, or CSBA certification.",
    value: "Develop specialized skills in bid management and manpower allocation strategies.",
    duration: "60 hours (8-10 weeks part-time)",
    assessment: "Multiple-choice exam (2 hours) + Case study analysis",
    fee: "$499",
    image: "/cbmp.png",
  },
  {
    id: "csmp",
    title: "CSMP",
    fullTitle: "Certified Staffing Management Professional",
    description:
      "Designed for resource managers, this certification enhances your professional skill sets in staffing optimization.",
    icon: Users,
    color: "#ed8523",
    eligibility: "2+ years of experience in staffing or resource management, or CSBA certification.",
    value: "Master advanced staffing optimization techniques and resource management strategies.",
    duration: "60 hours (8-10 weeks part-time)",
    assessment: "Multiple-choice exam (2 hours) + Practical assignment",
    fee: "$499",
    image: "/csmp.png",
  },
  {
    id: "csbl",
    title: "CSBL",
    fullTitle: "Certified Staffing & Bidding Leader",
    description:
      "This advanced certification is tailored for experienced leaders who want to master all aspects of staffing and bidding operations.",
    icon: Trophy,
    color: "#057e8d",
    eligibility: "5+ years of experience in bidding and staffing, or CBMP/CSMP certification.",
    value: "Develop leadership capabilities to oversee and optimize integrated bidding and staffing operations.",
    duration: "80 hours (10-12 weeks part-time)",
    assessment: "Multiple-choice exam (3 hours) + Case study + Interview",
    fee: "$799",
    image: "/csbl.png",
  },
]

// Certification benefits
const benefits = [
  {
    title: "Career Advancement",
    description: "Unlock new job opportunities and promotions with industry-recognized credentials.",
    icon: Target,
  },
  {
    title: "Industry Recognition",
    description: "Gain credibility with employers and clients through validated expertise.",
    icon: Award,
  },
  {
    title: "Knowledge Enhancement",
    description: "Develop specialized skills and stay updated with industry best practices.",
    icon: BookOpen,
  },
  {
    title: "Competitive Edge",
    description: "Stand out in the job market with credentials that validate your expertise.",
    icon: Star,
  },
  {
    title: "Professional Network",
    description: "Connect with a community of certified professionals and industry experts.",
    icon: Users,
  },
]

// Certification process steps
const processSteps = [
  {
    title: "Eligibility Check",
    description: "Verify that you meet the prerequisites for your chosen certification.",
    icon: CheckCircle,
  },
  {
    title: "Registration",
    description: "Complete the registration form and pay the certification fee.",
    icon: FileText,
  },
  {
    title: "Learning & Preparation",
    description: "Access study materials and prepare for the certification exam.",
    icon: BookOpen,
  },
  {
    title: "Exam Scheduling",
    description: "Schedule your exam at a convenient date and time.",
    icon: Calendar,
  },
  {
    title: "Certification Exam",
    description: "Complete the exam and any additional assessment components.",
    icon: Scroll,
  },
  {
    title: "Certification Award",
    description: "Receive your certification upon successful completion of all requirements.",
    icon: Trophy,
  },
]

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

function BenefitCard({
  title,
  description,
  icon: Icon,
  index,
}: { title: string; description: string; icon: LucideIcon; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]/60 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div> */}
      <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:translate-y-[-5px] transition-all duration-300">
        <div className="w-16 h-16 rounded-2xl bg-[#057e8d]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-8 w-8 text-[#057e8d]" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}

function ProcessStep({
  title,
  description,
  icon: Icon,
  step,
  index,
}: {
  title: string
  description: string
  icon: LucideIcon
  step: number
  index: number
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1 }}
      className="relative flex items-start"
    >
      <div className="relative">
        <div className="bg-[#057e8d] text-white rounded-full h-10 w-10 flex items-center justify-center z-10 relative shadow-md">
          <span>{step}</span>
        </div>
        {step < processSteps.length && (
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-10 bottom-0 left-1/2 w-0.5 bg-[#057e8d]/30 -translate-x-1/2 h-full"
          ></motion.div>
        )}
      </div>
      <div className="ml-6 pb-12">
        <div className="flex items-center mb-2">
          <Icon className="h-5 w-5 text-[#057e8d] mr-2" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}

function CertificationCard({ certification, index }: { certification: (typeof certifications)[0]; index: number }) {
  const { id, title, fullTitle, description, icon: Icon, color } = certification
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]/60 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div> */}
      <div className="relative h-full bg-white rounded-2xl shadow-lg border border-gray-100 group-hover:translate-y-[-5px] transition-all duration-300 overflow-hidden">
        <div className="p-4 flex items-center justify-between" style={{ backgroundColor: `${color}10` }}>
          <div className="flex items-center">
            <div className="bg-white/30 p-2 rounded-lg mr-3">
              <Icon className="h-6 w-6" style={{ color }} />
            </div>
            <h3 className="text-xl font-bold" style={{ color }}>
              {title}
            </h3>
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="bg-white/30 w-8 h-8 rounded-full flex items-center justify-center"
          >
            <Star className="h-4 w-4" style={{ color }} />
          </motion.div>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-gray-600">({fullTitle})</p>
          <p className="text-gray-700">{description}</p>
          <Link
            href={`/certifications/${id}`}
            className="inline-flex items-center text-[#057e8d] hover:text-[#057e8d]/80 group/link"
          >
            <span>Explore</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

function CertificationDetail({ certification, index }: { certification: (typeof certifications)[0]; index: number }) {
  const {
    title,
    id,
    fullTitle,
    icon: Icon,
    color,
    eligibility,
    value,
    duration,
    assessment,
    fee,
    image,
  } = certification
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      id={certification.id}
      variants={index % 2 === 0 ? slideInLeft : slideInRight}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-16"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        <div className="grid md:grid-cols-3 gap-0">
          <div className="md:col-span-1 relative overflow-hidden">
            <Image
              src={image || "/placeholder.svg?height=300&width=400"}
              alt={`${title} Certification`}
              width={400}
              height={300}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              {/* <div className="p-6 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center justify-center p-3 rounded-full bg-white/20 backdrop-blur-sm mb-4"
                >
                  <Icon className="h-8 w-8" />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold mb-1"
                >
                  {title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 }}
                  className="text-white/80 text-sm"
                >
                  {fullTitle}
                </motion.p>
              </div> */}
            </div>
          </div>
          <div className="md:col-span-2 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#057e8d] mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Eligibility</h3>
                    <p className="text-gray-600 text-sm">{eligibility}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-[#ed8523] mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Value</h3>
                    <p className="text-gray-600 text-sm">{value}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-[#9c242a] mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Duration</h3>
                    <p className="text-gray-600 text-sm">{duration}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <div className="flex items-start">
                  <FileText className="h-5 w-5 text-[#057e8d] mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Assessment</h3>
                    <p className="text-gray-600 text-sm">{assessment}</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
              className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between"
            >
              {/* <div>
                <span className="text-gray-600 text-sm">Certification Fee:</span>
                <span className="ml-2 text-xl font-bold text-[#057e8d]">{fee}</span>
              </div> */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={`/certifications/${certification.id}`}
                  className="px-6 py-3 bg-[#057e8d] text-white font-medium rounded-xl hover:bg-[#057e8d]/90 transition-colors shadow-md inline-flex items-center"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function CertificationsPage() {
  const { language } = useLanguage()
  const [certData, setCertData] = useState(null)

  // Create refs for sections to trigger animations when in view
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [certOptionsRef, certOptionsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [examFeesRef, examFeesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Could fetch certification data here using useEffect if needed
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const data = await getCertificationData(language)
  //       setCertData(data)
  //     } catch (error) {
  //       console.error("Error fetching certification data:", error)
  //     }
  //   }
  //   fetchData()
  // }, [language])

  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="relative w-full overflow-hidden min-h-[70vh] flex items-center bg-[#0c6978]"
      >
        {/* Diagonal divider at the bottom */}
        {/* <div className="absolute bottom-0 left-0 w-full h-16 z-10">
          <svg viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 96L1440 0V96H0Z" fill="white" />
          </svg>
        </div> */}

        {/* Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/certificationbanner.png" 
            alt="Certification Banner"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 "></div>
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
                stroke="#ffffff"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M100 15C100 15 100 15 100 15C116.57 15 130 28.43 130 45C130 45 130 45 130 45C130 45 130 45 130 45C130 61.57 143.43 75 160 75C160 75 160 75 160 75C160 75 160 75 160 75C160 91.57 146.57 105 130 105C130 105 130 105 130 105C130 105 130 105 130 105C130 121.57 116.57 135 100 135C100 135 100 135 100 135C100 135 100 135 100 135C83.43 135 70 121.57 70 105C70 105 70 105 70 105C70 105 70 105 70 105C53.43 105 40 91.57 40 75C40 75 40 75 40 75C40 75 40 75 40 75C40 58.43 53.43 45 70 45C70 45 70 45 70 45C70 45 70 45 70 45C70 28.43 83.43 15 100 15Z"
                stroke="#ffffff"
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
                stroke="#ffffff"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M140 60L100 40L60 60L40 100L60 140L100 160L140 140L160 100L140 60Z"
                stroke="#ffffff"
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
              <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z" fill="#ffffff" />
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
              <path d="M10 2V18M2 10H18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
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
            className="absolute top-[30%] right-[40%] w-2 h-2 rounded-full bg-white"
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

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl lg:max-w-4xl lg:ml-auto lg:mr-0">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
              className="text-right lg:text-right mb-8"
            >
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white font-medium">Professional Growth</span>
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
                className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                SnB Alliance Certifications
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
                }}
                className="text-white text-xl md:text-2xl max-w-3xl lg:max-w-2xl mx-auto lg:ml-auto lg:mr-0 mb-10 leading-relaxed"
              >
                Advance your career with our industry-recognized certifications in bidding and recruitment.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } },
                }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end"
              >
                <motion.a
                  href="#certification-options"
                  className="relative overflow-hidden group bg-white text-[#057e8d] font-bold px-10 py-4 text-lg rounded-xl shadow-lg inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">Explore Certifications</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="#certification-process"
                  className="bg-transparent border border-white text-white font-bold px-10 py-4 text-lg rounded-xl shadow-lg inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Certification Process
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>



      {/* Benefits Section */}
      <motion.section
        ref={benefitsRef}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="inline-flex items-center gap-2 bg-[#057e8d]/10 px-4 py-2 rounded-full mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#057e8d] animate-pulse"></span>
              <span className="text-[#057e8d] font-medium text-sm tracking-wide uppercase">Career Excellence</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-4xl font-bold text-[#9c242a] mb-6 relative"
            >
              Benefits of Certification
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]"></div>
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-gray-600 mt-8"
            >
              Our certifications provide numerous advantages to help you advance in your career and stand out in the
              industry.
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} index={index} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Certification Cards Section */}
      <motion.section
        id="certification-options"
        ref={certOptionsRef}
        initial="hidden"
        animate={certOptionsInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
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
              <span className="text-[#ed8523] font-medium text-sm tracking-wide uppercase">Choose Your Path</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-4xl font-bold text-[#9c242a] mb-6 relative"
            >
              Our Certification Options
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]"></div>
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-gray-600 text-lg mt-8"
            >
              Choose the certification that aligns with your career goals and experience level.
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {certifications.map((certification, index) => (
              <CertificationCard key={certification.id} certification={certification} index={index} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Certification Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#9c242a]/10 px-4 py-2 rounded-full mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#9c242a] animate-pulse"></span>
              <span className="text-[#9c242a] font-medium text-sm tracking-wide uppercase">Certification Details</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl font-bold text-[#9c242a] mb-6 relative"
            >
              Explore Our Certifications
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]"></div>
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-600 mt-8"
            >
              Explore the details of each certification to find the right fit for your career goals.
            </motion.p>
          </div>

          {certifications.map((certification, index) => (
            <CertificationDetail key={certification.id} certification={certification} index={index} />
          ))}
        </div>
      </section>

      {/* Certification Process Section */}
      <motion.section
        id="certification-process"
        ref={processRef}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#057e8d]/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-[#ed8523]/10 blur-3xl"></div>

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
              <span className="text-[#057e8d] font-medium text-sm tracking-wide uppercase">Step By Step</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-4xl font-bold text-[#9c242a] mb-6 relative"
            >
              Certification Process
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]"></div>
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-gray-600 mt-8"
            >
              Follow these steps to earn your SnB Alliance certification.
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
            className="max-w-3xl mx-auto"
          >
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} step={index + 1} index={index} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Exam & Fees Section */}
      <motion.section
        id="exam-fees"
        ref={examFeesRef}
        initial="hidden"
        animate={examFeesInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-32 bg-white relative overflow-hidden"
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
              className="inline-flex items-center gap-2 bg-[#ed8523]/10 px-4 py-2 rounded-full mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#ed8523] animate-pulse"></span>
              <span className="text-[#ed8523] font-medium text-sm tracking-wide uppercase">Exam Information</span>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-4xl font-bold text-[#9c242a] mb-6 relative"
            >
              Exam & Fees
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]"></div>
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-gray-600 mt-8"
            >
              Learn about our examination process and certification fees.
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="relative group mb-8"
          >
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]/60 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-300"></div> */}
            <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-x-auto p-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left text-[#057e8d]">Certification</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-[#057e8d]">Exam Format</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-[#057e8d]">Duration</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-[#057e8d]">Passing Score</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-[#057e8d]">Fee</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-[#057e8d]">Retake Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">CSBA</td>
                    <td className="border border-gray-200 px-4 py-3">Multiple-choice</td>
                    <td className="border border-gray-200 px-4 py-3">2 hours</td>
                    <td className="border border-gray-200 px-4 py-3">70%</td>
                    <td className="border border-gray-200 px-4 py-3 font-bold text-[#057e8d]">$299</td>
                    <td className="border border-gray-200 px-4 py-3">$99 per retake</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">CBMP</td>
                    <td className="border border-gray-200 px-4 py-3">Multiple-choice + Case study</td>
                    <td className="border border-gray-200 px-4 py-3">3 hours</td>
                    <td className="border border-gray-200 px-4 py-3">75%</td>
                    <td className="border border-gray-200 px-4 py-3 font-bold text-[#057e8d]">$499</td>
                    <td className="border border-gray-200 px-4 py-3">$149 per retake</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium">CSMP</td>
                    <td className="border border-gray-200 px-4 py-3">Multiple-choice + Practical</td>
                    <td className="border border-gray-200 px-4 py-3">3 hours</td>
                    <td className="border border-gray-200 px-4 py-3">75%</td>
                    <td className="border border-gray-200 px-4 py-3 font-bold text-[#057e8d]">$499</td>
                    <td className="border border-gray-200 px-4 py-3">$149 per retake</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">CSBL</td>
                    <td className="border border-gray-200 px-4 py-3">Multiple-choice + Case study + Interview</td>
                    <td className="border border-gray-200 px-4 py-3">4 hours</td>
                    <td className="border border-gray-200 px-4 py-3">80%</td>
                    <td className="border border-gray-200 px-4 py-3 font-bold text-[#057e8d]">$799</td>
                    <td className="border border-gray-200 px-4 py-3">$199 per retake</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
            }}
            className="max-w-4xl mx-auto bg-[#057e8d]/10 border border-[#057e8d]/20 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#057e8d]">What's Included in the Fee</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#057e8d] mt-0.5 mr-3 flex-shrink-0" />
                <span>Access to study materials and practice exams</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#057e8d] mt-0.5 mr-3 flex-shrink-0" />
                <span>Certification exam fee (first attempt)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#057e8d] mt-0.5 mr-3 flex-shrink-0" />
                <span>Digital badge and certificate upon successful completion</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#057e8d] mt-0.5 mr-3 flex-shrink-0" />
                <span>One year of certification validity</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-20 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#ed8523]/20 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Advance Your Career?
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
              }}
              className=" text-xl mb-10"
            >
              Take the first step towards professional growth and industry recognition with our certifications.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="/contact"
                className="relative overflow-hidden group bg-[#ed8523] hover:bg-[#ed8523]/90 text-white font-bold px-10 py-4 text-lg rounded-xl shadow-lg inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Apply Now</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="/learning"
                className="backdrop-blur-md hover:bg-white/30 font-bold px-10 py-4 text-lg rounded-xl shadow-lg inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Learning Resources
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

    </div>
  )
}

