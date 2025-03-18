import Link from "next/link"
import Image from "next/image"
import {
  CheckCircle,
  ArrowRight,
  BarChart,
  Award,
  Clock,
  Target,
  Briefcase,
  BookOpen,
  TrendingUp,
  MessageSquare,
} from "lucide-react"

export default function TeamPackagesPage() {
  return (
    <div className="min-h-screen">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#f8a02e]">Train & Certify Your Team with SnB Alliance</h1>
            <p className="text-xl text-white/90 mb-10">
            Empower your workforce with industry-recognized bidding and recruitment certifications. Whether you have a
              small team or an entire department, SnB Alliance offers customized team packages designed to improve
              skills, ensure compliance, and enhance performance.
            </p>
          </div>
        </div>
      </section>
    

      {/* Why Choose Team Packages Section */}
      <section id="why-choose" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Team Packages?</h2>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f0932a]/10 flex items-center justify-center mr-4">
                    <Target className="h-5 w-5 text-[#f0932a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Cost-Effective Training</h3>
                    <p className="text-gray-600">Get bulk pricing discounts when enrolling multiple employees.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f0932a]/10 flex items-center justify-center mr-4">
                    <BookOpen className="h-5 w-5 text-[#f0932a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Standardized Learning</h3>
                    <p className="text-gray-600">
                      Ensure your entire team follows a structured and consistent training path.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f0932a]/10 flex items-center justify-center mr-4">
                    <BarChart className="h-5 w-5 text-[#f0932a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Progress Tracking</h3>
                    <p className="text-gray-600">
                      Monitor employee progress, track completions, and get detailed reports.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f0932a]/10 flex items-center justify-center mr-4">
                    <Award className="h-5 w-5 text-[#f0932a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Industry Recognition</h3>
                    <p className="text-gray-600">
                      Equip your workforce with globally recognized certifications that enhance credibility.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#39a3b1] text-white rounded-md hover:bg-[#2c8a96] transition-colors"
                >
                  <span>🚀 Request a Team Training Plan</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Certification Packages Section */}
      <section id="packages" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our Team Certification Packages</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We offer three flexible packages to fit your organization's size and training needs.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#39a3b1] text-white">
                  <th className="px-6 py-4 text-left">Package</th>
                  <th className="px-6 py-4 text-left">Best For</th>
                  <th className="px-6 py-4 text-left">Number of Employees</th>
                  <th className="px-6 py-4 text-left">Benefits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium">Small Team Package</td>
                  <td className="px-6 py-4">Small businesses, startups, or specialized teams</td>
                  <td className="px-6 py-4">5 - 10 employees</td>
                  <td className="px-6 py-4">
                    Bulk discounts, team progress tracking, access to certification prep materials
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
                  <td className="px-6 py-4">Large enterprises or companies with specific training needs</td>
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
              <span>💼 Not sure which package fits your team? Talk to Our Training Advisors</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section id="whats-included" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What's Included in a Team Package?</h2>
            <p className="text-center text-gray-600 mb-8">Each Team Package provides:</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Onboarding Support</h3>
                    <p className="text-gray-600">
                      Get help enrolling your employees and setting up training schedules.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Access to Resources</h3>
                    <p className="text-gray-600">
                      Team members receive exclusive training materials, templates, and industry reports.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Certification & Assessments</h3>
                    <p className="text-gray-600">
                      Ensure employees complete courses and obtain verified certifications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Reporting & Analytics</h3>
                    <p className="text-gray-600">
                      HR and management teams receive detailed insights on training progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/learning/teamTrainingGuide"
                className="inline-flex items-center px-6 py-3 border border-[#39a3b1] text-[#39a3b1] rounded-md hover:bg-[#39a3b1] hover:text-white transition-colors"
              >
                <span>📂 Review the full Team Training Guide</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
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
                    <p className="text-gray-600">Select a training package that fits your team size and goals.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#39a3b1] text-white text-xl font-bold mb-4 md:mb-0 z-10">
                    2
                  </div>
                  <div className="md:ml-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Enroll Your Team</h3>
                    <p className="text-gray-600">
                      We'll guide you through the onboarding process and set up employee accounts.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#39a3b1] text-white text-xl font-bold mb-4 md:mb-0 z-10">
                    3
                  </div>
                  <div className="md:ml-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Train & Certify</h3>
                    <p className="text-gray-600">
                      Employees complete their courses, take assessments, and earn certifications.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#39a3b1] text-white text-xl font-bold mb-4 md:mb-0 z-10">
                    4
                  </div>
                  <div className="md:ml-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Track Progress</h3>
                    <p className="text-gray-600">Use our dashboard to monitor team learning outcomes in real time.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#f0932a] text-white rounded-md hover:bg-[#e08620] transition-colors text-lg font-medium"
              >
                <span>🚀 Upgrade your team's skills today! Get Started Now</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Consider Section */}
      <section id="who-should-consider" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Who Should Consider Team Training?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">HR & Talent Acquisition Teams</h3>
                  <p className="text-gray-600">Standardize hiring and recruitment practices.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Bidding & Proposal Writing Teams</h3>
                  <p className="text-gray-600">Improve proposal efficiency and success rates.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Project Managers & Operations Leaders</h3>
                  <p className="text-gray-600">Ensure compliance and resource management best practices.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Corporate Training Departments</h3>
                  <p className="text-gray-600">Provide ongoing learning opportunities for employees.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
            >
              <span>💡 Interested in a customized package? Let's Discuss Your Needs</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Trust SnB Alliance Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Businesses Trust SnB Alliance</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto ">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm ">
              <Award className="h-10 w-10 text-[#f0932a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry-Recognized Certifications</h3>
              <p className="">Trusted by professionals in bidding, staffing, and recruitment.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Clock className="h-10 w-10 text-[#f0932a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Learning Formats</h3>
              <p className="">
                Choose from self-paced online courses, virtual classrooms, or in-person training.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <TrendingUp className="h-10 w-10 text-[#f0932a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="">Whether training five employees or 500, we have a solution that fits.</p>
            </div>

            <div className="bg-[white/10] p-6 rounded-lg backdrop-blur-sm">
              <MessageSquare className="h-10 w-10 text-[#f0932a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p className="">Our corporate account managers guide you every step of the way.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6">
              📞 Have Questions? Contact our Corporate Training Team at info@snballiance.org.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#f0932a] text-white rounded-md hover:bg-[#e08620] transition-colors text-lg font-medium"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              <span>💼 Invest in your workforce today. Request a Team Training Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

