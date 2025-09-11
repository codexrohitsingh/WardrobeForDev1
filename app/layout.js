'use client'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { AppContextProvider } from '@/context/AppContext'
import { Toaster } from 'react-hot-toast'
import Head from 'next/head'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Wardrobe 9to5 - Professional Clothing for Modern Careers</title>
        <meta
          name="description"
          content="Discover professional clothing for the modern workplace at Wardrobe 9to5. Shop our curated collection of business attire, workwear, and office essentials."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Wardrobe 9to5 - Professional Clothing for Modern Careers" />
        <meta
          property="og:description"
          content="Discover professional clothing for the modern workplace at Wardrobe 9to5. Shop our curated collection of business attire, workwear, and office essentials."
        />
        <meta property="og:url" content="https://wardrobe9to5.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://wardrobe9to5.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wardrobe 9to5 - Professional Clothing for Modern Careers" />
        <meta
          name="twitter:description"
          content="Discover professional clothing for the modern workplace at Wardrobe 9to5. Shop our curated collection of business attire, workwear, and office essentials."
        />
        <meta name="twitter:image" content="https://wardrobe9to5.com/twitter-image.jpg" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>
      <body className={`${outfit.className} antialiased text-gray-700`}>
        <SessionProvider>
          <AppContextProvider>
            <Toaster />
            {children}
          </AppContextProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
