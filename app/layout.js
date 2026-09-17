import { Inter, Caveat } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata = {
  title: 'RYPP — Ride Your Way | India’s Next Gen Vehicle Rental Platform',
  description: 'Bikes, Scooters and Cars for every journey. Affordable. Flexible. Reliable.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body className="antialiased text-gray-900 bg-white min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
