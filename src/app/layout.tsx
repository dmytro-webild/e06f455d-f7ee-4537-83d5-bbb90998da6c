import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'MGLUX Event Design & Flowers Boutique | Premium Artificial Flowers & Accessories',
  description: 'Elevate your space with curated collection of ultra-realistic artificial flowers and elegant drapes. Timeless beauty, maintenance-free. Have a big event like wedding, bridal shower, birthday or proposal? Sit back and relax. We have complete packages to make your event unforgettable. 's curated collection of ultra-realistic artificial flowers and elegant drapes. Timeless beauty, maintenance-free.',
  openGraph: {
    "title": "EverBloom | Faux Floral Elegance",
    "description": "Discover high-end realistic silk arrangements.",
    "siteName": "EverBloom"
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
