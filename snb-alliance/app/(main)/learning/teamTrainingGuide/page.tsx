import Link from "next/link"
import Image from "next/image"
import {
  CheckCircle,
  ArrowRight,
  Award,
  FileText,
  BookOpen,
  BarChart,
  Users,
  Shield,
  TrendingUp,
  MessageSquare,
  Calendar,
  Briefcase,
} from "lucide-react"

export default function TeamTrainingGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
       <section className="relative py-20 overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/homeBanner.png"
                  alt="Abstract geometric background"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[#39a3b1]/80 mix-blend-multiply"></div>
              </div>
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#f8a02e]">SnB Alliance Team Training Guide</h1>
                  <p className="text-xl text-white/90 mb-10">
                  Empowering Your Workforce with Industry-Leading Training
                  </p>
                </div>
              </div>
            </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Introduction</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                At SnB Alliance, we understand that the success of any organization depends on a well-trained workforce.
                Our Team Training Program is designed to equip your employees with the latest skills and knowledge in
                bidding, recruitment, and workforce management. Whether you have a small team or a large enterprise, our
                training solutions help streamline processes, improve efficiency, and ensure compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SnB Alliance Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose SnB Alliance for Team Training?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#39a3b1] mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Industry-Recognized Certifications</h3>
                  <p className="text-gray-600">
                    Certify your team with credentials that enhance credibility and meet industry standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#39a3b1] mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Customized Training Plans</h3>
                  <p className="text-gray-600">
                    Tailor courses based on your company's needs, team size, and industry focus.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#39a3b1] mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Flexible Learning Formats</h3>
                  <p className="text-gray-600">
                    Choose from self-paced online modules, live virtual sessions, or on-site workshops.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#39a3b1] mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Bulk Enrollment Discounts</h3>
                  <p className="text-gray-600">Cost-effective training packages for multiple employees at once.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#39a3b1] mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Progress Tracking & Reports</h3>
                  <p className="text-gray-600">
                    Monitor team performance, certification status, and training milestones through a dedicated
                    dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Training Packages Section */}
      <section id="packages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Team Training Packages</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#39a3b1] text-white">
                  <th className="px-6 py-4 text-left">Package</th>
                  <th className="px-6 py-4 text-left">Best For</th>
                  <th className="px-6 py-4 text-left">Number of Employees</th>
                  <th className="px-6 py-4 text-left">Key Benefits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Small Team Package</td>
                  <td className="px-6 py-4">Startups & specialized teams</td>
                  <td className="px-6 py-4">5 - 10 employees</td>
                  <td className="px-6 py-4">
                    Bulk pricing discounts, team progress tracking, access to certification prep materials
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4 font-medium">Enterprise Package</td>
                  <td className="px-6 py-4">Mid-sized businesses and growing teams</td>
                  <td className="px-6 py-4">11 - 25 employees</td>
                  <td className="px-6 py-4">
                    All Small Team benefits + dedicated account manager + tailored training sessions
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Custom Corporate Package</td>
                  <td className="px-6 py-4">Large enterprises with specific needs</td>
                  <td className="px-6 py-4">25+ employees</td>
                  <td className="px-6 py-4">
                    Fully customized learning program, corporate discounts, and flexible scheduling
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
            >
              <span>💡 Not sure which package fits your needs? Talk to Our Training Advisors</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section id="whats-included" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            What's Included in the Team Training Program?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f0932a]/10 flex items-center justify-center mr-4">
                  <Award className="h-5 w-5 text-[#f0932a]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Onboarding & Setup</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Assistance with employee enrollment & course selection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Training schedule aligned with your business needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Dedicated support to ensure smooth onboarding</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f0932a]/10 flex items-center justify-center mr-4">
                  <BookOpen className="h-5 w-5 text-[#f0932a]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Training & Course Access</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Industry-leading bidding, recruitment, and workforce management courses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Flexible learning formats: self-paced, live sessions, or hybrid</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Access to exclusive templates, resources, and best practices</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f0932a]/10 flex items-center justify-center mr-4">
                  <BarChart className="h-5 w-5 text-[#f0932a]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Progress Tracking & Performance Reports</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>HR & managers get insights into employee performance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Certification completion rates & learning progress</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Custom reports to measure training ROI</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f0932a]/10 flex items-center justify-center mr-4">
                  <Shield className="h-5 w-5 text-[#f0932a]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Certification & Compliance Support</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Employees gain recognized certifications upon course completion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Helps companies meet industry compliance standards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Official digital badges to verify employee credentials</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How It Works</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#39a3b1] hidden md:block"></div>

              <div className="space-y-12">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#39a3b1] text-white text-xl font-bold mb-4 md:mb-0 z-10">
                    1
                  </div>
                  <div className="md:ml-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Choose Your Package</h3>
                    <p className="text-gray-600">
                      Select the training package that best fits your organization's size and goals.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#39a3b1] text-white text-xl font-bold mb-4 md:mb-0 z-10">
                    2
                  </div>
                  <div className="md:ml-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Enroll Your Team</h3>
                    <p className="text-gray-600">
                      Our onboarding specialists will help register employees and set up training schedules.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#39a3b1] text-white text-xl font-bold mb-4 md:mb-0 z-10">
                    3
                  </div>
                  <div className="md:ml-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Learn & Apply</h3>
                    <p className="text-gray-600">
                      Employees participate in courses, complete assignments, and gain industry-relevant skills.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#39a3b1] text-white text-xl font-bold mb-4 md:mb-0 z-10">
                    4
                  </div>
                  <div className="md:ml-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Monitor & Measure</h3>
                    <p className="text-gray-600">
                      Use real-time progress reports to track performance and ensure learning objectives are met.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#39a3b1] text-white text-xl font-bold mb-4 md:mb-0 z-10">
                    5
                  </div>
                  <div className="md:ml-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Certify & Grow</h3>
                    <p className="text-gray-600">
                      Employees receive certifications that enhance both individual and company success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Training Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Team Training Benefits by Role</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#39a3b1]/10 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-[#39a3b1]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">For HR & Talent Acquisition Leaders</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Standardized training across recruitment and bidding teams</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Faster onboarding with structured learning paths</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Compliance with industry best practices</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#39a3b1]/10 flex items-center justify-center mr-4">
                  <FileText className="h-6 w-6 text-[#39a3b1]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">For Bid & Proposal Writing Teams</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Learn techniques to improve bid efficiency and success rates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Streamline the proposal process with best-in-class methodologies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Reduce errors and enhance proposal quality</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#39a3b1]/10 flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-[#39a3b1]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">For Operations & Business Leaders</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Improve employee retention and enhance workforce capabilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Reduce skill gaps with tailored training solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Track training ROI with performance analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section id="success-story" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Success Story: How a Mid-Sized Company Streamlined Their Bidding & Hiring Process
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Company:</strong> Zernam Enterprise Inc. - Ottawa, Canada
              </p>
              <p>
                <strong>Challenge:</strong> Employees lacked formal training in bid proposal writing and compliance
                standards.
              </p>
              <p>
                <strong>Solution:</strong> Enrolled their team in SnB Alliance's Team Certification Program.
              </p>
              <p>
                <strong>Results:</strong> Increased bid success rates by 30%, improved recruitment efficiency, and
                ensured industry compliance.
              </p>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#39a3b1] text-white rounded-md hover:bg-[#2c8a96] transition-colors"
              >
                <span>💡 Want to see similar results? Request a Consultation</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Getting Started</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <MessageSquare className="h-12 w-12 text-[#39a3b1] mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Talk to Our Team</h3>
                <p className="text-gray-600 mb-4">Contact us at support@snballiance.org or schedule a call.</p>
                <Link href="/contact" className="text-[#39a3b1] hover:underline font-medium">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <FileText className="h-12 w-12 text-[#39a3b1] mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Request a Custom Training Plan</h3>
                <p className="text-gray-600 mb-4">Let's create a tailored learning solution for your business.</p>
                <Link href="/contact" className="text-[#39a3b1] hover:underline font-medium">
                  Request Plan
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <FileText className="h-12 w-12 text-[#39a3b1] mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Download Our Team Training Brochure</h3>
                <p className="text-gray-600 mb-4">Get detailed insights into course offerings and certifications.</p>
                <Link href="#" className="text-[#39a3b1] hover:underline font-medium">
                  Download PDF
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <TrendingUp className="h-12 w-12 text-[#39a3b1] mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Start Team Training</h3>
                <p className="text-gray-600 mb-4">Invest in your workforce today!</p>
                <Link href="/team-packages" className="text-[#39a3b1] hover:underline font-medium">
                  View Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Calendar Section */}
      <section id="events-calendar" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Upcoming Events & Training Calendar</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Stay ahead with our upcoming workshops, training sessions, and certification programs. Mark your calendars
            and register early to secure your spot.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-[#39a3b1] mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                September 2025
              </h3>
              <ul className="space-y-4">
                <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="font-medium text-gray-800">Mastering Bid & Proposal Writing</p>
                  <p className="text-gray-600 text-sm">Virtual Workshop – Sept 10-11, 2025</p>
                </li>
                <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="font-medium text-gray-800">Strategic Workforce Planning</p>
                  <p className="text-gray-600 text-sm">Live Webinar – Sept 18, 2025</p>
                </li>
                <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="font-medium text-gray-800">CSBA Certification Bootcamp</p>
                  <p className="text-gray-600 text-sm">Online Cohort – Starts Sept 23, 2025</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#39a3b1] mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                October 2025
              </h3>
              <ul className="space-y-4">
                <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="font-medium text-gray-800">RFP Compliance & Risk Management</p>
                  <p className="text-gray-600 text-sm">On-Site Workshop, NYC – Oct 7-8, 2025</p>
                </li>
                <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="font-medium text-gray-800">Advanced Talent Acquisition Strategies</p>
                  <p className="text-gray-600 text-sm">Virtual Training – Oct 15-16, 2025</p>
                </li>
                <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="font-medium text-gray-800">CBMP Certification Exam Prep</p>
                  <p className="text-gray-600 text-sm">Self-Paced Course Launch – Oct 21, 2025</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#39a3b1] mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                November 2025
              </h3>
              <ul className="space-y-4">
                <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="font-medium text-gray-800">Recruitment Metrics & Performance Analytics</p>
                  <p className="text-gray-600 text-sm">Live Webinar – Nov 5, 2025</p>
                </li>
                <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="font-medium text-gray-800">Bidding for Government Contracts</p>
                  <p className="text-gray-600 text-sm">Virtual Workshop – Nov 13-14, 2025</p>
                </li>
                <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="font-medium text-gray-800">CSMP Leadership Training</p>
                  <p className="text-gray-600 text-sm">Online Cohort – Starts Nov 20, 2025</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/membership"
              className="inline-flex items-center px-6 py-3 bg-[#f0932a] text-white rounded-md hover:bg-[#e08620] transition-colors"
            >
              <span>💡 Want early access to these events? Join SnB Alliance Membership</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Businesses Trust SnB Alliance</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#f0932a] mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="font-semibold mb-1">Recognized Industry Certifications</h3>
                  <p className="">Enhance your company's reputation and employee credibility.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#f0932a] mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="font-semibold mb-1">Flexible Learning Solutions</h3>
                  <p className="">Train employees at their own pace or through scheduled live sessions.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#f0932a] mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="font-semibold mb-1">Scalable & Customizable</h3>
                  <p className="">Whether you have 5 or 500 employees, we have a solution that fits.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#f0932a] mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="font-semibold mb-1">Dedicated Support</h3>
                  <p className="">Our team ensures smooth onboarding and training success.</p>
                </div>
              </div>
            </div>

            <p className="mb-8">📩 Have questions? Reach out at info@snballiance.org for more details.</p>

            <Link
              href="/team-packages"
              className="inline-flex items-center px-8 py-4 bg-[#f0932a] text-white rounded-md hover:bg-[#e08620] transition-colors text-lg font-medium"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              <span>Start Your Team Training Journey Today</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

