"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Cookie, Share2, Server, UserCheck, ExternalLink, Mail, Globe, AlertCircle } from "lucide-react"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PrivacyPolicyPage() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-[#0c6978] text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/5"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-white/5"
            animate={{
              x: [0, -40, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 p-4 rounded-full bg-white/10">
              <Shield className="h-16 w-16 text-[#f0932a]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-white/80">Last Updated: April 2025</p>
          </motion.div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-12">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <p className="text-lg text-gray-700">
              SnB Alliance ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, store, and share your personal information when you visit our website
              (www.snballiance.org) and use our services, including certifications, training programs, membership
              access, community forums, and downloadable resources.
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 group">
                  <div className="flex items-center">
                    <div className="bg-[#0c6978]/10 p-2 rounded-full mr-4">
                      <UserCheck className="h-6 w-6 text-[#0c6978]" />
                    </div>
                    <h2 className="text-xl font-semibold text-[#0c6978] group-hover:text-[#0c6978]">
                      Information We Collect
                    </h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white">
                  <div className="ml-16 space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-[#0c6978]">Personal Information</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Company or organization name</li>
                        <li>Job title or role</li>
                        <li>Billing and payment details (if applicable)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2 text-[#0c6978]">Account & Membership Data</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Login credentials</li>
                        <li>Membership type and history</li>
                        <li>Certification enrollments and completion records</li>
                        <li>Forum posts, comments, or messages</li>
                        <li>Event and training registrations</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2 text-[#0c6978]">Technical Information</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>IP address</li>
                        <li>Browser type</li>
                        <li>Device information</li>
                        <li>Cookies and usage data (e.g., pages visited, time spent)</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 group">
                  <div className="flex items-center">
                    <div className="bg-[#0c6978]/10 p-2 rounded-full mr-4">
                      <Lock className="h-6 w-6 text-[#0c6978]" />
                    </div>
                    <h2 className="text-xl font-semibold text-[#0c6978] group-hover:text-[#0c6978]">
                      How We Use Your Information
                    </h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white">
                  <div className="ml-16">
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        To provide and manage access to SnB Alliance training, certifications, and community features
                      </li>
                      <li>To process payments and maintain billing records (where applicable)</li>
                      <li>To communicate with you about updates, events, and membership services</li>
                      <li>To personalize your learning dashboard and suggest relevant content</li>
                      <li>To manage forum interactions and ensure community safety</li>
                      <li>
                        To monitor usage and improve the functionality and performance of our website and services
                      </li>
                      <li>To comply with legal and regulatory obligations</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 group">
                  <div className="flex items-center">
                    <div className="bg-[#0c6978]/10 p-2 rounded-full mr-4">
                      <Cookie className="h-6 w-6 text-[#0c6978]" />
                    </div>
                    <h2 className="text-xl font-semibold text-[#0c6978] group-hover:text-[#0c6978]">
                      Cookies and Tracking Technologies
                    </h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white">
                  <div className="ml-16">
                    <p className="mb-4 text-gray-700">
                      We use cookies and similar technologies to enhance your experience. These allow us to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Remember your login preferences</li>
                      <li>Understand how users interact with the website</li>
                      <li>Improve site functionality and marketing performance</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                      You can modify your cookie settings through your browser at any time.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 group">
                  <div className="flex items-center">
                    <div className="bg-[#0c6978]/10 p-2 rounded-full mr-4">
                      <Share2 className="h-6 w-6 text-[#0c6978]" />
                    </div>
                    <h2 className="text-xl font-semibold text-[#0c6978] group-hover:text-[#0c6978]">
                      Sharing of Information
                    </h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white">
                  <div className="ml-16">
                    <p className="mb-4 text-gray-700">
                      We do not sell your personal information. We may share your information only in the following
                      situations:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>
                        With trusted service providers that assist in delivering our services (e.g., payment processors,
                        LMS platforms)
                      </li>
                      <li>To comply with legal obligations, court orders, or requests from government authorities</li>
                      <li>
                        With your consent, when participating in public forums, testimonials, or collaborative events
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 group">
                  <div className="flex items-center">
                    <div className="bg-[#0c6978]/10 p-2 rounded-full mr-4">
                      <Server className="h-6 w-6 text-[#0c6978]" />
                    </div>
                    <h2 className="text-xl font-semibold text-[#0c6978] group-hover:text-[#0c6978]">
                      Data Storage and Security
                    </h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white">
                  <div className="ml-16">
                    <p className="text-gray-700">
                      We store your information on secure servers and implement appropriate security measures to protect
                      it against unauthorized access, alteration, or disclosure. However, no system is entirely immune
                      to security risks. You are responsible for safeguarding your login credentials.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 group">
                  <div className="flex items-center">
                    <div className="bg-[#0c6978]/10 p-2 rounded-full mr-4">
                      <UserCheck className="h-6 w-6 text-[#0c6978]" />
                    </div>
                    <h2 className="text-xl font-semibold text-[#0c6978] group-hover:text-[#0c6978]">
                      Your Rights and Choices
                    </h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white">
                  <div className="ml-16">
                    <p className="mb-4 text-gray-700">You have the right to:</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Access or update your personal data</li>
                      <li>Request deletion of your data (subject to any legal retention obligations)</li>
                      <li>Opt out of marketing communications at any time</li>
                      <li>Request a copy of your data (data portability)</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                      To make any of these requests, contact us at{" "}
                      <a
                        href="mailto:privacy@snballiance.org"
                        className="text-[#0c6978] hover:text-[#f0932a] transition-colors"
                      >
                        privacy@snballiance.org
                      </a>
                      .
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 group">
                  <div className="flex items-center">
                    <div className="bg-[#0c6978]/10 p-2 rounded-full mr-4">
                      <ExternalLink className="h-6 w-6 text-[#0c6978]" />
                    </div>
                    <h2 className="text-xl font-semibold text-[#0c6978] group-hover:text-[#0c6978]">
                      Third-Party Links
                    </h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white">
                  <div className="ml-16">
                    <p className="text-gray-700">
                      Our website may contain links to third-party tools or platforms (e.g., event partners, software
                      providers). This policy does not apply to their content or practices. We encourage you to review
                      their privacy policies separately.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 group">
                  <div className="flex items-center">
                    <div className="bg-[#0c6978]/10 p-2 rounded-full mr-4">
                      <AlertCircle className="h-6 w-6 text-[#0c6978]" />
                    </div>
                    <h2 className="text-xl font-semibold text-[#0c6978] group-hover:text-[#0c6978]">
                      Children's Privacy
                    </h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white">
                  <div className="ml-16">
                    <p className="text-gray-700">
                      SnB Alliance does not knowingly collect information from children under the age of 16. If you
                      believe we have done so, please contact us so we can remove the information.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 group">
                  <div className="flex items-center">
                    <div className="bg-[#0c6978]/10 p-2 rounded-full mr-4">
                      <AlertCircle className="h-6 w-6 text-[#0c6978]" />
                    </div>
                    <h2 className="text-xl font-semibold text-[#0c6978] group-hover:text-[#0c6978]">
                      Changes to This Policy
                    </h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white">
                  <div className="ml-16">
                    <p className="text-gray-700">
                      We may update this Privacy Policy periodically. Any changes will be posted on this page with an
                      updated "Last Updated" date. Your continued use of the website after changes are posted
                      constitutes your acceptance.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="bg-[#0c6978] text-white p-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Mail className="mr-3 h-6 w-6" />
                Contact Us
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                If you have any questions or concerns about this policy or your personal data, please contact:
              </p>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">SnB Alliance</p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-[#0c6978]" />
                  <a
                    href="mailto:info@snballiance.org"
                    className="text-[#0c6978] hover:text-[#f0932a] transition-colors"
                  >
                    info@snballiance.org
                  </a>
                </p>
                <p className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-[#0c6978]" />
                  <a
                    href="https://www.snballiance.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0c6978] hover:text-[#f0932a] transition-colors"
                  >
                    www.snballiance.org
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

