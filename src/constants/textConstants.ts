export const TEXT_CONSTANTS = {
  // Brand Header Elements
  BRAND_NAME: "INAM MENS",
  BRAND_SUBTITLE: "FQ. STITCHED",
  COLLECTION_YEAR: "COLLECTION - 2026",
  TAGLINE: "An exclusive collection of Latest Kameez Shalwar & Waistcoats by Faisal Quraishi. Shop Now to feel luxury & comfort with style.",
  WHATSAPP_SUPPORT: "Whatsapp 03306275467",
  SUPPORT_LABEL: "Need product video? Whatsapp 03306275467",

  // Top Nav Category Links
  NAV_LINKS: [
    { 
      label: "SALE", 
      href: "#sale",
      submenu: [
        { label: "Flat 30% Off", href: "#sale", sortBy: "discount_desc" },
        { label: "Flat 40% Off", href: "#sale", sortBy: "discount_desc" },
        { label: "Best Deals", href: "#sale", sortBy: "discount_desc" }
      ]
    },
    { 
      label: "Summer Unstitched '26'", 
      href: "#summer",
      submenu: [
        { label: "Premium Cotton", href: "#summer", searchQuery: "Gold" },
        { label: "Wash & Wear", href: "#summer", searchQuery: "Grey" },
        { label: "Linen Fabrics", href: "#summer", searchQuery: "Pistachio" }
      ]
    },
    { 
      label: "FQ Stitched Collection", 
      href: "#fq",
      submenu: [
        { label: "Kameez Shalwar", href: "#fq", filterType: "kameez_shalwar" },
        { label: "Waistcoats", href: "#fq", filterType: "waistcoat" },
        { label: "Safari Suits", href: "#fq", filterType: "safari_suit" },
        { label: "Trouser Kameez", href: "#fq", filterType: "trouser_kameez" }
      ]
    },
    { 
      label: "Luxe Series", 
      href: "#luxe",
      submenu: [
        { label: "Giza Cotton", href: "#luxe", searchQuery: "Gold" },
        { label: "Italian Linen", href: "#luxe", searchQuery: "White" },
        { label: "Luxury Silk Blends", href: "#luxe", searchQuery: "Wine" }
      ]
    },
    { 
      label: "Bosky Collection", 
      href: "#bosky",
      submenu: [
        { label: "Chinese Bosky (6 Lbs)", href: "#bosky", searchQuery: "Off White" },
        { label: "Chinese Bosky (8 Lbs)", href: "#bosky", searchQuery: "Cream" }
      ]
    },
    { 
      label: "Koofi Caps", 
      href: "#koofi",
      submenu: [
        { label: "Stitched Caps", href: "#koofi", searchQuery: "Cap" },
        { label: "Handcrafted Caps", href: "#koofi", searchQuery: "Hand" }
      ]
    },
    { 
      label: "Sandals", 
      href: "#sandals",
      submenu: [
        { label: "Peshawari Chappal", href: "#sandals", searchQuery: "Sandal" },
        { label: "Balochi Chappal", href: "#sandals", searchQuery: "Balochi" }
      ]
    },
    { 
      label: "Fragrances", 
      href: "#fragrances",
      submenu: [
        { label: "Royal Oud", href: "#fragrances", searchQuery: "Oud" },
        { label: "Imperial Musk", href: "#fragrances", searchQuery: "Musk" }
      ]
    },
    { 
      label: "Winter Collection", 
      href: "#winter",
      submenu: [
        { label: "Woolen Shalwar Kameez", href: "#winter", searchQuery: "Maroon" },
        { label: "Premium Blazers", href: "#winter", searchQuery: "Navy Blue" }
      ]
    },
    { 
      label: "Narmin (For Women)", 
      href: "#narmin",
      submenu: [
        { label: "Luxury Pret", href: "#narmin", searchQuery: "Cream" },
        { label: "Unstitched Collection", href: "#narmin", searchQuery: "Off White" }
      ]
    }
  ],

  // Filter Buttons & Interface
  SHOW_FILTERS_BTN: "Show filters",
  HIDE_FILTERS_BTN: "Hide filters",
  SORT_BY_LABEL: "Sort by:",
  FILTER_DRAWER_TITLE: "Filters",
  FILTER_CATEGORY_LABEL: "Product Type",
  FILTER_COLOR_LABEL: "Color Selection",
  FILTER_PRICE_LABEL: "Price Range",
  CLEAR_ALL: "Clear All",
  APPLY_FILTERS: "Apply Filters",

  // Sorting Options
  SORT_OPTIONS: [
    { value: "featured", label: "Featured" },
    { value: "price_asc", label: "Price: Low to High" },
    { value: "price_desc", label: "Price: High to Low" },
    { value: "discount_desc", label: "Best Deals" },
    { value: "name_asc", label: "Alphabetical: A-Z" }
  ],

  // Product cards
  SAVE_LABEL: "Save",
  INSTALLMENT_PREFIX: "Pay only",
  INSTALLMENT_SUFFIX: "now",
  CURRENCY_PREFIX: "Rs.",
  ADD_TO_CART_BTN: "Add to Bag",

  // Cart Drawer
  CART_TITLE: "Shopping Bag",
  CART_EMPTY: "Your shopping bag is currently empty.",
  SUBTOTAL: "Subtotal",
  CHECKOUT: "Proceed to Checkout",
  CONTINUE_SHOPPING: "Continue Shopping",

  // FAQs Title & Items
  FAQ_SECTION_TITLE: "FAQs",
  FAQ_ITEMS: [
    {
      id: "f1",
      question: "Do you have 'Allow to Open' policy?",
      answer: "Yes, we offer an 'Allow to Open' policy for specific domestic deliveries so that you can inspect the high-grade fabric and tailoring before accepting the package. Feel free to contact our customer support line on WhatsApp for special delivery arrangements."
    },
    {
      id: "f2",
      question: "Do you return / exchange products?",
      answer: "Certainly. We support returns and size/color exchanges within 7 days of delivery, provided the item has not been worn, washed, or altered, and retains all original branding labels and packaging tags intact."
    },
    {
      id: "f3",
      question: "How much time will it take to deliver?",
      answer: "Standard domestic deliveries across Pakistan take 3 to 5 business days. Remote regions may take up to 7 business days. International shipping timeframes vary based on coordinates and destination."
    },
    {
      id: "f4",
      question: "Do you have stores?",
      answer: "Yes, Inam Mens owns multiple physical outlets across major cities in Pakistan (including Karachi, Lahore, and Faisalabad). You can explore our full stitched and unstitched premium range in person at these flagship stores."
    },
    {
      id: "f5",
      question: "Do you have women wear?",
      answer: "Yes, our dedicated female collection, 'Narmin (For Women)', presents a luxury range of premium fabrics, printed lawn designs, and stitched traditional pret ensembles tailored with impeccable precision."
    },
    {
      id: "f6",
      question: "Didn't find your answer?",
      answer: "If you have unaddressed questions or require custom measurements, please click our WhatsApp chat bubble to speak directly with a dedicated client services representative available 24/7."
    }
  ],

  // Footer Constants
  FOOTER_COPYRIGHT: "© 2026 Inam Mens Premium Menswear. All rights reserved.",
  FOOTER_SECURE_PAYMENTS: "Secure payments powered by Alfa Pay installment networks.",
  FOOTER_NEWSLETTER_HEADING: "We don't spam! We only send product updates.",
  FOOTER_NEWSLETTER_PLACEHOLDER: "Enter your email",
  FOOTER_REFUND_POLICY: "Refund policy",
  FOOTER_PRIVACY_POLICY: "Privacy policy",
  FOOTER_TERMS: "Terms of service",
  FOOTER_SHOP_LINKS: [
    { label: "FQ Stitched Collection", href: "#fq" },
    { label: "Summer Unstitched '26", href: "#summer" },
    { label: "Luxe Series", href: "#luxe" },
    { label: "Bosky Collection", href: "#bosky" },
    { label: "Sandals & Chappal", href: "#sandals" },
    { label: "Fragrances", href: "#fragrances" }
  ],
  FOOTER_HELP_LINKS: [
    { label: "FAQs", href: "#faqs" },
    { label: "Refund Policy", href: "#refund" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Contact Us", href: "https://wa.me/03306275467" }
  ]
};
