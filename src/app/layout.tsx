import "./globals.css";
import { PT_Mono } from "next/font/google";

const ptMono = PT_Mono({
  subsets: ["latin"],
  weight: ["400"],
});
 
export const metadata = {
  title: "Preyash Parikh | Senior Software Engineer",
  description: "Senior Software Engineer with 8+ years experience in PHP, Laravel, Vue.js, React.js, Next.js, TypeScript. Building scalable web applications and innovative solutions.",
  keywords: "Preyash Parikh, Senior Software Engineer, PHP, Laravel, Vue.js, React.js, Next.js, TypeScript, Full Stack Developer, Web Development",
  authors: [{ name: "Preyash Parikh" }],
  creator: "Preyash Parikh",
  publisher: "Preyash Parikh",
  robots: "index, follow",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Preyash Parikh | Senior Software Engineer",
    description: "Senior Software Engineer with 8+ years experience in PHP, Laravel, Vue.js, React.js, Next.js, TypeScript. Building scalable web applications and innovative solutions.",
    url: "https://preyash-parikh.vercel.app/",
    siteName: "Preyash Parikh",
    images: ["/favicon.svg"],
    locale: "en_US",
    type: "website",
  },
  linkedin: {
    title: "Preyash Parikh | Senior Software Engineer",
    description: "Senior Software Engineer with 8+ years experience in PHP, Laravel, Vue.js, React.js, Next.js, TypeScript. Building scalable web applications and innovative solutions.",
    image: "/favicon.svg",
  },
  alternates: {
    canonical: "https://preyash-parikh.vercel.app/",
  },
};

import Cursor from "@/components/Cursor";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={ptMono.className}>
        <Cursor />
        {children}</body>
    </html>
  );
}
