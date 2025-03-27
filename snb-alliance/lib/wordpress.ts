// const BASE_URL = "https://wordpress/wp-json/wp/v2";

const pageIds: Record<string, { home: number; learning: number; resource: number; about: number }> = {
  en: { home: 78, learning: 200, resource: 250, about: 278 }, // English page IDs
  fr: { home: 82, learning: 211, resource: 252, about: 280  }, // French page IDs
  ar: { home: 85, learning: 206, resource: 254, about: 284  } // Arabic page IDs
};

export async function getHomePageData(language: string) {
  const pageId = pageIds[language]?.home || 78; // Default English ID agar language match na ho
  const res = await fetch(`https://wp.snballiance.org/wp-json/wp/v2/pages/${pageId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch home page data");
  }
  return res.json();
}

export async function getLearningPageData(language: string) {
  const pageId = pageIds[language]?.learning || 164; // Default English Learning ID agar language match na ho
  const res = await fetch(` https://wp.snballiance.org/wp-json/wp/v2/pages/${pageId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch learning page data");
  }
  return res.json();
}

export async function getResourcePageData(language: string) {
  const pageId = pageIds[language]?.resource || 250; // Default English Learning ID agar language match na ho
  const res = await fetch(` https://wp.snballiance.org/wp-json/wp/v2/pages/${pageId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch Resource page data");
  }
  return res.json();
}

export async function getAboutPageData(language: string) {
  const pageId = pageIds[language]?.about || 278; // Default English Learning ID agar language match na ho
  const res = await fetch(` https://wp.snballiance.org/wp-json/wp/v2/pages/${pageId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch About page data");
  }
  return res.json();
}




