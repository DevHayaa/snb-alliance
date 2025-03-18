import Link from "next/link"
import {
  BarChart,
  TrendingUp,
  MessageSquare,
  CheckSquare,
  ClipboardCheck,
  Download,
  Mail,
  ArrowRight,
  FileText,
  Shield,
  Globe,
  Users,
  BookOpen,
  ChevronRight,
  Award,
  Zap,
  Target,
  Briefcase,
  PieChart,
} from "lucide-react"

export default function IndustryBestPracticesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section
                className="relative py-24 overflow-hidden bg-gradient-to-br from-[#39a3b1] via-[#2c8d9a] to-[#1e6e79] bg-cover bg-center"
                style={{ backgroundImage: "url('/homeBanner.png')" }}
                >
                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-3xl mx-auto text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-[#f8a02e]">Industry & Best Practices</h1>
                    <p className="text-xl md:text-2xl mb-8 font-light">Stay Ahead with Expert Knowledge & Proven Strategies</p>
                    <p className="text-lg mb-10 opacity-90 leading-relaxed">
                        The bidding and recruitment industry is constantly evolving. At SnB Alliance, we provide up-to-date
                        insights, expert guidance, and best practices to help professionals and businesses stay competitive,
                        compliant, and successful.
                    </p>
                    </div>
                </div>
                </section>


      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 -mt-32 relative z-20">
            <div className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-[#39a3b1] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="p-4 bg-teal-50 rounded-full mr-4">
                  <BarChart className="h-7 w-7 text-[#39a3b1]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Industry Reports</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Access comprehensive data-driven reports on global and regional staffing and bidding trends.
              </p>
              <Link
                href="/membership"
                className="inline-flex items-center text-[#39a3b1] font-medium hover:text-teal-700 group"
              >
                Access Reports{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-[#f0932a] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="p-4 bg-amber-50 rounded-full mr-4">
                  <TrendingUp className="h-7 w-7 text-[#f0932a]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Market Trends</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Stay ahead with real-time analysis of industry shifts and emerging opportunities.
              </p>
              <Link
                href="/membership"
                className="inline-flex items-center text-[#f0932a] font-medium hover:text-amber-700 group"
              >
                Explore Trends{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-[#39a3b1] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="p-4 bg-teal-50 rounded-full mr-4">
                  <MessageSquare className="h-7 w-7 text-[#39a3b1]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Expert Opinions</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Get exclusive insights from industry leaders and subject matter experts.
              </p>
              <Link
                href="/membership"
                className="inline-flex items-center text-[#39a3b1] font-medium hover:text-teal-700 group"
              >
                Read Insights{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Comprehensive Industry Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access the tools and knowledge you need to excel in the bidding and recruitment industry
            </p>
            <div className="w-24 h-1 bg-[#39a3b1] mx-auto mt-6"></div>
          </div>

          {/* Industry Insights & Reports Section */}
          <div className="mb-24 scroll-mt-24" id="insights">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-teal-100 rounded-full mr-4">
                <BarChart className="h-8 w-8 text-[#39a3b1]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Industry Insights & Reports</h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-10">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    Data-Driven Insights to Inform Your Decisions
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Gain access to comprehensive reports and research on the latest trends, policies, and innovations in
                    bidding, recruitment, and workforce management.
                  </p>
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-4 flex items-center text-gray-700">
                      <FileText className="h-5 w-5 mr-2 text-[#39a3b1]" /> What You'll Find:
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <PieChart className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Annual Industry Reports</span> – Deep dives into global and
                          regional staffing and bidding trends.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <Target className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Performance Benchmarks</span> – Compare your organization's
                          metrics with industry standards.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <TrendingUp className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Data-Backed Forecasts</span> – Projections and expert analysis
                          to help you plan ahead.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/membership"
                    className="inline-flex items-center px-6 py-3 bg-[#39a3b1] hover:bg-teal-700 text-white rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Latest Report
                  </Link>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center p-10">
                  <div className="relative w-full h-80 flex items-center justify-center">
                    <div className="absolute w-64 h-64 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <PieChart className="h-24 w-24 text-[#39a3b1] mb-4" />
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#39a3b1] mb-2">85%</div>
                        <div className="text-sm text-gray-600">of successful bids follow industry best practices</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Trends Section */}
          <div id="market-trends" className="mb-24 scroll-mt-24">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-amber-100 rounded-full mr-4">
                <TrendingUp className="h-8 w-8 text-[#f0932a]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Market Trends</h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/2 p-10">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    Stay Ahead of Industry Shifts & Emerging Opportunities
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The recruitment and bidding landscape is constantly changing due to technology advancements,
                    regulatory updates, and economic factors. Stay ahead with our real-time market trend analysis.
                  </p>
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-4 flex items-center text-gray-700">
                      <TrendingUp className="h-5 w-5 mr-2 text-[#f0932a]" /> Key Focus Areas:
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-amber-100 rounded-full mr-3 mt-1">
                          <Zap className="h-5 w-5 text-[#f0932a]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">AI & Automation in Hiring & Bidding</span> – How technology is
                          reshaping recruitment & proposal writing.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-amber-100 rounded-full mr-3 mt-1">
                          <Globe className="h-5 w-5 text-[#f0932a]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Global Workforce Shifts</span> – Hiring patterns, talent
                          shortages, and remote work trends.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-amber-100 rounded-full mr-3 mt-1">
                          <Briefcase className="h-5 w-5 text-[#f0932a]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Public vs. Private Sector Opportunities</span> – Understanding
                          where the best bidding prospects are.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/membership"
                    className="inline-flex items-center px-6 py-3 bg-[#f0932a] hover:bg-amber-600 text-white rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Explore Latest Market Trends
                  </Link>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center p-10">
                  <div className="w-full h-80 flex items-center justify-center">
                    <div className="relative w-full max-w-sm">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-1 bg-amber-200 rounded-full"></div>
                      </div>
                      <div className="relative flex justify-between">
                        <div className="flex flex-col items-center">
                          <div className="w-4 h-4 bg-amber-500 rounded-full mb-2"></div>
                          <div className="text-xs text-gray-600">2023</div>
                          <div className="mt-4 text-center">
                            <div className="text-lg font-bold text-[#f0932a]">32%</div>
                            <div className="text-xs text-gray-600 w-20">AI Adoption</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-4 h-4 bg-amber-500 rounded-full mb-2"></div>
                          <div className="text-xs text-gray-600">2024</div>
                          <div className="mt-4 text-center">
                            <div className="text-lg font-bold text-[#f0932a]">58%</div>
                            <div className="text-xs text-gray-600 w-20">AI Adoption</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-4 h-4 bg-amber-500 rounded-full mb-2"></div>
                          <div className="text-xs text-gray-600">2025</div>
                          <div className="mt-4 text-center">
                            <div className="text-lg font-bold text-[#f0932a]">76%</div>
                            <div className="text-xs text-gray-600 w-20">AI Adoption</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Opinions Section */}
          <div id="expert-opinions" className="mb-24 scroll-mt-24">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-teal-100 rounded-full mr-4">
                <MessageSquare className="h-8 w-8 text-[#39a3b1]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Expert Opinions</h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-10">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    Insights from Industry Leaders & Subject Matter Experts
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Get exclusive insights and thought leadership from recruitment specialists, bidding professionals,
                    and compliance experts who shape the industry.
                  </p>
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-4 flex items-center text-gray-700">
                      <MessageSquare className="h-5 w-5 mr-2 text-[#39a3b1]" /> Featured Topics:
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <Award className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Winning Bid Strategies</span> – Learn from top consultants on
                          improving RFP success rates.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <Users className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Talent Acquisition Best Practices</span> – Expert-led
                          discussions on sourcing, hiring, and retention.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <Shield className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Risk & Compliance in Bidding</span> – Navigating legal
                          complexities and regulatory frameworks.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/membership"
                    className="inline-flex items-center px-6 py-3 bg-[#39a3b1] hover:bg-teal-700 text-white rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Explore Expert Insights
                  </Link>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center p-10">
                  <div className="w-full max-w-sm">
                    <div className="flex flex-col space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-md">
                        <div className="flex items-start">
                          <div className="bg-teal-100 rounded-full p-2 mr-3">
                            <Users className="h-5 w-5 text-[#39a3b1]" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">Sarah Johnson</div>
                            <div className="text-sm text-gray-500">Recruitment Specialist</div>
                            <div className="mt-2 text-gray-600 text-sm">
                              "The future of recruitment lies in balancing AI efficiency with human connection."
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-md">
                        <div className="flex items-start">
                          <div className="bg-teal-100 rounded-full p-2 mr-3">
                            <Briefcase className="h-5 w-5 text-[#39a3b1]" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">Michael Chen</div>
                            <div className="text-sm text-gray-500">Bid Consultant</div>
                            <div className="mt-2 text-gray-600 text-sm">
                              "Successful bids focus on value creation, not just cost efficiency."
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices and Guidelines Section */}
          <div id="best-practices" className="mb-24 scroll-mt-24">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-amber-100 rounded-full mr-4">
                <CheckSquare className="h-8 w-8 text-[#f0932a]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Best Practices and Guidelines</h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/2 p-10">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    Proven Strategies for Successful Bidding & Recruitment
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Maximize efficiency and avoid costly mistakes with our step-by-step guides and expert-approved best
                    practices.
                  </p>
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-4 flex items-center text-gray-700">
                      <BookOpen className="h-5 w-5 mr-2 text-[#f0932a]" /> What's Included:
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-amber-100 rounded-full mr-3 mt-1">
                          <FileText className="h-5 w-5 text-[#f0932a]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Bid Writing & Proposal Management</span> – Techniques to create
                          compelling, compliant proposals.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-amber-100 rounded-full mr-3 mt-1">
                          <Users className="h-5 w-5 text-[#f0932a]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Staffing & Talent Retention Strategies</span> – Frameworks for
                          building and maintaining high-performing teams.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-amber-100 rounded-full mr-3 mt-1">
                          <Briefcase className="h-5 w-5 text-[#f0932a]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Contract & Client Management</span> – Guidelines to improve
                          partnerships and minimize legal risks.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/membership"
                    className="inline-flex items-center px-6 py-3 bg-[#f0932a] hover:bg-amber-600 text-white rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Guidelines
                  </Link>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center p-10">
                  <div className="w-full max-w-sm">
                    <div className="relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-amber-300"></div>
                      <div className="space-y-6">
                        <div className="relative">
                          <div className="absolute -left-6 top-1 w-5 h-5 bg-amber-300 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <div className="pl-4">
                            <h4 className="font-medium text-[#f0932a]">Research</h4>
                            <p className="text-sm text-gray-600">Understand client needs and market context</p>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-6 top-1 w-5 h-5 bg-amber-300 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <div className="pl-4">
                            <h4 className="font-medium text-[#f0932a]">Develop</h4>
                            <p className="text-sm text-gray-600">Create tailored, value-focused proposals</p>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-6 top-1 w-5 h-5 bg-amber-300 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <div className="pl-4">
                            <h4 className="font-medium text-[#f0932a]">Review</h4>
                            <p className="text-sm text-gray-600">Ensure compliance and quality control</p>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-6 top-1 w-5 h-5 bg-amber-300 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <div className="pl-4">
                            <h4 className="font-medium text-[#f0932a]">Submit</h4>
                            <p className="text-sm text-gray-600">Deliver on time with professional presentation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Checklists Section */}
          <div id="compliance-checklists" className="mb-24 scroll-mt-24">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-teal-100 rounded-full mr-4">
                <ClipboardCheck className="h-8 w-8 text-[#39a3b1]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Compliance Checklists</h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-10">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    Ensure Your Business Meets Industry Standards
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Compliance is critical in recruitment and bidding. Our checklists and regulatory guides help you
                    stay compliant with industry laws, contract requirements, and HR policies.
                  </p>
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-4 flex items-center text-gray-700">
                      <ClipboardCheck className="h-5 w-5 mr-2 text-[#39a3b1]" /> Essential Checklists:
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <CheckSquare className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Bid Compliance Checklist</span> – Ensure all RFP requirements
                          are met before submission.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <Shield className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">HR & Staffing Compliance Guide</span> – Stay aligned with labor
                          laws and ethical hiring practices.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-1">
                          <FileText className="h-5 w-5 text-[#39a3b1]" />
                        </div>
                        <span className="text-gray-600">
                          <span className="font-medium">Government Contracting Requirements</span> – Step-by-step
                          compliance guide for securing contracts.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/membership"
                    className="inline-flex items-center px-6 py-3 bg-[#39a3b1] hover:bg-teal-700 text-white rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <ClipboardCheck className="mr-2 h-5 w-5" />
                    Get Your Compliance Checklist
                  </Link>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center p-10">
                  <div className="w-full max-w-sm">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h4 className="font-semibold text-[#39a3b1] mb-4 flex items-center">
                        <ClipboardCheck className="h-5 w-5 mr-2" /> Bid Compliance Checklist
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="w-5 h-5 border border-[#39a3b1] rounded flex items-center justify-center mr-3">
                            <CheckSquare className="h-3 w-3 text-[#39a3b1]" />
                          </div>
                          <span className="text-sm text-gray-700">RFP requirements review</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-5 h-5 border border-[#39a3b1] rounded flex items-center justify-center mr-3">
                            <CheckSquare className="h-3 w-3 text-[#39a3b1]" />
                          </div>
                          <span className="text-sm text-gray-700">Documentation verification</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-5 h-5 border border-[#39a3b1] rounded flex items-center justify-center mr-3">
                            <CheckSquare className="h-3 w-3 text-[#39a3b1]" />
                          </div>
                          <span className="text-sm text-gray-700">Legal compliance check</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-5 h-5 border border-[#39a3b1] rounded flex items-center justify-center mr-3">
                            <CheckSquare className="h-3 w-3 text-[#39a3b1]" />
                          </div>
                          <span className="text-sm text-gray-700">Pricing structure validation</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-5 h-5 border border-[#39a3b1] rounded flex items-center justify-center mr-3">
                            <CheckSquare className="h-3 w-3 text-[#39a3b1]" />
                          </div>
                          <span className="text-sm text-gray-700">Final submission review</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Use SnB Alliance Resources */}
          <div className="relative mb-24 overflow-hidden rounded-2xl bg-gradient-to-r from-[#39a3b1] to-[#2c8d9a]">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            </div>
            <div className="relative z-20 p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Use SnB Alliance Resources?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BarChart className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Data-Driven Insights</h3>
                  <p className="opacity-90 text-center">Reports backed by real-world data and industry expertise.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckSquare className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Actionable Strategies</h3>
                  <p className="opacity-90 text-center">
                    Practical guidelines to improve operations and bid success rates.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Exclusive Expert Access</h3>
                  <p className="opacity-90 text-center">Learn from top industry professionals and thought leaders.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Compliance & Risk Mitigation</h3>
                  <p className="opacity-90 text-center">Ensure your business meets legal and industry standards.</p>
                </div>
              </div>
              <div className="text-center mt-10">
                <Link
                  href="/membership"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#39a3b1] hover:bg-gray-100 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Join SnB Alliance for Full Access
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

