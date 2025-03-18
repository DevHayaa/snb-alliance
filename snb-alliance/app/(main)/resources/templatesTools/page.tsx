import Link from "next/link"
import {
  FileText,
  Download,
  CheckCircle,
  ArrowRight,
  BarChart2,
  Users,
  FileCheck,
  Briefcase,
  Clock,
  Award,
  Shield,
  Zap,
  Database,
  Code,
  PieChart,
  Layers,
  CheckSquare,
} from "lucide-react"

export default function TemplatesToolsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/homeBanner.png')" }}
      >
        <div className="relative container mx-auto px-4 py-20 md:py-28">
            <h1 className="text-4xl text-[#f8a02e] md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-center">
              Templates & Tools
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-center text-white">
              Leverage the Best Tools & Processes for Bidding and Recruitment
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-8 text-white">
                Success in bidding and recruitment requires the right tools, templates, and streamlined processes. At
                SnB Alliance, we provide high-quality resources, software insights, and outsourcing solutions to help
                professionals increase efficiency, win more contracts, and build high-performing teams.
              </p>
            </div>
  </div>
  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900"></div>
</section>


      {/* Overview Section */}
      <section className="py-16 relative" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 border-b border-gray-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Templates & Tools Overview</h2>
                  <p className="text-lg font-medium text-gray-700">
                    Access Ready-to-Use Templates & Professional Tools
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-8">
                We've compiled a library of pre-built templates and tools to simplify bidding and recruitment workflows.
                Whether you're writing proposals, managing candidates, or optimizing bid submissions, our collection
                helps you save time and reduce errors.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <FileCheck className="h-5 w-5 mr-2 text-primary" />
                What's Inside?
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">Bidding Proposal Templates</p>
                    <p className="text-gray-600">Professionally structured RFP response templates.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">Recruitment & Staffing Tools</p>
                    <p className="text-gray-600">Customizable job descriptions, interview guides, and offer letters.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">Bid & Recruitment Software Reviews</p>
                    <p className="text-gray-600">Side-by-side comparisons of leading platforms.</p>
                  </div>
                </div>
              </div>

              <Link
                href="/membership"
                className="inline-flex items-center px-6 py-3 rounded-lg hover:bg-primary-dark font-medium transition-all shadow hover:shadow-md"
              >
                Download Templates & Tools
                <Download className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bidding Templates Section */}
      <section className="py-16 relative bg-gradient-to-b from-slate-50 to-slate-100" id="bidding-templates">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <Briefcase className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Bidding Templates</h2>
                  <p className="text-lg font-medium text-gray-700">
                    Win More Contracts with Pre-Designed RFP & Proposal Templates
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-8">
                Crafting a winning bid requires a clear, structured, and compelling proposal. Our bidding templates are
                designed to help you respond to RFPs efficiently, meet compliance requirements, and improve success
                rates.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <FileCheck className="h-5 w-5 mr-2 text-blue-600" />
                Our Template Collection Includes:
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">Technical Proposal Formats</p>
                    <p className="text-gray-600">Pre-filled sections for easy customization.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">Pricing & Cost Breakdown Sheets</p>
                    <p className="text-gray-600">Ensure financial transparency.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">Bid Compliance Checklists</p>
                    <p className="text-gray-600">Avoid disqualification with structured response outlines.</p>
                  </div>
                </div>
              </div>

              <Link
                href="/membership"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow hover:shadow-md"
              >
                Get Your Templates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Staffing & Recruiting Software */}
      <section className="py-16 relative" id="staffing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Staffing & Recruiting Software</h2>
                  <p className="text-lg font-medium text-gray-700">
                    The Best Tools for Recruitment & Talent Acquisition
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-8">
                The right Applicant Tracking System (ATS) and staffing software can transform hiring efficiency. Here's
                a breakdown of the industry's top recruitment platforms. Here's an overview of leading recruitment
                platforms, including but not limited to:
              </p>

              <div className="space-y-8 mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Database className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold text-blue-900">Sphere</h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">
                        AI-driven Applicant Tracking System (ATS) tailored for staffing firms and HR teams.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">
                        Smart candidate matching, compliance tracking, and bid integration.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">
                        Seamless RPO support to streamline outsourced recruitment.
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="/membership"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all text-sm"
                  >
                    Try Sphere Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <Database className="h-6 w-6 text-gray-600" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold text-gray-900">Bullhorn</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">
                        A widely used recruitment CRM and ATS for staffing firms.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">
                        Focuses on candidate relationship management and automation.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">
                        Best for large-scale hiring teams managing high-volume recruitment.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Database className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold text-green-900">GenKnox</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">AI-powered HR & talent acquisition software.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">
                        Includes competency-based hiring, video assessments, and employer branding tools.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">Designed for corporate HR and large enterprises.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                href="/membership"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all shadow hover:shadow-md"
              >
                Explore Our Reviews
                <BarChart2 className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bidding Software */}
      <section className="py-16 relative bg-gradient-to-b from-slate-50 to-slate-100" id="bidding-software">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-teal-50 to-emerald-50">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-teal-100 p-3 rounded-lg">
                  <Code className="h-8 w-8 text-teal-600" />
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Bidding Software</h2>
                  <p className="text-lg font-medium text-gray-700">Automate & Optimize Your Proposal Writing Process</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-8">
                Bid management is time-sensitive and complex—the right software reduces workload and improves win rates.
                Below are two leading bidding automation platforms. Here's an overview of leading bidding platforms,
                including but not limited to:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-500 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Zap className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold text-orange-900">GenRapide</h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">AI-driven bid writing and RFP automation.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">
                        Extracts, structures, and optimizes proposal content in minutes.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">
                        Built for staffing, government contracting, and consulting firms.
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="/membership"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-medium transition-all text-sm"
                  >
                    Try GenRapide Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <Layers className="h-6 w-6 text-gray-600" />
                    </div>
                    <h3 className="ml-3 text-xl font-bold text-gray-900">Loopio</h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">
                        Helps teams centralize bid responses and standardize RFP processes.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">
                        Best for large organizations managing frequent proposal submissions.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">Features content libraries and collaboration tools.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                href="/membership"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all shadow hover:shadow-md"
              >
                See Full Software Guide
                <PieChart className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Processes (RPO & BPO) Trends */}
      <section className="py-16 relative" id="Processes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-amber-50 to-orange-50">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-100 p-3 rounded-lg">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Processes (RPO & BPO) Trends</h2>
                  <p className="text-lg font-medium text-gray-700">Streamline Recruitment & Bidding with Outsourcing</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-6 border border-amber-100 shadow-sm">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Recruitment Process Outsourcing (RPO)</h3>
                  <p className="text-gray-700 mb-4">
                    Outsource your hiring process to experts for faster, cost-effective, and efficient talent
                    acquisition.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-6 border border-amber-100 shadow-sm">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Bidding Process Outsourcing (BPO)</h3>
                  <p className="text-gray-700 mb-4">
                    Streamline bid writing and proposal management by outsourcing to specialists for higher success
                    rates.
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mb-8">
                RPO and BPO help businesses cut costs, scale faster, and improve efficiency by streamlining recruitment
                and bidding processes, but their success relies on skilled, certified professionals. SnB Alliance
                ensures this with industry-recognized certifications.
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200 mb-8">
                <div className="flex items-center mb-6">
                  <Award className="h-8 w-8 text-amber-600" />
                  <h3 className="ml-3 text-2xl font-bold text-amber-900">BnR 360 Services & Solutions</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <Shield className="h-6 w-6 text-amber-600" />
                      <h4 className="ml-2 text-lg font-bold text-gray-900">RPO (Recruitment Process Outsourcing)</h4>
                    </div>
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="ml-2 text-gray-700">
                          End-to-end candidate sourcing, screening, and onboarding.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="ml-2 text-gray-700">AI-powered resume parsing and talent matching.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="ml-2 text-gray-700">
                          Flexible hiring models for contract, temp, and full-time roles.
                        </span>
                      </li>
                    </ul>
                    <Link
                      href="https://www.bnr360.com/service"
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium transition-all text-sm"
                    >
                      Explore RPO Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <Shield className="h-6 w-6 text-amber-600" />
                      <h4 className="ml-2 text-lg font-bold text-gray-900">BPO (Bidding Process Outsourcing)</h4>
                    </div>
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="ml-2 text-gray-700">
                          AI-assisted proposal writing and compliance verification.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="ml-2 text-gray-700">Expert-led bid strategy consulting.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="ml-2 text-gray-700">24/7 support to meet tight bid submission deadlines.</span>
                      </li>
                    </ul>
                    <Link
                      href="https://www.bnr360.com/service"
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium transition-all text-sm"
                    >
                      Learn More About BPO
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use SnB Alliance Resources */}
      <section className="py-16 relative bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-primary/10 to-primary/5">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Use SnB Alliance Resources?</h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start p-6 bg-gradient-to-br from-white to-slate-50 rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 mb-2">Time-Saving Templates & Tools</h3>
                    <p className="text-gray-700">Ready-to-use documents and automation resources.</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-gradient-to-br from-white to-slate-50 rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 mb-2">Trusted Software Recommendations</h3>
                    <p className="text-gray-700">Compare leading ATS & bid management platforms.</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-gradient-to-br from-white to-slate-50 rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 mb-2">Expert Insights on RPO & BPO Trends</h3>
                    <p className="text-gray-700">Leverage outsourcing for efficiency and growth.</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-gradient-to-br from-white to-slate-50 rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 mb-2">Exclusive Access to AI-Powered Solutions</h3>
                    <p className="text-gray-700">Try SnB Alliance's proprietary tools.</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/membership"
                  className="inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Join SnB Alliance
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <p className="mt-4 text-gray-600">Get full access to our resource library today!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

