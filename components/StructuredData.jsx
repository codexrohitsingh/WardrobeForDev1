export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wardrobe 9 to 5",
    "alternateName": "Wardrobe9to5",
    "url": "https://wardrobe9to5.com",
    "logo": "https://wardrobe9to5.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/wardrobe9to5",
      "https://www.instagram.com/wardrobe9to5",
      "https://www.twitter.com/wardrobe9to5",
      "https://www.linkedin.com/company/wardrobe9to5"
    ],
    "description": "Wardrobe 9 to 5 is your premier destination for elegant office wear and professional business attire for modern women."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Wardrobe 9 to 5",
    "alternateName": ["Wardrobe9to5", "Wardrobe 9-5"],
    "url": "https://wardrobe9to5.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wardrobe9to5.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const clothingStoreSchema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "name": "Wardrobe 9 to 5",
    "image": "https://wardrobe9to5.com/store-image.jpg",
    "@id": "https://wardrobe9to5.com",
    "url": "https://wardrobe9to5.com",
    "priceRange": "$$",
    "servesCuisine": "Professional Office Wear",
    "acceptsReservations": false,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "250"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://wardrobe9to5.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Collections",
        "item": "https://wardrobe9to5.com/collections"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Wardrobe 9 to 5",
        "item": "https://wardrobe9to5.com/collections/wardrobe-9-5"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clothingStoreSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}