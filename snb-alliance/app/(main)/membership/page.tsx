import Image from "next/image"
import Link from "next/link"
import {
  Check,
  Globe,
  TrendingUp,
  FileText,
  Users,
  Trophy,
  ArrowRight,
  Calendar,
  Building,
  GraduationCap,
  Briefcase,
  CheckCircle,
  HelpCircle,
} from "lucide-react"

export default function MembershipPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className=" inset-0">
          <Image
            src="/membershipBanner.png"
            alt="Abstract geometric background"
            fill
            className=""
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Want to be a boss; Think like One</h1>
            <p className="text-xl text-white/90 mb-10">
              Be a member of a community of like-minded people who are extremely professional and are highly supportive
              to you in attaining your career goals.
            </p>
            <Link
              href="#join"
              className="inline-block px-8 py-4 bg-[#f0932a] text-white font-bold rounded-md hover:bg-[#f0932a]/90 transition-colors text-lg"
            >
              Be A Member
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 bg-white" id="benefits">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Should I Join?</h2>
            <div className="w-24 h-1 bg-[#39a3b1] mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto" id="network">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">MEMBERSHIP BENEFITS</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Network Benefit */}
              <div
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                id="network"
              >
                <div className="flex items-center mb-6" >
                  <div className="w-16 h-16 bg-[#39a3b1]/10 rounded-full flex items-center justify-center mr-4">
                    <Globe className="h-8 w-8 text-[#39a3b1]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Create your web</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  In the modern world it is extremely important to have connections & contacts, so develop your network
                  by joining as a member to collaborate with people who are practising strategies day in & day out.
                </p>
                <Link href="#join" className="text-[#39a3b1] font-medium hover:text-[#2d8a96] inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Career Growth Benefit */}
              <div
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                id="career"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#39a3b1]/10 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="h-8 w-8 text-[#39a3b1]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Professional surge</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Grow in your profession and get immense ideas to explore new opportunities. It's high time to take
                  charge of your career.
                </p>
                <Link href="#join" className="text-[#39a3b1] font-medium hover:text-[#2d8a96] inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Resources Benefit */}
              <div
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                id="resources"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#39a3b1]/10 rounded-full flex items-center justify-center mr-4">
                    <FileText className="h-8 w-8 text-[#39a3b1]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Resources</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Scroll freely through the resources provided to our members. Easily stay up to date with the
                  industrial trends and shift by our provided material.
                </p>
                <Link href="#join" className="text-[#39a3b1] font-medium hover:text-[#2d8a96] inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Leadership Benefit */}
              <div
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                id="leadership"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#39a3b1]/10 rounded-full flex items-center justify-center mr-4">
                    <Trophy className="h-8 w-8 text-[#39a3b1]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Leadership</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Evolve as a leader and pioneer by the guidance of SNB Alliance and by participating in various
                  activities that our membership club offers.
                </p>
                <Link href="#join" className="text-[#39a3b1] font-medium hover:text-[#2d8a96] inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Membership Plans */}
      <section className="py-16 bg-gray-50" id="plans">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Membership Plans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the membership plan that best fits your professional needs and career goals.
            </p>
            <div className="w-24 h-1 bg-[#39a3b1] mx-auto mt-6"></div>
          </div>

          {/* Individual Membership */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="p-6 bg-[#39a3b1] text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Basic/Individual Membership</h3>
                      <p className="text-white/80">Perfect for newcomers and solo professionals</p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <Link
                      href="/register?plan=basic"
                      className="inline-block px-6 py-3 bg-[#f0932a] text-white font-bold rounded-md hover:bg-[#f0932a]/90 transition-colors"
                    >
                      Join Basic Membership
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h4>
                  <ul className="space-y-4">
                    <li className="flex">
                      <Check className="h-6 w-6 text-[#39a3b1] mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Exclusive Resources:</span>
                        <p className="text-gray-600">
                          Access essential tools, templates, and articles in our Resources Library.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <Check className="h-6 w-6 text-[#39a3b1] mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Discounted Training:</span>
                        <p className="text-gray-600">Enjoy a reduced rate on select courses and certification exams.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <Check className="h-6 w-6 text-[#39a3b1] mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Community Forums:</span>
                        <p className="text-gray-600">Connect with peers and get advice from industry veterans.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <Check className="h-6 w-6 text-[#39a3b1] mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Membership Dashboard:</span>
                        <p className="text-gray-600">
                          Track your progress, view upcoming courses, and manage your profile in one place.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Ideal For</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <GraduationCap className="h-6 w-6 text-[#39a3b1] mr-3 flex-shrink-0" />
                      <p className="text-gray-600">Students or recent graduates exploring career opportunities.</p>
                    </li>
                    <li className="flex items-start">
                      <Briefcase className="h-6 w-6 text-[#39a3b1] mr-3 flex-shrink-0" />
                      <p className="text-gray-600">
                        Freelancers or independent consultants building a foundational knowledge base.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="md:hidden">
                  <Link
                    href="/register?plan=basic"
                    className="block w-full py-3 px-4 bg-[#39a3b1] hover:bg-[#2d8a96] text-center text-white font-medium rounded-md transition-colors"
                  >
                    Join Basic Membership
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate/Team Membership */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="p-6 bg-[#f0932a] text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Corporate/Team Membership</h3>
                      <p className="text-white/80">Tailored for organizations seeking to train multiple team members</p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <Link
                      href="/register?plan=corporate"
                      className="inline-block px-6 py-3 bg-[#39a3b1] text-white font-bold rounded-md hover:bg-[#39a3b1]/90 transition-colors"
                    >
                      Enroll Your Team
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h4>
                  <ul className="space-y-4">
                    <li className="flex">
                      <Check className="h-6 w-6 text-[#f0932a] mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Team Certification Packages:</span>
                        <p className="text-gray-600">
                          Certify multiple employees simultaneously with bundled pricing and flexible scheduling.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <Check className="h-6 w-6 text-[#f0932a] mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Customizable Corporate Training:</span>
                        <p className="text-gray-600">
                          Work with our experts to design training programs and workshops that address your company's
                          specific needs.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <Check className="h-6 w-6 text-[#f0932a] mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Dedicated Account Manager:</span>
                        <p className="text-gray-600">
                          Receive personalized support for onboarding, progress tracking, and renewal coordination.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <Check className="h-6 w-6 text-[#f0932a] mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Bulk Discounts & Priority Booking:</span>
                        <p className="text-gray-600">
                          Get the best value when enrolling multiple team members and secure priority spots for any
                          limited-seat webinars or live sessions.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Ideal For</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Building className="h-6 w-6 text-[#f0932a] mr-3 flex-shrink-0" />
                      <p className="text-gray-600">
                        Small to large businesses looking to standardize and elevate their bidding and recruitment
                        capabilities.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-6 w-6 text-[#f0932a] mr-3 flex-shrink-0" />
                      <p className="text-gray-600">
                        HR departments seeking a streamlined approach to onboarding and certifying new talent.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="md:hidden">
                  <Link
                    href="/register?plan=corporate"
                    className="block w-full py-3 px-4 bg-[#f0932a] hover:bg-[#e08a28] text-center text-white font-medium rounded-md transition-colors"
                  >
                    Enroll Your Team
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* All Plans Include */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="p-6 bg-gray-800 text-white">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">All Plans Include</h3>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex">
                    <Check className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Full Access to SnB Alliance Community:</span>
                      <p className="text-gray-600">
                        Participate in discussion boards, share insights, and collaborate with peers across the globe.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <Check className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Continual Learning Opportunities:</span>
                      <p className="text-gray-600">
                        Explore live webinars, expert-led workshops, and a growing library of self-paced materials.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <Check className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Ongoing Industry Updates:</span>
                      <p className="text-gray-600">
                        Stay informed with newsletters and reports covering the latest trends and best practices in
                        bidding and recruitment.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <Check className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Membership Dashboard:</span>
                      <p className="text-gray-600">
                        Manage your account, track certification progress, and view resources all in one place.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Choose the Right Plan */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="p-6 bg-[#39a3b1] text-white">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <HelpCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">How to Choose the Right Plan</h3>
                </div>
              </div>

              <div className="p-8">
                <ol className="space-y-6">
                  <li className="flex">
                    <div className="w-8 h-8 bg-[#39a3b1] rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold">
                      1
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Assess Your Goals:</span>
                      <p className="text-gray-600">
                        Are you an individual focusing on personal skill development, or do you lead a team aiming to
                        standardize processes across your organization?
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="w-8 h-8 bg-[#39a3b1] rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold">
                      2
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Review the Benefits:</span>
                      <p className="text-gray-600">
                        Compare the resources, discounts, and support options offered by each plan to see which aligns
                        best with your aspirations.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="w-8 h-8 bg-[#39a3b1] rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold">
                      3
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Join or Upgrade Anytime:</span>
                      <p className="text-gray-600">
                        Start with the tier that suits your needs now; you can always upgrade your membership as your
                        career or company grows.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
            <div className="w-24 h-1 bg-[#39a3b1] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#39a3b1]/10 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-6 w-6 text-[#39a3b1]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Bid Manager</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Joining the SnB Alliance membership has been transformative for my career. The networking opportunities
                and resources have helped me secure multiple high-value contracts."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#39a3b1]/10 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-6 w-6 text-[#39a3b1]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Recruitment Specialist</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The professional development resources and leadership training have accelerated my growth. I've been
                promoted twice since becoming a member!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#39a3b1]/10 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-6 w-6 text-[#39a3b1]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">David Rodriguez</h4>
                  <p className="text-sm text-gray-600">Operations Director</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The executive membership has connected me with industry leaders and mentors who have helped shape my
                leadership style and strategic thinking."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="py-16 bg-[#39a3b1] text-white" id="join">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Career or Business?</h2>
            <p className="text-xl mb-8">
              Select a membership plan and become part of SnB Alliance's mission to shape the future of bidding and
              recruitment. Let's grow together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="px-8 py-4 bg-[#f0932a] text-white font-bold rounded-md hover:bg-[#f0932a]/90 transition-colors text-lg"
              >
                Explore Membership Options
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold rounded-md hover:bg-white/20 transition-colors text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Add an "events" section with the correct ID */}
      {/* Add this after the FAQ section */}
      <section className="py-16 bg-gray-50" id="events">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Member Events</h2>
            <div className="w-24 h-1 bg-[#39a3b1] mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Event 1 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-[#39a3b1] font-bold mb-2">June 15, 2025</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Networking Mixer</h3>
                <p className="text-gray-600 mb-4">
                  Connect with fellow members and industry professionals in a relaxed setting.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>7:00 PM - 9:00 PM EST</span>
                </div>
              </div>

              {/* Event 2 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-[#39a3b1] font-bold mb-2">July 10, 2025</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership Workshop</h3>
                <p className="text-gray-600 mb-4">
                  Develop essential leadership skills with our expert-led interactive workshop.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>1:00 PM - 4:00 PM EST</span>
                </div>
              </div>

              {/* Event 3 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-[#39a3b1] font-bold mb-2">August 5, 2025</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Panel Discussion</h3>
                <p className="text-gray-600 mb-4">
                  Hear insights from industry leaders on the future of bidding and recruitment.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>11:00 AM - 12:30 PM EST</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/membership/events"
                className="inline-flex items-center px-6 py-3 bg-[#39a3b1] text-white font-medium rounded-md hover:bg-[#39a3b1]/90 transition-colors"
              >
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  )
}

