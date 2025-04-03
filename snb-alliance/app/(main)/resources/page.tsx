"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BarChart, CheckSquare, FileText, ArrowRight, FileQuestion, Sparkles } from "lucide-react"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs"
import { useLanguage } from "@/contexts/LanguageContext"
import { getResourcePageData } from "@/lib/wordpress"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface ResourceData {
  acf: {
    resource_categories: {
      category_1_title: string
      category_1_description: string
      category_2_title: string
    }
    category_2_description: string
    category_3_title: string
    category_3_description: string
    hero_banner: string
    hero_title: string
    hero_description: string
  }
}

export default function ResourcePage() {
  const [ResourceData, setResourceData] = useState<ResourceData | null>(null)
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
  const [categoriesRef, categoriesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getResourcePageData(language)
        setResourceData(data)
      } catch (error) {
        console.error("Error fetching learning page data:", error)
      }
    }
    fetchData()
  }, [language])

  if (!ResourceData) {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section with 3D elements */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="relative py-20 min-h-[60vh] flex items-center bg-[#007b8f] md:bg-transparent"
      >
        {/* Background Image - Visible Only on Medium & Larger Screens */}
        <div className="absolute inset-0 overflow-hidden hidden md:block">
          <div className="absolute inset-0 bg-[#0c6978]" /> {/* Dark overlay for contrast */}
          <Image
            src="/resourcesBanner.png"
            alt="Team collaboration"
            fill
            className="object-cover w-full h-full"
            priority
          />
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
              <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z" fill="white" />
            </svg>
          </motion.div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            className="max-w-xl"
          >
            <motion.div
              variants={scaleIn}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Knowledge Hub</span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              {ResourceData.acf.hero_title}
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
              }}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              {ResourceData.acf.hero_description}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Resource Categories */}
      <motion.section
        ref={categoriesRef}
        initial="hidden"
        animate={categoriesInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#057e8d] to-transparent opacity-30"></div>
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
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#057e8d]/10 px-4 py-2 rounded-lg mb-4">
              <span className="w-2 h-2 rounded-full bg-[#057e8d] animate-pulse"></span>
              <span className="text-[#057e8d] font-medium text-sm tracking-wide uppercase">Explore Resources</span>
            </div>

            <h2 className="text-3xl font-bold text-[#9c242a] relative mb-6">
              Resource Categories
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]"></div>
            </h2>

            <p className="text-gray-600 mt-6">
              Discover our comprehensive collection of resources designed to enhance your learning experience
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Category 1 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="rounded-xl border p-6 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-blue-50 to-blue-100/50 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#057e8d]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BarChart className="h-6 w-6 text-[#057e8d]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {ResourceData.acf.resource_categories.category_1_title}
                  </h3>
                  <p className="text-gray-600 mb-4">{ResourceData.acf.resource_categories.category_1_description}</p>
                  <Link
                    href="/category1"
                    className="text-[#39a3b1] hover:text-[#057e8d] font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Explore <ArrowRight className="h-4 w-4 inline transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Category 2 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="rounded-xl border p-6 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-green-50 to-green-100/50 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ed8523]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckSquare className="h-6 w-6 text-[#ed8523]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {ResourceData.acf.resource_categories.category_2_title}
                  </h3>
                  <p className="text-gray-600 mb-4">{ResourceData.acf.category_2_description}</p>
                  <Link
                    href="/category2"
                    className="text-[#ed8523] hover:text-[#d97a1e] font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Explore <ArrowRight className="h-4 w-4 inline transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Category 3 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="rounded-xl border p-6 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-red-50 to-red-100/50 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#9c242a]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-6 w-6 text-[#9c242a]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{ResourceData.acf.category_3_title}</h3>
                  <p className="text-gray-600 mb-4">{ResourceData.acf.category_3_description}</p>
                  <Link
                    href="/category3"
                    className="text-[#9c242a] hover:text-[#8a1f24] font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Explore <ArrowRight className="h-4 w-4 inline transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 bg-gray-50 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9c242a] to-transparent opacity-30"></div>
        <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#ed8523]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-[#057e8d]/10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#9c242a]/10 px-4 py-2 rounded-lg mb-4">
              <span className="w-2 h-2 rounded-full bg-[#9c242a] animate-pulse"></span>
              <span className="text-[#9c242a] font-medium text-sm tracking-wide uppercase">Support</span>
            </div>

            <h2 className="text-3xl font-bold text-[#9c242a] relative mb-6">
              Frequently Asked Questions
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#057e8d] to-[#ed8523]"></div>
            </h2>

            <p className="text-gray-600 mt-6">
              Find answers to common questions about our certifications, membership, and more
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-3xl p-8 shadow-xl"
          >
            <Card className="border-0 shadow-none">
              <CardHeader className="flex flex-row items-center gap-2 pb-6">
                <FileQuestion className="h-6 w-6 text-[#057e8d]" />
                <div>
                  <CardTitle className="text-2xl text-[#057e8d]">Frequently Asked Questions</CardTitle>
                  <CardDescription className="text-gray-600">
                    Find answers to common questions about our certifications, membership, and more
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="certification">
                  <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1 rounded-xl">
                    <TabsTrigger
                      value="certification"
                      className="data-[state=active]:bg-white data-[state=active]:text-[#057e8d] data-[state=active]:shadow-sm rounded-lg py-3"
                    >
                      Certification Questions
                    </TabsTrigger>
                    <TabsTrigger
                      value="exam"
                      className="data-[state=active]:bg-white data-[state=active]:text-[#057e8d] data-[state=active]:shadow-sm rounded-lg py-3"
                    >
                      Exam Registration
                    </TabsTrigger>
                    <TabsTrigger
                      value="membership"
                      className="data-[state=active]:bg-white data-[state=active]:text-[#057e8d] data-[state=active]:shadow-sm rounded-lg py-3"
                    >
                      Membership Support
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="certification" className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-gray-200 py-2">
                        <AccordionTrigger className="hover:text-[#057e8d] text-left font-medium">
                          Do I need to be a member to apply for the certifications?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pt-2 pb-4">
                          While membership isn't mandatory, members often enjoy benefits such as discounts on exam fees
                          and exclusive access to certain resources. Non-members can still enroll in courses and
                          certifications at standard rates.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="border-b border-gray-200 py-2">
                        <AccordionTrigger className="hover:text-[#057e8d] text-left font-medium">
                          How can I find my eligibility for the certification programs?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pt-2 pb-4">
                          The eligibility requirements are mentioned in the respective certificate link. You can also
                          contact us via email for further assistance.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3" className="border-b border-gray-200 py-2">
                        <AccordionTrigger className="hover:text-[#057e8d] text-left font-medium">
                          How can I apply for a particular certification?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pt-2 pb-4">
                          Just click on the "Apply Now" link. Doing so will open the particular application form. We
                          request you to fill the form with the correct information to avoid delay.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4" className="border-b border-gray-200 py-2">
                        <AccordionTrigger className="hover:text-[#057e8d] text-left font-medium">
                          Do I need to attach any particular document for the certification?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pt-2 pb-4">No.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5" className="border-b border-gray-200 py-2">
                        <AccordionTrigger className="hover:text-[#057e8d] text-left font-medium">
                          Can I get a certificate without an exam?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pt-2 pb-4">
                          No, you need to complete the course duration and then pass the exam to earn certification.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-6" className="border-b border-gray-200 py-2">
                        <AccordionTrigger className="hover:text-[#057e8d] text-left font-medium">
                          Will I be able to approach the handouts, tutorial and resources after the certification?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pt-2 pb-4">
                          Yes. All members will have access to the available resources.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>

                  <TabsContent value="exam" className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-gray-200 py-2">
                        <AccordionTrigger className="hover:text-[#057e8d] text-left font-medium">
                          What identification should I enroll with?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pt-2 pb-4">
                          <p>You can use following identification cards while enrolling for the exam:</p>
                          <ul className="list-disc pl-5 mt-2">
                            <li>National/state/country identification card</li>
                            <li>Government issued driving licence</li>
                            <li>Government issued passport</li>
                          </ul>
                          <p className="mt-2">
                            Please make sure that the information you provide is discrepancy free. In case of any error
                            inform the administration prior to your exam so that your attempt is not wasted and the
                            error can be fixed.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="border-b border-gray-200 py-2">
                        <AccordionTrigger className="hover:text-[#057e8d] text-left font-medium">
                          How can I schedule my exam?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pt-2 pb-4">
                          Click on "schedule my exam". That will drop you with an option of what exam you want to book.
                          Click according to your preference. Schedule at least 48 hours prior to your exam. Don't
                          Forget To Confirm It Via Email Link.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3" className="border-b border-gray-200 py-2">
                        <AccordionTrigger className="hover:text-[#057e8d] text-left font-medium">
                          What is the cancelation & reschedule policy?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pt-2 pb-4">
                          <p>
                            The exam fee is refundable within 12 months of the day SNB Alliance receives your exam/exam
                            rewrite fee. After that duration the fee is NOT refundable.
                          </p>
                          <p className="mt-2">
                            If you fail to appear in the exam without cancelling or rescheduling it, it will be
                            considered as a No Show attempt. In case of any communication you can contact the
                            administration.
                          </p>
                          <p className="mt-2">
                            To reschedule your exam, the procedure is pretty much the same. Go to book your exam &gt;
                            schedule your exam &gt; change the date
                          </p>
                          <p className="mt-2">
                            NOTE: SNB Alliance requires 2 business days to reschedule the date and send you an email
                            link.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4" className="border-b border-gray-200 py-2">
                        <AccordionTrigger className="hover:text-[#057e8d] text-left font-medium">
                          What are the exam regulations?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pt-2 pb-4">
                          <p>
                            <strong>General rules:</strong>
                          </p>
                          <ul className="list-disc pl-5 mt-2">
                            <li>Sign in to your account with the log in & identification details.</li>
                            <li>Switch on the webcam that focuses you properly in the frame.</li>
                            <li>Login in 30 mins before the starting time & read all the instructions given.</li>
                          </ul>

                          <p className="mt-3">
                            <strong>Specific rules for CSBA:</strong>
                          </p>
                          <ul className="list-disc pl-5 mt-2">
                            <li>The duration of the exam is 2 hours.</li>
                            <li>There are no breaks during the exam hours.</li>
                            <li>You can just stand up & stretch remaining in the frame of the webcam.</li>
                            <li>
                              You are allowed to carry a water bottle, pen/pencil & a blank paper to make notes during
                              the exam.
                            </li>
                          </ul>

                          <p className="mt-3">
                            <strong>Specific Rules For CBMP, CSMP, CSBL:</strong>
                          </p>
                          <ul className="list-disc pl-5 mt-2">
                            <li>The duration of the exam is 4 hours.</li>
                            <li>
                              You are allowed to have one break of 15 mins. The timer will not stop during that time.
                            </li>
                            <li>
                              Return after 15 mins and start attempting your exam so that you complete it within the
                              time limit as you will not be given extra time for it.
                            </li>
                            <li>
                              In case you don't return to your exam screen after 15 mins, the assessment will be
                              labelled as "VOID". To attempt the exam later, you will have to schedule it & pay the full
                              fee.
                            </li>
                            <li>
                              You are allowed to carry a water bottle, pen/pencil & a blank paper to make notes during
                              the exam.
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>

                  <TabsContent value="membership" className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-gray-200 py-2">
                        <AccordionTrigger className="hover:text-[#057e8d] text-left font-medium">
                          How do I become a member of SnB Alliance?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pt-2 pb-4">
                          Simply visit our Membership page and choose the membership option that best fits your needs.
                          Complete the registration form, submit payment (if applicable), and you'll receive an email
                          confirming your membership details.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="border-b border-gray-200 py-2">
                        <AccordionTrigger className="hover:text-[#057e8d] text-left font-medium">
                          What are the benefits of becoming a member?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pt-2 pb-4">
                          <p>Members gain access to:</p>
                          <ul className="list-disc pl-5 mt-2">
                            <li>Exclusive learning resources and webinars</li>
                            <li>Discounts on certification exam fees</li>
                            <li>Early registration for events and workshops</li>
                            <li>A dedicated community forum for networking</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3" className="border-b border-gray-200 py-2">
                        <AccordionTrigger className="hover:text-[#057e8d] text-left font-medium">
                          Is there a membership fee?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pt-2 pb-4">
                          Yes, we offer different membership tiers, each with its own fee structure and benefits. You
                          can find the current pricing and inclusions on our Membership page.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4" className="border-b border-gray-200 py-2">
                        <AccordionTrigger className="hover:text-[#057e8d] text-left font-medium">
                          How long does my membership last, and how do I renew it?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pt-2 pb-4">
                          Most memberships are valid for one year from the date of purchase. Renewal reminders will be
                          sent via email 30 days before your membership expires. You can renew by logging into your
                          account and following the on-screen instructions.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5" className="border-b border-gray-200 py-2">
                        <AccordionTrigger className="hover:text-[#057e8d] text-left font-medium">
                          Can I upgrade my membership tier at any time?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pt-2 pb-4">
                          Absolutely. If you find that you need more features or perks, you can upgrade your membership
                          by visiting your account settings or contacting our support team.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

