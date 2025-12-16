import { Category, Product, Feature } from './types';

// --- SUPABASE CONFIGURATION ---
// Project ID extracted from: db.xxwlkcpxoojpejiwyzzv.supabase.co
const SUPABASE_PROJECT_URL = "https://xxwlkcpxoojpejiwyzzv.supabase.co"; 

// Storage Bucket paths
// Ensure your bucket is named 'products' and is Public.
// Structure: products/casuals/01.png, products/lite/01.png
const IMG_BASE_CASUALS = `${SUPABASE_PROJECT_URL}/storage/v1/object/public/Products/casuals/`;
const IMG_BASE_LITE = `${SUPABASE_PROJECT_URL}/storage/v1/object/public/Products/lite/`;

export const FEATURES: Record<string, Feature> = {
  'biowash': { id: 'biowash', name: 'Special BioWash', iconType: 'drop', description: 'Enzyme treated for extra softness and longevity.' },
  'dryfit': { id: 'dryfit', name: 'Dry Fit', iconType: 'wind', description: 'Keeps you dry and comfortable.' },
  'supershield': { id: 'supershield', name: 'Super Shield', iconType: 'shield', description: 'Anti-Microbial protection.' },
  'superwick': { id: 'superwick', name: 'Super Wick', iconType: 'drop', description: 'Superior moisture management.' },
  'coolrush': { id: 'coolrush', name: 'Cool Rush', iconType: 'wind', description: 'Breathable fabric technology.' },
  'stretch': { id: 'stretch', name: 'Stretch Fabric', iconType: 'stretch', description: 'Freedom of movement.' },
  'softfeel': { id: 'softfeel', name: 'Soft Feel', iconType: 'feather', description: 'Extra soft fabric for enhanced touch.' },
  'uv': { id: 'uv', name: 'UV Protection', iconType: 'sun', description: 'Protects skin from harmful rays.' },
  'antistatic': { id: 'antistatic', name: 'Anti Static', iconType: 'spark', description: 'Reduces static cling.' },
  'antiodour': { id: 'antiodour', name: 'Anti Odour', iconType: 'smell', description: 'Prevents odour build up.' },
  'waterrepellant': { id: 'waterrepellant', name: 'Water Repellant', iconType: 'water', description: 'Resists water penetration.' },
  'graphene': { id: 'graphene', name: 'Graphene Finish', iconType: 'atom', description: 'Advanced material finish.' },
  'wrinklefree': { id: 'wrinklefree', name: 'Wrinkle Free', iconType: 'iron', description: 'Resists creasing.' },
  'staydry': { id: 'staydry', name: 'Stay Dry', iconType: 'drop', description: 'Remains dry during activity.' },
  'stayfresh': { id: 'stayfresh', name: 'Stay Fresh', iconType: 'diamond', description: 'Long lasting freshness.' },
  'denimfabric': { id: 'denimfabric', name: 'Denim Fabric', iconType: 'fabric', description: 'Durable denim construction.' },
  'frenchterry': { id: 'frenchterry', name: 'French Terry', iconType: 'fabric', description: 'Soft french terry fabric.' },
  'nspoly': { id: 'nspoly', name: 'NS Poly Fabric', iconType: 'layers', description: 'Durable non-stretch polyester.' },
  'micropoly': { id: 'micropoly', name: 'Micro Poly', iconType: 'fabric', description: 'Fine textured polyester for comfort.' },
  'lycra': { id: 'lycra', name: '4-Way Lycra', iconType: 'stretch', description: 'Premium stretch for maximum flexibility.' },
};

export const PRODUCTS: Product[] = [
  // --- CASUALS & SPORTZ ---
  {
    id: '1004',
    styleCode: '1004',
    name: 'T-Shirts Printed',
    category: Category.CASUALS,
    description: 'Single Jersey Fabric. Bio Wash Premium Quality. "Ride" & "Future" prints.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_CASUALS}01.png`,
    color: 'Red / Black / Blue'
  },
  {
    id: '1005',
    styleCode: '1005',
    name: 'T-Shirts Plain',
    category: Category.CASUALS,
    description: 'Single Jersey Fabric. Bio Wash Premium Quality. Essential solids.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_CASUALS}02.png`,
    color: 'Maroon / Black / Blue'
  },
  {
    id: '1009',
    styleCode: '1009',
    name: 'Collar T-Shirt',
    category: Category.CASUALS,
    description: 'Pique Fabric. Bio Wash Premium Quality. Classic Polo.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_CASUALS}03.png`,
    color: 'Maroon / Black / Yellow / Red'
  },
  {
    id: '1010',
    styleCode: '1010',
    name: 'Urban Knit Shorts',
    category: Category.SPORTZ,
    description: 'Rich Cotton French Terry Fabric. With Zipper.',
    features: ['frenchterry'],
    imageUrl: `${IMG_BASE_CASUALS}04.png`,
    color: 'Anthra / Black / Navy / Charcoal'
  },
  {
    id: '1011',
    styleCode: '1011',
    name: 'Fashion Knit Shorts',
    category: Category.SPORTZ,
    description: 'Rich Cotton Single Jersey Fabric. With Piping & Zip.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_CASUALS}05.png`,
    color: 'Anthra / Black / Navy / Charcoal'
  },
  {
    id: '1012',
    styleCode: '1012',
    name: 'Classic Knit Shorts',
    category: Category.SPORTZ,
    description: 'Rich Cotton Single Jersey Fabric. With Zip Cut & Sew.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_CASUALS}06.png`,
    color: 'Anthra / Black / Navy / Charcoal'
  },
  {
    id: '1013',
    styleCode: '1013',
    name: 'Joggers Pant',
    category: Category.SPORTZ,
    description: 'Rich Cotton French Terry Fabric. Trendy New Arrival.',
    features: ['frenchterry', 'biowash'],
    imageUrl: `${IMG_BASE_CASUALS}07.png`,
    color: 'Anthra / Black / Navy / Charcoal'
  },
  {
    id: '1014',
    styleCode: '1014',
    name: 'Urban Track Pant',
    category: Category.SPORTZ,
    description: 'Rich Cotton French Terry Fabric With Zip.',
    features: ['frenchterry', 'biowash'],
    imageUrl: `${IMG_BASE_CASUALS}08.png`,
    color: 'Anthra / Black / Navy / Charcoal'
  },
  {
    id: '1015',
    styleCode: '1015',
    name: 'Fashion Track Pant',
    category: Category.SPORTZ,
    description: 'Rich Cotton Single Jersey fabric. With Piping & Zip.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_CASUALS}09.png`,
    color: 'Anthra / Black / Navy / Charcoal'
  },
  {
    id: '1016',
    styleCode: '1016',
    name: 'Joggers Pant with Print',
    category: Category.SPORTZ,
    description: 'Rich Cotton Single Jersey Fabric. With Side Print.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_CASUALS}10.png`,
    color: 'Anthra / Black / Navy / Charcoal'
  },
  {
    id: '1017',
    styleCode: '1017',
    name: 'Cut & Sew Shorts',
    category: Category.SPORTZ,
    description: 'Rich Cotton Single Jersey Fabric. With Zip.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_CASUALS}11.png`,
    color: 'Anthra / Black / Navy / Charcoal'
  },
  {
    id: '1018',
    styleCode: '1018',
    name: 'Pant',
    category: Category.SPORTZ,
    description: 'Premium Quality Sports Wear - Dry Fit. Genuine Tintura Comfort.',
    features: ['dryfit', 'coolrush', 'softfeel', 'wrinklefree', 'antistatic', 'staydry', 'stayfresh'],
    imageUrl: `${IMG_BASE_CASUALS}12.png`,
    color: 'Grey / Black / Navy'
  },
  {
    id: '1019',
    styleCode: '1019',
    name: 'Shorts',
    category: Category.SPORTZ,
    description: 'Premium Quality Sports Wear - Dry Fit. Genuine Tintura Comfort.',
    features: ['dryfit', 'coolrush', 'softfeel', 'wrinklefree', 'antistatic', 'staydry', 'stayfresh'],
    imageUrl: `${IMG_BASE_CASUALS}13.png`,
    color: 'Grey / Black / Navy'
  },
  {
    id: '1022',
    styleCode: '1022',
    name: 'Tank Top',
    category: Category.SPORTZ,
    description: 'Premium Quality Tank Top. "Let\'s Go Play" prints.',
    features: ['dryfit'],
    imageUrl: `${IMG_BASE_CASUALS}14.png`,
    color: 'Red / Black / Navy / Blue'
  },
  {
    id: '1023',
    styleCode: '1023',
    name: 'Striped Collar T-shirt',
    category: Category.CASUALS,
    description: 'Pique Fabric Bio Wash Premium Quality.',
    features: ['biowash', 'coolrush', 'softfeel', 'wrinklefree', 'antistatic', 'staydry', 'stayfresh'],
    imageUrl: `${IMG_BASE_CASUALS}15.png`,
    color: 'Black / Red / Navy / Cool Blue'
  },
  {
    id: '1024',
    styleCode: '1024',
    name: 'Men’s Polo T-shirts',
    category: Category.CASUALS,
    description: 'Premium Quality Sports Wear. Standout Style.',
    features: ['coolrush', 'softfeel', 'wrinklefree', 'antistatic', 'staydry', 'stayfresh'],
    imageUrl: `${IMG_BASE_CASUALS}16.png`,
    color: 'Black / Red / Navy / Cool Blue / Grey'
  },
  {
    id: '1025',
    styleCode: '1025',
    name: 'Men’s T-shirts',
    category: Category.SPORTZ,
    description: 'Premium Quality Sports Wear. Research and Develop.',
    features: ['coolrush', 'softfeel', 'wrinklefree', 'antistatic', 'staydry', 'stayfresh'],
    imageUrl: `${IMG_BASE_CASUALS}17.png`,
    color: 'Grey Melange / Black / Navy'
  },
  {
    id: '1026',
    styleCode: '1026',
    name: 'Men’s T-shirts',
    category: Category.SPORTZ,
    description: 'Premium Quality Sports Wear. Top Trend.',
    features: ['coolrush', 'softfeel', 'wrinklefree', 'antistatic', 'staydry', 'stayfresh'],
    imageUrl: `${IMG_BASE_CASUALS}18.png`,
    color: 'Grey Melange / Black / Navy'
  },
  {
    id: '1027',
    styleCode: '1027',
    name: 'Men’s Pant',
    category: Category.SPORTZ,
    description: 'Premium Quality Sports Wear. 4 Way Lycra Casuals.',
    features: ['coolrush', 'softfeel', 'wrinklefree', 'antistatic', 'staydry', 'stayfresh', 'lycra'],
    imageUrl: `${IMG_BASE_CASUALS}19.png`,
    color: 'Grey / Black / Navy / Carbon'
  },
  {
    id: '1028',
    styleCode: '1028',
    name: 'AOP Men’s T-shirt',
    category: Category.CASUALS,
    description: 'Military Print Dry Fit Polyester Fabric. For Everyone.',
    features: ['dryfit', 'coolrush', 'softfeel', 'wrinklefree', 'antistatic', 'staydry', 'stayfresh'],
    imageUrl: `${IMG_BASE_CASUALS}20.png`,
    color: 'Black / Red / Navy / Cool Blue'
  },
  {
    id: '1029',
    styleCode: '1029',
    name: 'Men’s Denim Shorts',
    category: Category.CASUALS,
    description: 'Jeans Fabric. Cool Rush Technology.',
    features: ['denimfabric', 'coolrush', 'softfeel', 'wrinklefree', 'antistatic', 'staydry', 'stayfresh'],
    imageUrl: `${IMG_BASE_CASUALS}21.png`,
    color: 'Grey / Black / Navy / Carbon'
  },
  {
    id: '1030',
    styleCode: '1030',
    name: 'Men’s Denim Pant',
    category: Category.CASUALS,
    description: 'Jeans Fabric. Comfortable fit.',
    features: ['denimfabric', 'coolrush', 'softfeel', 'wrinklefree', 'antistatic', 'staydry', 'stayfresh'],
    imageUrl: `${IMG_BASE_CASUALS}22.png`,
    color: 'Grey / Black / Navy / Carbon'
  },
  {
    id: '1031',
    styleCode: '1031',
    name: 'Men’s Dry Fit Shorts',
    category: Category.SPORTZ,
    description: 'Premium Quality Sports Wear. Never Quit.',
    features: ['dryfit', 'coolrush', 'softfeel', 'wrinklefree', 'antistatic', 'staydry', 'stayfresh'],
    imageUrl: `${IMG_BASE_CASUALS}23.png`,
    color: 'Grey / Black / Navy / Carbon'
  },
  {
    id: '1032',
    styleCode: '1032',
    name: 'Men’s T-shirts',
    category: Category.CASUALS,
    description: 'Single Jersey Bio Wash Premium Quality. Textured pattern.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_CASUALS}24.png`,
    color: 'Brown / Grey / Olive / Yellow'
  },
  {
    id: '1033',
    styleCode: '1033',
    name: 'Men’s Micro Poly Pant',
    category: Category.SPORTZ,
    description: 'Premium Quality Sports Wear. Shape Your Body.',
    features: ['micropoly', 'stretch'],
    imageUrl: `${IMG_BASE_CASUALS}25.png`,
    color: 'Grey / Black / Navy / Carbon / Airforce'
  },
  {
    id: '1034',
    styleCode: '1034',
    name: 'Men’s Cargo Pant',
    category: Category.CASUALS,
    description: 'Knitted Cool Polyester Premium 4 way Lycra Fabric. Comfortable All Day Long.',
    features: ['lycra', 'coolrush'],
    imageUrl: `${IMG_BASE_CASUALS}26.png`,
    color: 'Navy / Black / Olive / Blue / Beige'
  },
  {
    id: '1035',
    styleCode: '1035',
    name: 'Men’s Cargo Shorts',
    category: Category.CASUALS,
    description: 'Knitted Cool Polyester Premium 4 way Lycra Fabric.',
    features: ['lycra', 'coolrush'],
    imageUrl: `${IMG_BASE_CASUALS}27.png`,
    color: 'Navy / Black / Olive / Blue / Beige'
  },
  {
    id: '510',
    styleCode: '510',
    name: 'Men’s Slim Fit Shorts',
    category: Category.CASUALS,
    description: '100% Polyester Stretch Printed Fabric. Camo Print.',
    features: ['stretch', 'dryfit'],
    imageUrl: `${IMG_BASE_CASUALS}28.png`,
    color: 'Anthra / Black / Navy / Charcoal'
  },
  {
    id: '511',
    styleCode: '511',
    name: 'Men’s Slim Fit Pant',
    category: Category.CASUALS,
    description: '100% Polyester Stretch Printed Fabric. Camo Print.',
    features: ['stretch', 'dryfit'],
    imageUrl: `${IMG_BASE_CASUALS}29.png`,
    color: 'Anthra / Black / Navy / Charcoal'
  },
  {
    id: '514',
    styleCode: '514',
    name: 'Men’s Cargo Pant',
    category: Category.CASUALS,
    description: 'NS Poly Fabric. Comfortable All The Long.',
    features: ['nspoly'],
    imageUrl: `${IMG_BASE_CASUALS}30.png`,
    color: 'Navy / Black / Olive / Blue / Beige'
  },
  {
    id: '128',
    styleCode: '128',
    name: 'Boy’s Cargo Pant',
    category: Category.BOYS,
    description: 'NS Poly Fabric.',
    features: ['nspoly'],
    imageUrl: `${IMG_BASE_CASUALS}31.png`,
    color: 'Navy / Black / Olive / Blue / Beige'
  },
  {
    id: '901',
    styleCode: '901',
    name: 'Boy’s Joggers Pant',
    category: Category.BOYS,
    description: 'Rich Cotton French Terry Fabric. Grey Melange.',
    features: ['frenchterry'],
    imageUrl: `${IMG_BASE_CASUALS}32.png`,
    color: 'Grey / Black / Navy'
  },
  {
    id: '902',
    styleCode: '902',
    name: 'Boy’s Track Pant',
    category: Category.BOYS,
    description: 'Rich Cotton French Terry Fabric.',
    features: ['frenchterry'],
    imageUrl: `${IMG_BASE_CASUALS}33.png`,
    color: 'Grey / Black / Navy'
  },
  {
    id: '903',
    styleCode: '903',
    name: 'Boy’s Shorts',
    category: Category.BOYS,
    description: 'Rich Cotton French Terry Fabric.',
    features: ['frenchterry'],
    imageUrl: `${IMG_BASE_CASUALS}34.png`,
    color: 'Grey / Black / Navy'
  },
  {
    id: '904',
    styleCode: '904',
    name: 'Boy’s Cargo Pant',
    category: Category.BOYS,
    description: 'Polyester Fabric.',
    features: ['dryfit'],
    imageUrl: `${IMG_BASE_CASUALS}35.png`,
    color: 'Navy / Black / Olive / Blue / Beige'
  },

  // --- TINTURA LITE ---
  {
    id: 'lite-101',
    styleCode: '101',
    name: 'Boy’s Joggers',
    category: Category.LITE,
    description: 'Rich Cotton French Terry Fabric. Comfortable everyday wear.',
    features: ['frenchterry', 'softfeel'],
    imageUrl: `${IMG_BASE_LITE}01.png`,
    color: 'Black / Navy / Melange'
  },
  {
    id: 'lite-102',
    styleCode: '102',
    name: 'Boy’s Cut & Sew Pant',
    category: Category.LITE,
    description: 'Rich Cotton Single Jersey Fabric. Stylish cut and sew design.',
    features: ['biowash', 'softfeel'],
    imageUrl: `${IMG_BASE_LITE}02.png`,
    color: 'Black / Navy / Melange'
  },
  {
    id: 'lite-103',
    styleCode: '103',
    name: 'Boy’s Cross Pocket Pant',
    category: Category.LITE,
    description: 'Rich Cotton Single Jersey Fabric with Cross Pocket.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_LITE}03.png`,
    color: 'Black / Navy / Melange'
  },
  {
    id: 'lite-104',
    styleCode: '104',
    name: 'Boy’s Cross Pocket Shorts',
    category: Category.LITE,
    description: 'Rich Cotton Single Jersey Fabric with Cross Pocket.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_LITE}04.png`,
    color: 'Black / Navy / Brown'
  },
  {
    id: 'lite-105',
    styleCode: '105',
    name: 'Boy’s Cut & Sew Shorts',
    category: Category.LITE,
    description: 'Rich Cotton Single Jersey Fabric with Cut & Sew.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_LITE}05.png`,
    color: 'Black / Navy / Brown'
  },
  {
    id: 'lite-108',
    styleCode: '108',
    name: 'Boy’s Cut & Sew Shorts',
    category: Category.LITE,
    description: 'Rich Cotton Single Jersey Fabric with Cut & Sew.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_LITE}06.png`,
    color: 'Black / Navy / Brown'
  },
  {
    id: 'lite-109',
    styleCode: '109',
    name: 'Boy’s Cut & Sew Pants',
    category: Category.LITE,
    description: 'Rich Cotton French Terry Fabric.',
    features: ['frenchterry'],
    imageUrl: `${IMG_BASE_LITE}07.png`,
    color: 'Black / Navy / Brown'
  },
  {
    id: 'lite-110',
    styleCode: '110',
    name: 'Boy’s Dry Fit Shorts',
    category: Category.LITE,
    description: 'Rich Cotton French Terry Fabric. Sporty look.',
    features: ['frenchterry'],
    imageUrl: `${IMG_BASE_LITE}08.png`,
    color: 'Blue / Black / Olive'
  },
  {
    id: 'lite-112',
    styleCode: '112',
    name: 'Boy’s Dry Fit Pant',
    category: Category.LITE,
    description: 'Rich Cotton French Terry Fabric. Sport Season.',
    features: ['frenchterry'],
    imageUrl: `${IMG_BASE_LITE}09.png`,
    color: 'Blue / Black / Olive'
  },
  {
    id: 'lite-113',
    styleCode: '113',
    name: 'Boy’s Piping Shorts',
    category: Category.LITE,
    description: 'Rich Cotton Single Jersey Fabric.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_LITE}10.png`,
    color: 'Black / Navy / Brown'
  },
  {
    id: 'lite-114',
    styleCode: '114',
    name: 'Boy’s Piping Pant',
    category: Category.LITE,
    description: 'Rich Cotton Single Jersey Fabric.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_LITE}11.png`,
    color: 'Black / Navy / Brown / Grey'
  },
  {
    id: 'lite-115',
    styleCode: '115',
    name: 'Boy’s Shorts with Print',
    category: Category.LITE,
    description: 'Rich Cotton Single Jersey Fabric. "Limit Power" Print.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_LITE}12.png`,
    color: 'Black / Navy / Brown'
  },
  {
    id: 'lite-117',
    styleCode: '117',
    name: 'Boy’s Pant with Print',
    category: Category.LITE,
    description: 'Rich Cotton Single Jersey Fabric. Special Edition.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_LITE}13.png`,
    color: 'Black / Navy / Brown'
  },
  {
    id: 'lite-119',
    styleCode: '119',
    name: 'Boy’s Polyester Short',
    category: Category.LITE,
    description: 'Dry Fit Polyester Fabric with Piping.',
    features: ['dryfit'],
    imageUrl: `${IMG_BASE_LITE}14.png`,
    color: 'Black / Navy / Grey'
  },
  {
    id: 'lite-120',
    styleCode: '120',
    name: 'Boy’s Polyester Pant',
    category: Category.LITE,
    description: 'Dry Fit Polyester Fabric with Piping.',
    features: ['dryfit'],
    imageUrl: `${IMG_BASE_LITE}15.png`,
    color: 'Black / Navy'
  },
  {
    id: 'lite-121',
    styleCode: '121',
    name: 'Boy’s Short with AOP',
    category: Category.LITE,
    description: '100% Polyester Stretch Printed Fabric.',
    features: ['stretch', 'dryfit'],
    imageUrl: `${IMG_BASE_LITE}16.png`,
    color: 'Camo'
  },
  {
    id: 'lite-122',
    styleCode: '122',
    name: 'Boy’s Pant with AOP',
    category: Category.LITE,
    description: '100% Polyester Stretch Printed Fabric.',
    features: ['stretch', 'dryfit'],
    imageUrl: `${IMG_BASE_LITE}17.png`,
    color: 'Camo'
  },
  {
    id: 'lite-123',
    styleCode: '123',
    name: 'Boy’s Joggers with Print',
    category: Category.LITE,
    description: 'Rich Cotton French Terry Fabric.',
    features: ['frenchterry'],
    imageUrl: `${IMG_BASE_LITE}18.png`,
    color: 'Black / Navy / Brown'
  },
  {
    id: 'lite-124',
    styleCode: '124',
    name: 'Boy’s Denim Shorts',
    category: Category.LITE,
    description: 'Jeans Fabric. Performance in every step.',
    features: ['denimfabric'],
    imageUrl: `${IMG_BASE_LITE}19.png`,
    color: 'Blue / Black / Grey'
  },
  {
    id: 'lite-125',
    styleCode: '125',
    name: 'Boy’s Denim Pant',
    category: Category.LITE,
    description: 'Jeans Fabric. Performance in motion.',
    features: ['denimfabric'],
    imageUrl: `${IMG_BASE_LITE}20.png`,
    color: 'Blue / Black / Grey'
  },
  {
    id: 'lite-126',
    styleCode: '126',
    name: 'Boy’s Cut & Sew Shorts',
    category: Category.LITE,
    description: 'Rich Cotton French Terry Fabric.',
    features: ['frenchterry'],
    imageUrl: `${IMG_BASE_LITE}21.png`,
    color: 'Blue / Black / Grey'
  },
  {
    id: 'lite-127',
    styleCode: '127',
    name: 'Boy’s Joggers with Zip',
    category: Category.LITE,
    description: 'Rich Cotton French Terry Fabric. Hi Performance Blend.',
    features: ['frenchterry'],
    imageUrl: `${IMG_BASE_LITE}22.png`,
    color: 'Black / Navy / Blue'
  },
  {
    id: 'lite-128',
    styleCode: '128',
    name: 'Boy’s Cargo Pants',
    category: Category.LITE,
    description: 'Rich Cotton French Terry Fabric with Zipper.',
    features: ['frenchterry'],
    imageUrl: `${IMG_BASE_LITE}23.png`,
    color: 'Black / Grey / Beige'
  },
  {
    id: 'lite-129',
    styleCode: '129',
    name: 'Boy’s 3/4 Piping Pant',
    category: Category.LITE,
    description: 'Dry Fit Polyester Fabric.',
    features: ['dryfit'],
    imageUrl: `${IMG_BASE_LITE}24.png`,
    color: 'Black / Grey / White'
  },
  {
    id: 'lite-130',
    styleCode: '130',
    name: 'Boy’s Fancy Shorts',
    category: Category.LITE,
    description: 'Micro Poly Fabric. Trendy Comfort.',
    features: ['micropoly'],
    imageUrl: `${IMG_BASE_LITE}25.png`,
    color: 'Prints'
  },
  {
    id: 'lite-131',
    styleCode: '131',
    name: 'Boy’s 3/4 Cotton Shorts',
    category: Category.LITE,
    description: 'Rich Cotton French Terry Fabric.',
    features: ['frenchterry'],
    imageUrl: `${IMG_BASE_LITE}26.png`,
    color: 'Black / Grey'
  },
  {
    id: 'lite-501',
    styleCode: '501',
    name: 'Men’s Joggers',
    category: Category.LITE,
    description: 'Rich Cotton French Terry Fabric.',
    features: ['frenchterry'],
    imageUrl: `${IMG_BASE_LITE}27.png`,
    color: 'Black / Grey / Blue'
  },
  {
    id: 'lite-502',
    styleCode: '502',
    name: 'Men’s Cut & Sew Pant',
    category: Category.LITE,
    description: 'Rich Cotton Single Jersey Fabric with Cut & Sew.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_LITE}28.png`,
    color: 'Black / Grey / Blue'
  },
  {
    id: 'lite-504',
    styleCode: '504',
    name: 'Men’s Piping Pant',
    category: Category.LITE,
    description: 'Rich Cotton Single Jersey Fabric with Piping.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_LITE}29.png`,
    color: 'Black / Grey / Blue'
  },
  {
    id: 'lite-505',
    styleCode: '505',
    name: 'Men’s Piping Shorts',
    category: Category.LITE,
    description: 'Rich Cotton French Terry Fabric with Piping.',
    features: ['frenchterry'],
    imageUrl: `${IMG_BASE_LITE}30.png`,
    color: 'Black / Grey / Blue'
  },
  {
    id: 'lite-506',
    styleCode: '506',
    name: 'Men’s Cut & Sew Shorts',
    category: Category.LITE,
    description: 'Rich Cotton Single Jersey Fabric with Cut & Sew.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_LITE}31.png`,
    color: 'Black / Grey / Blue'
  },
  {
    id: 'lite-507',
    styleCode: '507',
    name: 'Men’s Cut & Sew Pant',
    category: Category.LITE,
    description: 'Rich Cotton Single Jersey Fabric.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_LITE}32.png`,
    color: 'Black / Grey'
  },
  {
    id: 'lite-508',
    styleCode: '508',
    name: 'Men’s Cut & Sew Shorts',
    category: Category.LITE,
    description: 'Rich Cotton Single Jersey Fabric with Cut & Sew.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_LITE}33.png`,
    color: 'Black / Blue'
  },
  {
    id: 'lite-509',
    styleCode: '509',
    name: 'Men’s Slim Fit Pants',
    category: Category.LITE,
    description: 'Rich Cotton Single Jersey Fabric.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_LITE}34.png`,
    color: 'Black / Blue / Grey'
  },
  {
    id: 'lite-512',
    styleCode: '512',
    name: 'Men’s Cut & Sew Shorts',
    category: Category.LITE,
    description: 'Rich Cotton Single Jersey Fabric.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_LITE}35.png`,
    color: 'Black / Grey'
  },
  {
    id: 'lite-513',
    styleCode: '513',
    name: 'Men’s 3/4 Piping Pants',
    category: Category.LITE,
    description: 'Rich Cotton Single Jersey Fabric.',
    features: ['biowash'],
    imageUrl: `${IMG_BASE_LITE}36.png`,
    color: 'Black / Blue / Teal'
  },
  {
    id: 'lite-514',
    styleCode: '514',
    name: 'Men’s Cargo Pants',
    category: Category.LITE,
    description: 'Rich Cotton French Terry Fabric. All the long.',
    features: ['frenchterry'],
    imageUrl: `${IMG_BASE_LITE}37.png`,
    color: 'Beige / Black / Blue'
  },
  {
    id: 'lite-515',
    styleCode: '515',
    name: 'Men’s Micro Poly Shorts',
    category: Category.LITE,
    description: 'Dry Fit Polyester Fabric. Game On.',
    features: ['dryfit', 'micropoly'],
    imageUrl: `${IMG_BASE_LITE}38.png`,
    color: 'Grey / Blue'
  },
  {
    id: 'lite-516',
    styleCode: '516',
    name: 'Men’s Micro Poly Pant',
    category: Category.LITE,
    description: 'Dry Fit Polyester Fabric. Trendy Track Pant.',
    features: ['dryfit', 'micropoly'],
    imageUrl: `${IMG_BASE_LITE}39.png`,
    color: 'Grey / Blue'
  },
];