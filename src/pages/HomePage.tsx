// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import { StyleProvider } from "@/components/ui/StyleProvider";
import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import AboutSection from './HomePage/sections/About';
import CollectionSection from './HomePage/sections/Collection';
import TestimonialsSection from './HomePage/sections/Testimonials';
import FaqSection from './HomePage/sections/Faq';

export default function HomePage(): React.JSX.Element {
  return (
<StyleProvider siteBackground="none" heroBackground="none" buttonVariant="default">
        

        <HeroSection />

        <AboutSection />

        <CollectionSection />

        <TestimonialsSection />

        <FaqSection />

        
      </StyleProvider>
  );
}
