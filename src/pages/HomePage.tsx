import { StyleProvider } from "@/components/ui/StyleProvider";
import HeroOverlayParallax from "@/components/sections/hero/HeroOverlayParallax";
import AboutParallaxHighlight from "@/components/sections/about/AboutParallaxHighlight";
import ProductVariantCardsHighlight from "@/components/sections/product/ProductVariantCardsHighlight";
import TestimonialDetailedCardsHighlight from "@/components/sections/testimonial/TestimonialDetailedCardsHighlight";
import FaqSimpleHighlight from "@/components/sections/faq/FaqSimpleHighlight";

export default function HomePage() {
  return (
<StyleProvider siteBackground="none" heroBackground="none" buttonVariant="default">
        

        <div id="hero" data-section="hero">
          <HeroOverlayParallax
            imageSrc="https://storage.googleapis.com/webild/default/templates/monoblock-chairs/hero/hero.webp"
            avatarsLabel="The most iconic chair ever made."
            avatarsSrc={[
              "https://storage.googleapis.com/webild/default/templates/monoblock-chairs/avatars/avatar-1.webp",
              "https://storage.googleapis.com/webild/default/templates/monoblock-chairs/avatars/avatar-2.webp",
              "https://storage.googleapis.com/webild/default/templates/monoblock-chairs/avatars/avatar-3.webp",
            ]}
            title="The chair that sits"
            titleHighlight="everywhere."
            primaryButton={{ text: "Get started", href: "#collection" }}
            secondaryButton={{ text: "Learn more", href: "#about" }}
          />
        </div>

        <div id="about" data-section="about">
          <AboutParallaxHighlight
            textAnimation="slide-up"
            tag="About"
            title="The chair that sits"
            titleHighlight="everywhere."
            description="The monoblock chair is the most manufactured object in history. One mold, one material, one purpose — to give everyone a place to sit. We celebrate its humble genius and the stories it holds."
            primaryButton={{ text: "Our Story", href: "#story" }}
            secondaryButton={{ text: "Learn More", href: "#collection" }}
            backImageSrc="https://storage.googleapis.com/webild/default/templates/monoblock-chairs/about/about.webp"
            frontImageSrc="https://storage.googleapis.com/webild/default/templates/monoblock-chairs/about/about-front.webp"
          />
        </div>

        <div id="collection" data-section="collection">
          <ProductVariantCardsHighlight
            textAnimation="slide-up"
            tag="Collection"
            title="Explore Our Timeless"
            titleHighlight="Collection"
            description="From backyards to boulevards — explore the monoblock in all its forms, colors, and character."
            primaryButton={{ text: "Shop All", href: "#shop" }}
            secondaryButton={{ text: "Learn More", href: "#about" }}
            products={[
              { name: "Classic White", variant: "Stackable • Matte", price: "$12", imageSrc: "https://storage.googleapis.com/webild/default/templates/monoblock-chairs/products/classic-white.webp" },
              { name: "Beach Beige", variant: "Stackable • Matte", price: "$14", imageSrc: "https://storage.googleapis.com/webild/default/templates/monoblock-chairs/products/beach-beige.webp" },
              { name: "Ocean Blue", variant: "Stackable • Gloss", price: "$14", imageSrc: "https://storage.googleapis.com/webild/default/templates/monoblock-chairs/products/ocean-blue.webp" },
              { name: "Sunset Red", variant: "Stackable • Matte", price: "$14", imageSrc: "https://storage.googleapis.com/webild/default/templates/monoblock-chairs/products/sunset-red.webp" },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialDetailedCardsHighlight
            textAnimation="slide-up"
            tag="Reviews"
            title="What People Are"
            titleHighlight="Saying"
            description="From cafés to courtyards, hear why the monoblock is everyone's favorite seat."
            testimonials={[
              {
                title: "The perfect patio companion",
                quote: "We bought a dozen for our café terrace. They're light, stackable, and our customers love them. Rain or shine, they hold up beautifully.",
                name: "Jorge Santos",
                role: "Café Owner, Lisbon",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/monoblock-chairs/testimonials/jorge.webp",
              },
              {
                title: "Simple, honest design",
                quote: "There's something poetic about the monoblock. One mold, one material, one purpose. It's democratic design at its finest.",
                name: "Erik Lindgren",
                role: "Industrial Designer, Stockholm",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/monoblock-chairs/about/about-front.webp",
              },
              {
                title: "Built for real life",
                quote: "We use these for every family gathering. They stack in the garage, come out for birthdays, holidays, barbecues — they just work.",
                name: "James Okoro",
                role: "Homeowner, Lagos",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/monoblock-chairs/testimonials/conversations.webp",
              },
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSimpleHighlight
            textAnimation="slide-up"
            tag="FAQ"
            title="Frequently Asked"
            titleHighlight="Questions"
            description="Everything you need to know about the world's most universal chair."
            items={[
              { question: "What is a monoblock chair?", answer: "A monoblock chair is a single-piece plastic chair made from one mold. It's the most manufactured piece of furniture in history, found in every corner of the world." },
              { question: "Are monoblock chairs stackable?", answer: "Yes. One of the defining features of the monoblock is its stackability — they nest neatly on top of each other for easy storage and transport." },
              { question: "How durable are they?", answer: "Extremely durable. Made from polypropylene, monoblock chairs are weather-resistant, UV-stable, and built to handle years of daily use indoors and outdoors." },
              { question: "Can I use them outdoors?", answer: "Absolutely. Monoblock chairs are designed for outdoor use — they resist rain, sun, and humidity without rusting, rotting, or fading." },
              { question: "Do you offer bulk orders?", answer: "Yes, we offer bulk pricing for events, cafés, restaurants, and commercial spaces. Get in touch with us for a custom quote." },
            ]}
          />
        </div>

        
      </StyleProvider>
  );
}
