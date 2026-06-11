export interface Product {
  id: string;
  code: string;
  name: string;
  type: 'kameez_shalwar' | 'waistcoat' | 'safari_suit' | 'trouser_kameez';
  color: string;
  originalPrice: number;
  price: number;
  discountPercentage: number;
  installmentAmount: number;
  imageUrl: string;
}

export const PRODUCTS: Product[] = [
  // --- ROW 1 ---
  {
    id: "p1",
    code: "SPSB08",
    name: "Stitched Shalwar Kameez (SPSB08) Gold",
    type: "kameez_shalwar",
    color: "Gold",
    originalPrice: 9490,
    price: 6643,
    discountPercentage: 30,
    installmentAmount: 2546,
    imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p2",
    code: "SPSC26",
    name: "Stitched Shalwar Kameez (SPSC26) White",
    type: "kameez_shalwar",
    color: "White",
    originalPrice: 8490,
    price: 5943,
    discountPercentage: 30,
    installmentAmount: 2278,
    imageUrl: "https://images.unsplash.com/photo-1597983073492-bc2415978135?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p3",
    code: "SPSC25",
    name: "Stitched Shalwar Kameez (SPSC25) Green",
    type: "kameez_shalwar",
    color: "Green",
    originalPrice: 9490,
    price: 6643,
    discountPercentage: 30,
    installmentAmount: 2546,
    imageUrl: "https://images.unsplash.com/photo-1626307418942-794529584fd1?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p4",
    code: "SPSB07",
    name: "Stitched Shalwar Kameez (SPSB07) Light Blue",
    type: "kameez_shalwar",
    color: "Light Blue",
    originalPrice: 8990,
    price: 6293,
    discountPercentage: 30,
    installmentAmount: 2412,
    imageUrl: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=400&h=550&fit=crop"
  },
  // --- ROW 2 ---
  {
    id: "p5",
    code: "SPSB03",
    name: "Stitched Shalwar Kameez (SPSB03) Black",
    type: "kameez_shalwar",
    color: "Black",
    originalPrice: 9490,
    price: 6643,
    discountPercentage: 30,
    installmentAmount: 2546,
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p6",
    code: "SPSB01",
    name: "Stitched Shalwar Kameez (SPSB01) Silver Grey",
    type: "kameez_shalwar",
    color: "Silver Grey",
    originalPrice: 8990,
    price: 6293,
    discountPercentage: 30,
    installmentAmount: 2412,
    imageUrl: "https://images.unsplash.com/photo-1548142723-aae7678afd53?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p7",
    code: "SPSB02",
    name: "Stitched Shalwar Kameez (SPSB02) Greyish Blue",
    type: "kameez_shalwar",
    color: "Greyish Blue",
    originalPrice: 8990,
    price: 6293,
    discountPercentage: 30,
    installmentAmount: 2412,
    imageUrl: "https://images.unsplash.com/photo-1602442787305-decbd65be507?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p8",
    code: "SPSB06",
    name: "Stitched Shalwar Kameez (SPSB06) Dark Grey",
    type: "kameez_shalwar",
    color: "Dark Grey",
    originalPrice: 8990,
    price: 6293,
    discountPercentage: 30,
    installmentAmount: 2412,
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=550&fit=crop"
  },
  // --- ROW 3 ---
  {
    id: "p9",
    code: "SPSC21",
    name: "Stitched Shalwar Kameez (SPSC21) Pistachio",
    type: "kameez_shalwar",
    color: "Pistachio",
    originalPrice: 9490,
    price: 6643,
    discountPercentage: 30,
    installmentAmount: 2546,
    imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p10",
    code: "SPSC27",
    name: "Stitched Shalwar Kameez (SPSC27) Light Blue",
    type: "kameez_shalwar",
    color: "Light Blue",
    originalPrice: 9490,
    price: 6643,
    discountPercentage: 30,
    installmentAmount: 2546,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p11",
    code: "SPSC24",
    name: "Stitched Shalwar Kameez (SPSC24) Grey",
    type: "kameez_shalwar",
    color: "Grey",
    originalPrice: 9490,
    price: 6643,
    discountPercentage: 30,
    installmentAmount: 2546,
    imageUrl: "https://images.unsplash.com/photo-1542327897-d73f4005b533?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p12",
    code: "SPSB12",
    name: "Stitched Shalwar Kameez (SPSB12) Green",
    type: "kameez_shalwar",
    color: "Green",
    originalPrice: 9490,
    price: 6643,
    discountPercentage: 30,
    installmentAmount: 2546,
    imageUrl: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=400&h=550&fit=crop"
  },
  // --- ROW 4 ---
  {
    id: "p13",
    code: "SPSB11",
    name: "Stitched Shalwar Kameez (SPSB11) Off White",
    type: "kameez_shalwar",
    color: "Off White",
    originalPrice: 8490,
    price: 5943,
    discountPercentage: 30,
    installmentAmount: 2278,
    imageUrl: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p14",
    code: "SPSB16",
    name: "Stitched Shalwar Kameez (SPSB16) Khaki",
    type: "kameez_shalwar",
    color: "Khaki",
    originalPrice: 8990,
    price: 6293,
    discountPercentage: 30,
    installmentAmount: 2412,
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p15",
    code: "SPSB13",
    name: "Stitched Shalwar Kameez (SPSB13) Dark Grey",
    type: "kameez_shalwar",
    color: "Dark Grey",
    originalPrice: 9490,
    price: 6643,
    discountPercentage: 30,
    installmentAmount: 2546,
    imageUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p16",
    code: "SPSC20",
    name: "Stitched Shalwar Kameez (SPSC20) Navy Blue",
    type: "kameez_shalwar",
    color: "Navy Blue",
    originalPrice: 9490,
    price: 6643,
    discountPercentage: 30,
    installmentAmount: 2546,
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=400&h=550&fit=crop"
  },
  // --- ROW 5 ---
  {
    id: "p17",
    code: "SPSB10",
    name: "Stitched Shalwar Kameez (SPSB10) Grey",
    type: "kameez_shalwar",
    color: "Grey",
    originalPrice: 9490,
    price: 6643,
    discountPercentage: 30,
    installmentAmount: 2546,
    imageUrl: "https://images.unsplash.com/photo-1608748323725-e05537ba3f94?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p18",
    code: "SPSB09",
    name: "Stitched Shalwar Kameez (SPSB09) Grey",
    type: "kameez_shalwar",
    color: "Grey",
    originalPrice: 9490,
    price: 6643,
    discountPercentage: 30,
    installmentAmount: 2546,
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p19",
    code: "SPSC31",
    name: "Stitched Shalwar Kameez (SPSC31) Black",
    type: "kameez_shalwar",
    color: "Black",
    originalPrice: 9490,
    price: 6643,
    discountPercentage: 30,
    installmentAmount: 2546,
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p20",
    code: "SPSC28",
    name: "Stitched Shalwar Kameez (SPSC28) Green",
    type: "kameez_shalwar",
    color: "Green",
    originalPrice: 9490,
    price: 6643,
    discountPercentage: 30,
    installmentAmount: 2546,
    imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=400&h=550&fit=crop"
  },
  // --- ROW 6 ---
  {
    id: "p21",
    code: "SPSC30",
    name: "Stitched Shalwar Kameez (SPSC30) Black",
    type: "kameez_shalwar",
    color: "Black",
    originalPrice: 9490,
    price: 6643,
    discountPercentage: 30,
    installmentAmount: 2546,
    imageUrl: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p22",
    code: "NWC59",
    name: "Waist Coat - Wine (NWC59)",
    type: "waistcoat",
    color: "Wine",
    originalPrice: 7990,
    price: 5593,
    discountPercentage: 30,
    installmentAmount: 2143,
    imageUrl: "https://images.unsplash.com/photo-1598257006458-08713b763685?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p23",
    code: "NWC60",
    name: "Waist Coat - Green (NWC60)",
    type: "waistcoat",
    color: "Green",
    originalPrice: 7990,
    price: 5593,
    discountPercentage: 30,
    installmentAmount: 2143,
    imageUrl: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p24",
    code: "NWC61",
    name: "Waist Coat - Brown (NWC61)",
    type: "waistcoat",
    color: "Brown",
    originalPrice: 7990,
    price: 5593,
    discountPercentage: 30,
    installmentAmount: 2143,
    imageUrl: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=400&h=550&fit=crop"
  },
  // --- ROW 7 ---
  {
    id: "p25",
    code: "NWC56",
    name: "Waist Coat - Silver (NWC56)",
    type: "waistcoat",
    color: "Silver",
    originalPrice: 6990,
    price: 4893,
    discountPercentage: 30,
    installmentAmount: 1875,
    imageUrl: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p26",
    code: "NWC55",
    name: "Waist Coat - Navy Blue (NWC55)",
    type: "waistcoat",
    color: "Navy Blue",
    originalPrice: 6990,
    price: 4893,
    discountPercentage: 30,
    installmentAmount: 1875,
    imageUrl: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p27",
    code: "NWC54",
    name: "Waist Coat - Black (NWC54)",
    type: "waistcoat",
    color: "Black",
    originalPrice: 6990,
    price: 4893,
    discountPercentage: 30,
    installmentAmount: 1875,
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p28",
    code: "NWC44",
    name: "Waist Coat - Grey (NWC44)",
    type: "waistcoat",
    color: "Grey",
    originalPrice: 8490,
    price: 5943,
    discountPercentage: 30,
    installmentAmount: 2277,
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=400&h=550&fit=crop"
  },
  // --- ROW 8 ---
  {
    id: "p29",
    code: "NWC48",
    name: "Waist Coat - Blue (NWC48)",
    type: "waistcoat",
    color: "Blue",
    originalPrice: 8490,
    price: 5943,
    discountPercentage: 30,
    installmentAmount: 2277,
    imageUrl: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p30",
    code: "SPS80",
    name: "Stitched Shalwar Kameez (SPS80) Black",
    type: "kameez_shalwar",
    color: "Black",
    originalPrice: 9590,
    price: 5754,
    discountPercentage: 40,
    installmentAmount: 2205,
    imageUrl: "https://images.unsplash.com/photo-1626307418942-794529584fd1?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p31",
    code: "SPS79",
    name: "Stitched Shalwar Kameez (SPS79) Navy Blue",
    type: "kameez_shalwar",
    color: "Navy Blue",
    originalPrice: 9590,
    price: 5754,
    discountPercentage: 40,
    installmentAmount: 2205,
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p32",
    code: "SPS78",
    name: "Stitched Shalwar Kameez (SPS78) Royal Blue",
    type: "kameez_shalwar",
    color: "Royal Blue",
    originalPrice: 9590,
    price: 5754,
    discountPercentage: 40,
    installmentAmount: 2205,
    imageUrl: "https://images.unsplash.com/photo-1548142723-aae7678afd53?q=80&w=400&h=550&fit=crop"
  },
  // --- ROW 9 ---
  {
    id: "p33",
    code: "SPS76",
    name: "Stitched Shalwar Kameez (SPS76) Maroon",
    type: "kameez_shalwar",
    color: "Maroon",
    originalPrice: 9590,
    price: 5754,
    discountPercentage: 40,
    installmentAmount: 2205,
    imageUrl: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p34",
    code: "SPS74",
    name: "Stitched Shalwar Kameez (SPS74) Dark Brown",
    type: "kameez_shalwar",
    color: "Dark Brown",
    originalPrice: 9590,
    price: 5754,
    discountPercentage: 40,
    installmentAmount: 2205,
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p35",
    code: "SPS73",
    name: "Stitched Shalwar Kameez (SPS73) Basil Green",
    type: "kameez_shalwar",
    color: "Green",
    originalPrice: 9590,
    price: 5754,
    discountPercentage: 40,
    installmentAmount: 2205,
    imageUrl: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p36",
    code: "SPS71",
    name: "Stitched Shalwar Kameez (SPS71) Golden Flax",
    type: "kameez_shalwar",
    color: "Gold",
    originalPrice: 9590,
    price: 5754,
    discountPercentage: 40,
    installmentAmount: 2205,
    imageUrl: "https://images.unsplash.com/photo-1597983073492-bc2415978135?q=80&w=400&h=550&fit=crop"
  },
  // --- ROW 10 ---
  {
    id: "p37",
    code: "SPS68",
    name: "Stitched Shalwar Kameez (SPS68) Rusty Brown",
    type: "kameez_shalwar",
    color: "Brown",
    originalPrice: 9090,
    price: 5454,
    discountPercentage: 40,
    installmentAmount: 2087,
    imageUrl: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p38",
    code: "SPS67",
    name: "Stitched Shalwar Kameez (SPS67) Camel",
    type: "kameez_shalwar",
    color: "Camel",
    originalPrice: 9090,
    price: 5454,
    discountPercentage: 40,
    installmentAmount: 2087,
    imageUrl: "https://images.unsplash.com/photo-1608748323725-e05537ba3f94?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p39",
    code: "SCS17",
    name: "Stitched Trouser & Kameez (SCS17) Cream",
    type: "trouser_kameez",
    color: "Cream",
    originalPrice: 8590,
    price: 5154,
    discountPercentage: 40,
    installmentAmount: 1975,
    imageUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p40",
    code: "SCS16",
    name: "Stitched Trouser & Kameez (SCS16) Off White",
    type: "trouser_kameez",
    color: "Off White",
    originalPrice: 8590,
    price: 5154,
    discountPercentage: 40,
    installmentAmount: 1975,
    imageUrl: "https://images.unsplash.com/photo-1597983073492-bc2415978135?q=80&w=400&h=550&fit=crop"
  },
  // --- ROW 11 ---
  {
    id: "p41",
    code: "SPS53",
    name: "Stitched Shalwar Kameez (SPS53) Silver Grey",
    type: "kameez_shalwar",
    color: "Silver Grey",
    originalPrice: 8590,
    price: 5154,
    discountPercentage: 40,
    installmentAmount: 1975,
    imageUrl: "https://images.unsplash.com/photo-1548142723-aae7678afd53?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p42",
    code: "NIS01",
    name: "Safari Suit - Light Blue ( NIS01 )",
    type: "safari_suit",
    color: "Light Blue",
    originalPrice: 10990,
    price: 6594,
    discountPercentage: 40,
    installmentAmount: 2527,
    imageUrl: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p43",
    code: "SPSB42",
    name: "Stitched Shalwar Kameez (SPSB42) Ash Grey",
    type: "kameez_shalwar",
    color: "Ash Grey",
    originalPrice: 8990,
    price: 7641,
    discountPercentage: 15,
    installmentAmount: 2929,
    imageUrl: "https://images.unsplash.com/photo-1602442787305-decbd65be507?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p44",
    code: "SPSB43",
    name: "Stitched Shalwar Kameez (SPSB43) Green",
    type: "kameez_shalwar",
    color: "Green",
    originalPrice: 9490,
    price: 8066,
    discountPercentage: 15,
    installmentAmount: 3091,
    imageUrl: "https://images.unsplash.com/photo-1626307418942-794529584fd1?q=80&w=400&h=550&fit=crop"
  },
  // --- ROW 12 ---
  {
    id: "p45",
    code: "SPSB44",
    name: "Stitched Shalwar Kameez (SPSB44) Navy Blue",
    type: "kameez_shalwar",
    color: "Navy Blue",
    originalPrice: 9490,
    price: 8066,
    discountPercentage: 15,
    installmentAmount: 3091,
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p46",
    code: "SPSB45",
    name: "Stitched Shalwar Kameez (SPSB45) Pistachio",
    type: "kameez_shalwar",
    color: "Pistachio",
    originalPrice: 9490,
    price: 8066,
    discountPercentage: 15,
    installmentAmount: 3091,
    imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p47",
    code: "SPSB46",
    name: "Stitched Shalwar Kameez (SPSB46) Royal Blue",
    type: "kameez_shalwar",
    color: "Royal Blue",
    originalPrice: 9490,
    price: 8066,
    discountPercentage: 15,
    installmentAmount: 3091,
    imageUrl: "https://images.unsplash.com/photo-1548142723-aae7678afd53?q=80&w=400&h=550&fit=crop"
  },
  {
    id: "p48",
    code: "SPSB47",
    name: "Stitched Shalwar Kameez (SPSB47) Grey",
    type: "kameez_shalwar",
    color: "Grey",
    originalPrice: 8990,
    price: 7641,
    discountPercentage: 15,
    installmentAmount: 2929,
    imageUrl: "https://images.unsplash.com/photo-1608748323725-e05537ba3f94?q=80&w=400&h=550&fit=crop"
  }
];
