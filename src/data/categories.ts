export interface CategoryItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  iconName: string;
  tag?: string;
}

export const PRODUCT_CATEGORIES: CategoryItem[] = [
  {
    id: 'processors',
    name: 'Processors',
    subtitle: 'Intel & AMD Ryzen',
    description: 'High-speed desktop and workstation processors for gaming, productivity, and creation.',
    iconName: 'Cpu',
  },
  {
    id: 'motherboards',
    name: 'Motherboards',
    subtitle: 'Intel & AMD Chipsets',
    description: 'Feature-rich ATX, mATX, and ITX motherboards from leading global manufacturers.',
    iconName: 'CircuitBoard',
  },
  {
    id: 'graphics-cards',
    name: 'Graphics Cards',
    subtitle: 'NVIDIA GeForce & AMD Radeon',
    description: 'Dedicated GPUs for 1080p, 1440p, 4K gaming, 3D rendering, and video editing.',
    iconName: 'Layers',
  },
  {
    id: 'ram',
    name: 'RAM',
    subtitle: 'DDR4 & DDR5 Modules',
    description: 'High-speed desktop and laptop memory modules for seamless multitasking.',
    iconName: 'MemoryStick',
  },
  {
    id: 'ssds-storage',
    name: 'SSDs and Storage',
    subtitle: 'NVMe M.2 & SATA Drives',
    description: 'Blazing-fast solid state drives and high-capacity hard drives for storage.',
    iconName: 'HardDrive',
  },
  {
    id: 'cabinets',
    name: 'Computer Cabinets',
    subtitle: 'High-Airflow & Tempered Glass',
    description: 'Modern PC cases with superior thermal design, cable management, and aesthetics.',
    iconName: 'Box',
  },
  {
    id: 'power-supplies',
    name: 'Power Supplies',
    subtitle: '80 PLUS Certified PSUs',
    description: 'Reliable, efficient power supply units engineered for stable high-load computing.',
    iconName: 'Zap',
  },
  {
    id: 'cpu-coolers',
    name: 'CPU Coolers',
    subtitle: 'Air & AIO Liquid Cooling',
    description: 'Advanced thermal cooling solutions to keep processors running quiet and chilled.',
    iconName: 'Fan',
  },
  {
    id: 'monitors',
    name: 'Monitors',
    subtitle: 'Gaming, Office & Color-Accurate',
    description: 'High-refresh rate gaming displays, ultra-wide productivity panels, and IPS screens.',
    iconName: 'Monitor',
  },
  {
    id: 'laptops',
    name: 'Laptops',
    subtitle: 'Gaming, Student & Business',
    description: 'Portable computing solutions from Lenovo, Dell, HP, ASUS, and Acer.',
    iconName: 'Laptop',
  },
  {
    id: 'printers',
    name: 'Printers',
    subtitle: 'Inkjet, All-in-One & Laser',
    description: 'Crisp document and photo printing solutions for offices, shops, and home setups.',
    iconName: 'Printer',
  },
  {
    id: 'keyboards-mice',
    name: 'Keyboards and Mice',
    subtitle: 'Mechanical & Ergonomic Combos',
    description: 'Tactile mechanical gaming keyboards, wireless productivity mice, and desk mats.',
    iconName: 'Keyboard',
  },
  {
    id: 'speakers-headphones',
    name: 'Speakers and Headphones',
    subtitle: 'Desktop Audio & Headsets',
    description: 'Clear stereo soundbars, gaming surround headsets, and multimedia speaker sets.',
    iconName: 'Headphones',
  },
  {
    id: 'accessories',
    name: 'Computer Accessories',
    subtitle: 'Cables, Adapters & Hubs',
    description: 'HDMI/DisplayPort cables, USB-C multi-port hubs, thermal paste, and mounting arms.',
    iconName: 'Usb',
  },
  {
    id: 'ups-power',
    name: 'UPS and Power Backup',
    subtitle: 'Line-Interactive Inverters',
    description: 'Surge protection and battery backup to safeguard systems from voltage fluctuations.',
    iconName: 'BatteryCharging',
  },
  {
    id: 'prebuilt-computers',
    name: 'Prebuilt Computers',
    subtitle: 'Assembled & Tested Systems',
    description: 'Ready-to-use desktop computers configured for office, commercial, and personal needs.',
    iconName: 'PcCase',
  },
];
