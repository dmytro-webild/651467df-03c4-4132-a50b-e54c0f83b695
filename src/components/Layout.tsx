import { Outlet } from 'react-router-dom';

import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import NavbarCenteredOverlay from "@/components/ui/NavbarCenteredOverlay";
import FooterSimpleReveal from "@/components/sections/footer/FooterSimpleReveal";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarCenteredOverlay
                logo="Mejia's Eternal Flowers"
                navItems={[
                  { name: "About", href: "#about" },
                  { name: "Arrangements", href: "#collection" },
                  { name: "Reviews", href: "#testimonials" },
                  { name: "FAQ", href: "#faq" },
                ]}
                ctaButton={{ text: "Order on Instagram", href: "https://instagram.com/mejia_eternalflowers_decor" }}
              />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterSimpleReveal
                brand="Monoblock"
                columns={[
                  {
                    title: "Shop",
                    items: [
                      { label: "All Chairs", href: "#collection" },
                      { label: "New Arrivals", href: "#" },
                      { label: "Best Sellers", href: "#" },
                      { label: "Bulk Orders", href: "#" },
                    ],
                  },
                  {
                    title: "Company",
                    items: [
                      { label: "About", href: "#about" },
                      { label: "Our Story", href: "#story" },
                      { label: "Careers", href: "#" },
                      { label: "Contact", href: "#" },
                    ],
                  },
                  {
                    title: "Support",
                    items: [
                      { label: "FAQ", href: "#faq" },
                      { label: "Shipping", href: "#" },
                      { label: "Returns", href: "#" },
                      { label: "Warranty", href: "#" },
                    ],
                  },
                ]}
                copyright="© 2026 Monoblock. All rights reserved."
                links={[
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                ]}
              />
    </StyleProvider>
  );
}
