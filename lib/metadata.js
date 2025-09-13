export const pageMetadata = {
  collections: {
    title: 'Collections | Wardrobe 9 to 5 - Office Wear & Business Attire',
    description: 'Browse our curated collections of professional office wear, business attire, and workwear for women. Find elegant power-dressing staples at Wardrobe 9 to 5.',
    keywords: 'office wear collections, business attire women, professional clothing collections, workwear collections, corporate fashion',
  },
  products: {
    title: 'Shop Professional Clothing | Wardrobe 9 to 5',
    description: 'Shop professional office wear, business suits, work dresses, blazers & more. Quality workwear for the modern professional woman at Wardrobe 9 to 5.',
    keywords: 'professional clothing shop, office wear online, business suits women, work dresses, professional blazers',
  },
  about: {
    title: 'About Wardrobe 9 to 5 | Professional Office Wear Brand',
    description: 'Learn about Wardrobe 9 to 5 - your trusted source for elegant office wear and professional business attire. Empowering modern women through fashion.',
    keywords: 'about wardrobe 9 to 5, professional clothing brand, office wear company, business attire brand',
  },
  contact: {
    title: 'Contact Us | Wardrobe 9 to 5 Customer Service',
    description: 'Get in touch with Wardrobe 9 to 5 for questions about our professional office wear collection, orders, or customer service.',
    keywords: 'contact wardrobe 9 to 5, customer service, office wear support, business attire help',
  },
};

export function generateProductMetadata(product) {
  return {
    title: `${product.name} | Wardrobe 9 to 5 Professional Wear`,
    description: `Shop ${product.name} - ${product.description}. Professional office wear and business attire at Wardrobe 9 to 5.`,
    keywords: `${product.name}, ${product.category}, professional clothing, office wear, business attire, wardrobe 9 to 5`,
    openGraph: {
      title: `${product.name} | Wardrobe 9 to 5`,
      description: product.description,
      images: [product.image],
      type: 'product',
    },
  };
}

export function generateCategoryMetadata(category) {
  return {
    title: `${category} | Wardrobe 9 to 5 Office Wear Collection`,
    description: `Discover our ${category} collection. Professional office wear and business attire for modern women at Wardrobe 9 to 5.`,
    keywords: `${category}, office wear ${category}, professional ${category}, business attire, wardrobe 9 to 5`,
  };
}