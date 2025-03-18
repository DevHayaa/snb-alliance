import Link from "next/link"
import Image from "next/image"
import {
  Building,
  Users,
  BarChart,
  Settings,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Award,
  Clock,
  Briefcase,
  LineChart,
  Target,
  MessageSquare,
} from "lucide-react"

export default function BusinessesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-[#f8a02e] mb-6">Businesses</h1>
            <p className="text-xl opacity-90 mb-6 text-white">Empower Your Workforce with Industry-Recognized Training</p>
                    <p className="text-lg opacity-80 text-white">
                    SnB Alliance offers customized corporate training programs designed to enhance skills, improve efficiency,
                    and ensure compliance in the bidding and recruitment industries. Whether you need to certify your team,
                    compare training options, or build a tailored learning solution, we have the right programs for your
                    organization.
                    </p>
          </div>
        </div>
      </section>

      {/* Corporate Training Program Section */}
      <section id="corporate-training" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 text-[#39a3b1] mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Corporate Training Program</h2>
              </div>
              <h3 className="text-xl font-semibold text-[#f0932a] mb-4">Train Your Team for Long-Term Success</h3>
              <p className="text-gray-600 mb-6">
                Our Corporate Training Program provides structured learning experiences tailored to your organization's
                needs. Designed for HR teams, recruiters, bid writers, and project managers, this program ensures your
                workforce is equipped with best practices, compliance knowledge, and advanced skills.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">🏢 Why Choose Corporate Training?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-800">Industry-Relevant Curriculum</strong> – Covering bidding
                      strategies, talent acquisition, and compliance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-800">Flexible Learning Formats</strong> – Choose from on-site
                      workshops, virtual training, or hybrid models.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-800">Expert Instructors</strong> – Learn from industry professionals
                      with real-world experience.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#39a3b1] text-white rounded-md hover:bg-[#2c8a96] transition-colors"
                >
                  <span>🚀 Get a Custom Training Plan</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/CorporateTraining.jpg"
                alt="Corporate Training"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Expert-Led Training</h3>
                  <p>Customized programs for your organization's specific needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Certification Packages Section */}
      <section id="team-certification" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/TeamCertification.jpg"
                alt="Team Certification"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Team Certification</h3>
                  <p>Cost-effective solutions for certifying multiple employees</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-[#39a3b1] mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Team Certification Packages</h2>
              </div>
              <h3 className="text-xl font-semibold text-[#f0932a] mb-4">
                Certify Your Team & Build Industry Expertise
              </h3>
              <p className="text-gray-600 mb-6">
                SnB Alliance makes it easy and cost-effective to certify multiple employees at once. Our Team
                Certification Packages provide bundled pricing and structured training to ensure your workforce is
                aligned with industry standards and best practices.
              </p>

              <div className="bg-white p-6 rounded-lg border border-gray-100 mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">🎓 Team Certification Benefits</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-800">Bulk Pricing Discounts</strong> – Certify multiple employees at
                      reduced rates.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-800">Tailored Learning Tracks</strong> – Select programs based on job
                      roles and industry requirements.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-800">Performance Tracking</strong> – Monitor progress and completion
                      with a dedicated dashboard.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <Link
                  href="/learning/teamPackages"
                  className="inline-flex items-center px-6 py-3 bg-[#f0932a] text-white rounded-md hover:bg-[#e08620] transition-colors"
                >
                  <span>💡 Explore Team Packages</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Why Train with SnB Alliance Section */}
  <section className="py-16 bg-[#39a3b1] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Train with SnB Alliance?</h2>
            <div className="w-20 h-1 bg-[#f0932a] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Award className="h-10 w-10 text-[#f0932a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry-Leading Certifications</h3>
              <p className="text-white/80">Ensure your team meets global standards.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Clock className="h-10 w-10 text-[#f0932a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Training Options</h3>
              <p className="text-white/80">Virtual, in-person, and hybrid learning models available.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <LineChart className="h-10 w-10 text-[#f0932a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-white/80">Programs designed for both small teams and large enterprises.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <MessageSquare className="h-10 w-10 text-[#f0932a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-white/80">Access post-training resources and mentorship opportunities.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#f0932a] text-white rounded-md hover:bg-[#e08620] transition-colors text-lg font-medium"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              <span>💼 Partner with SnB Alliance</span>
            </Link>
          </div>
        </div>
      </section>
  

      {/* Custom Learning Solution Section */}
      <section id="custom-learning" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-[#39a3b1] mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Custom Learning Solution</h2>
              </div>
              <h3 className="text-xl font-semibold text-[#f0932a] mb-4">
                Tailored Training for Your Unique Business Needs
              </h3>
              <p className="text-gray-600 mb-6">
                Every organization has unique challenges. Our Custom Learning Solution allows businesses to design
                training programs that address specific skill gaps, compliance requirements, and operational goals.
              </p>

              <div className="bg-white p-6 rounded-lg border border-gray-100 mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">🛠 How Custom Training Works:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-800">Needs Assessment</strong> – Identify your team's skill gaps and
                      learning objectives.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-800">Tailored Course Development</strong> – Work with our experts to
                      create role-specific training.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <BarChart className="h-5 w-5 text-[#39a3b1] mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-800">Flexible Implementation</strong> – Choose on-site, virtual, or
                      blended learning models.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#39a3b1] text-white rounded-md hover:bg-[#2c8a96] transition-colors"
                >
                  <span>📞 Request a Consultation</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/CustomLearningSolution.jpg"
                alt="Custom Learning Solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
                  <p>Custom training programs designed for your specific business needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Comparison Section */}
      <section id="program-comparison" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <BarChart className="h-8 w-8 text-[#39a3b1] mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Program Comparison</h2>
            </div>
            <h3 className="text-xl font-semibold text-[#f0932a] mb-4">
              Find the Right Training Solution for Your Business
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Not sure which program fits your team's needs? Compare our training options and choose the best fit based
              on your business goals, budget, and workforce requirements.
            </p>
          </div>

          <div className="mb-10">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">📊 Quick Comparison Guide</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left text-gray-700">Program</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-gray-700">Best For</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-gray-700">Format</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-gray-700">Key Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium text-[#39a3b1]">Corporate Training</td>
                    <td className="border border-gray-200 px-4 py-3">
                      Large organizations needing structured learning
                    </td>
                    <td className="border border-gray-200 px-4 py-3">On-site, virtual, hybrid</td>
                    <td className="border border-gray-200 px-4 py-3">Custom curriculum, expert-led sessions</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-medium text-[#39a3b1]">Team Certification</td>
                    <td className="border border-gray-200 px-4 py-3">Businesses certifying multiple employees</td>
                    <td className="border border-gray-200 px-4 py-3">Online, self-paced</td>
                    <td className="border border-gray-200 px-4 py-3">Cost savings, compliance assurance</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-medium text-[#39a3b1]">Custom Learning</td>
                    <td className="border border-gray-200 px-4 py-3">Companies with specific skill gaps</td>
                    <td className="border border-gray-200 px-4 py-3">Fully customized</td>
                    <td className="border border-gray-200 px-4 py-3">Targeted training, flexible delivery</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
            >
              <span>🔍 Talk to Our Training Advisors</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

