import { Outfit } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Wardrobe 9to5 - Professional Clothing for Modern Careers',
  description: 'Discover professional clothing for the modern workplace at Wardrobe 9to5. Shop our curated collection of business attire, workwear, and office essentials.',
  icons: {
    icon: '/favicon.jpg',
    shortcut: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
  openGraph: {
    title: 'Wardrobe 9to5 - Professional Clothing for Modern Careers',
    description: 'Discover professional clothing for the modern workplace at Wardrobe 9to5. Shop our curated collection of business attire, workwear, and office essentials.',
    url: 'https://wardrobe9to5.com',
    type: 'website',
    images: ['https://wardrobe9to5.com/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wardrobe 9to5 - Professional Clothing for Modern Careers',
    description: 'Discover professional clothing for the modern workplace at Wardrobe 9to5. Shop our curated collection of business attire, workwear, and office essentials.',
    images: ['https://wardrobe9to5.com/twitter-image.jpg'],
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
