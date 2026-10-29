/**
 * COMPUTER GALAXY - Central Business Configuration
 *
 * All business details are kept in this single file for easy maintenance and updates.
 * Do not invent additional phone numbers, exact opening hours, physical stock,
 * discounts, warranties, prices, customer testimonials, or delivery promises.
 */

export interface BusinessConfig {
  name: string;
  tagline: string;
  type: string;
  description: string;
  phone: string;
  phoneFormatted: string;
  phoneTel: string;
  whatsappNumber: string;
  whatsappUrl: string;
  address: {
    floorAndShop: string;
    bazar: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  fullAddress: string;
  googleRating: number;
  googleRatingOutOf: number;
  googleReviewsUrl: string; // Configurable field as requested
  openingHoursNotice: string; // Configurable opening hours notice
  services: string[];
  brands: string[];
  socialMedia: {
    youtubeHandle: string;
    youtubeUrl: string;
    instagramFacebookHandle: string;
    instagramUrl: string;
    facebookUrl: string;
  };
  announcements: string[];
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
}

export const BUSINESS_INFO: BusinessConfig = {
  name: 'COMPUTER GALAXY',
  tagline: 'Your Trusted Computer Hardware Partner in Sirohi',
  type: 'Computer hardware wholesaler and retailer',
  description:
    'Computer Galaxy is a computer hardware wholesaler and retailer in Sirohi, Rajasthan. It offers computer components, laptops, printers, monitors, accessories, custom PC configurations, gaming PCs, editing PCs, office computers, and complete PC solutions.',
  phone: '088528 34882',
  phoneFormatted: '+91 88528 34882',
  phoneTel: 'tel:+918852834882',
  whatsappNumber: '918852834882',
  whatsappUrl: 'https://wa.me/918852834882',
  address: {
    floorAndShop: 'First Floor, Iskon Plaza, Shop No. 30, 31, 32',
    bazar: 'Main Bazar',
    landmark: 'near WEBLINK COMPUTER',
    city: 'Sirohi',
    state: 'Rajasthan',
    pincode: '307001',
    country: 'India',
  },
  fullAddress:
    'First Floor, Iskon Plaza, Shop No. 30, 31, 32, Main Bazar, near WEBLINK COMPUTER, Sirohi, Rajasthan 307001, India.',
  googleRating: 4.47,
  googleRatingOutOf: 5.0,
  /**
   * GOOGLE_REVIEWS_URL:
   * Leave empty or provide official link. When empty, clicking "READ OUR GOOGLE REVIEWS"
   * gracefully directs to a search for Computer Galaxy Sirohi reviews on Google Maps.
   */
  googleReviewsUrl: '',
  /**
   * Opening hours are configurable by store owner.
   */
  openingHoursNotice:
    'Please call or message on WhatsApp to confirm current daily store timings and holiday schedules.',
  services: [
    'Computer parts and accessories',
    'Custom-built computers',
    'Gaming PC builds',
    'Video editing PC builds',
    'Office PC setups',
    'Desktop computers',
    'Laptops',
    'Printers and monitors',
    'Computer peripherals',
    'Bulk computer orders',
    'Wholesale computer hardware',
    'All-India delivery',
  ],
  brands: [
    'Lenovo',
    'Dell',
    'HP',
    'ASUS',
    'Acer',
    'Samsung',
    'Lapcare',
    'Frontech',
    'Ranz',
    'Zebronics',
    'Intel',
    'AMD Ryzen',
    'Gigabyte',
  ],
  socialMedia: {
    youtubeHandle: 'weblinkitgyan',
    youtubeUrl: 'https://www.youtube.com/@weblinkitgyan',
    instagramFacebookHandle: 'weblinkittech',
    instagramUrl: 'https://www.instagram.com/weblinkittech',
    facebookUrl: 'https://www.facebook.com/weblinkittech',
  },
  announcements: [
    'Your Trusted Computer Hardware Partner in Sirohi',
    'Gaming PCs | Editing PCs | Office Computers',
    'Wholesale & Retail Computer Hardware Solutions',
    'Delivery Available Across India — Contact Us for Inquiries',
  ],
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Iskon+Plaza+Main+Bazar+Sirohi+Rajasthan+307001&t=&z=16&ie=UTF8&iwloc=&output=embed',
  googleMapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=First+Floor+Iskon+Plaza+Main+Bazar+Sirohi+Rajasthan+307001',
};

/**
 * Helper to generate URL-encoded WhatsApp link with a custom message
 */
export function createWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
}
