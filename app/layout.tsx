import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ChevronRight } from "lucide-react";
import Footer from "./components/Footer"
const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// then apply to <body> or <html> className:
// className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Portofolio website of James, a software engineer and web developer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className=" fixed z-100 left-5 top-100 rounded-full shadow-md h-[2rem] w-[2rem] flex 
        items-center justify-center hover:bg-primary hover:text-white transition-all 
        transition">
          <ChevronRight/>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
