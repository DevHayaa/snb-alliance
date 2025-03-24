const BASE_URL = "https://wordpress/wp-json/wp/v2";

// /**
//  * Home Page Data Fetch Karne Ka Function (ACF Fields)
//  */
// export const getHomePageData = async (language: string) => {
//   try {
//     const res = await fetch(`${BASE_URL}/pages?slug=home`, {
//       next: { revalidate: 10 }, // ISR (Incremental Static Regeneration)
//     });
//     if (!res.ok) throw new Error("Failed to fetch home page data");
//     const data = await res.json();
//     return data[0]?.acf || null; // ACF fields ko extract karenge
//   } catch (error) {
//     console.error("WordPress API Error:", error);
//     return null;
//   }
// };

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
//   };
// }

const pageIds: Record<string, { home: number; learning: number }> = {
  en: { home: 78, learning: 200 }, // English page IDs
  fr: { home: 82, learning: 211 }, // French page IDs
  ar: { home: 85, learning: 206 } // Arabic page IDs
};

export async function getHomePageData(language: string) {
  const pageId = pageIds[language]?.home || 78; // Default English ID agar language match na ho
  const res = await fetch(`http://localhost/wordpress/wp-json/wp/v2/pages/${pageId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch home page data");
  }
  return res.json();
}

export async function getLearningPageData(language: string) {
  const pageId = pageIds[language]?.learning || 164; // Default English Learning ID agar language match na ho
  const res = await fetch(`http://localhost/wordpress/wp-json/wp/v2/pages/${pageId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch learning page data");
  }
  return res.json();
}




