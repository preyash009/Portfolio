import "./globals.css";
import { PT_Mono } from "next/font/google";

const ptMono = PT_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Senior Software Engineer | Portfolio",
  description: "7+ years experience in PHP, Laravel, Vue.js, React.js, Next.js, TypeScript",
  icons: {
    icon: "/favicon.svg",
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
