import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] });

export const metadata = {
  title: "Wardrobe9to5",
  description: "Fashion E-Commerce with Next.js",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  author: "Your Company Name", 
  keywords: "fashion, e-commerce, clothing, online store, next.js, wardrobe",
  og: {
    title: "Wardrobe9to5",
    description: "Discover stylish fashion and top clothing picks at Wardrobe9to5, powered by Next.js.",
    url: "https://www.wardrobe9to5.com", 
    type: "website",
    image: "/images/og-image.jpg", 
    site_name: "Wardrobe9to5",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wardrobe9to5",
    description: "Shop the latest trends at Wardrobe9to5, an e-commerce platform built with rs21rohit@gmail.com ",
    image: "/images/twitter-image.jpg",
    creator: "@YourTwitterHandle",
  },
  favicon: "/favicon.ico",
  themeColor: "#ffffff", 
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
        <meta property="og:site_name" content={metadata.og.site_name} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        
        {/* Favicon and Theme Color */}
        <link rel="icon" href={metadata.favicon} />
        <meta name="theme-color" content={metadata.themeColor} />

        {/* Google Analytics (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=YOUR_MEASUREMENT_ID`}></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'YOUR_MEASUREMENT_ID');
          `}
        </script>

        {/* Structured Data (Schema Markup) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Wardrobe9to5",
              "url": "https://www.wardrobe9to5.com",
              "description": "Fashion E-Commerce with Next.js",
              "publisher": {
                "@type": "Organization",
                "name": "Wardrobe9to5"
              },
              "sameAs": [
                "https://www.facebook.com/YourCompany",
                "https://twitter.com/YourTwitterHandle",
                "https://www.instagram.com/YourInstagramHandle"
              ]
            }
          `}
        </script>

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
