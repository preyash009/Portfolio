import "./globals.css";
import { PT_Mono } from "next/font/google";

const ptMono = PT_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Preyash Parikh | Senior Software Engineer",
  description: "Senior Software Engineer with 7+ years experience in PHP, Laravel, Vue.js, React.js, Next.js, TypeScript",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Preyash Parikh",
    description: "Senior Software Engineer",
    images: ["/favicon.svg"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Preyash Parikh",
    description: "Senior Software Engineer",
    images: ["/favicon.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={ptMono.className}>{children}</body>
    </html>
  );
}
