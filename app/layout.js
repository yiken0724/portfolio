import './globals.css';
import { personalInfo } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: `${personalInfo.name} — ML Engineer & Developer`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.bio,
  keywords: ['ML Engineer', 'Machine Learning', 'Full-Stack Developer', 'Data Engineer', 'Portfolio'],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: `${personalInfo.name} — ML Engineer & Developer`,
    description: personalInfo.bio,
    siteName: personalInfo.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} — ML Engineer & Developer`,
    description: personalInfo.bio,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#050810] text-slate-200 antialiased">
        <div className="grid-bg fixed inset-0 pointer-events-none" />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
