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
  X,
  Menu,
} from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

// Import the useAuth hook at the top of the file
import { useAuth } from "@/contexts/auth-context"
import { usePathname } from "next/navigation"

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
        description: "Certificate in Staffing Bidding Associates",
        href: "/certifications#csba",
        icon: "GraduationCap",
      },
      {
        title: "CBMP",
        description: "Certificate in Bid Management Professional",
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
        description: "Certified Staffing Bidding Leader",
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
        href: "/membership#stories",
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
const megaMenuContent = {
  Certifications: {
    overview: { title: "Certifications Overview", href: "/certifications", icon: "Award" },
    columns: [
      {
        title: "Our Certifications",
        href: "/certifications",
        items: [
          { title: "CSBA - Certified Staffing & Bidding Associates", href: "/certifications#csba", icon: "GraduationCap" },
          { title: "CBMP - Certified Bid Management Professional", href: "/certifications#cbmp", icon: "ClipboardCheck" },
          { title: "CSMP - Certified Staffing Management Professional", href: "/certifications#csmp", icon: "Users" },
          { title: "CSBL - Certified Staffing & Bidding Leader", href: "/certifications#csbl", icon: "Trophy" },
        ],
      },
      {
        title: "Certification Journey",
        href: "/certifications/journey",
        items: [
          { title: "Certification Process", href: "/certifications#certification-process", icon: "GitBranch" },
          { title: "Exam & Fees", href: "/certifications#exam-fees", icon: "FileText" },
        ],
      },
      {
        title: "Resources",
        href: "/resources/certification",
        items: [
          { title: "Certification FAQ", href: "/resources#certification-faq", icon: "HelpCircle" },
          { title: "Success Stories", href: "/membership#stories", icon: "Star" },
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
          {
            title: "Best Practices & Guidelines",
            href: "/resources/industryBestPractice#best-practices",
            icon: "CheckSquare",
          },
          {
            title: "Compliance Checklists",
            href: "/resources/industryBestPractice#compliance-checklists",
            icon: "ClipboardCheck",
          },
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
          {
            title: "Community & Networking",
            href: "/resources//learningCommunity#community-networking",
            icon: "Users",
          },
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
          { title: "Member Directory", href: "/dashboard", icon: "Book" },
          { title: "Contact Support", href: "/contact", icon: "HelpCircle" },
        ],
      },
    ],
  },
}

// Icon mapping function
const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, any> = {
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
    Globe,
    MessageCircle,
    CheckSquare,
    CreditCard,
    LogIn,
    Layout,
    LightbulbIcon,
    HandshakeIcon,
  }
  return iconMap[iconName] || null
}

type HeaderProps = {
  setLanguage: (language: string) => void
}

export default function Header() {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null)
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const { user, logout } = useAuth()
  const pathname = usePathname()

    const { language: currentLanguage, setLanguage } = useLanguage(); // Get current language
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null); // Ref for handling outside click
  
      // Handle language change and close the menu
  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode); // Update language
    setIsMobileMenuOpen(false); // Close menu after selection
  };

    // Language options
    const languages = [
      { code: "en", name: "English", flag: "🇬🇧" },
      { code: "fr", name: "Français", flag: "🇫🇷" },
      { code: "ar", name: "العربية", flag: "🇸🇦" },
    ];
  
    // // Handle language change
    // const handleLanguageChange = (langCode: string) => {
    //   setLanguage(langCode);
    //   setIsLanguageMenuOpen(false); // Close dropdown after selection
    // };
  
    // Close dropdown if clicked outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsLanguageMenuOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  


  const toggleMegaMenu = (title: string) => {
    setActiveMegaMenu(activeMegaMenu === title ? null : title)
  }

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen
    setIsMobileMenuOpen(newState)

    // Reset submenu states when closing
    if (!newState) {
      setActiveMobileMenu(null)
      setActiveMobileSubmenu(null)
      // Restore body scroll
      document.body.style.overflow = "auto"
    } else {
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden"
    }
  }

  const handleMobileMenuClick = (title: string) => {
    setActiveMobileMenu(activeMobileMenu === title ? null : title)
    setActiveMobileSubmenu(null)
  }

  const handleMobileSubmenuClick = (title: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === title ? null : title)
  }

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null)
        setIsLanguageMenuOpen(false)
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !headerRef.current?.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
        setActiveMobileMenu(null)
        setActiveMobileSubmenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveMobileMenu(null)
    setActiveMobileSubmenu(null)
    setActiveMegaMenu(null)
  }, [pathname])

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
          setActiveMobileMenu(null)
          setActiveMobileSubmenu(null)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuOpen])

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="SnB Alliance Logo"
                width={180}
                height={100}
                className="mt-3"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                <button
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
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
          <div className="flex items-center space-x-2 md:space-x-3">
            {/* Language Selector - Desktop */}
    <div className="relative hidden md:block" ref={dropdownRef}>
      <button
        className="flex items-center space-x-1 px-2 py-1.5 text-sm font-medium border border-gray-200 rounded-md hover:bg-gray-50"
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              aria-expanded={isLanguageMenuOpen}
            >
              <Globe className="h-4 w-4 mr-1.5" />
              <span>{currentLanguage.toUpperCase()}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isLanguageMenuOpen ? "rotate-180" : ""}`} />
            </button>

            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg z-50 border border-gray-100">
                <div className="py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-50 ${
                        currentLanguage === lang.code ? "bg-gray-50 text-[#39a3b1] font-medium" : "text-gray-700"
                      }`}
                      onClick={() => handleLanguageChange(lang.code)}
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
              className="hidden md:inline-flex px-3 py-2 text-sm font-medium border border-gray-200 rounded-md hover:bg-gray-50"
            >
              Contact Us
            </Link>

            {user ? (
              <div className="hidden md:flex items-center space-x-2">
                <Link
                  href="/dashboard"
                  className="px-3 py-2 text-sm font-medium border border-gray-200 rounded-md hover:bg-gray-50"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="px-3 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="hidden md:inline-flex px-3 py-2 text-sm font-medium bg-[#39a3b1] text-white rounded-md hover:bg-[#39a3b1]/90 transition-colors"
              >
                Sign In
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              className="lg:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mega Menu - Desktop */}
        {activeMegaMenu && megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent] && (
          <div className="absolute left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-50 hidden lg:block">
            <div className="container mx-auto py-6 px-4">
              {/* Overview Link */}
              {megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].overview && (
                <div className="mb-6 pb-4 border-b border-gray-200">
                  <Link
                    href={megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].overview.href}
                    className="inline-flex items-center px-4 py-2 bg-[#39a3b1] text-white rounded-md hover:bg-[#39a3b1]/90 transition-colors"
                    onClick={() => setActiveMegaMenu(null)}
                  >
                    {(() => {
                      const iconName = megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].overview.icon
                      const IconComponent = getIconComponent(iconName)
                      return IconComponent ? <IconComponent className="h-4 w-4 mr-2 flex-shrink-0" /> : null
                    })()}
                    <span>{megaMenuContent[activeMegaMenu as keyof typeof megaMenuContent].overview.title}</span>
                  </Link>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                        const IconComponent = getIconComponent(item.icon)
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
      </div>

      {/* Mobile Navigation Menu - Full Screen Overlay */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-50 bg-white overflow-y-auto lg:hidden pt-16"
          style={{ maxHeight: "100vh" }}
        >
          {/* Add a fixed close button at the top right of the mobile menu */}
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>

          <div className="container mx-auto px-4 py-4">
            {/* Main Navigation Items */}
            <nav className="space-y-1">
              {navItems.map((item) => (
                <div key={item.title} className="border-b border-gray-100 last:border-b-0">
                  <button
                    className="flex items-center justify-between w-full py-3 px-2 text-left font-medium text-gray-800 hover:text-[#39a3b1]"
                    onClick={() => handleMobileMenuClick(item.title)}
                    aria-expanded={activeMobileMenu === item.title}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                        activeMobileMenu === item.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeMobileMenu === item.title && (
                    <div className="py-2 px-2">
                      {/* Overview Link */}
                      {megaMenuContent[item.title as keyof typeof megaMenuContent]?.overview && (
                        <div className="mb-4">
                          <Link
                            href={megaMenuContent[item.title as keyof typeof megaMenuContent].overview.href}
                            className="inline-flex items-center px-4 py-2 bg-[#39a3b1] text-white rounded-md text-sm hover:bg-[#39a3b1]/90 transition-colors"
                            onClick={toggleMobileMenu}
                          >
                            {(() => {
                              const iconName = megaMenuContent[item.title as keyof typeof megaMenuContent].overview.icon
                              const IconComponent = getIconComponent(iconName)
                              return IconComponent ? <IconComponent className="h-4 w-4 mr-2 flex-shrink-0" /> : null
                            })()}
                            <span>{megaMenuContent[item.title as keyof typeof megaMenuContent].overview.title}</span>
                          </Link>
                        </div>
                      )}

                      {/* Column Headers */}
                      {megaMenuContent[item.title as keyof typeof megaMenuContent]?.columns.map((column, idx) => (
                        <div key={idx} className="mb-4">
                          <button
                            className="flex items-center justify-between w-full py-2 px-2 text-left font-medium text-gray-700 hover:text-[#39a3b1] border-b border-gray-100"
                            onClick={() => handleMobileSubmenuClick(column.title)}
                            aria-expanded={activeMobileSubmenu === column.title}
                          >
                            <span>{column.title}</span>
                            <ChevronDown
                              className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                                activeMobileSubmenu === column.title ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {activeMobileSubmenu === column.title && (
                            <ul className="pl-4 py-2 space-y-2">
                              {column.items.map((subItem, subIdx) => {
                                const IconComponent = getIconComponent(subItem.icon)
                                return (
                                  <li key={subIdx}>
                                    <Link
                                      href={subItem.href}
                                      className="flex items-center py-1.5 text-gray-600 hover:text-[#39a3b1] text-sm"
                                      onClick={toggleMobileMenu}
                                    >
                                      {IconComponent && <IconComponent className="h-4 w-4 mr-2 flex-shrink-0" />}
                                      <span>{subItem.title}</span>
                                    </Link>
                                  </li>
                                )
                              })}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Language Selector - Mobile */}
            <div className="mt-6 border-t border-gray-200 pt-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                <Globe className="h-3.5 w-3.5 mr-1" /> Language / Langue / اللغة
              </p>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      currentLanguage === lang.code
                        ? "bg-gray-100 text-[#39a3b1]"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[#39a3b1]"
                    }`}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Authentication & Contact - Mobile */}
            <div className="mt-6 border-t border-gray-200 pt-4 space-y-2">
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className="flex items-center justify-center w-full px-4 py-3 text-base font-medium bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
                    onClick={toggleMobileMenu}
                  >
                    <Layout className="h-5 w-5 mr-2" /> Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      toggleMobileMenu()
                    }}
                    className="flex items-center justify-center w-full px-4 py-3 text-base font-medium border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center justify-center w-full px-4 py-3 text-base font-medium bg-[#39a3b1] text-white rounded-md hover:bg-[#39a3b1]/90"
                  onClick={toggleMobileMenu}
                >
                  <LogIn className="h-5 w-5 mr-2" /> Sign In
                </Link>
              )}
              <Link
                href="/contact"
                className="flex items-center justify-center w-full px-4 py-3 text-base font-medium border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50"
                onClick={toggleMobileMenu}
              >
                <Mail className="h-5 w-5 mr-2" /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

