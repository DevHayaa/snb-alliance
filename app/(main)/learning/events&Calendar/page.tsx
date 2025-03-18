import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin, Users, CheckCircle, FileText, HelpCircle, Mail, CalendarDays } from "lucide-react"

// Sample upcoming events data
const upcomingEvents = [
  {
    id: 1,
    title: "Advanced Bidding Strategies Workshop",
    date: "April 15, 2025",
    time: "10:00 AM - 2:00 PM EST",
    location: "Virtual",
    type: "Workshop",
    description: "Learn advanced techniques for creating winning bids in competitive markets.",
  },
  {
    id: 2,
    title: "Recruitment Compliance Update 2025",
    date: "April 22, 2025",
    time: "1:00 PM - 3:00 PM EST",
    location: "Virtual",
    type: "Webinar",
    description: "Stay updated on the latest compliance requirements affecting recruitment processes.",
  },
  {
    id: 3,
    title: "CSBA Certification Preparation",
    date: "May 5-7, 2025",
    time: "9:00 AM - 4:00 PM EST",
    location: "Chicago, IL",
    type: "Workshop",
    description: "Three-day intensive preparation for the Certificate in Staffing & Bidding Associates exam.",
  },
  {
    id: 4,
    title: "AI in Workforce Management",
    date: "May 18, 2025",
    time: "11:00 AM - 12:30 PM EST",
    location: "Virtual",
    type: "Webinar",
    description: "Explore how AI is transforming workforce management and staffing solutions.",
  },
]

export default function EventsCalendarPage() {
  return (
    <main className="min-h-screen">
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
            <h1 className="text-4xl md:text-5xl font-bold text-[#f8a02e] mb-6">Events & Calendar</h1>
            <p className="text-xl opacity-90 mb-6 text-white">Stay Ahead with Expert-Led Learning Opportunities</p>
                    <p className="text-lg opacity-80 text-white">
                    SnB Alliance offers interactive workshops, live webinars, and structured learning schedules to help
              professionals stay updated on the latest trends in bidding, recruitment, and workforce management. Explore
              upcoming sessions, plan your learning, and get answers to your questions.
                    </p>
          </div>
        </div>
      </section>
      {/* Upcoming Events Calendar Section */}
      <section className="py-16 bg-gray-50" id="upcoming-events">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
              <p className="text-lg text-gray-600">
                Browse our calendar of upcoming workshops, webinars, and training sessions
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    <div
                      className={`w-full md:w-1/4 p-6 flex flex-col justify-center items-center text-white ${
                        event.type === "Workshop" ? "bg-[#39a3b1]" : "bg-[#f0932a]"
                      }`}
                    >
                      <span className="text-sm font-semibold uppercase tracking-wider mb-2">{event.type}</span>
                      <Calendar className="h-10 w-10 mb-2" />
                      <div className="text-center">
                        <div className="font-bold">{event.date}</div>
                        <div className="text-sm">{event.time}</div>
                      </div>
                    </div>
                    <div className="w-full md:w-3/4 p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center mr-4 mb-2">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <Link
                        href={`/contact`}
                        className="inline-flex items-center px-4 py-2 bg-[#39a3b1] text-white rounded-md hover:bg-teal-600 transition-colors"
                      >
                        Register Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshops & Webinars Section */}
      <section className="py-16 bg-white" id="workshops-webinars">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Workshops & Webinars</h2>
                <h3 className="text-xl font-semibold mb-6 text-[#39a3b1]">Learn from Industry Experts in Real Time</h3>
                <p className="text-gray-600 mb-6">
                  Join live training sessions, expert-led discussions, and interactive Q&A events designed to enhance
                  your skills and keep you informed about industry trends.
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="text-[#f0932a] mr-2">🎓</span> What You Can Expect:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#39a3b1] mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Workshops:</strong> Hands-on, practical learning experiences with real-world scenarios.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#39a3b1] mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Webinars:</strong> Expert-led discussions on best practices, compliance updates, and
                        innovative strategies.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#39a3b1] mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Live Q&A:</strong> Ask industry professionals your most pressing questions in real time.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                <Image
                  src="/webinar.png"
                  alt="Workshop session with industry professionals"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Schedule Section */}
      <section className="py-16 bg-gray-50" id="learning-schedule">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="order-2 md:order-1 relative h-64 md:h-auto rounded-lg overflow-hidden">
                <Image
                  src="/sheduleCalendar.png"
                  alt="Learning schedule and calendar"
                  fill
                  className="object-cover "
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Learning Schedule</h2>
                <h3 className="text-xl font-semibold mb-6 text-[#39a3b1]">
                  Plan Your Training & Certification Timeline
                </h3>
                <p className="text-gray-600 mb-6">
                  Stay organized with our structured learning schedule, designed to help you keep track of upcoming
                  courses, exams, and certification deadlines.
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="text-[#f0932a] mr-2">📆</span> How the Learning Schedule Helps You:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#39a3b1] mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Track Key Dates</strong> – Know when courses start, when exams are scheduled, and when
                        new modules launch.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#39a3b1] mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Plan Ahead</strong> – Align your training with your career goals and availability.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#39a3b1] mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Stay Updated</strong> – Receive reminders and notifications about enrollment deadlines.
                      </span>
                    </li>
                  </ul>
                </div>
                {/* <div className="mt-8">
                  <Link
                    href="/events-calendar/schedule"
                    className="inline-flex items-center px-5 py-2.5 bg-[#39a3b1] text-white rounded-md hover:bg-teal-600 transition-colors"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Download Training Schedule
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning FAQs Section */}
      <section className="py-16 bg-white" id="learning-faqs">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Learning FAQs</h2>
              <h3 className="text-xl font-semibold mb-6 text-[#39a3b1]">Find Quick Answers to Common Questions</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Have questions about our courses, certifications, or event logistics? Check out our Learning FAQs to get
                instant answers.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <HelpCircle className="h-5 w-5 text-[#f0932a] mr-2" />
                Frequently Asked Questions:
              </h4>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h5 className="font-semibold text-gray-800 mb-2">How do I register for a webinar or workshop?</h5>
                  <p className="text-gray-600">
                    Simply visit the event page and click "Register Now." You'll receive an email confirmation with
                    details.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h5 className="font-semibold text-gray-800 mb-2">Are workshops recorded?</h5>
                  <p className="text-gray-600">
                    Yes! If you miss a session, recordings are available for registered participants.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Can I get a certificate for attending webinars?</h5>
                  <p className="text-gray-600">
                    Some webinars offer certificates of completion. Check event details for eligibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/resources#faqs"
                className="inline-flex items-center px-5 py-2.5 bg-[#39a3b1] text-white rounded-md hover:bg-teal-600 transition-colors"
              >
                <HelpCircle className="mr-2 h-5 w-5" />
                Visit our FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Request Information Section */}
      <section className="py-16 bg-gray-50" id="request-information">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Request Information</h2>
                <h3 className="text-xl font-semibold mb-6 text-[#39a3b1]">
                  Get Personalized Assistance on Your Learning Needs
                </h3>
                <p className="text-gray-600 mb-6">
                  Not sure which training is right for you? Have specific questions about an upcoming event? Our team is
                  here to help!
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="text-[#f0932a] mr-2">📞</span> How We Can Assist You:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#39a3b1] mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Customized Guidance</strong> – Get recommendations on workshops, certifications, and
                        corporate training.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#39a3b1] mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Corporate Training Inquiries</strong> – Learn how to set up team-based learning
                        solutions.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#39a3b1] mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Event-Specific Details</strong> – Request more info about schedules, speakers, or
                        prerequisites.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-5 py-2.5 bg-[#39a3b1] text-white rounded-md hover:bg-teal-600 transition-colors"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Request Information
                  </Link>
                </div>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                <Image
                  src="/trainingAdvisor.png"
                  alt="Training advisor helping a client"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Why Attend SnB Alliance Events?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#39a3b1] bg-opacity-10 p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-[#f0932a]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Industry-Recognized Training</h3>
                <p className="text-center">Learn directly from experts in bidding and recruitment.</p>
              </div>
              <div className="bg-[#39a3b1] bg-opacity-10 p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  <Calendar className="h-12 w-12 text-[#f0932a]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Flexible Learning Formats</h3>
                <p className="text-center">Attend in-person, live online, or watch on-demand sessions.</p>
              </div>
              <div className="bg-[#39a3b1] bg-opacity-10 p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-[#f0932a]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Networking Opportunities</h3>
                <p className="text-center">Connect with professionals, mentors, and like-minded learners.</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/learning/events&Calendar#upcoming-events"
                className="inline-flex items-center px-6 py-3 border border-black text-[#39a3b1] rounded-md hover:bg-gray-100 transition-colors font-medium"
              >
                Explore Upcoming Events
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

