import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import ParticleBackground from '@/components/ParticleBackground';
import CursorGlow from '@/components/CursorGlow';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nikhil-reddy-portfolio.vercel.app'),
  title: 'I. Nikhil Reddy | AI & Machine Learning Engineer Portfolio',
  description:
    'Personal portfolio of Idamakanti Nikhil Reddy, Final-year B.Tech CSE (AI & ML) student at Vel Tech University. Skilled in Artificial Intelligence, Python, TensorFlow, SQL, and Web Development.',
  keywords: [
    'I Nikhil Reddy',
    'Idamakanti Nikhil Reddy',
    'AI Engineer Portfolio',
    'Machine Learning Developer',
    'Python Developer',
    'Vel Tech University',
    'Computer Science Engineering',
    'TensorFlow',
    'Next.js Portfolio',
    'Full Stack Web Developer',
  ],
  authors: [{ name: 'Idamakanti Nikhil Reddy' }],
  creator: 'Idamakanti Nikhil Reddy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nikhil-reddy-portfolio.vercel.app',
    title: 'I. Nikhil Reddy | AI & Machine Learning Engineer',
    description:
      'Portfolio website of I. Nikhil Reddy. Final-year CSE (AI & ML) student specializing in Artificial Intelligence, Machine Learning models, and Web Engineering.',
    siteName: 'I. Nikhil Reddy Portfolio',
    images: [
      {
        url: '/favicon.svg',
        width: 800,
        height: 800,
        alt: 'I. Nikhil Reddy Portfolio Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'I. Nikhil Reddy | AI & Machine Learning Engineer',
    description:
      'Final-year CSE (AI & ML) student passionate about AI, Machine Learning, Python, and Full Stack Web Development.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-dark-950 text-slate-100 antialiased selection:bg-purple-500/30 selection:text-white">
        <CursorGlow />
        <ParticleBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
