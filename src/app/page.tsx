"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLarge"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Shop",
          id: "products",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
      ]}
      brandName="EverBloom"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Timeless Elegance, Forever Fresh"
      description="Discover our collection of premium, life-like artificial flowers and drapes. Designed to bring natural beauty into your home, permanently."
      buttons={[
        {
          text: "Shop Collection",
          href: "#products",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/flowers-with-blackboard_23-2148164116.jpg",
          imageAlt: "White Roses",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/flip-flop-miniature-travel-bag-cactus-plant-different-type-background_23-2147958161.jpg",
          imageAlt: "Orchid Centerpiece",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/furoshiki-packages-arrangement-still-life_23-2150642989.jpg",
          imageAlt: "Peony Arrangement",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-minimal-tropical-plant-composition_23-2148955734.jpg",
          imageAlt: "Tulip Vase",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/blooming-green-flowers-market_23-2147761208.jpg",
          imageAlt: "Hydrangea Bouquet",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-blurry-woman-couch_23-2149326479.jpg",
          imageAlt: "Drape & Floral Display",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Crafted to Perfection"
      description="At EverBloom, we believe artificial shouldn't mean fake. Our curated collection of botanicals mimics nature's finest details, offering vibrant, lasting beauty for your home or event."
      bulletPoints={[
        {
          title: "Premium Materials",
          description: "High-quality silk and faux fibers for lifelike touch.",
        },
        {
          title: "Lasting Beauty",
          description: "UV-resistant and maintenance-free design.",
        },
        {
          title: "Expert Styling",
          description: "Curated arrangements by professional interior stylists.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-decorating-her-house-with-orchids_23-2150970110.jpg"
      imageAlt="Botanical floral design"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Silk Rose Bundle",
          price: "$85.00",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-white-roses-blue-plate-blue_114579-91941.jpg",
          imageAlt: "Rose Bundle",
        },
        {
          id: "p2",
          name: "Luxury Orchid Pot",
          price: "$120.00",
          imageSrc: "http://img.b2bpic.net/free-photo/decorative-plant-inside-minimal-vase_23-2148207052.jpg",
          imageAlt: "Orchid Pot",
        },
        {
          id: "p3",
          name: "Pastel Hydrangea Vase",
          price: "$95.00",
          imageSrc: "http://img.b2bpic.net/free-vector/watercolor-floral-peonies-roses-invitation-card-set_21799-6418.jpg",
          imageAlt: "Hydrangea Vase",
        },
      ]}
      title="Featured Botanical Collections"
      description="Explore our best-selling silk arrangements and elegant drapes."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="The quality is simply unmatched. My guests keep asking how often I water them—they look absolutely real!"
      rating={5}
      author="Elena Rodriguez"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/woman-with-sunflower-bouquet_23-2148510362.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-with-mug-her-hand_23-2150656213.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/well-dressed-asian-lady-posing-near-flower-shop-with-large-elaborate-bouquet_1098-17409.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/funny-young-lady-trendy-pants-standing-one-leg-showing-peace-sign-with-smile_197531-4673.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-with-sunflower-bouquet_23-2148510362.jpg",
          alt: "Customer 5",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How do I clean my artificial flowers?",
          content: "Simply dust with a soft brush or use a cool hair dryer setting.",
        },
        {
          id: "q2",
          title: "Are these suitable for outdoor use?",
          content: "Our collection is primarily designed for indoor elegance.",
        },
        {
          id: "q3",
          title: "Do you offer shipping?",
          content: "Yes, we ship nationwide with secure packaging for delicate items.",
        },
      ]}
      sideTitle="Questions?"
      sideDescription="Need help finding the perfect accent for your home?"
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="EverBloom"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Flowers",
              href: "#products",
            },
            {
              label: "Drapes",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 | EverBloom Boutique"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
