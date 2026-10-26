// app/layout.tsx
import type { Metadata } from 'next';
import { Syne, Geist_Mono } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BI-TECH Digital Solutions | Lead Systems Engineer: Binale Rodney Khabanje',
  description: 'Enterprise IT Infrastructure, Network & Systems Administration, Software Development, and ERP Support by Binale Rodney Khabanje (B.Sc. Information Systems).',
  keywords: ['BI-TECH Digital Solutions', 'Binale Rodney Khabanje', 'Network Administrator Kenya', 'Systems Administrator Kisumu', 'Maseno University', 'ABNO Unisol ERP', 'CyberSentinel'],
  openGraph: {
    title: 'BI-TECH Digital Solutions — Where Tech Meets Innovation',
    description: 'Network & Systems Administration, Custom Web Applications, IT Support, and Security Auditing.',
    url: 'https://my-portfolio-beta-woad-18.vercel.app',
    siteName: 'BI-TECH Digital Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BI-TECH Digital Solutions',
    description: 'Network & Systems Administration, Systems Development, and ERP Operations.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}