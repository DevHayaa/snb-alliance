// import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins font
import "./globals.css";
import { AuthProvider } from "@/contexts/auth-context";
import { LanguageProvider } from "@/contexts/LanguageContext";

// Define Poppins font with subsets & weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Add desired font weights
  variable: "--font-poppins", // Store it in a CSS variable
});


export const metadata: Metadata = {
  title: "SnB Alliance - Empowering Professionals in Bidding & Recruitment",
  description: "Professional certifications and learning paths for bidding and recruitment specialists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html lang="en" className={poppins.variable}>
        <body>
          <AuthProvider>
            <main className="min-h-screen">{children}</main>
          </AuthProvider>
        </body>
      </html>
    </LanguageProvider>
  );
}
