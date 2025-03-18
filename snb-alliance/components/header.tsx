"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronDown,
  Globe,
  Award,
  GraduationCap,
  ClipboardCheck,
  Users,
  Trophy,
  GitBranch,
  FileText,
  BookOpen,
  RefreshCw,
  Book,
  HelpCircle,
  Star,
  FileQuestion,
  User,
  UserPlus,
  Laptop,
  Briefcase,
  Video,
  Calendar,
  Mail,
  Shield,
  Settings,
  BarChart,
  TrendingUp,
  MessageSquare,
  File,
  Cpu,
  MessageCircle,
  CheckSquare,
  CreditCard,
  LogIn,
  Layout,
  LightbulbIcon,
  HandshakeIcon,
} from "lucide-react"

// Import the useAuth hook at the top of the file
import { useAuth } from "@/contexts/auth-context"

// Update the navItems array to ensure all links are properly connected to their related content
// Make sure each item has the correct href that points to the appropriate page or section

// For the navItems array, update each item's href to point to the correct page
const navItems = [
  {
    title: "Certifications",
    href: "/certifications",
    items: [
      {
        title: "Overview",
        description: "Explore our certification programs",
        href: "/certifications",
        icon: "Award",
      },
      {
        title: "CSBA",
        description: "Certificate in Staffing & Bidding Associates",
        href: "/certifications#csba",
        icon: "GraduationCap",
      },
      {
        title: "CBMP",
        description: "Certificate in Bid & Management Professional",
        href: "/certifications#cbmp",
        icon: "ClipboardCheck",
      },
      {
        title: "CSMP",
        description: "Certified Staffing Management Professional",
        href: "/certifications#csmp",
        icon: "Users",
      },
      {
        title: "CSBL",
        description: "Certified Staffing and Bidding Leader",
        href: "/certifications#csbl",
        icon: "Trophy",
      },
      {
        title: "Certification Process",
        description: "Steps to get certified",
        href: "/certifications#certification-process",
        icon: "GitBranch",
      },
      {
        title: "Exam & Fees",
        description: "Examination details and fee structure",
        href: "/certifications#exam-fees",
        icon: "FileText",
      },
    ],
  },
  {
    title: "Learning",
    href: "/learning",
    items: [
      {
        title: "For Individuals",
        description: "Personal learning and development",
        href: "/learning#learning-paths",
        icon: "User",
      },
      {
        title: "Courses & Training Programs",
        description: "Structured learning paths",
        href: "/learning#programs",
        icon: "BookOpen",
      },
      {
        title: "Learning Journey",
        description: "Your path to certification",
        href: "/learning#learning-journey",
        icon: "FileText",
      },
      {
        title: "Workshops & Webinars",
        description: "Interactive learning events",
        href: "/learning#workshops",
        icon: "Video",
      },
      {
        title: "Program Comparison",
        description: "Find the right program for you",
        href: "/learning#comparison",
        icon: "ClipboardCheck",
      },
      {
        title: "Success Stories",
        description: "Hear from our certified professionals",
        href: "/learning#testimonials",
        icon: "Star",
      },
      {
        title: "For Businesses",
        description: "Corporate training solutions",
        href: "/learning#learning-paths",
        icon: "Briefcase",
      },
      {
        title: "Resource Hub",
        description: "Free learning resources",
        href: "/learning#resources",
        icon: "BookOpen",
      },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    items: [
      {
        title: "Industry Insights & Reports",
        description: "Stay updated with the latest trends and forecasts",
        href: "/resources/industryBestPractice#insights",
        icon: "BarChart",
      },
      {
        title: "Best Practices & Guidelines",
        description: "Access comprehensive guides and checklists",
        href: "/resources/best-practices",
        icon: "CheckSquare",
      },
      {
        title: "Templates & Tools",
        description: "Download ready-to-use templates and access tools",
        href: "/resources/templates",
        icon: "FileText",
      },
      {
        title: "FAQs",
        description: "Find answers to common questions",
        href: "/resources/faqs",
        icon: "HelpCircle",
      },
      {
        title: "Blog & Articles",
        description: "Read insightful articles and success stories",
        href: "/resources/blog",
        icon: "BookOpen",
      },
      {
        title: "Community & Networking",
        description: "Connect with peers and join events",
        href: "/resources/community",
        icon: "Users",
      },
    ],
  },
  {
    title: "About Us",
    href: "/about",
    items: [
      {
        title: "Mission & Vision",
        description: "Our purpose and goals",
        href: "/about#mission-vision",
        icon: "LightbulbIcon",
      },
      {
        title: "What We Do",
        description: "Our services and offerings",
        href: "/about#what-we-do",
        icon: "Briefcase",
      },
      {
        title: "Our Team",
        description: "Meet our experts and leadership",
        href: "/about#team",
        icon: "Users",
      },
      {
        title: "Partners & Collaborations",
        description: "Our strategic alliances",
        href: "/about#partners",
        icon: "HandshakeIcon",
      },
      {
        title: "Join Our Mission",
        description: "Career opportunities",
        href: "/about#careers",
        icon: "Award",
      },
      {
        title: "News & Announcements",
        description: "Latest updates and information",
        href: "/about#news",
        icon: "FileText",
      },
      {
        title: "Contact Us",
        description: "Get in touch with us",
        href: "/about#contact",
        icon: "Mail",
      },
    ],
  },
  {
    title: "Membership",
    href: "/membership",
    items: [
      {
        title: "Benefits",
        description: "Explore the advantages of becoming a member",
        href: "/membership#benefits",
        icon: "Award",
      },
      {
        title: "Join Now",
        description: "Become a part of our professional community",
        href: "/membership#join",
        icon: "UserPlus",
      },
      {
        title: "Member Resources",
        description: "Access exclusive resources for members",
        href: "/membership#resources",
        icon: "FileText",
      },
      {
        title: "Networking",
        description: "Connect with like-minded professionals",
        href: "/membership#network",
        icon: "Users",
      },
      {
        title: "Leadership Development",
        description: "Grow your leadership skills",
        href: "/membership#leadership",
        icon: "Trophy",
      },
      {
        title: "Membership Plans",
        description: "Choose the right plan for you",
        href: "/membership#plans",
        icon: "CreditCard",
      },
    ],
  },
]

// Update the megaMenuContent object to have separate overview links at the top of each dropdown

// Replace the existing megaMenuContent object with this updated version:
const megaMenuContent = {
  Certifications: {
    overview: { title: "Certifications Overview", href: "/certifications", icon: "Award" },
    columns: [
      {
        title: "Our Certifications",
        href: "/certifications",
        items: [
          { title: "CSBA - Staffing & Bidding Associates", href: "/certifications#csba", icon: "GraduationCap" },
          { title: "CBMP - Bid & Management Professional", href: "/certifications#cbmp", icon: "ClipboardCheck" },
          { title: "CSMP - Staffing Management Professional", href: "/certifications#csmp", icon: "Users" },
          { title: "CSBL - Staffing and Bidding Leader", href: "/certifications#csbl", icon: "Trophy" },
        ],
      },
      {
        title: "Certification Journey",
        href: "/certifications/journey",
        items: [
          { title: "Certification Process", href: "/certifications#certification-process", icon: "GitBranch" },
          { title: "Exam & Fees", href: "/certifications#exam-fees", icon: "FileText" },
          // { title: "Preparation Resources", href: "/certifications/preparation", icon: "BookOpen" },
          // { title: "Recertification", href: "/certifications/recertification", icon: "RefreshCw" },
        ],
      },
      {
        title: "Resources",
        href: "/resources/certification",
        items: [
          // { title: "Study Materials", href: "/resources/study-materials", icon: "Book" },
          // { title: "Practice Exams", href: "/resources/practice-exams", icon: "FileQuestion" },
          { title: "Certification FAQ", href: "/resources#certification-faq", icon: "HelpCircle" },
          { title: "Success Stories", href: "/learning#testimonials", icon: "Star" },
        ],
      },
    ],
  },
  Learning: {
    overview: { title: "Learning Overview", href: "/learning", icon: "BookOpen" },
    columns: [
      {
        title: "For Individuals",
        href: "/learning/individuals",
        items: [
          { title: "Learning Paths", href: "/learning/individuals#learning-paths", icon: "GitBranch" },
          { title: "Our Programs", href: "/learning/individuals#programs", icon: "FileText" },
          { title: "Learning Journey", href: "/learning/individuals#learning-journey", icon: "GitBranch" },
          { title: "Success Stories", href: "/learning/individuals#testimonials", icon: "Star" },
          { title: "Find Your Path", href: "/learning/individuals#find-your-path", icon: "Laptop" },
        ],
      },
      {
        title: "For Businesses",
        href: "/learning/business",
        items: [
          { title: "Corporate Training Programs", href: "/learning/business#corporate-training", icon: "Briefcase" },
          { title: "Team Certification Packages", href: "/learning/business#team-certification", icon: "Users" },
          { title: "Program Comparison", href: "/learning/business#program-comparison", icon: "ClipboardCheck" },
          { title: "Custom Learning Solutions", href: "/learning/business#custom-learning", icon: "Settings" },
        ],
      },
      {
        title: "Events & Calendar",
        href: "/learning/events&Calendar",
        items: [
          { title: "Workshops & Webinars", href: "/learning/events&Calendar#workshops-webinars", icon: "Video" },
          { title: "Request Information", href: "/learning/events&Calendar#request-information", icon: "Book" },
          { title: "Learning Schedule", href: "/learningevents&Calendar#learning-schedule", icon: "HelpCircle" },
          { title: "Learning FAQ", href: "/learningevents&Calendar#learning-faqs", icon: "Mail" },
        ],
      },
    ],
  },
  Resources: {
    overview: { title: "Resources Overview", href: "/resources", icon: "FileText" },
    columns: [
      {
        title: "Industry & Best Practices",
        href: "/resources/industryBestPractice",
        items: [
          { title: "Industry Insights & Reports", href: "/resources/industryBestPractice#insights", icon: "BarChart" },
          { title: "Market Trends", href: "/resources/industryBestPractice#market-trends", icon: "TrendingUp" },
          { title: "Expert Opinions", href: "/resources/industryBestPractice#expert-opinions", icon: "MessageSquare" },
          { title: "Best Practices & Guidelines", href: "/resources/industryBestPractice#best-practices", icon: "CheckSquare" },
          { title: "Compliance Checklists", href: "/resources/industryBestPractice#compliance-checklists", icon: "ClipboardCheck" },
        ],
      },
      {
        title: "Templates & Tools",
        href: "/resources/templatesTools",
        items: [
          { title: "Templates & Tools Overview", href: "/resources/templatesTools#overview", icon: "FileText" },
          { title: "Bidding Templates", href: "/resources/templatesTools#bidding-templates", icon: "File" },
          { title: "Staffing & Recruiting Software", href: "/resources/templatesTools#staffing", icon: "Users" },
          { title: "Bidding Software", href: "/resources/templatesTools#bidding-software", icon: "Cpu" },
          { title: "Processes (RPO & BPO) Trends", href: "/resources/templatesTools#Processes", icon: "Globe" },
        ],
      },
      {
        title: "Learning & Community",
        href: "/resources/learningCommunity",
        items: [
          { title: "Blog & Articles", href: "/resources/learningCommunity#blog-articles", icon: "BookOpen" },
          { title: "FAQs", href: "/resources/learningCommunity#faqs", icon: "HelpCircle" },
          { title: "Community & Networking", href: "/resources//learningCommunity#community-networking", icon: "Users" },
          { title: "Upcoming Events", href: "/resources//learningCommunity#upcoming-events", icon: "Calendar" },
          { title: "Discussion Forums", href: "/resources/learningCommunity#discussion-forums", icon: "MessageCircle" },
        ],
      },
    ],
  },
  "About Us": {
    overview: { title: "About Us Overview", href: "/about", icon: "Users" },
    columns: [
      {
        title: "Who We Are",
        href: "/about#who-we-are",
        items: [
          { title: "Mission & Vision", href: "/about#mission-vision", icon: "LightbulbIcon" },
          { title: "What We Do", href: "/about#what-we-do", icon: "Briefcase" },
          { title: "Our Team", href: "/about#team", icon: "Users" },
          { title: "Partners", href: "/about#partners", icon: "HandshakeIcon" },
        ],
      },
      {
        title: "Join Us",
        href: "/about#careers",
        items: [
          { title: "Career Opportunities", href: "/about#careers", icon: "Award" },
          { title: "Why Work With Us", href: "/about#careers", icon: "Star" },
          { title: "Current Openings", href: "/about#careers", icon: "FileText" },
        ],
      },
      {
        title: "Connect",
        href: "/about#contact",
        items: [
          { title: "Latest News", href: "/about#news", icon: "FileText" },
          { title: "Contact Us", href: "/about#contact", icon: "Mail" },
          // { title: "Support", href: "/support", icon: "HelpCircle" },
        ],
      },
    ],
  },
  Membership: {
    overview: { title: "Membership Overview", href: "/membership", icon: "Award" },
    columns: [
      {
        title: "Membership Benefits",
        href: "/membership#benefits",
        items: [
          { title: "Create your web", href: "/membership#network", icon: "Users" },
          { title: "Professional surge", href: "/membership#network", icon: "TrendingUp" },
          { title: "Exclusive Resources", href: "/membership#resources", icon: "FileText" },
          { title: "Leadership Development", href: "/membership#leadership", icon: "Trophy" },
        ],
      },
      {
        title: "Join Us",
        href: "/membership#join",
        items: [
          { title: "Become a Member", href: "/membership#join", icon: "UserPlus" },
          { title: "Membership Plans", href: "/membership#plans", icon: "CreditCard" },
          { title: "Member Login", href: "/login", icon: "LogIn" },
          { title: "Member Dashboard", href: "/dashboard", icon: "Layout" },
        ],
      },
      {
        title: "Member Community",
        href: "/membership/community",
        items: [
          { title: "Upcoming Events", href: "/membership#events", icon: "Calendar" },
          { title: "Success Stories", href: "/membership#stories", icon: "Star" },
          { title: "Member Directory", href: "/membership/directory", icon: "Book" },
          { title: "Contact Support", href: "/contact", icon: "HelpCircle" },
        ],
      },
    ],
  },
}

// Inside the Header component, add the useAuth hook
export default function Header() {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<Record<string, boolean>>({})
  const headerRef = useRef<HTMLDivElement>(null)
  const { user, logout } = useAuth()

  // First, add the language state and toggle functionality at the top of the Header component
  // Add this after the existing useState declarations

  const [currentLanguage, setCurrentLanguage] = useState<"en" | "ar" | "fr">("en")

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ]

  const handleLanguageChange = (langCode: "en" | "ar" | "fr") => {
    setCurrentLanguage(langCode)
    // Here you would implement actual language change functionality
    // This could involve i18n library calls or context updates
  }

  const toggleMegaMenu = (title: string) => {
    setActiveMegaMenu(activeMegaMenu === title ? null : title)
  }

  const toggleMobileDropdown = (title: string) => {
    setOpenMobileDropdowns((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (anchor && anchor.hash && anchor.pathname === window.location.pathname) {
        e.preventDefault()
        const element = document.querySelector(anchor.hash)
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100, // Offset for header
            behavior: "smooth",
          })

          // Update URL without reload
          history.pushState(null, "", anchor.hash)

          // Close menus
          setActiveMegaMenu(null)
          setIsMobileMenuOpen(false)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="SnB Alliance Logo"
                width={180}
                height={100}
                className=""
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                <button
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeMegaMenu === item.title
                      ? "text-[#39a3b1] bg-gray-50"
                      : "text-gray-700 hover:text-[#39a3b1] hover:bg-gray-50"
                  }`}
                  onClick={() => toggleMegaMenu(item.title)}
                  aria-expanded={activeMegaMenu === item.title}
                  aria-haspopup="true"
                >
                  {item.title}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeMegaMenu === item.title ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          {/* Update the Right Side Actions section to show different options when logged in */}
          {/* Replace the existing Right Side Actions div with this: */}
          <div className="flex items-center space-x-3">
            {/* Language Selector - Desktop */}
            <div className="hidden md:block relative">
              <button
                className="flex items-center space-x-1 px-3 py-1.5 text-sm font-medium border border-gray-200 rounded-md hover:bg-gray-50"
                onClick={() => setActiveMegaMenu(activeMegaMenu === "language" ? null : "language")}
              >
                <span className="mr-1">{languages.find((lang) => lang.code === currentLanguage)?.flag}</span>
                <span>{currentLanguage.toUpperCase()}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {activeMegaMenu === "language" && (
                <div className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg z-50 border border-gray-100">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-50 ${
                          currentLanguage === lang.code ? "bg-gray-50 text-[#39a3b1] font-medium" : "text-gray-700"
                        }`}
                        onClick={() => {
                          handleLanguageChange(lang.code as "en" | "ar" | "fr")
                          setActiveMegaMenu(null)
                        }}
                      >
                        <span className="mr-2">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="hidden md:inline-flex px-4 py-2 text-sm font-medium border border-gray-200 rounded-md "
            >
              Contact Us
            </Link>

            {user ? (
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  href="/dashboard"
                  className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-md hover:bg-gray-50"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="hidden md:inline-flex px-4 py-2 text-sm font-medium bg-[#39a3b1] text-white rounded-md hover:bg-teal-dark transition-colors"
              >
                Sign In
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        {activeMegaMenu && megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent] && (
          <div className="absolute left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-50 hidden md:block">
            <div className="container mx-auto py-8 px-4">
              {/* Overview Link */}
              {megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].overview && (
                <div className="mb-6 pb-4 border-b border-gray-200">
                  <Link
                    href={megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].overview.href}
                    className="inline-flex items-center px-4 py-2 bg-[#39a3b1] text-white rounded-md hover:bg-teal-600 transition-colors"
                    onClick={() => setActiveMegaMenu(null)}
                  >
                    {(() => {
                      const IconComponent = megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].overview
                        .icon
                        ? {
                            Award: Award,
                            GraduationCap: GraduationCap,
                            ClipboardCheck: ClipboardCheck,
                            Users: Users,
                            Trophy: Trophy,
                            GitBranch: GitBranch,
                            FileText: FileText,
                            BookOpen: BookOpen,
                            RefreshCw: RefreshCw,
                            Book: Book,
                            HelpCircle: HelpCircle,
                            Star: Star,
                            FileQuestion: FileQuestion,
                            User: User,
                            UserPlus: UserPlus,
                            Laptop: Laptop,
                            Briefcase: Briefcase,
                            Video: Video,
                            Calendar: Calendar,
                            Mail: Mail,
                            Shield: Shield,
                            Settings: Settings,
                            BarChart: BarChart,
                            TrendingUp: TrendingUp,
                            MessageSquare: MessageSquare,
                            File: File,
                            Cpu: Cpu,
                            Globe: Globe,
                            MessageCircle: MessageCircle,
                            CheckSquare: CheckSquare,
                            CreditCard: CreditCard,
                            LogIn: LogIn,
                            Layout: Layout,
                            LightbulbIcon: LightbulbIcon,
                            HandshakeIcon: HandshakeIcon,
                          }[megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].overview.icon]
                        : null
                      return IconComponent ? <IconComponent className="h-4 w-4 mr-2 flex-shrink-0" /> : null
                    })()}
                    <span>{megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].overview.title}</span>
                  </Link>
                </div>
              )}

              <div className="grid grid-cols-3 gap-8">
                {megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].columns.map((column, idx) => (
                  <div key={idx}>
                    <h3 className="text-base font-semibold text-teal-700 mb-4 border-b pb-2">
                      {column.href ? (
                        <Link
                          href={column.href}
                          className="hover:text-[#39a3b1] transition-colors"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          {column.title}
                        </Link>
                      ) : (
                        column.title
                      )}
                    </h3>
                    <ul className="space-y-3">
                      {column.items.map((item, itemIdx) => {
                        const IconComponent = item.icon
                          ? {
                              Award: Award,
                              GraduationCap: GraduationCap,
                              ClipboardCheck: ClipboardCheck,
                              Users: Users,
                              Trophy: Trophy,
                              GitBranch: GitBranch,
                              FileText: FileText,
                              BookOpen: BookOpen,
                              RefreshCw: RefreshCw,
                              Book: Book,
                              HelpCircle: HelpCircle,
                              Star: Star,
                              FileQuestion: FileQuestion,
                              User: User,
                              UserPlus: UserPlus,
                              Laptop: Laptop,
                              Briefcase: Briefcase,
                              Video: Video,
                              Calendar: Calendar,
                              Mail: Mail,
                              Shield: Shield,
                              Settings: Settings,
                              BarChart: BarChart,
                              TrendingUp: TrendingUp,
                              MessageSquare: MessageSquare,
                              File: File,
                              Cpu: Cpu,
                              Globe: Globe,
                              MessageCircle: MessageCircle,
                              CheckSquare: CheckSquare,
                              CreditCard: CreditCard,
                              LogIn: LogIn,
                              Layout: Layout,
                              LightbulbIcon: LightbulbIcon,
                              HandshakeIcon: HandshakeIcon,
                            }[item.icon]
                          : null

                        return (
                          <li key={itemIdx}>
                            <Link
                              href={item.href}
                              className="flex items-center text-gray-700 hover:text-[#39a3b1] transition-colors"
                              onClick={() => setActiveMegaMenu(null)}
                            >
                              {IconComponent && <IconComponent className="h-4 w-4 mr-2 flex-shrink-0" />}
                              <span className="font-medium">{item.title}</span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-2">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item) => (
                <div key={item.title} className="py-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#39a3b1] rounded-md"
                      onClick={(e) => {
                        if (item.items.length > 0) {
                          e.preventDefault()
                          toggleMobileDropdown(item.title)
                        } else {
                          setIsMobileMenuOpen(false)
                        }
                      }}
                    >
                      {item.title}
                    </Link>
                    {item.items.length > 0 && (
                      <button onClick={() => toggleMobileDropdown(item.title)} className="px-3 py-2">
                        <ChevronDown
                          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                            openMobileDropdowns[item.title] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {openMobileDropdowns[item.title] && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#39a3b1] rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Also update the mobile navigation section to include authentication options */}
              {/* Add this inside the mobile navigation section, right before the closing div: */}
              <div className="px-2 py-3 border-t border-gray-200">
                <div className="flex flex-col space-y-1">
                  <p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Language / Langue / اللغة
                  </p>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`flex items-center px-3 py-2 text-base font-medium rounded-md ${
                        currentLanguage === lang.code
                          ? "bg-gray-50 text-[#39a3b1]"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#39a3b1]"
                      }`}
                      onClick={() => {
                        handleLanguageChange(lang.code as "en" | "ar" | "fr")
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="mt-3 space-y-1">
                  {user ? (
                    <>
                      <Link
                        href="/dashboard"
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#39a3b1] rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          logout()
                          setIsMobileMenuOpen(false)
                        }}
                        className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#39a3b1] rounded-md"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <Link
                      href="/login"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#39a3b1] rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                  )}
                  <Link
                    href="/contact"
                    className="block px-3 py-2 text-base font-medium hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

