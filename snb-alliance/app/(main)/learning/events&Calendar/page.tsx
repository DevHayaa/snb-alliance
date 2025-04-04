"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle,
  HelpCircle,
  Mail,
  Sparkles,
  ArrowRight,
  ChevronDown,
} from "lucide-react"
import { useState } from "react"

// Sample upcoming events data
const upcomingEvents = [
  // September 2025
  {
    id: 1,
    title: "Mastering Bid & Proposal Writing",
    date: "September 10-11, 2025",
    time: "10:00 AM - 4:00 PM EST (both days)",
    location: "Virtual",
    type: "Virtual Workshop",
    description: "Comprehensive training on creating winning proposals with hands-on exercises and expert feedback.",
  },
  {
    id: 2,
    title: "Strategic Workforce Planning",
    date: "September 18, 2025",
    time: "1:00 PM - 2:30 PM EST",
    location: "Virtual",
    type: "Live Webinar",
    description: "Learn how to align your workforce strategy with business objectives for optimal staffing solutions.",
  },
  {
    id: 3,
    title: "CSBA Certification Bootcamp",
    date: "Starts September 23, 2025",
    time: "Weekly sessions for 6 weeks",
    location: "Online",
    type: "Online Cohort",
    description:
      "Structured preparation program for the Certificate in Staffing & Bidding Associates exam with peer learning.",
  },

  // October 2025
  {
    id: 4,
    title: "RFP Compliance & Risk Management",
    date: "October 7-8, 2025",
    time: "9:00 AM - 5:00 PM EST (both days)",
    location: "New York City",
    type: "On-Site Workshop",
    description: "In-depth workshop on navigating compliance requirements and mitigating risks in the bidding process.",
  },
  {
    id: 5,
    title: "Advanced Talent Acquisition Strategies",
    date: "October 15-16, 2025",
    time: "11:00 AM - 3:00 PM EST (both days)",
    location: "Virtual",
    type: "Virtual Training",
    description: "Master advanced techniques for sourcing, screening, and securing top talent in competitive markets.",
  },
  {
    id: 6,
    title: "CBMP Certification Exam Prep",
    date: "October 21, 2025",
    time: "Self-paced",
    location: "Online",
    type: "Self-Paced Course",
    description: "Comprehensive preparation materials for the Certificate in Bid & Management Professional exam.",
  },

  // November 2025
  {
    id: 7,
    title: "Recruitment Metrics & Performance Analytics",
    date: "November 5, 2025",
    time: "1:00 PM - 2:30 PM EST",
    location: "Virtual",
    type: "Live Webinar",
    description: "Learn how to leverage data analytics to measure and improve recruitment performance.",
  },
  {
    id: 8,
    title: "Bidding for Government Contracts",
    date: "November 13-14, 2025",
    time: "10:00 AM - 3:00 PM EST (both days)",
    location: "Virtual",
    type: "Virtual Workshop",
    description: "Specialized training on navigating the unique requirements of government contract bidding.",
  },
  {
    id: 9,
    title: "CSMP Leadership Training",
    date: "Starts November 20, 2025",
    time: "Weekly sessions for 8 weeks",
    location: "Online",
    type: "Online Cohort",
    description: "Advanced leadership development program for Certified Staffing Management Professionals.",
  },

  // December 2025
  {
    id: 10,
    title: "End-of-Year Industry Trends & Forecasts",
    date: "December 4, 2025",
    time: "3:00 PM - 5:00 PM EST",
    location: "Virtual",
    type: "Panel Discussion & Networking",
    description:
      "Expert panel discussing industry trends and predictions for the coming year with networking opportunities.",
  },
  {
    id: 11,
    title: "Custom Learning Solutions Consultation Week",
    date: "December 9-13, 2025",
    time: "By appointment",
    location: "Virtual",
    type: "Consultation",
    description: "One-on-one consultations to develop customized training solutions for your organization.",
  },
  {
    id: 12,
    title: "Corporate Training Success Stories & Case Studies",
    date: "December 18, 2025",
    time: "1:00 PM - 2:30 PM EST",
    location: "Virtual",
    type: "Live Session",
    description: "Real-world examples of successful corporate training implementations and their business impact.",
  },

  // January 2026
  {
    id: 13,
    title: "Proposal Evaluation & Scoring Strategies",
    date: "January 8-9, 2026",
    time: "10:00 AM - 3:00 PM EST (both days)",
    location: "Virtual",
    type: "Virtual Workshop",
    description:
      "Learn effective methods for evaluating and scoring proposals to select the best vendors and partners.",
  },
  {
    id: 14,
    title: "Team Certification Planning for 2026",
    date: "January 15, 2026",
    time: "1:00 PM - 2:00 PM EST",
    location: "Virtual",
    type: "Live Info Session",
    description: "Strategic planning session for organizations looking to implement team certification programs.",
  },
  {
    id: 15,
    title: "RPO & BPO Best Practices",
    date: "January 23, 2026",
    time: "11:00 AM - 12:30 PM EST",
    location: "Virtual",
    type: "Webinar",
    description: "Explore best practices in Recruitment Process Outsourcing and Business Process Outsourcing.",
  },

  // February 2026
  {
    id: 16,
    title: "Recruitment Compliance & Legal Frameworks",
    date: "February 6-7, 2026",
    time: "9:00 AM - 5:00 PM EST (both days)",
    location: "Toronto",
    type: "On-Site Workshop",
    description: "Comprehensive overview of recruitment compliance requirements and legal considerations.",
  },
  {
    id: 17,
    title: "Building High-Performance Bidding Teams",
    date: "February 12-13, 2026",
    time: "10:00 AM - 3:00 PM EST (both days)",
    location: "Virtual",
    type: "Virtual Training",
    description: "Strategies for developing and managing teams that consistently win competitive bids.",
  },
  {
    id: 18,
    title: "CSBL Certification Prep Course",
    date: "Starts February 18, 2026",
    time: "Weekly sessions for 10 weeks",
    location: "Online",
    type: "Online Cohort",
    description: "Comprehensive preparation for the Certified Staffing and Bidding Leader certification.",
  },

  // March 2026
  {
    id: 19,
    title: "AI in Recruitment & Bidding Automation",
    date: "March 5, 2026",
    time: "1:00 PM - 2:30 PM EST",
    location: "Virtual",
    type: "Live Webinar",
    description: "Explore how AI is transforming recruitment processes and automating aspects of the bidding process.",
  },
  {
    id: 20,
    title: "Winning Strategies for Proposal Writing",
    date: "March 11-12, 2026",
    time: "10:00 AM - 3:00 PM EST (both days)",
    location: "Virtual",
    type: "Virtual Workshop",
    description: "Advanced techniques for creating compelling proposals that stand out from the competition.",
  },
  {
    id: 21,
    title: "Corporate Training Summit: Future of Workforce Development",
    date: "March 25-26, 2026",
    time: "9:00 AM - 5:00 PM EST (both days)",
    location: "New York City & Online",
    type: "Hybrid Event",
    description:
      "Major industry event exploring the future of corporate training and workforce development strategies.",
  },
]

export default function EventsCalendarPage() {
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
  const [eventsRef, eventsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [workshopsRef, workshopsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [scheduleRef, scheduleInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [faqsRef, faqsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [requestRef, requestInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [whyAttendRef, whyAttendInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const [visibleEvents, setVisibleEvents] = useState(5)

  // Define loadMoreEvents function
  const loadMoreEvents = () => {
    setVisibleEvents((prev) => prev + 5) // Increase visible events by 5
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with animated elements */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="relative py-20 min-h-[60vh] flex items-center overflow-hidden"
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
              <Calendar className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Learning Opportunities</span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Events & Calendar
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
              }}
              className="text-xl opacity-90 mb-6 text-white"
            >
              Stay Ahead with Expert-Led Learning Opportunities
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
              }}
              className="text-lg opacity-80 text-white"
            >
              SnB Alliance offers interactive workshops, live webinars, and structured learning schedules to help
              professionals stay updated on the latest trends in bidding, recruitment, and workforce management. Explore
              upcoming sessions, plan your learning, and get answers to your questions.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Upcoming Events Calendar Section */}
      <motion.section
        id="upcoming-events"
        ref={eventsRef}
        initial="hidden"
        animate={eventsInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-gray-50 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39a3b1] to-transparent opacity-30"></div>
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
              <div className="inline-flex items-center gap-2 bg-[#39a3b1]/10 px-4 py-2 rounded-lg mb-4">
                <span className="w-2 h-2 rounded-full bg-[#39a3b1] animate-pulse"></span>
                <span className="text-[#39a3b1] font-medium text-sm tracking-wide uppercase">Upcoming Events</span>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
              <div className="w-20 h-1 bg-[#39a3b1] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Browse our calendar of upcoming workshops, webinars, and training sessions.
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
              className="grid grid-cols-1 gap-6 mb-8"
            >
              {upcomingEvents.slice(0, visibleEvents).map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.05 } },
                  }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    <div
                      className={`w-full md:w-1/4 p-6 flex flex-col justify-center items-center text-white ${
                        event.type.includes("Workshop")
                          ? "bg-gradient-to-br from-[#39a3b1] to-[#39a3b1]/80"
                          : "bg-gradient-to-br from-[#f0932a] to-[#f0932a]/80"
                      }`}
                    >
                      <span className="text-sm font-semibold uppercase tracking-wider mb-2">{event.type}</span>
                      <Calendar className="h-10 w-10 mb-2" />
                      <div className="text-center">
                        <div className="font-bold">{event.date}</div>
                        <div className="text-sm">{event.time}</div>
                      </div>
                    </div>
                    <div className="w-full md:w-3/4 p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center mr-4 mb-2">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link
                          href={`/contact`}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#39a3b1] to-[#39a3b1]/90 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                        >
                          Register Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More Button */}
            {visibleEvents < upcomingEvents.length && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                }}
                className="text-center mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={loadMoreEvents}
                  className="px-6 py-3 bg-gradient-to-r from-[#39a3b1] to-[#39a3b1]/90 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center mx-auto gap-2"
                >
                  See More Events
                  <ChevronDown className="h-5 w-5" />
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Workshops & Webinars Section */}
      <motion.section
        id="workshops-webinars"
        ref={workshopsRef}
        initial="hidden"
        animate={workshopsInView ? "visible" : "hidden"}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div variants={slideInLeft}>
                <div className="inline-flex items-center gap-2 bg-[#39a3b1]/10 px-4 py-2 rounded-lg mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#39a3b1] animate-pulse"></span>
                  <span className="text-[#39a3b1] font-medium text-sm tracking-wide uppercase">Expert Training</span>
                </div>

                <h2 className="text-3xl font-bold mb-4 text-gray-800">Workshops & Webinars</h2>
                <div className="w-20 h-1 bg-[#39a3b1] mb-6"></div>
                <h3 className="text-xl font-semibold mb-6 text-[#39a3b1]">Learn from Industry Experts in Real Time</h3>
                <p className="text-gray-600 mb-6">
                  Join live training sessions, expert-led discussions, and interactive Q&A events designed to enhance
                  your skills and keep you informed about industry trends.
                </p>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                  }}
                  className="mb-6 bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="text-[#f0932a] mr-2">🎓</span> What You Can Expect:
                  </h4>
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
                        <strong className="text-gray-800">Workshops:</strong> Hands-on, practical learning experiences
                        with real-world scenarios.
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
                        <strong className="text-gray-800">Webinars:</strong> Expert-led discussions on best practices,
                        compliance updates, and innovative strategies.
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
                        <strong className="text-gray-800">Live Q&A:</strong> Ask industry professionals your most
                        pressing questions in real time.
                      </div>
                    </motion.li>
                  </motion.ul>
                </motion.div>
              </motion.div>

              <motion.div
                variants={slideInRight}
                className="relative h-64 md:h-auto rounded-xl overflow-hidden shadow-xl group"
              >
                <Image
                  src="/webinar.png"
                  alt="Workshop session with industry professionals"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
                    <p>Engage with experts and peers in dynamic learning environments</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Learning Schedule Section */}
      <motion.section
        id="learning-schedule"
        ref={scheduleRef}
        initial="hidden"
        animate={scheduleInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-gray-50 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0932a] to-transparent opacity-30"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#39a3b1]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-[#f0932a]/10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                variants={slideInLeft}
                className="order-2 md:order-1 relative h-64 md:h-auto rounded-xl overflow-hidden shadow-xl group"
              >
                <Image
                  src="/sheduleCalendar.png"
                  alt="Learning schedule and calendar"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Structured Learning</h3>
                    <p>Plan your professional development journey with our comprehensive calendar</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={slideInRight} className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 bg-[#f0932a]/10 px-4 py-2 rounded-lg mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#f0932a] animate-pulse"></span>
                  <span className="text-[#f0932a] font-medium text-sm tracking-wide uppercase">Learning Schedule</span>
                </div>

                <h2 className="text-3xl font-bold mb-4 text-gray-800">Learning Schedule</h2>
                <div className="w-20 h-1 bg-[#39a3b1] mb-6"></div>
                <h3 className="text-xl font-semibold mb-6 text-[#39a3b1]">
                  Plan Your Training & Certification Timeline
                </h3>
                <p className="text-gray-600 mb-6">
                  Stay organized with our structured learning schedule, designed to help you keep track of upcoming
                  courses, exams, and certification deadlines.
                </p>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                  }}
                  className="mb-6 bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="text-[#f0932a] mr-2">📆</span> How the Learning Schedule Helps You:
                  </h4>
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
                        <strong className="text-gray-800">Track Key Dates</strong> – Know when courses start, when exams
                        are scheduled, and when new modules launch.
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
                        <strong className="text-gray-800">Plan Ahead</strong> – Align your training with your career
                        goals and availability.
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
                        <strong className="text-gray-800">Stay Updated</strong> – Receive reminders and notifications
                        about enrollment deadlines.
                      </div>
                    </motion.li>
                  </motion.ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Learning FAQs Section */}
      <motion.section
        id="learning-faqs"
        ref={faqsRef}
        initial="hidden"
        animate={faqsInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39a3b1] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0932a] to-transparent opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-[#39a3b1]/10 px-4 py-2 rounded-lg mb-4">
                <span className="w-2 h-2 rounded-full bg-[#39a3b1] animate-pulse"></span>
                <span className="text-[#39a3b1] font-medium text-sm tracking-wide uppercase">Quick Answers</span>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-gray-800">Learning FAQs</h2>
              <div className="w-20 h-1 bg-[#39a3b1] mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold mb-6 text-[#39a3b1]">Find Quick Answers to Common Questions</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Have questions about our courses, certifications, or event logistics? Check out our Learning FAQs to get
                instant answers.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
              }}
              className="bg-gray-50 rounded-xl p-8 mb-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <HelpCircle className="h-5 w-5 text-[#f0932a] mr-2" />
                Frequently Asked Questions:
              </h4>
              <motion.div variants={staggerContainer} className="space-y-6">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="border-b border-gray-200 pb-6 hover:bg-white/50 p-4 rounded-lg transition-colors"
                >
                  <h5 className="font-semibold text-gray-800 mb-2">How do I register for a webinar or workshop?</h5>
                  <p className="text-gray-600">
                    Simply visit the event page and click "Register Now." You'll receive an email confirmation with
                    details.
                  </p>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
                  }}
                  className="border-b border-gray-200 pb-6 hover:bg-white/50 p-4 rounded-lg transition-colors"
                >
                  <h5 className="font-semibold text-gray-800 mb-2">Are workshops recorded?</h5>
                  <p className="text-gray-600">
                    Yes! If you miss a session, recordings are available for registered participants.
                  </p>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                  }}
                  className="hover:bg-white/50 p-4 rounded-lg transition-colors"
                >
                  <h5 className="font-semibold text-gray-800 mb-2">Can I get a certificate for attending webinars?</h5>
                  <p className="text-gray-600">
                    Some webinars offer certificates of completion. Check event details for eligibility.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
              }}
              className="text-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/resources#faqs"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#39a3b1] to-[#39a3b1]/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Visit our FAQs
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Request Information Section */}
      <motion.section
        id="request-information"
        ref={requestRef}
        initial="hidden"
        animate={requestInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-gray-50 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f0932a] to-transparent opacity-30"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#39a3b1]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-[#f0932a]/10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div variants={slideInLeft}>
                <div className="inline-flex items-center gap-2 bg-[#f0932a]/10 px-4 py-2 rounded-lg mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#f0932a] animate-pulse"></span>
                  <span className="text-[#f0932a] font-medium text-sm tracking-wide uppercase">Get Help</span>
                </div>

                <h2 className="text-3xl font-bold mb-4 text-gray-800">Request Information</h2>
                <div className="w-20 h-1 bg-[#39a3b1] mb-6"></div>
                <h3 className="text-xl font-semibold mb-6 text-[#39a3b1]">
                  Get Personalized Assistance on Your Learning Needs
                </h3>
                <p className="text-gray-600 mb-6">
                  Not sure which training is right for you? Have specific questions about an upcoming event? Our team is
                  here to help!
                </p>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                  }}
                  className="mb-6 bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="text-[#f0932a] mr-2">📞</span> How We Can Assist You:
                  </h4>
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
                        <strong className="text-gray-800">Customized Guidance</strong> – Get recommendations on
                        workshops, certifications, and corporate training.
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
                        <strong className="text-gray-800">Corporate Training Inquiries</strong> – Learn how to set up
                        team-based learning solutions.
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
                        <strong className="text-gray-800">Event-Specific Details</strong> – Request more info about
                        schedules, speakers, or prerequisites.
                      </div>
                    </motion.li>
                  </motion.ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                  }}
                  className="mt-8"
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#f0932a] to-[#f0932a]/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Request Information
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={slideInRight}
                className="relative h-64 md:h-auto rounded-xl overflow-hidden shadow-xl group"
              >
                <Image
                  src="/trainingAdvisor.png"
                  alt="Training advisor helping a client"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Personalized Support</h3>
                    <p>Our advisors are ready to help you find the right learning path</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Attend Section */}
      <motion.section
        id="why-attend"
        ref={whyAttendRef}
        initial="hidden"
        animate={whyAttendInView ? "visible" : "hidden"}
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

              <h2 className="text-3xl font-bold mb-6">Why Attend SnB Alliance Events?</h2>
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
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-[#f0932a]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Industry-Recognized Training</h3>
                <p className="text-center">Learn directly from experts in bidding and recruitment.</p>
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
                <div className="flex justify-center mb-4">
                  <Calendar className="h-12 w-12 text-[#f0932a]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Flexible Learning Formats</h3>
                <p className="text-center">
                  Attend in-person, live online, or watchatch on-demand sessions.
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
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-[#f0932a]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Networking Opportunities</h3>
                <p className="text-center">
                  Connect with professionals, mentors, and like-minded learners.
                </p>
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
                  href="/learning/events&Calendar#upcoming-events"
                  className="inline-flex items-center px-6 py-3 bg-white text-[#39a3b1] font-bold rounded-xl shadow-lg hover:bg-white/90 transition-all duration-300 group"
                >
                  Explore Upcoming Events
                  <Calendar className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}

