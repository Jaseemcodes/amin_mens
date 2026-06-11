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
      label: "New Arrivals",
      href: "#new-arrivals",
      submenu: [
        { label: "Latest Kameez Shalwar", href: "#new-arrivals", filterType: "kameez_shalwar" },
        { label: "New Waistcoats", href: "#new-arrivals", filterType: "waistcoat" },
        { label: "New Safari Suits", href: "#new-arrivals", filterType: "safari_suit" }
      ]
    },
    {
      label: "Sale / Discount",
      href: "#sale",
      isSale: true,
      submenu: [
        { label: "Flat 30% Off", href: "#sale", sortBy: "discount_desc" },
        { label: "Flat 40% Off", href: "#sale", sortBy: "discount_desc" },
        { label: "Best Deals", href: "#sale", sortBy: "discount_desc" }
      ]
    },
    {
      label: "Catalog / Embroidery",
      href: "#catalog",
      submenu: [
        { label: "Embroidered Kameez Shalwar", href: "#catalog", filterType: "kameez_shalwar" },
        { label: "Embroidered Trouser Kameez", href: "#catalog", filterType: "trouser_kameez" },
        { label: "Full Catalog", href: "#catalog", sortBy: "featured" }
      ]
    },
    {
      label: "Unstitched",
      href: "#unstitched",
      isMegaMenu: true,
      megaCategories: [
        {
          title: "Cotton",
          items: [
            { label: "Cotton Plain", href: "#cotton-plain", searchQuery: "Cotton Plain" },
            { label: "Cotton Embroidered", href: "#cotton-embroidered", searchQuery: "Cotton Embroidered" }
          ]
        },
        {
          title: "Boski",
          items: [
            { label: "Boski Plain", href: "#boski-plain", searchQuery: "Boski Plain" },
            { label: "Boski Embroidered", href: "#boski-embroidered", searchQuery: "Boski Embroidered" }
          ]
        },
        {
          title: "Wash & Wear / Blended",
          items: [
            { label: "Plain Wash & Wear", href: "#plain-wash", searchQuery: "Plain Wash" },
            { label: "Embroidered Wash & Wear", href: "#embroidered-wash", searchQuery: "Embroidered Wash" }
          ]
        }
      ]
    },
    {
      label: "All Season Fabrics",
      href: "#all-season",
      submenu: [
        { label: "Kameez Shalwar", href: "#all-season", filterType: "kameez_shalwar" },
        { label: "Trouser Kameez", href: "#all-season", filterType: "trouser_kameez" },
        { label: "Waistcoats", href: "#all-season", filterType: "waistcoat" }
      ]
    },
    {
      label: "Premium Suiting",
      href: "#suiting",
      submenu: [
        { label: "Safari Suit", href: "#suiting", filterType: "safari_suit" },
        { label: "3-Piece Suit", href: "#suiting", searchQuery: "Suit" },
        { label: "Blazers", href: "#suiting", searchQuery: "Blazer" }
      ]
    },
    {
      label: "Ihrams",
      href: "#ihrams",
      submenu: [
        { label: "Standard Ihram", href: "#ihrams", searchQuery: "Ihram" },
        { label: "Premium Ihram", href: "#ihrams", searchQuery: "Premium Ihram" }
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
