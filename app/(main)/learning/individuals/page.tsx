'use client'


import Image from "next/image"
import { useState } from "react";
import Link from "next/link"
import {
  Award,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Clock,
  FileText,
  Globe,
  GraduationCap,
  Lightbulb,
  LineChart,
  MessageSquare,
  Star,
  Target,
  Users,
  Briefcase,
} from "lucide-react"

  

export default function IndividualsPage() {
    const [name, setName] = useState("");
  const [story, setStory] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Story Submitted:", { name, story });
    alert("Your story has been submitted successfully!");
    setName("");
    setStory("");
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#f8a02e]">Individuals</h1>
            <p className="text-2xl md:text-3xl font-semibold text-white/90 mb-6">
              Develop Your Expertise in Bidding & Recruitment
            </p>
            <p className="text-xl text-white/90 mb-10">
              Whether you're exploring career opportunities in bidding and recruitment or looking to refine your skills,
              SnB Alliance provides structured learning paths, industry-recognized programs, and career support to help
              you succeed.
            </p>
            <Link
              href="#learning-path"
              className="inline-block px-8 py-4 bg-[#f0932a] text-white font-bold rounded-md hover:bg-[#f0932a]/90 transition-colors text-lg"
            >
              Explore Your Path
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section id="learning-path" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  <Link href="#learning-path" className="hover:text-[#39a3b1] transition-colors">
                    Learning Path
                  </Link>
                </h2>
                <div className="w-20 h-1 bg-[#39a3b1] mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Roadmap to Success Starts Here</h3>
                <p className="text-gray-600 mb-6">
                  Navigate through a well-structured learning path designed to take you from foundational knowledge to
                  advanced expertise in the bidding and recruitment industries.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Step-by-Step Curriculum</span>
                      <p className="text-gray-600">
                        Progress from beginner to advanced levels with structured courses.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Hands-On Learning</span>
                      <p className="text-gray-600">
                        Work on case studies, real-world projects, and interactive exercises.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Guided Career Development</span>
                      <p className="text-gray-600">Receive mentorship and industry insights from professionals.</p>
                    </div>
                  </li>
                </ul>
                <div className="flex items-center">
                  <Target className="h-6 w-6 text-[#39a3b1] mr-2" />
                  <span className="font-semibold text-gray-900">Not sure where to start?</span>
                </div>
                <Link
                  href="/assessment-quiz"
                  className="mt-4 inline-flex items-center px-6 py-3 bg-[#39a3b1] text-white font-medium rounded-md hover:bg-[#39a3b1]/90 transition-colors"
                >
                  Take our Skill Assessment Quiz <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="md:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/learningPathBg.jpg"
                    alt="Learning path illustration"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="text-xl font-bold mb-2">Structured Learning Paths</h4>
                      <p className="text-white/90">Tailored for every career stage and goal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Program Section */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <Link href="#our-program" className="hover:text-[#39a3b1] transition-colors">
                  Our Program
                </Link>
              </h2>
              <div className="w-20 h-1 bg-[#39a3b1] mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">A Comprehensive Training Experience</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                SnB Alliance offers flexible learning solutions tailored to your career stage and learning preferences.
                Our expert-designed courses ensure that you gain practical, job-ready skills that can be applied
                immediately.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-7 w-7 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Comprehensive Course Library</h4>
                <p className="text-gray-600">Learn everything from recruitment best practices to proposal writing.</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7 text-purple-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Flexible Learning Options</h4>
                <p className="text-gray-600">
                  Choose between self-paced modules, instructor-led training, or live workshops.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 text-teal-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Industry-Recognized Certifications</h4>
                <p className="text-gray-600">Earn credentials that enhance your professional credibility.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-[#f0932a] mr-2" />
                <span className="font-semibold text-gray-900">Ready to build your expertise?</span>
              </div>
              <Link
                href="/certifications"
                className="inline-flex items-center px-6 py-3 bg-[#f0932a] text-white font-medium rounded-md hover:bg-[#f0932a]/90 transition-colors"
              >
                Explore Our Programs <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section id="learning-journey" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-[#39a3b1]/10 rounded-xl p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-5 shadow-sm">
                      <LineChart className="h-8 w-8 text-[#39a3b1] mb-3" />
                      <h5 className="font-bold text-gray-900 mb-2">Progress Tracking</h5>
                      <p className="text-gray-600 text-sm">Visualize your journey through interactive dashboards.</p>
                    </div>
                    <div className="bg-white rounded-lg p-5 shadow-sm">
                      <FileText className="h-8 w-8 text-[#39a3b1] mb-3" />
                      <h5 className="font-bold text-gray-900 mb-2">Hands-On Assignments</h5>
                      <p className="text-gray-600 text-sm">Apply your knowledge in real-world simulations.</p>
                    </div>
                    <div className="bg-white rounded-lg p-5 shadow-sm">
                      <Users className="h-8 w-8 text-[#39a3b1] mb-3" />
                      <h5 className="font-bold text-gray-900 mb-2">Mentor Support</h5>
                      <p className="text-gray-600 text-sm">Get career advice from seasoned professionals.</p>
                    </div>
                    <div className="bg-white rounded-lg p-5 shadow-sm">
                      <Globe className="h-8 w-8 text-[#39a3b1] mb-3" />
                      <h5 className="font-bold text-gray-900 mb-2">Global Community</h5>
                      <p className="text-gray-600 text-sm">Connect with learners and professionals worldwide.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  <Link href="#learning-journey" className="hover:text-[#39a3b1] transition-colors">
                    Learning Journey
                  </Link>
                </h2>
                <div className="w-20 h-1 bg-[#39a3b1] mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Stay on Track & Achieve Your Goals</h3>
                <p className="text-gray-600 mb-6">
                  Your progress matters. Our personalized dashboard helps you monitor your learning, complete
                  assignments, and connect with industry mentors for guidance.
                </p>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#39a3b1]/10 rounded-full flex items-center justify-center mr-4">
                    <GraduationCap className="h-6 w-6 text-[#39a3b1]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Personalized Learning Experience</h4>
                    <p className="text-gray-600">Tailored to your pace, preferences, and career goals.</p>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="flex items-center">
                    <Star className="h-6 w-6 text-[#f0932a] mr-2" />
                    <span className="font-semibold text-gray-900">Start your learning journey today!</span>
                  </div>
                  <Link
                    href="/certifications"
                    className="mt-4 inline-flex items-center px-6 py-3 bg-[#f0932a] text-white font-medium rounded-md hover:bg-[#f0932a]/90 transition-colors"
                  >
                    Enroll Now <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <Link href="#success-stories" className="hover:text-[#39a3b1] transition-colors">
                  Success Stories
                </Link>
              </h2>
              <div className="w-20 h-1 bg-[#39a3b1] mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Learn from Those Who've Walked the Path</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Hear from professionals who transformed their careers with SnB Alliance. Whether it's breaking into the
                industry, landing top roles, or improving business performance, our learners have seen real impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative w-40 mx-auto h-48">
                  <Image
                    src="/careerTranistion.png"
                    alt="Career transition success story"
                    fill
                    className="h-48 w-40"
                  />
                  {/* <div className="absolute top-4 left-4 bg-[#39a3b1] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Career Transition
                  </div> */}
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">From Marketing to Bid Management</h4>
                  <p className="text-gray-600 mb-4">
                    "The structured learning path and mentorship helped me successfully transition into a bid management
                    role within 6 months."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-bold text-gray-900">Sarah Johnson</p>
                      <p className="text-sm text-gray-600">Senior Bid Manager</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative w-40 mx-auto h-48">
                  <Image
                    src="/freelancerSuccess.png"
                    alt="Freelancer success story"
                    fill
                    className=""
                  />
                  {/* <div className="absolute top-4 left-4 bg-[#f0932a] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Freelancer Success
                  </div> */}
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Doubled My Consulting Rates</h4>
                  <p className="text-gray-600 mb-4">
                    "The certification and specialized skills I gained allowed me to secure higher-value contracts and
                    double my rates."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-bold text-gray-900">Michael Chen</p>
                      <p className="text-sm text-gray-600">Independent Consultant</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48 w-40 mx-auto">
                  <Image
                    src="/leadershipGrowth.png"
                    alt="Leadership growth success story"
                    fill
                    className=""
                  />
                  {/* <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Leadership Growth
                  </div> */}
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Improved Team Performance</h4>
                  <p className="text-gray-600 mb-4">
                    "The leadership program gave me the tools to improve our recruitment efficiency by 35% and reduce
                    turnover."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-bold text-gray-900">Jessica Martinez</p>
                      <p className="text-sm text-gray-600">HR Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


    <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-lg mx-auto">
      <div className="flex items-center justify-center mb-4">
        <MessageSquare className="h-6 w-6 text-[#39a3b1] mr-2" />
        <span className="font-semibold text-gray-900">Want to share your journey?</span>
      </div>
      <p className="text-gray-600 mb-6">
        Submit your story and inspire others on their professional journey.
      </p>

      {/* Story Submission Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#39a3b1]"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          rows={4}
          placeholder="Write your story here..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#39a3b1]"
          value={story}
          onChange={(e) => setStory(e.target.value)}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-[#39a3b1] text-white font-medium rounded-md hover:bg-[#39a3b1]/90 transition-colors"
        >
          Share Your Success <ChevronRight className="ml-2 h-4 w-4 inline-block" />
        </button>
      </form>
    </div>
          </div>
        </div>
      </section>

      {/* Find Your Path Section */}
      <section id="find-your-path" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  <Link href="#find-your-path" className="hover:text-[#39a3b1] transition-colors">
                    Find Your Path
                  </Link>
                </h2>
                <div className="w-20 h-1 bg-[#39a3b1] mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Choose the Right Track for Your Future</h3>
                <p className="text-gray-600 mb-6">
                  Not sure where to begin? We offer customized learning tracks based on your experience level, career
                  aspirations, and industry needs.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-[#39a3b1] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Personalized Assessment</span>
                      <p className="text-gray-600">Identify the best starting point based on your skills.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-[#39a3b1] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Flexible Tracks</span>
                      <p className="text-gray-600">Select from beginner, advanced, or leadership programs.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-[#39a3b1] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Guided Enrollment</span>
                      <p className="text-gray-600">Our advisors help you choose the right courses.</p>
                    </div>
                  </li>
                </ul>
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-[#f0932a] mr-2" />
                  <span className="font-semibold text-gray-900">Find the right path for you!</span>
                </div>
                <Link
                  href="/certifications"
                  className="inline-flex items-center px-6 py-3 bg-[#f0932a] text-white font-medium rounded-md hover:bg-[#f0932a]/90 transition-colors"
                >
                  Start Here <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Learning Paths</h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500 shadow-sm">
                      <h5 className="font-bold text-gray-900 mb-1">Beginner Track</h5>
                      <p className="text-gray-600 text-sm">For those new to bidding and recruitment</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-500 shadow-sm">
                      <h5 className="font-bold text-gray-900 mb-1">Intermediate Track</h5>
                      <p className="text-gray-600 text-sm">For professionals with 1-3 years of experience</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500 shadow-sm">
                      <h5 className="font-bold text-gray-900 mb-1">Advanced Track</h5>
                      <p className="text-gray-600 text-sm">For seasoned professionals looking to specialize</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-amber-500 shadow-sm">
                      <h5 className="font-bold text-gray-900 mb-1">Leadership Track</h5>
                      <p className="text-gray-600 text-sm">For those aiming for management and leadership roles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SnB Alliance Section */}
      <section id="why-choose" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <Link href="#why-choose" className="hover:text-[#f0932a] transition-colors">
                  Why Choose SnB Alliance?
                </Link>
              </h2>
              <div className="w-20 h-1 bg-white mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-gray/10 backdrop-blur-sm rounded-lg p-6">
                <Award className="h-10 w-10 text-[#f0932a] mb-4" />
                <h4 className="text-xl font-bold mb-3">Globally Recognized Certifications</h4>
                <p className="">Boost your credibility and career prospects.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Users className="h-10 w-10 text-[#f0932a] mb-4" />
                <h4 className="text-xl font-bold mb-3">Expert-Led Training</h4>
                <p className="">Learn from professionals with years of industry experience.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Clock className="h-10 w-10 text-[#f0932a] mb-4" />
                <h4 className="text-xl font-bold mb-3">Flexible & Affordable</h4>
                <p className="">Study at your own pace with options that fit any schedule.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Globe className="h-10 w-10 text-[#f0932a] mb-4" />
                <h4 className="text-xl font-bold mb-3">Exclusive Community Access</h4>
                <p className="">Connect with a network of professionals and mentors.</p>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-[#f0932a] mr-2" />
                <span className="font-semibold">Take the next step in your career.</span>
              </div>
              <Link
                href="/membership"
                className="inline-flex items-center px-8 py-4 bg-[#f0932a] text-white font-bold rounded-md hover:bg-[#f0932a]/90 transition-colors"
              >
                Join SnB Alliance Today! <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

