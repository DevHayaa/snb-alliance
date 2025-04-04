"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, FileText, Award, Shield, MessageSquare, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function CBMPCertificationPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } },
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

  // Create refs for sections to trigger animations when in view
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [eligibilityRef, eligibilityInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valueRef, valueInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [durationRef, durationInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header Section with Background */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0c6978] to-[#084955] py-16">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
        </div>

        {/* Animated shapes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#0c6978] blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#0c6978] blur-3xl"
        />

        {/* Floating elements */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: 0.7 }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute top-1/4 right-1/4 text-white/20"
        >
          <FileText className="w-16 h-16" />
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: [0, 10, 0], opacity: 0.5 }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-1/3 left-1/5 text-white/20"
        >
          <Award className="w-12 h-12" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
              }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
            >
              <Award className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Professional Certification</span>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="relative mb-10"
            >
              {/* Decorative elements */}
              <div className="absolute inset-0 -z-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.4, 0.6, 0.4],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0c6978]/30 to-[#084955]/30 blur-xl"
                />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-10 px-8 rounded-3xl bg-gradient-to-r from-[#0c6978]/20 to-[#084955]/20 backdrop-blur-sm border border-white/10">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
                    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.5, delay: 0.2 } },
                  }}
                  className="relative"
                >
                  {/* Decorative ring */}
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                    }}
                    className="absolute inset-0 -m-3 rounded-full border-2 border-dashed border-white/30 z-0"
                  />

                    <img src="/cbmp.png" alt="CBMP Logo" className="h-46 w-52 object-contain" />
                </motion.div>

                <div className="text-left">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                    }}
                    className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-2"
                  >
                    Advanced Certification
                  </motion.div>

                  <motion.h1
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
                    }}
                    className="text-4xl md:text-5xl font-bold tracking-tight text-white"
                  >
                    Certified Bid Management Professional (CBMP)
                  </motion.h1>
                </div>
              </div>
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
              }}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              Advance your career with specialized knowledge in bid management and proposal writing
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-10">
            {/* Eligibility Section */}
            <motion.div
              ref={eligibilityRef}
              initial="hidden"
              animate={eligibilityInView ? "visible" : "hidden"}
              variants={slideInLeft}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-[#0c6978] to-[#084955]"></div>
                <CardContent className="pt-6">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center text-[#0c6978]">
                      <span className="bg-[#0c6978]/10 p-3 rounded-full mr-4">
                        <CheckCircle className="h-6 w-6 text-[#0c6978]" />
                      </span>
                      Eligibility
                    </h2>
                  </motion.div>

                  <motion.ul variants={staggerContainer} className="ml-16 space-y-3 text-lg">
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                      }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-[#0c6978] rounded-full flex-shrink-0"></span>
                      <span>Proposal writers</span>
                    </motion.li>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } },
                      }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-[#0c6978] rounded-full flex-shrink-0"></span>
                      <span>Pre-requisite: CSBA certification</span>
                    </motion.li>
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Value Section */}
            <motion.div
              ref={valueRef}
              initial="hidden"
              animate={valueInView ? "visible" : "hidden"}
              variants={slideInRight}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-[#0c6978] to-[#084955]"></div>
                <CardContent className="pt-6">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center text-[#0c6978]">
                      <span className="bg-[#0c6978]/10 p-3 rounded-full mr-4">
                        <CheckCircle className="h-6 w-6 text-[#0c6978]" />
                      </span>
                      Value
                    </h2>
                  </motion.div>

                  <motion.div variants={staggerContainer} className="ml-16 space-y-6">
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                      }}
                      className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-[#0c6978]/10 p-2 rounded-lg">
                          <FileText className="h-5 w-5 text-[#0c6978]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-[#0c6978]">Bidding process</h3>
                          <p className="text-gray-600">
                            Deep diving into the industry, industrial trends, bidding agencies and their processes.
                            Evaluating the competition, using the data to inform decisions and creating bidding
                            strategies. Use metrics to analyse the success of bids.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
                      }}
                      className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-[#0c6978]/10 p-2 rounded-lg">
                          <FileText className="h-5 w-5 text-[#0c6978]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-[#0c6978]">Proposal Management</h3>
                          <p className="text-gray-600">
                            Review RFPS (request for proposals) and develop proposals. Proposal management strategies
                            such as team collaboration, quality control & scheduling. Mastering the strategies to
                            approach the client in case of bid loss.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                      }}
                      className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-[#0c6978]/10 p-2 rounded-lg">
                          <DollarSign className="h-5 w-5 text-[#0c6978]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-[#0c6978]">Budgeting & Pricing</h3>
                          <p className="text-gray-600">
                            Understand how to create competitive pricing. Learn the cost structure & scheming.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                      }}
                      className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-[#0c6978]/10 p-2 rounded-lg">
                          <MessageSquare className="h-5 w-5 text-[#0c6978]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-[#0c6978]">Communication skills</h3>
                          <p className="text-gray-600">
                            Effective communications with clients/prospects, build rapport and manage their expectations
                            constructively.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
                      }}
                      className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-[#0c6978]/10 p-2 rounded-lg">
                          <Shield className="h-5 w-5 text-[#0c6978]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-[#0c6978]">Legal Obligations</h3>
                          <p className="text-gray-600">
                            Learn the legal sensitivity of bidding such as contract management and risk alleviation.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
                      }}
                      className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-[#0c6978]/10 p-2 rounded-lg">
                          <Shield className="h-5 w-5 text-[#0c6978]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-[#0c6978]">Ethics</h3>
                          <p className="text-gray-600">
                            Importance of confidentiality, privacy & ethical boundaries in the industry especially the
                            bidding process.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Duration & Assessment */}
            <motion.div
              ref={durationRef}
              initial="hidden"
              animate={durationInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="h-2 bg-gradient-to-r from-[#0c6978] to-[#084955]"></div>
                  <CardContent className="pt-6 flex flex-col h-full">
                    <h2 className="text-2xl font-bold mb-6 flex items-center text-[#0c6978]">
                      <span className="bg-[#0c6978]/10 p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-[#0c6978]" />
                      </span>
                      Duration
                    </h2>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-[#0c6978]">16</div>
                        <div className="text-xl text-gray-600">hours course</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="h-2 bg-gradient-to-r from-[#0c6978] to-[#084955]"></div>
                  <CardContent className="pt-6 flex flex-col h-full">
                    <h2 className="text-2xl font-bold mb-6 flex items-center text-[#0c6978]">
                      <span className="bg-[#0c6978]/10 p-3 rounded-full mr-4">
                        <FileText className="h-6 w-6 text-[#0c6978]" />
                      </span>
                      Assessment
                    </h2>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-[#0c6978]">4</div>
                        <div className="text-xl text-gray-600">hours exam</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Apply Button */}
            <motion.div
              ref={ctaRef}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center mt-10"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Link
                  href={`/membership`}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0c6978] to-[#084955] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.p
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.3 } },
                }}
                className="mt-4 text-gray-500"
              >
                Take the next step in your professional journey
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

