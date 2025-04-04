"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  BookOpen,
  HelpCircle,
  Users,
  Calendar,
  MessageSquare,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Clock,
  MessageCircle,
  Award,
  Lightbulb,
  Share2,
  FileText,
  Sparkles,
} from "lucide-react"

// Animation variants - enhanced
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
      staggerChildren: 0.2,
    },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 100 },
  },
}

// Section Card Component
function SectionCard({
  number,
  title,
  description,
  icon: Icon,
  items,
  ctaText,
  ctaLink,
  accentColor = "border-[#0c6978]",
  bgColor = "bg-white",
}: {
  number: number
  title: string
  description: string
  icon: any
  items: { icon: string; text: string }[]
  ctaText: string
  ctaLink: string
  accentColor?: string
  bgColor?: string
}) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`rounded-xl border ${accentColor} shadow-md overflow-hidden ${bgColor} hover:shadow-lg transition-all duration-300`}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#0c6978] to-[#0c6978]/70 text-white font-bold text-xl shadow-md">
            {number}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Icon className="h-6 w-6 text-[#0c6978]" />
              <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            </div>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1 text-[#0c6978]">
                {item.icon === "check" && <CheckCircle className="h-5 w-5" />}
                {item.icon === "dot" && <div className="w-2 h-2 rounded-full bg-[#0c6978] mt-2"></div>}
              </div>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href={ctaLink}
            className="inline-flex items-center px-5 py-2.5 bg-[#0c6978] hover:bg-[#084955] text-white rounded-md transition-colors font-medium shadow-md hover:shadow-lg"
          >
            {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Event Card Component
function EventCard({ title, date, type, icon: Icon }: { title: string; date: string; type: string; icon: any }) {
  return (
    <div className="flex items-start gap-4 p-4 border-b border-gray-200 last:border-b-0 group hover:bg-gray-50 transition-colors">
      <div className="bg-[#f0932a]/10 text-[#f0932a] p-2 rounded-lg group-hover:bg-[#f0932a]/20 transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">{type}</span>
          <span className="text-xs text-gray-500 flex items-center">
            <Clock className="h-3 w-3 mr-1" /> {date}
          </span>
        </div>
        <h4 className="font-medium group-hover:text-[#0c6978] transition-colors">{title}</h4>
      </div>
      <div className="self-center opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronRight className="h-4 w-4 text-[#0c6978]" />
      </div>
    </div>
  )
}

// Forum Topic Card Component
function ForumTopicCard({
  title,
  description,
  count,
  icon: Icon,
}: { title: string; description: string; count: number; icon: any }) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-300 group"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 rounded-full bg-[#0c6978]/10 text-[#0c6978] group-hover:bg-[#0c6978]/20 transition-colors">
          <Icon className="h-5 w-5" />
        </div>
        <h4 className="font-bold group-hover:text-[#0c6978] transition-colors">{title}</h4>
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">{count} discussions</span>
        <span className="text-[#0c6978] font-medium group-hover:underline flex items-center">
          Join <ArrowRight className="ml-1 h-3 w-3" />
        </span>
      </div>
    </motion.div>
  )
}

// Benefit Card Component
function BenefitCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="flex items-start gap-4 p-5 border border-gray-200 rounded-lg hover:border-[#0c6978]/30 hover:shadow-md transition-all duration-300"
    >
      <div className="p-2 rounded-full bg-[#0c6978]/10 text-[#0c6978]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="font-bold mb-1 text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}

export default function LearningCommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Enhanced with animations and teal color */}
      <section
        id="hero"
        className="relative py-20 flex items-center justify-center text-center bg-gradient-to-br from-[#0c6978] to-[#084955] overflow-hidden"
      >
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
          <BookOpen className="w-16 h-16" />
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: [0, 10, 0], opacity: 0.5 }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-1/3 left-1/5 text-white/20"
        >
          <MessageSquare className="w-12 h-12" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Knowledge Sharing</span>
            </motion.div>

            <motion.h1 variants={scaleIn} className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Learning & Community
            </motion.h1>
            <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-semibold mb-4">
              Connect, Learn & Grow with Industry Experts
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl mb-8 text-white/90">
              SnB Alliance is more than just a platform—it's a thriving community where professionals learn,
              collaborate, and share insights. Whether you're looking for expert articles, industry FAQs, networking
              opportunities, or live discussions, you'll find everything you need to stay ahead in the bidding and
              recruitment industry.
            </motion.p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/membership"
                className="inline-flex items-center px-6 py-3 bg-[#f0932a] text-white font-medium rounded-lg hover:bg-[#f0932a]/90 transition-colors shadow-lg"
              >
                <Users className="mr-2 h-5 w-5" /> Join the conversation today! Become a Member
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section id="main-content" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 gap-8">
            {/* Blog & Articles */}
            <div id="blog-articles">
              <SectionCard
                number={1}
                title="Blog & Articles"
                description="Insights & Strategies from Industry Experts"
                icon={BookOpen}
                items={[
                  { icon: "check", text: "Industry Trends – Stay updated on emerging hiring & bidding strategies." },
                  {
                    icon: "check",
                    text: "How-To Guides – Practical tips on writing proposals, sourcing talent, and improving bid success rates.",
                  },
                  {
                    icon: "check",
                    text: "Case Studies & Success Stories – Learn from real-world experiences of industry professionals.",
                  },
                ]}
                ctaText="Read the Blog"
                ctaLink="/resources/blog"
                accentColor="border-l-4 border-[#0c6978] border-t border-r border-b"
              />
            </div>

            {/* FAQs */}
            <div id="faqs">
              <SectionCard
                number={2}
                title="FAQs"
                description="Get Answers to Your Most Common Questions"
                icon={HelpCircle}
                items={[
                  { icon: "dot", text: "Bidding & Proposal Writing – How to structure winning RFP responses." },
                  {
                    icon: "dot",
                    text: "Recruitment Process – Best practices for sourcing, screening, and hiring candidates.",
                  },
                  { icon: "dot", text: "Training & Certification – How to enroll, prepare, and get certified." },
                  {
                    icon: "dot",
                    text: "RPO & BPO Insights – Understanding how outsourcing can benefit your business.",
                  },
                ]}
                ctaText="Visit FAQs"
                ctaLink="/resources/faqs"
                accentColor="border-l-4 border-[#f0932a] border-t border-r border-b"
                bgColor="bg-white"
              />
            </div>

            {/* Community & Networking */}
            <div id="community-networking">
              <SectionCard
                number={3}
                title="Community & Networking"
                description="Connect with Industry Professionals & Build Your Network"
                icon={Users}
                items={[
                  { icon: "check", text: "Virtual Networking Events – Meet industry peers and share insights." },
                  { icon: "check", text: "Exclusive Member Groups – Participate in discussions and Q&A sessions." },
                  {
                    icon: "check",
                    text: "Mentorship Opportunities – Learn from experienced professionals and career advisors.",
                  },
                ]}
                ctaText="Join the Community"
                ctaLink="https://www.linkedin.com"
                accentColor="border-l-4 border-[#0c6978] border-t border-r border-b"
              />
            </div>

            {/* Upcoming Events */}
            <motion.div
              id="upcoming-events"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="rounded-xl border border-[#f0932a] border-l-4 shadow-md overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#f0932a] to-[#f0932a]/70 text-white font-bold text-xl shadow-md">
                    4
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-6 w-6 text-[#f0932a]" />
                      <h3 className="text-2xl font-bold text-gray-800">Upcoming Events</h3>
                    </div>
                    <p className="text-gray-600">Stay Updated on Webinars, Training, & Industry Meetups</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg mb-6">
                  <EventCard
                    title="Live Webinar: AI in Recruitment & Proposal Writing"
                    date="March 15, 2026"
                    type="Webinar"
                    icon={Calendar}
                  />
                  <EventCard
                    title="Virtual Workshop: Advanced Bid Writing Techniques"
                    date="April 5, 2026"
                    type="Workshop"
                    icon={Calendar}
                  />
                  <EventCard
                    title="Networking Session: Global Staffing & HR Summit"
                    date="May 10, 2026"
                    type="Networking"
                    icon={Calendar}
                  />
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/learning/events&Calendar"
                    className="inline-flex items-center px-5 py-2.5 bg-[#f0932a] hover:bg-[#f0932a]/90 text-white rounded-md transition-colors font-medium shadow-md hover:shadow-lg"
                  >
                    View Upcoming Events <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Discussion Forums */}
            <motion.div
              id="discussion-forums"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="rounded-xl border border-[#0c6978] border-l-4 shadow-md overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#0c6978] to-[#0c6978]/70 text-white font-bold text-xl shadow-md">
                    5
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="h-6 w-6 text-[#0c6978]" />
                      <h3 className="text-2xl font-bold text-gray-800">Discussion Forums</h3>
                    </div>
                    <p className="text-gray-600">Engage in Meaningful Conversations & Knowledge Sharing</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <ForumTopicCard
                    title="Bid & Proposal Strategies"
                    description="Share RFP success tips & common pitfalls to avoid."
                    count={124}
                    icon={FileText}
                  />
                  <ForumTopicCard
                    title="Staffing & Recruitment"
                    description="Discuss talent acquisition trends & HR challenges."
                    count={87}
                    icon={Users}
                  />
                  <ForumTopicCard
                    title="RPO & BPO Conversations"
                    description="Learn how outsourcing is transforming the industry."
                    count={56}
                    icon={MessageCircle}
                  />
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="https://www.linkedin.com"
                    className="inline-flex items-center px-5 py-2.5 bg-[#0c6978] hover:bg-[#084955] text-white rounded-md transition-colors font-medium shadow-md hover:shadow-lg"
                  >
                    Enter the Forum <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section - Enhanced with animations and teal color */}
      <section id="why-join" className="py-16 bg-gradient-to-br from-[#0c6978]/10 to-white">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Join the SnB Alliance Community?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with like-minded professionals, access exclusive resources, and accelerate your career growth.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12"
          >
            <motion.div variants={fadeIn}>
              <BenefitCard
                icon={Award}
                title="Exclusive Industry Insights"
                description="Stay informed with expert-backed content and the latest industry trends."
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <BenefitCard
                icon={Lightbulb}
                title="Professional Growth Opportunities"
                description="Learn, network, and develop key skills through our community resources."
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <BenefitCard
                icon={Share2}
                title="Collaborate & Share Knowledge"
                description="Engage with professionals in your field and contribute your expertise."
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <BenefitCard
                icon={FileText}
                title="Access Free Resources"
                description="Templates, checklists, and learning materials to support your career."
              />
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://www.linkedin.com"
                className="inline-flex items-center px-8 py-4 bg-[#0c6978] text-white font-medium rounded-lg hover:bg-[#084955] transition-colors shadow-lg text-lg"
              >
                <Users className="mr-2 h-5 w-5" /> Be part of a thriving professional network! Join Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

