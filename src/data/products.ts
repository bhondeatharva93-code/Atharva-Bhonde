export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  categoryId: string;
  categoryLabel: string;
  specs: string[];
  priceDisplay: string; // "Contact for Latest Price"
  description: string;
  isDemo: boolean;
  featured?: boolean;
}

/**
 * Notice: This catalog contains demonstration product representations to illustrate the website layout.
 * Computer Galaxy provides live pricing and confirmed availability on demand.
 * No imaginary inventory counts or fabricated discounts are presented.
 */
export const DEMO_CATALOG_DISCLAIMER =
  'Product listings are representative models from our brand portfolio. For current real-time market pricing and physical store availability, please inquire directly via WhatsApp or phone call.';

export const SAMPLE_PRODUCTS: ProductItem[] = [
  // Processors
  {
    id: 'prod-cpu-1',
    name: 'Intel Core i7 Desktop Processor (14th Gen)',
    brand: 'Intel',
    categoryId: 'processors',
    categoryLabel: 'Processors',
    specs: ['LGA1700 Socket', 'High multi-core throughput', 'Intel UHD Graphics integrated', 'Intel Smart Cache'],
    priceDisplay: 'Contact for Latest Price',
    description: 'High-performance processor designed for intensive gaming, heavy video rendering, and multitasking.',
    isDemo: true,
    featured: true,
  },
  {
    id: 'prod-cpu-2',
    name: 'AMD Ryzen 7 7800X3D Desktop Processor',
    brand: 'AMD Ryzen',
    categoryId: 'processors',
    categoryLabel: 'Processors',
    specs: ['AM5 Platform', '3D V-Cache Technology', 'High thermal efficiency', 'PCIe 5.0 support'],
    priceDisplay: 'Contact for Latest Price',
    description: 'Flagship enthusiast desktop gaming processor engineered with 3D V-Cache technology.',
    isDemo: true,
    featured: true,
  },
  {
    id: 'prod-cpu-3',
    name: 'Intel Core i5 Desktop Processor (14th Gen)',
    brand: 'Intel',
    categoryId: 'processors',
    categoryLabel: 'Processors',
    specs: ['LGA1700 Socket', 'Hybrid architecture', 'DDR4 & DDR5 support', 'Performance efficiency cores'],
    priceDisplay: 'Contact for Latest Price',
    description: 'Balanced powerhouse processor for mid-range gaming builds, design work, and productive offices.',
    isDemo: true,
  },
  {
    id: 'prod-cpu-4',
    name: 'AMD Ryzen 5 7600X Desktop Processor',
    brand: 'AMD Ryzen',
    categoryId: 'processors',
    categoryLabel: 'Processors',
    specs: ['AM5 Socket', '6 Cores / 12 Threads', 'Boost clock capability', 'Radeon Graphics onboard'],
    priceDisplay: 'Contact for Latest Price',
    description: 'Fast and responsive 6-core gaming and multi-application CPU for modern AM5 motherboards.',
    isDemo: true,
  },

  // Motherboards
  {
    id: 'prod-mb-1',
    name: 'Gigabyte B760 Gaming X AX Motherboard',
    brand: 'Gigabyte',
    categoryId: 'motherboards',
    categoryLabel: 'Motherboards',
    specs: ['LGA1700 for Intel', 'DDR5 Memory Support', 'PCIe 4.0 M.2 Slots', 'Onboard Wi-Fi 6E & 2.5GbE'],
    priceDisplay: 'Contact for Latest Price',
    description: 'Robust ATX motherboard with high-quality VRM heatsinks and fast connectivity options.',
    isDemo: true,
    featured: true,
  },
  {
    id: 'prod-mb-2',
    name: 'ASUS TUF Gaming B650-Plus WiFi',
    brand: 'ASUS',
    categoryId: 'motherboards',
    categoryLabel: 'Motherboards',
    specs: ['Socket AM5 for AMD', 'Military-grade components', 'PCIe 5.0 M.2 support', 'Two-Way AI Noise Cancel'],
    priceDisplay: 'Contact for Latest Price',
    description: 'Heavy-duty gaming motherboard built with rugged components for long-term stability.',
    isDemo: true,
  },

  // Graphics Cards
  {
    id: 'prod-gpu-1',
    name: 'GeForce RTX 4070 Super 12GB Graphics Card',
    brand: 'Gigabyte',
    categoryId: 'graphics-cards',
    categoryLabel: 'Graphics Cards',
    specs: ['12GB GDDR6X VRAM', 'DLSS 3 & Ada Lovelace Architecture', 'Triple-fan Windforce cooling', 'Dual BIOS'],
    priceDisplay: 'Contact for Latest Price',
    description: 'Ultra-fast 1440p and 4K graphics card for gaming, video rendering, and 3D modeling workflows.',
    isDemo: true,
    featured: true,
  },
  {
    id: 'prod-gpu-2',
    name: 'GeForce RTX 4060 8GB Graphics Card',
    brand: 'ASUS',
    categoryId: 'graphics-cards',
    categoryLabel: 'Graphics Cards',
    specs: ['8GB GDDR6 VRAM', 'Ray Tracing & DLSS 3', 'Compact Dual-Fan design', 'Low power consumption'],
    priceDisplay: 'Contact for Latest Price',
    description: 'Power-efficient modern graphics solution delivering exceptional 1080p high-framerate performance.',
    isDemo: true,
  },

  // RAM & SSDs
  {
    id: 'prod-ram-1',
    name: 'High-Performance 32GB (16GBx2) DDR5 6000MHz RAM Kit',
    brand: 'Lapcare',
    categoryId: 'ram',
    categoryLabel: 'RAM and SSDs',
    specs: ['32GB Kit (2x16GB)', '6000MHz Frequency', 'Aluminum Heat Spreader', 'Intel XMP 3.0 & AMD EXPO'],
    priceDisplay: 'Contact for Latest Price',
    description: 'Low-latency dual-channel desktop memory for content creation pipelines and intense gaming.',
    isDemo: true,
  },
  {
    id: 'prod-ssd-1',
    name: 'Samsung 990 PRO 1TB PCIe 4.0 NVMe M.2 SSD',
    brand: 'Samsung',
    categoryId: 'ssds-storage',
    categoryLabel: 'RAM and SSDs',
    specs: ['Up to 7450 MB/s Read', 'V-NAND TLC Technology', 'Nickel-coated thermal controller', '1TB High Capacity'],
    priceDisplay: 'Contact for Latest Price',
    description: 'Top-tier solid state storage offering near-instant boot times, project loads, and asset transfers.',
    isDemo: true,
    featured: true,
  },

  // Monitors
  {
    id: 'prod-mon-1',
    name: 'Samsung 27-inch IPS 180Hz Gaming Monitor',
    brand: 'Samsung',
    categoryId: 'monitors',
    categoryLabel: 'Monitors',
    specs: ['27-inch IPS Panel', '180Hz High Refresh Rate', '1ms Response Time', 'Flicker-Free & Eye Saver Mode'],
    priceDisplay: 'Contact for Latest Price',
    description: 'Fluid gaming monitor with vivid color accuracy and wide viewing angles for play and work.',
    isDemo: true,
    featured: true,
  },
  {
    id: 'prod-mon-2',
    name: 'Dell 24-inch Full HD Office & Productivity Monitor',
    brand: 'Dell',
    categoryId: 'monitors',
    categoryLabel: 'Monitors',
    specs: ['24-inch FHD IPS Display', 'Ultra-thin bezel design', 'ComfortView Plus low blue light', 'HDMI & VGA ports'],
    priceDisplay: 'Contact for Latest Price',
    description: 'Ergonomic business monitor engineered for long working hours with reduced eye fatigue.',
    isDemo: true,
  },

  // Laptops
  {
    id: 'prod-lap-1',
    name: 'HP Pavilion 15.6-inch Core i5 Business Laptop',
    brand: 'HP',
    categoryId: 'laptops',
    categoryLabel: 'Laptops',
    specs: ['Intel Core i5 Processor', '16GB DDR4 RAM', '512GB NVMe SSD', 'FHD Anti-Glare Display'],
    priceDisplay: 'Contact for Latest Price',
    description: 'Reliable, lightweight portable computer built for accounting, student learning, and office tasks.',
    isDemo: true,
    featured: true,
  },
  {
    id: 'prod-lap-2',
    name: 'Lenovo IdeaPad Gaming Laptop',
    brand: 'Lenovo',
    categoryId: 'laptops',
    categoryLabel: 'Laptops',
    specs: ['AMD Ryzen 5 Processor', 'Dedicated NVIDIA Graphics', '120Hz IPS Display', 'Military-grade tested chassis'],
    priceDisplay: 'Contact for Latest Price',
    description: 'Capable gaming and editing laptop suited for mobility and power on the go.',
    isDemo: true,
  },

  // Printers
  {
    id: 'prod-prn-1',
    name: 'HP Smart Tank All-in-One Color Printer',
    brand: 'HP',
    categoryId: 'printers',
    categoryLabel: 'Printers',
    specs: ['Print, Scan, Copy', 'High-Yield Refillable Ink Tank', 'Wi-Fi & USB Connectivity', 'Borderless Photo Printing'],
    priceDisplay: 'Contact for Latest Price',
    description: 'Cost-effective high-volume color printer suited for small businesses, schools, and home offices.',
    isDemo: true,
  },
  {
    id: 'prod-prn-2',
    name: 'Canon / HP Monochrome Laser Printer',
    brand: 'HP',
    categoryId: 'printers',
    categoryLabel: 'Printers',
    specs: ['Fast Laser Printing', 'Compact Desktop Footprint', 'Sharp Text Output', 'High Monthly Duty Cycle'],
    priceDisplay: 'Contact for Latest Price',
    description: 'High-speed black & white document printer engineered for commercial ledger and invoice printing.',
    isDemo: true,
  },

  // Computer Accessories & Cabinets
  {
    id: 'prod-acc-1',
    name: 'Zebronics Mechanical Gaming Keyboard & Mouse Combo',
    brand: 'Zebronics',
    categoryId: 'keyboards-mice',
    categoryLabel: 'Computer Accessories',
    specs: ['Tactile Mechanical Switches', 'Multicolor LED Backlighting', 'High-DPI Optical Sensor', 'Braided Cable'],
    priceDisplay: 'Contact for Latest Price',
    description: 'Durable mechanical peripheral combo built for gaming responsiveness and typing comfort.',
    isDemo: true,
  },
  {
    id: 'prod-acc-2',
    name: 'Frontech / Zebronics 600VA Line-Interactive UPS',
    brand: 'Zebronics',
    categoryId: 'ups-power',
    categoryLabel: 'Computer Accessories',
    specs: ['600VA / 360W Capacity', 'Automatic Voltage Regulation (AVR)', 'Surge Protection', 'Audible Alarm System'],
    priceDisplay: 'Contact for Latest Price',
    description: 'Protective battery backup that shields systems against blackouts and sudden power surges.',
    isDemo: true,
  },
];
