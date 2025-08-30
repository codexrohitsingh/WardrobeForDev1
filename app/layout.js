import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import Head from "next/head"; // Importing the Head component

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] });

export const metadata = {
  title: "Wardrobe9to5",
  description: "Fashion E-Commerce with Next.js",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow", // Standard robots directive
  author: "Your Company Name", // Replace with your company's name or author name
  keywords: "fashion, e-commerce, clothing, online store, next.js, wardrobe", // Relevant keywords
  og: {
    title: "Wardrobe9to5",
    description: "Fashion E-Commerce with Next.js",
    url: "https://www.wardrobe9to5.com", // Replace with your website URL
    type: "website",
    image: "/images/og-image.jpg", // Optional: Replace with your website’s image for social sharing
  },
  twitter: {
    card: "summary_large_image",
    title: "Wardrobe9to5",
    description: "Fashion E-Commerce with Next.js",
    image: "/images/twitter-image.jpg", // Optional: Replace with Twitter-specific image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="robots" content={metadata.robots} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        
        {/* Open Graph */}
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:image" content={metadata.og.image} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </Head>
      <body className={`${outfit.className} antialiased text-gray-700`}>
        <Toaster />
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
