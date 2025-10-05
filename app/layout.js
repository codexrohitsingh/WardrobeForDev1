import { Outfit } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Wardrobe 9 to 5 | Formal wear and smart casuals for Women',
  description: 'Wardrobe 9 to 5 offers elegant office wear, professional workwear, business attire & Smart casuals for modern women, that goes 9-5 and beyond. Shop power-dressing staples, formal office clothing ...',
  keywords: 'wardrobe 9 to 5, wardrobe9to5, office wear, professional clothing, business attire women, workwear, corporate fashion, office outfits, professional dress, work clothes women, business casual, formal office wear, power dressing, executive clothing, career wardrobe',
  icons: {
      icon: [
    { url: '/favicon.ico' }, // default favicon
    { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
  ],
    shortcut: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
  alternates: {
    canonical: 'https://wardrobe9to5.com',
  },
  authors: [{ name: 'Wardrobe 9 to 5' }],
  creator: 'Wardrobe 9 to 5',
  publisher: 'Wardrobe 9 to 5',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Wardrobe 9 to 5 | Professional Office Wear & Business Attire',
    description: 'Elegant office wear & professional workwear for modern women. Shop power-dressing staples, business attire & corporate fashion at Wardrobe 9 to 5.',
    url: 'https://wardrobe9to5.com',
    siteName: 'Wardrobe 9 to 5',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://wardrobe9to5.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wardrobe 9 to 5 - Professional Office Wear Collection',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@wardrobe9to5',
    creator: '@wardrobe9to5',
    title: 'Wardrobe 9 to 5 | Professional Office Wear & Business Attire',
    description: 'Elegant office wear & professional workwear for modern women. Shop business attire & corporate fashion.',
    images: ['https://wardrobe9to5.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased text-gray-700`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
