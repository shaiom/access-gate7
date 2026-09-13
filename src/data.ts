import { UserProfile, AdBannerItem, VisitPass, ExploreCategory, MoreMenuItem } from './types';

export const CURRENT_USER: UserProfile = {
  nameArabic: 'شيما محمد أبو النصر',
  nameEnglish: 'Shaimaa Mohamed Abou El Nasr',
  role: 'SubOwner',
  unit: 'Unit Number: [22 (المنطقة الثانية) عمارة 7]',
  avatarUrl: '/shaima_profile_reference.jpg',
};

// Rotating ad pool shown on the Access Gate screen, in the exact cycling
// order captured from the full screen recording (OOTech -> arrw -> Zahran
// Market -> North Square -> BlueSail/Brisk & Brew -> Balkan's -> CAI, then
// loops).
export const GATE_BANNER_ADS: AdBannerItem[] = [
  { id: 'ad-ootech', title: 'OOTech Technology Solutions', imageUrl: '/images/banner_ootech.jpg' },
  { id: 'ad-arrw', title: 'arrw', imageUrl: '/images/banner_arrw.jpg' },
  { id: 'ad-zahran', title: 'Zahran Market', imageUrl: '/images/banner_zahran.jpg' },
  { id: 'ad-northsquare', title: 'North Square', imageUrl: '/images/banner_northsquare.jpg' },
  { id: 'ad-bluesail', title: 'BlueSail / Brisk & Brew', imageUrl: '/images/banner_blue_brisk.jpg' },
  { id: 'ad-balkans', title: "Balkan's", imageUrl: '/images/banner_balkans.jpg' },
  { id: 'ad-cai', title: 'CAI', imageUrl: '/images/banner_cai.jpg' },
];

// Ad shown on Explore / Visits / More (the original consistently showed the
// same OOTech house ad on these three screens).
export const OTHER_BANNER_ADS: AdBannerItem[] = [
  { id: 'ad-ootech', title: 'OOTech Technology Solutions', imageUrl: '/images/banner_ootech.jpg' },
];

export const INITIAL_VISITS: VisitPass[] = [
  {
    id: 'v-1',
    visitorName: 'hossam wadeaa',
    status: 'Used',
    fromLabel: 'Saturday 08, August 2026 12:00 AM',
    toLabel: 'Saturday 08, August 2026 11:59 PM',
  },
  {
    id: 'v-2',
    visitorName: 'shaima nasr',
    status: 'CanceledByOwner',
    fromLabel: 'Friday 19, June 2026 12:00 AM',
    toLabel: 'Friday 19, June 2026 11:59 PM',
  },
];

// Exact order verified by scrolling through Explore frame-by-frame in the
// original recording (confirmed twice: once via the fresh loading-skeleton
// state, which proves Restaurants/Super Markets are the true top of the
// list, and once via the full scroll sequence down to Hotels).
export const EXPLORE_CATEGORIES: ExploreCategory[] = [
  { id: 'restaurants', name: 'Restaurants', imageUrl: '/images/explore_restaurants.jpg' },
  { id: 'supermarkets', name: 'Super Markets', imageUrl: '/images/explore_super_markets.jpg' },
  { id: 'cafe', name: 'Cafe', imageUrl: '/images/explore_cafe.jpg' },
  { id: 'lifestyle', name: 'Life style', imageUrl: '/images/explore_life_style.jpg' },
  { id: 'north-square-mall', name: 'North Square Mall', imageUrl: '/images/explore_north_square_mall.jpg' },
  { id: 'marina-beaches', name: 'شواطئ مارينا', imageUrl: '/images/explore_marina_beaches.jpg' },
  { id: 'beach-volleyball', name: 'بطولة كرة الطائرة الشاطئية', imageUrl: '/images/explore_beach_volleyball.jpg' },
  { id: 'hotels', name: 'Hotels', imageUrl: '/images/explore_hotels.jpg' },
];

export const MORE_MENU_ITEMS: MoreMenuItem[] = [
  { id: 'news', title: 'Marina News', iconName: 'Newspaper', badge: 'New' },
  { id: 'notifications', title: 'Notifications', iconName: 'Bell', badge: '53' },
  { id: 'profile', title: 'Profile', iconName: 'User' },
  { id: 'contact', title: 'Contact us', iconName: 'Phone' },
  { id: 'rules', title: 'Resort Rules', iconName: 'FileText' },
  { id: 'authority', title: 'Marina Authority', iconName: 'Building2' },
  { id: 'about', title: 'More About Marina', iconName: 'Info' },
  { id: 'sponsors', title: 'Sponsors', iconName: 'HeartHandshake' },
  { id: 'settings', title: 'Settings', iconName: 'Settings' },
  { id: 'logout', title: 'Logout', iconName: 'LogOut' },
];
