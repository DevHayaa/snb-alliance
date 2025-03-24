"use client"
import Link from "next/link"
import { Download, Award, BookOpen, CheckCircle, ArrowRight, Calendar, Users, BarChart } from "lucide-react"
import LearningPathTabs from "@/components/learning-path-tabs"
import ProgramShowcase from "@/components/program-showcase"
import WorkshopCalendar from "@/components/workshop-calendar"
import TestimonialCarousel from "@/components/testimonial-carousel"
import SmartEnrollment from "@/components/smart-enrollment"
import Image from "next/image"
import { getLearningPageData } from "@/lib/wordpress"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import { useLanguage } from "@/contexts/LanguageContext"


interface LearningData {
  acf: {
    workshops_webinars_heading: string
    workshops_webinars_subheading: string
    webinar_date_time: any
    webinar_title: string
    webinar_description: string
    webinar_btn_1: string
    webinar_btn_2: string
    learning_journey_heading: string
    enrollment_title: string
    enrollment_description: string
    flexible_learning_title: string
    flexible_learning_description:string
    practical_skills_title: string
    practical_skills_description:string
    certification_title: string
    certification_description: string
    hero_banner: string;
    hero_title: string;
    hero_description: string;
  };
}

  export default function LearningPage() {
    const [homeData, setHomeData] = useState<LearningData | null>(null);
  const { language } = useLanguage(); // Get the selected language
  
    useEffect(() => {
      async function fetchData() {
        try {
          const data = await getLearningPageData(language);
          console.log("Fetched Data:", data); // Check API response
          setHomeData(data);
        } catch (error) {
          console.error("Error fetching home page data:", error);
        }
      }
      fetchData();
    }, [language]);
    
  
    if (!homeData) {
      return <p>Loading...</p>; // Show a loading state while data is being fetched
    }
  return (
    <div className="min-h-screen"> 
      {/* Hero Section */}
      <section className="relative py-20 min-h-[60vh] flex items-center bg-[#0c6a77]">
        {/* Background Image - Visible Only on Large Screens */}
        <div className="inset-0 overflow-hidden hidden lg:block">
          <div className="absolute inset-0" /> {/* Dark overlay for contrast */}
          {homeData.acf.hero_banner && (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${homeData.acf.hero_banner})` }}
            ></div>
          )}
        </div>

        {/* Content Wrapper */}
        <div className="relative px-6 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {homeData.acf.hero_title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {homeData.acf.hero_description}
            </p>
          </div>
        </div>
      </section>


      {/* <section className="container py-16">
        <LearningPathTabs />
        </section> */}
      {/* Benefits Visualization */}
      <section className="py-16 bg-white" id="learning-journey">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{homeData.acf.learning_journey_heading}</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-[#d7faff] rounded-lg p-6 h-full">
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/enrollmentIcon.png"
                      alt="Enrollment process"
                      width={100}
                      height={70}
                      className=""
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{homeData.acf.enrollment_title}</h3>
                  <p className="text-gray-600">
                  {homeData.acf.enrollment_description}
                  </p>
                <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-0 z-10">
                  <ArrowRight className="h-8 w-8 text-blue-300" />
                </div>
              </div>
             </div>
              {/* Step 2 */}
              <div className="relative">
                <div className="bg-[#d7faff] rounded-lg p-6 h-full">
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/flexibalIcon.png"
                      alt="Flexible learning options"
                      width={100}
                      height={70}
                      className=""
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{homeData.acf.flexible_learning_title}</h3>
                  <p className="text-gray-600">
                  {homeData.acf.flexible_learning_description}
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-0 z-10">
                  <ArrowRight className="h-8 w-8 text-blue-300" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-[#d7faff] rounded-lg p-6 h-full">
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/practicalIcon.png"
                      alt="Practical skills training"
                      width={100}
                      height={70}
                      className=""
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{homeData.acf.practical_skills_title}</h3>
                  <p className="text-gray-600">
                  {homeData.acf.practical_skills_description}
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-0 z-10">
                  <ArrowRight className="h-8 w-8 text-blue-300" />
                </div>
              </div>

              {/* Step 4 */}
              <div>
                <div className="bg-[#d7faff] rounded-lg p-6 h-full">
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/certificationIcon.png"
                      alt="Certification achievement"
                      width={100}
                      height={70}
                      className=""
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{homeData.acf.certification_title}</h3>
                  <p className="text-gray-600">
                  {homeData.acf.certification_description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>

      {/* Workshop Calendar */}
      <section className="py-16 bg-gray-50" id="workshops">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">{homeData.acf.workshops_webinars_heading}</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          {homeData.acf.workshops_webinars_subheading}
          </p>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src="/webinar.png"
                    alt="Featured workshop on advanced bidding strategies"
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-blue-600 font-medium">{homeData.acf.webinar_date_time}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{homeData.acf.webinar_title}</h3>
                  <p className="text-gray-600 mb-6">
                  {homeData.acf.webinar_description}
                  </p>
                  <div className="flex items-center mb-6">
                   
                    {/* <div>
                      <p className="font-medium text-gray-900">Sarah Johnson</p>
                      <p className="text-sm text-gray-600">Senior Bid Manager, Global Procurement Inc.</p>
                    </div> */}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 bg-[#39a3b1] text-white font-medium rounded-md hover:bg-[#39a3b1] transition-colors"
                  >
                    {homeData.acf.webinar_btn_1} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
             <div className="mt-8 mx-auto text-center">
                <Link
                  href="/learning/events&Calendar#upcoming-events"
                  className="inline-flex items-center px-5 py-2.5 bg-[#39a3b1] text-white rounded-md hover:bg-teal-600 transition-colors"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  {homeData.acf.webinar_btn_2}
                </Link>
              </div>
          </div>

          {/* <WorkshopCalendar /> */}
        </div>
      </section>


      {/* Testimonial Carousel */}
      {/* <section className="py-16 bg-gray-50 relative" id="testimonials">
        <div className="absolute inset-0 opacity-10">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Background pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Hear from professionals who have transformed their careers with our learning programs.
          </p>
          <TestimonialCarousel />
        </div>
      </section> */}

    </div>
  )
}