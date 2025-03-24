// 'use client'
// import Image from "next/image"
// import Link from "next/link"
// import { Check, Users, FileText, Award } from "lucide-react"
// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import { useState, useEffect } from "react"
// import { getHomePageData } from "@/lib/wordpress"

// interface HomeData {
//   acf: {
//     hero_bg_image: string;
//     hero_title: string;
//     hero_subtitle: string;
//     button_text: string;
//     what_is_snb_alliance: string;
//     snb_alliance_paragraph: string;
//     why_us: string;
//     benifit_1: string;
//     benifit_2: string;
//     benifit_3: string;
//     benifit_4: string;
//     benifit_5: string;
//     certification_pathways_heading: string;
//     csba_heading: string;
//     csba_subheading: string;
//     csba_paragraph: string;
//     bmp_heading: string
//     bmp_subheading: string
//     bmp_paragraph: string
//     csmp_heading: string
//     csmp_subheading: string
//     csmp_paragraph: string
//     csbl_heading: string
//     csbl_subheading: string
//     csbl_paragraph: string
//     learning_and_training_heading: string
//     individual_title: string
//     individual_description: string
//     self_paced: string
//     self_paced_description: string
//     instructor_led_title: string
//     instructor_led_description: string
//     mock_exams_title: string
//     mock_exams_description: string
//     business_title: string
//     business_description: string
//     corporate_training_title: string
//     corporate_training_description: string
//     team_certification_title: string
//     team_certification_description: string
//     compliance_solutions_title: string
//     compliance_solutions_description: string
//     learning_guidelines_heading: string
//     prerequisite_1: string
//     certification_1: string
//     target_role_1: string
//     prerequisite_2: string
//     certification_2: string
//     target_role_2: string
//     prerequisite_3: string
//     certification_3: string
//     target_role_3: string
//     prerequisite_4: string
//     certification_4: string
//     target_role_4: string 
//     learning_guidelines_btn_1: string
//     learning_guidelines_btn_2: string
//   };
// }

// export default function HomePage() {
//   const [homeData, setHomeData] = useState<HomeData | null>(null);
//   const [language, setLanguage] = useState("en"); // Default to English

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getHomePageData(language);
//         console.log("Fetched Data:", data); // Check API response
//         setHomeData(data);
//       } catch (error) {
//         console.error("Error fetching home page data:", error);
//       }
//     }
//     fetchData();
//   }, [language]);
  

//   if (!homeData) {
//     return <p>Loading...</p>; // Show a loading state while data is being fetched
//   }

//   return (
//     <>
//     <Header setLanguage={setLanguage} />
//       <section className="relative w-full overflow-hidden py-20">
//       {homeData.acf.hero_bg_image && (
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${homeData.acf.hero_bg_image})` }}
//         ></div>
//       )}
//       <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
//       <h1
//       className="text-3xl md:text-5xl font-bold text-[#f8a02e] mb-4"
//       dangerouslySetInnerHTML={{ __html: homeData?.acf?.hero_title || "" }} 
//     ></h1>
//         <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-8">
//           {homeData.acf.hero_subtitle}
//         </p>
//         {homeData.acf.button_text && (
//           <a
//             href="/learning"
//             className="bg-[#f8a02e] hover:bg-yellow-600 text-black font-bold px-8 py-3 text-lg rounded"
//           >
//             {homeData.acf.button_text}
//           </a>
//         )}
//       </div>
//     </section>

//       {/* What is SNB ALLIANCE? Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6 relative">
//               <div className="rounded-[2rem] overflow-hidden transform rotate-[-2deg]">
//                 <Image
//                   src="/about.png"
//                   alt="Students collaborating"
//                   width={600}
//                   height={900}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//             <div className="space-y-6">
//               <h2 className="text-3xl font-bold text-teal-700"> {homeData.acf.what_is_snb_alliance}</h2>
//               <div className="space-y-4 text-gray-600">
//                 <p>
//                 {homeData.acf.snb_alliance_paragraph}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Us Section */}
//       <section className="bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//             <div className="space-y-8">
//               <h2 className="text-3xl font-bold text-teal-700">{homeData.acf.why_us}</h2>
//               <ul className="space-y-6">
//                 <li className="flex items-start gap-4">
//                   <div className="rounded-full bg-teal-100 p-1 mt-1">
//                     <Check className="h-5 w-5 text-teal-700" />
//                   </div>
//                   <p className="text-gray-700">
//                   {homeData.acf.benifit_1}
//                   </p>
//                 </li>
//                 <li className="flex items-start gap-4">
//                   <div className="rounded-full bg-teal-100 p-1 mt-1">
//                     <Check className="h-5 w-5 text-teal-700" />
//                   </div>
//                   <p className="text-gray-700">
//                   {homeData.acf.benifit_2}                  </p>
//                 </li>
//                 <li className="flex items-start gap-4">
//                   <div className="rounded-full bg-teal-100 p-1 mt-1">
//                     <Check className="h-5 w-5 text-teal-700" />
//                   </div>
//                   <p className="text-gray-700">
//                   {homeData.acf.benifit_3}                  </p>
//                 </li>
//                 <li className="flex items-start gap-4">
//                   <div className="rounded-full bg-teal-100 p-1 mt-1">
//                     <Check className="h-5 w-5 text-teal-700" />
//                   </div>
//                   <p className="text-gray-700">
//                   {homeData.acf.benifit_4}                  </p>
//                 </li>
//                 <li className="flex items-start gap-4">
//                   <div className="rounded-full bg-teal-100 p-1 mt-1">
//                     <Check className="h-5 w-5 text-teal-700" />
//                   </div>
//                   <p className="text-gray-700">
//                   {homeData.acf.benifit_5}
//                   </p>
//                 </li>
//               </ul>
//             </div>
//             <div className="relative">
//               <Image
//                 src="/whyus.png"
//                 alt="Student with notebook"
//                 width={800}
//                 height={400}
//                 className="rounded-[2rem]"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Certification Pathways */}
//       <section className="py-16 bg-[#0b8a9a]">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-white mb-12">{homeData.acf.certification_pathways_heading}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* CSBA Card */}
//             <div className="border-r border-gray-300 p-6 flex flex-col h-full">
//               <div className="flex-grow space-y-4">
//                 <h3 className="text-2xl font-bold text-white">{homeData.acf.csba_heading}</h3>
//                 <p className="text-sm text-white/80">{homeData.acf.csba_subheading}</p>
//                 <p className="text-white/90 text-sm">
//                 {homeData.acf.csba_paragraph}
//                 </p>
//               </div>
//               <Link
//                 href="/certifications/csba"
//                 className="mt-6 inline-block w-full text-center py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-400 transition-colors"
//               >
//                 Explore More
//               </Link>
//             </div>

//             {/* CBMP Card */}
//             <div className="border-r border-gray-300 p-6 flex flex-col h-full">
//               <div className="flex-grow space-y-4">
//                 <h3 className="text-2xl font-bold text-white">{homeData.acf.bmp_heading}</h3>
//                 <p className="text-sm text-white/80">{homeData.acf.bmp_subheading}</p>
//                 <p className="text-white/90 text-sm">
//                 {homeData.acf.bmp_paragraph}
//                 </p>
//               </div>
//               <Link
//                 href="/certifications/cbmp"
//                 className="mt-6 inline-block w-full text-center py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-400 transition-colors"
//               >
//                 Explore More
//               </Link>
//             </div>

//             {/* CSMP Card */}
//             <div className="border-r border-gray-300 p-6 flex flex-col h-full">
//               <div className="flex-grow space-y-4">
//                 <h3 className="text-2xl font-bold text-white">{homeData.acf.csmp_heading}</h3>
//                 <p className="text-sm text-white/80">{homeData.acf.csmp_subheading}</p>
//                 <p className="text-white/90 text-sm">
//                 {homeData.acf.csmp_paragraph}
//                 </p>
//               </div>
//               <Link
//                 href="/certifications/csmp"
//                 className="mt-6 inline-block w-full text-center py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-400 transition-colors"
//               >
//                 Explore More
//               </Link>
//             </div>

//             {/* CSBL Card */}
//             <div className=" rounded-lg p-6 flex flex-col h-full">
//               <div className="flex-grow space-y-4">
//                 <h3 className="text-2xl font-bold text-white">{homeData.acf.csbl_heading}</h3>
//                 <p className="text-sm text-white/80">{homeData.acf.csbl_subheading}</p>
//                 <p className="text-white/90 text-sm">
//                 {homeData.acf.csbl_paragraph}
//                 </p>
//               </div>
//               <Link
//                 href="/certifications/csbl"
//                 className="mt-6 inline-block w-full text-center py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-400 transition-colors"
//               >
//                 Explore More
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Learning & Training */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">{homeData.acf.learning_and_training_heading}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* For Individuals */}
//             <div
//               className="bg-yellow-500 p-8 text-white"
//               style={{ borderBottomRightRadius: "100px", borderTopLeftRadius: "100px" }}
//             >
//               <h3 className="text-2xl font-bold mb-6">{homeData.acf.individual_title}</h3>
//               <p className="mb-8">
//               {homeData.acf.individual_description}
//               </p>
//               <ul className="space-y-6">
//                 <li className="flex items-start gap-4">
//                   <div className="bg-white/10 p-2 rounded-lg">
//                     <FileText className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <p className="font-medium">{homeData.acf.self_paced}</p>
//                     <p className="text-sm text-white/80">{homeData.acf.self_paced_description}</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-4">
//                   <div className="bg-white/10 p-2 rounded-lg">
//                     <Users className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <p className="font-medium">{homeData.acf.instructor_led_title}</p>
//                     <p className="text-sm text-white/80">{homeData.acf.instructor_led_description}</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-4">
//                   <div className="bg-white/10 p-2 rounded-lg">
//                     <FileText className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <p className="font-medium">{homeData.acf.mock_exams_title}</p>
//                     <p className="text-sm text-white/80">{homeData.acf.mock_exams_description}</p>
//                   </div>
//                 </li>
//               </ul>
//             </div>

//             {/* For Businesses */}
//             <div
//               className="bg-[#0b8a9a] p-8 text-white"
//               style={{ borderBottomRightRadius: "100px", borderTopLeftRadius: "100px" }}
//             >
//               <h3 className="text-2xl font-bold mb-6">{homeData.acf.business_title}</h3>
//               <p className="mb-8">
//               {homeData.acf.business_description}
//               </p>
//               <ul className="space-y-6">
//                 <li className="flex items-start gap-4">
//                   <div className="bg-white/10 p-2 rounded-lg">
//                     <Users className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <p className="font-medium">{homeData.acf.corporate_training_title}</p>
//                     <p className="text-sm text-white/80">{homeData.acf.corporate_training_description}</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-4">
//                   <div className="bg-white/10 p-2 rounded-lg">
//                     <Award className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <p className="font-medium">{homeData.acf.team_certification_title}</p>
//                     <p className="text-sm text-white/80">{homeData.acf.team_certification_description}</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-4">
//                   <div className="bg-white/10 p-2 rounded-lg">
//                     <FileText className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <p className="font-medium">{homeData.acf.compliance_solutions_title}</p>
//                     <p className="text-sm text-white/80">{homeData.acf.compliance_solutions_description}</p>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Learning Guidelines */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">{homeData.acf.learning_guidelines_heading}</h2>
//           <div className="max-w-4xl mx-auto bg-gray-50 rounded-[2rem] p-8">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b border-gray-200">
//                     <th className="text-left py-4 px-4 font-medium text-gray-500">Prerequisite</th>
//                     <th className="text-left py-4 px-4 font-medium text-gray-500">Certification</th>
//                     <th className="text-left py-4 px-4 font-medium text-gray-500">Target Role</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border-b border-gray-200">
//                     <td className="py-4 px-4">{homeData.acf.prerequisite_1}</td>
//                     <td className="py-4 px-4 font-medium text-teal-700">{homeData.acf.certification_1}</td>
//                     <td className="py-4 px-4">{homeData.acf.target_role_1}</td>
//                   </tr>
//                   <tr className="border-b border-gray-200">
//                     <td className="py-4 px-4">{homeData.acf.prerequisite_2}</td>
//                     <td className="py-4 px-4 font-medium text-teal-700">{homeData.acf.certification_2}</td>
//                     <td className="py-4 px-4">{homeData.acf.target_role_2}</td>
//                   </tr>
//                   <tr className="border-b border-gray-200">
//                     <td className="py-4 px-4">{homeData.acf.prerequisite_3}</td>
//                     <td className="py-4 px-4 font-medium text-teal-700">{homeData.acf.certification_3}</td>
//                     <td className="py-4 px-4">{homeData.acf.target_role_3}</td>
//                   </tr>
//                   <tr>
//                     <td className="py-4 px-4">{homeData.acf.prerequisite_4}</td>
//                     <td className="py-4 px-4 font-medium text-teal-700">{homeData.acf.certification_4}</td>
//                     <td className="py-4 px-4">
//                       <ul className="space-y-1">
//                         <p>{homeData.acf.target_role_4}</p>
//                         {/* <li>Operational Manager (OM)</li>
//                         <li>General Manager (GM)</li>
//                         <li>Director Consulting (DC)</li>
//                         <li>Account Executive (AE)</li>
//                         <li>Business Development Manager (BD)</li>
//                         <li>Director (D)</li> */}
//                       </ul>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div className="flex justify-center gap-4 mt-8">
//             <Link
//               href="/learning/events&Calendar"
//               className="px-8 py-3 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-400 transition-colors"
//             >
//               {homeData.acf.learning_guidelines_btn_1}
//             </Link>
//             <Link
//               href="/learning"
//               className="px-8 py-3 bg-[#0b8a9a] text-white font-bold rounded-md hover:bg-[#0b8a9a]transition-colors"
//             >
//               {homeData.acf.learning_guidelines_btn_2}
//             </Link>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   )
// }

import HomePage from "./(main)/home/page";

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
