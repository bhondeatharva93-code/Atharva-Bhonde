/**
 * COMPUTER GALAXY - Modern Tech Hardware Store & Custom PC Studio
 * Sirohi, Rajasthan, India
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { QuickTrustSection } from './components/QuickTrustSection';
import { ProductCategoriesSection } from './components/ProductCategoriesSection';
import { FeaturedPCBuilds } from './components/FeaturedPCBuilds';
import { CustomPCForm } from './components/CustomPCForm';
import { FeaturedProductsSection } from './components/FeaturedProductsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { BrandsSection } from './components/BrandsSection';
import { BulkOrdersSection } from './components/BulkOrdersSection';
import { LocationSection } from './components/LocationSection';
import { SocialSection } from './components/SocialSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

function MainLayout() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [customBuilderPurpose, setCustomBuilderPurpose] = useState<string>('Gaming');
  const [searchFocusCounter, setSearchFocusCounter] = useState<number>(0);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCustomPCBuilder = (purpose?: string) => {
    if (purpose) {
      setCustomBuilderPurpose(purpose);
    }
    const builderEl = document.getElementById('custom-pc-build');
    if (builderEl) {
      builderEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTriggerSearch = () => {
    setSearchFocusCounter((prev) => prev + 1);
  };

  const handleNavScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Header and Navigation */}
      <Header onSearchClick={handleTriggerSearch} />

      <main className="flex-1">
        {/* 3. Hero Section (including targeted h1 heading styled for light theme) */}
        <HeroSection
          onExploreProducts={() => {
            const el = document.getElementById('categories');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onBuildPC={() => handleOpenCustomPCBuilder('Gaming')}
        />

        {/* 4. Quick Trust Row */}
        <QuickTrustSection />

        {/* 5. 16 Product Categories */}
        <ProductCategoriesSection
          onSelectCategory={handleSelectCategory}
          activeCategoryId={selectedCategory}
        />

        {/* 6. Featured PC Builds (Gaming, Editing, Office, Custom) */}
        <FeaturedPCBuilds onOpenCustomPCBuilder={handleOpenCustomPCBuilder} />

        {/* 7. Interactive Custom PC Build Inquiry Tool */}
        <CustomPCForm initialPurpose={customBuilderPurpose} />

        {/* 8. Popular Computer Components / Product Showcase with Filters & Search */}
        <FeaturedProductsSection
          initialCategory={selectedCategory}
          searchFocusTrigger={searchFocusCounter}
        />

        {/* 9. Why Choose Computer Galaxy? */}
        <WhyChooseUsSection />

        {/* 10. Customer Reviews (Google Business Profile Rating 4.47/5) */}
        <GoogleReviewsSection />

        {/* 11. Brands We Offer */}
        <BrandsSection
          onSelectBrand={() => {
            const productsEl = document.getElementById('products');
            if (productsEl) productsEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 12. Wholesale & Bulk Orders Section */}
        <BulkOrdersSection />

        {/* 13. Storefront Location & Directions */}
        <LocationSection />

        {/* 14. Social Media Channels */}
        <SocialSection />

        {/* 15. FAQ Accordion */}
        <FAQSection />
      </main>

      {/* 16. Multi-Column Footer */}
      <Footer
        onNavClick={handleNavScroll}
        onCategoryClick={handleSelectCategory}
      />

      {/* 17. Fixed Floating WhatsApp Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}
