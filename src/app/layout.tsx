import './globals.css'
import { PT_Mono } from 'next/font/google'

const ptMono = PT_Mono({ 
  subsets: ['latin'],
  weight: ['400']
})

export const metadata = {
  title: 'Senior Software Engineer | Portfolio',
  description: '7+ years experience in PHP, Laravel, Vue.js, React.js, Next.js, TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ptMono.className}>{children}</body>
    </html>
  )
}