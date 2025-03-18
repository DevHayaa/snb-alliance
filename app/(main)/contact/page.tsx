import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Facebook, Twitter, Linkedin, Send, Clock, HelpCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <Image
            src="/homeBanner.png"
            alt="Abstract geometric background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-teal-900/30 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl text-[#f8a02e] md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
             Contact Us
            </h1>
            <p className="text-xl text-white mb-10">
            We're here to help. Reach out to us with any questions or inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our certifications, membership, or anything else? We'd love to hear from you. Use
                the form or contact us directly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#39a3b1] bg-opacity-10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#39a3b1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Mailing Address</h3>
                    <p className="text-gray-600">
                      PO Box 40033 Derry Heights
                      <br />
                      Milton, ON L9T 7W4
                      <br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#39a3b1] bg-opacity-10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#39a3b1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a href="mailto:info@snballiance.org" className="text-[#39a3b1] hover:underline">
                      info@snballiance.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#39a3b1] bg-opacity-10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-[#39a3b1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM EST
                      <br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              {/* <div className="mt-10">
                <h3 className="font-semibold text-gray-800 mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-[#39a3b1] hover:text-white p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-[#39a3b1] hover:text-white p-3 rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-[#39a3b1] hover:text-white p-3 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div> */}

              {/* Map */}
              <div className="mt-10">
                <h3 className="font-semibold text-gray-800 mb-3">Our Location</h3>
                <div className="rounded-lg overflow-hidden border border-gray-200 h-64">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d23151.16285843305!2d-79.88490964894423!3d43.504518478689086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPO%20Box%2040033%20Derry%20Heights%20Milton%2C%20ON%20L9T%207W4%20Canada!5e0!3m2!1sen!2s!4v1742231911546!5m2!1sen!2s"  loading="lazy"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SnB Alliance Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#39a3b1] focus:border-[#39a3b1] transition"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#39a3b1] focus:border-[#39a3b1] transition"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#39a3b1] focus:border-[#39a3b1] transition"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#39a3b1] focus:border-[#39a3b1] transition"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="organizationType" className="block text-sm font-medium text-gray-700 mb-1">
                        Organization Type*
                      </label>
                      <select
                        id="organizationType"
                        name="organizationType"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#39a3b1] focus:border-[#39a3b1] transition"
                        required
                      >
                        <option value="" disabled selected>Organization Type</option>
                        <option value="corporation">Corporation</option>
                        <option value="government">Government</option>
                        <option value="nonprofit">Non-Profit</option>
                        <option value="educational">Educational Institution</option>
                        <option value="smallBusiness">Small Business</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-1">
                        Request Type*
                      </label>
                      <select
                        id="requestType"
                        name="requestType"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#39a3b1] focus:border-[#39a3b1] transition"
                        required
                      >
                        <option value="" disabled selected>Select request type</option>
                        <option value="generalInquiry">General Inquiry</option>
                        <option value="membershipInfo">Membership Information</option>
                        <option value="certificationInfo">Certification Information</option>
                        <option value="teamTraining">Team Training</option>
                        <option value="technicalSupport">Technical Support</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country*
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#39a3b1] focus:border-[#39a3b1] transition"
                      required
                    >
                      <option value="" disabled selected>Select your country</option>
                      <option value="CA">Canada</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#39a3b1] focus:border-[#39a3b1] transition"
                      placeholder="Describe your request"
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        className="h-4 w-4 text-[#39a3b1] border-gray-300 rounded focus:ring-[#39a3b1]"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacy" className="text-gray-600">
                        I agree to the{" "}
                        <a href="#" className="text-[#39a3b1] hover:underline">
                          privacy policy
                        </a>{" "}
                        and consent to being contacted regarding my inquiry.
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#39a3b1] hover:bg-[#2c8a96] text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Take the Next Step?</h2>
            <p className="text-xl mb-8 opacity-90">
              Explore our membership options or certification programs to advance your career in staffing and bidding.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/membership"
                className="bg-white text-[#39a3b1] border border-teal-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Explore Membership
              </Link>
              <Link
                href="/certifications"
                className="bg-[#f0932a] hover:bg-[#e08620] text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                View Certifications
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
