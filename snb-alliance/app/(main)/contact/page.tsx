"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, MapPin, Send, Clock, ArrowRight, MessageCircle } from "lucide-react"

export default function ContactPage() {
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
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="min-h-screen bg-white">
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
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/60 to-teal-900/40 mix-blend-multiply"></div>
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
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={scaleIn}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Get In Touch</span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="text-4xl md:text-5xl font-bold text-[#f8a02e] mb-6"
            >
              Contact Us
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
              }}
              className="text-xl text-white/90"
            >
              We're here to help. Reach out to us with any questions or inquiries.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information and Form Section */}
      <motion.section
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39a3b1] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#f8a02e] to-transparent opacity-30"></div>

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
            <circle cx="50" cy="50" r="30" stroke="#f8a02e" strokeWidth="1" />
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
            <rect x="10" y="10" width="80" height="80" stroke="#f8a02e" strokeWidth="1" strokeDasharray="5 5" />
            <rect x="25" y="25" width="50" height="50" stroke="#39a3b1" strokeWidth="1" />
          </svg>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
            >
              <div className="inline-flex items-center gap-2 bg-[#39a3b1]/10 px-4 py-2 rounded-lg mb-4">
                <span className="w-2 h-2 rounded-full bg-[#39a3b1] animate-pulse"></span>
                <span className="text-[#39a3b1] font-medium text-sm tracking-wide uppercase">Contact Information</span>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our certifications, membership, or anything else? We'd love to hear from you. Use
                the form or contact us directly.
              </p>

              <motion.div variants={staggerContainer} className="space-y-6">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="flex items-start group"
                >
                  <div className="bg-[#39a3b1]/10 p-3 rounded-xl mr-4 group-hover:bg-[#39a3b1]/20 transition-colors">
                    <MapPin className="h-6 w-6 text-[#39a3b1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Mailing Address</h3>
                    <p className="text-gray-600">
                      PO Box 40033 Derry Heights
                      <br />
                      Milton, ON L9T 7W4
                      <br />
                      Canada
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="flex items-start group"
                >
                  <div className="bg-[#39a3b1]/10 p-3 rounded-xl mr-4 group-hover:bg-[#39a3b1]/20 transition-colors">
                    <Mail className="h-6 w-6 text-[#39a3b1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a
                      href="mailto:info@snballiance.org"
                      className="text-[#39a3b1] hover:underline group-hover:text-[#2d8a96] transition-colors"
                    >
                      info@snballiance.org
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="flex items-start group"
                >
                  <div className="bg-[#39a3b1]/10 p-3 rounded-xl mr-4 group-hover:bg-[#39a3b1]/20 transition-colors">
                    <Clock className="h-6 w-6 text-[#39a3b1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM EST
                      <br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Map */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
                }}
                className="mt-10"
              >
                <h3 className="font-semibold text-gray-800 mb-3">Our Location</h3>
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d23151.16285843305!2d-79.88490964894423!3d43.504518478689086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPO%20Box%2040033%20Derry%20Heights%20Milton%2C%20ON%20L9T%207W4%20Canada!5e0!3m2!1sen!2s!4v1742231911546!5m2!1sen!2s"
                    loading="lazy"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SnB Alliance Location"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
              }}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center gap-2 bg-[#f8a02e]/10 px-4 py-2 rounded-lg mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#f8a02e] animate-pulse"></span>
                  <span className="text-[#f8a02e] font-medium text-sm tracking-wide uppercase">Contact Form</span>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-[#39a3b1] transition-colors"
                      >
                        First Name*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39a3b1]/20 focus:border-[#39a3b1] transition-all"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-[#39a3b1] transition-colors"
                      >
                        Last Name*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39a3b1]/20 focus:border-[#39a3b1] transition-all"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-[#39a3b1] transition-colors"
                      >
                        Email*
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39a3b1]/20 focus:border-[#39a3b1] transition-all"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-[#39a3b1] transition-colors"
                      >
                        Phone
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39a3b1]/20 focus:border-[#39a3b1] transition-all"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="organizationType"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-[#39a3b1] transition-colors"
                      >
                        Organization Type*
                      </label>
                      <div className="relative">
                        <select
                          id="organizationType"
                          name="organizationType"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39a3b1]/20 focus:border-[#39a3b1] transition-all appearance-none bg-white"
                          required
                        >
                          <option value="" disabled selected>
                            Organization Type
                          </option>
                          <option value="corporation">Corporation</option>
                          <option value="government">Government</option>
                          <option value="nonprofit">Non-Profit</option>
                          <option value="educational">Educational Institution</option>
                          <option value="smallBusiness">Small Business</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label
                        htmlFor="requestType"
                        className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-[#39a3b1] transition-colors"
                      >
                        Request Type*
                      </label>
                      <div className="relative">
                        <select
                          id="requestType"
                          name="requestType"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39a3b1]/20 focus:border-[#39a3b1] transition-all appearance-none bg-white"
                          required
                        >
                          <option value="" disabled selected>
                            Select request type
                          </option>
                          <option value="generalInquiry">General Inquiry</option>
                          <option value="membershipInfo">Membership Information</option>
                          <option value="certificationInfo">Certification Information</option>
                          <option value="teamTraining">Team Training</option>
                          <option value="technicalSupport">Technical Support</option>
                          <option value="partnership">Partnership Opportunities</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-[#39a3b1] transition-colors"
                    >
                      Country*
                    </label>
                    <div className="relative">
                      <select
                        id="country"
                        name="country"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39a3b1]/20 focus:border-[#39a3b1] transition-all appearance-none bg-white"
                        required
                      >
                        <option value="" disabled selected>
                          Select your country
                        </option>
                        <option value="CA">Canada</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-[#39a3b1] transition-colors"
                    >
                      Description
                    </label>
                    <div className="relative">
                      <textarea
                        id="description"
                        name="description"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39a3b1]/20 focus:border-[#39a3b1] transition-all"
                        placeholder="Describe your request"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        className="h-4 w-4 text-[#39a3b1] border-gray-300 rounded focus:ring-[#39a3b1]"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacy" className="text-gray-600">
                        I agree to the{" "}
                        <a href="#" className="text-[#39a3b1] hover:underline">
                          privacy policy
                        </a>{" "}
                        and consent to being contacted regarding my inquiry.
                      </label>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#39a3b1] to-[#39a3b1]/90 hover:from-[#2d8a96] hover:to-[#2d8a96]/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group"
                  >
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Submit
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
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
            className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[#f8a02e]/20 blur-3xl"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
            className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#f8a02e]/20 blur-3xl"
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-3xl font-bold mb-6"
            >
              Ready to Take the Next Step?
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
              }}
              className="text-xl mb-8 opacity-90"
            >
              Explore our membership options or certification programs to advance your career in staffing and bidding.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/membership"
                  className="px-8 py-4 bg-white text-[#39a3b1] border border-white font-bold rounded-xl shadow-lg hover:bg-white/90 transition-all duration-300 inline-flex items-center gap-2"
                >
                  Explore Membership
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/certifications"
                  className="px-8 py-4 bg-[#f8a02e] hover:bg-[#e08620] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                >
                  View Certifications
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

