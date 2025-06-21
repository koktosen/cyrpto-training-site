import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yellow Glove Cleaning | Luxury Home Care You Can Trust | San Diego",
  description:
    "Premium cleaning services for luxury homes and businesses in San Diego. Serving Rancho Santa Fe, Del Mar, La Jolla, and surrounding areas. Bonded, insured, and trusted by discerning homeowners.",
  keywords:
    "luxury house cleaning San Diego, premium cleaning services, Rancho Santa Fe cleaning, Del Mar house cleaning, La Jolla cleaning service, executive cleaning, gated community cleaning",
  authors: [{ name: "Yellow Glove Cleaning" }],
  creator: "Yellow Glove Cleaning",
  publisher: "Yellow Glove Cleaning",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goyellowglove.com",
    siteName: "Yellow Glove Cleaning",
    title: "Yellow Glove Cleaning | Luxury Home Care You Can Trust",
    description: "Premium cleaning services for luxury homes and businesses in San Diego's finest neighborhoods.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yellow Glove Cleaning - Luxury Home Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yellow Glove Cleaning | Luxury Home Care You Can Trust",
    description: "Premium cleaning services for luxury homes in San Diego",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-1/359852511_760510152745320_2543416203407910998_n.png?stp=dst-png_s480x480&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=9dPK5hWzvxAQ7kNvwFPU2Gd&_nc_oc=Admh9HAwqV0FbUZscNFiKeWU6UujIv3_fOAhEiy92bZSjlPyS225pPqeRbiVP4zmlPE&_nc_zt=24&_nc_ht=scontent-lax3-2.xx&_nc_gid=moL5I3mUppqmQm1uXXTGJQ&oh=00_AfOn7MbChrjwbBdlLkF7OnDWlAravqv2EJJ918doqjo5lw&oe=6857AF51",
    shortcut:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-1/359852511_760510152745320_2543416203407910998_n.png?stp=dst-png_s480x480&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=9dPK5hWzvxAQ7kNvwFPU2Gd&_nc_oc=Admh9HAwqV0FbUZscNFiKeWU6UujIv3_fOAhEiy92bZSjlPyS225pPqeRbiVP4zmlPE&_nc_zt=24&_nc_ht=scontent-lax3-2.xx&_nc_gid=moL5I3mUppqmQm1uXXTGJQ&oh=00_AfOn7MbChrjwbBdlLkF7OnDWlAravqv2EJJ918doqjo5lw&oe=6857AF51",
    apple:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-1/359852511_760510152745320_2543416203407910998_n.png?stp=dst-png_s480x480&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=9dPK5hWzvxAQ7kNvwFPU2Gd&_nc_oc=Admh9HAwqV0FbUZscNFiKeWU6UujIv3_fOAhEiy92bZSjlPyS225pPqeRbiVP4zmlPE&_nc_zt=24&_nc_ht=scontent-lax3-2.xx&_nc_gid=moL5I3mUppqmQm1uXXTGJQ&oh=00_AfOn7MbChrjwbBdlLkF7OnDWlAravqv2EJJ918doqjo5lw&oe=6857AF51",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Yellow Glove Cleaning",
  image:
    "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-1/359852511_760510152745320_2543416203407910998_n.png?stp=dst-png_s480x480&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=9dPK5hWzvxAQ7kNvwFPU2Gd&_nc_oc=Admh9HAwqV0FbUZscNFiKeWU6UujIv3_fOAhEiy92bZSjlPyS225pPqeRbiVP4zmlPE&_nc_zt=24&_nc_ht=scontent-lax3-2.xx&_nc_gid=moL5I3mUppqmQm1uXXTGJQ&oh=00_AfOn7MbChrjwbBdlLkF7OnDWlAravqv2EJJ918doqjo5lw&oe=6857AF51",
  description: "Premium cleaning services for luxury homes and businesses in San Diego",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Diego",
    addressRegion: "CA",
    postalCode: "91950",
    addressCountry: "US",
  },
  telephone: "+1-619-802-2984",
  url: "https://goyellowglove.com",
  priceRange: "$$$",
  serviceArea: [
    "Rancho Santa Fe, CA",
    "Del Mar, CA",
    "La Jolla, CA",
    "Solana Beach, CA",
    "Carmel Valley, CA",
    "Encinitas, CA",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Cleaning",
          description: "Premium house cleaning for luxury homes",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Cleaning",
          description: "Executive office and business cleaning services",
        },
      },
    ],
  },
  openingHours: "Mo-Fr 08:00-18:00",
  sameAs: ["https://www.google.com/maps/place/Yellow+Glove+Cleaning"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://goyellowglove.com" />
      </head>
      <body className={inter.className}>
        {children}

        {/* Google Analytics - Replace with your GA4 tracking ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  )
}
