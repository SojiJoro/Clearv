import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterTop from "@/components/FooterTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clear Vital Social Care - Professional & Person-Centered Care Services",
  description: "Clear Vital Social Care provides professional supported living, educational and vocational support services. We offer person-centered care and support for individuals with learning disabilities, autism, and mental health conditions.",
  keywords: "social care, supported living, educational support, vocational support, care services, learning disabilities, autism support, mental health care, UK care services",
  authors: [{ name: "Clear Vital Social Care" }],
  creator: "Clear Vital Social Care",
  publisher: "Clear Vital Social Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.clearvitalsocialcare.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Clear Vital Social Care',
    description: 'Professional & Person-Centered Care Services in the UK',
    url: 'https://www.clearvitalsocialcare.com',
    siteName: 'Clear Vital Social Care',
    images: [
      {
        url: 'https://www.clearvitalsocialcare.com/og-image.jpg', // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Clear Vital Social Care',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clear Vital Social Care',
    description: 'Professional & Person-Centered Care Services in the UK',
    images: ['https://www.clearvitalsocialcare.com/og-image.jpg'], // Same as OG image
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.clearvitalsocialcare.com" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <div className="page-container">
          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Clear Vital Social Care",
                "url": "https://www.clearvitalsocialcare.com",
                "logo": "https://www.clearvitalsocialcare.com/logo.png",
                "description": "Professional & Person-Centered Care Services",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "UK"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "your-phone-number", // Add your actual phone number
                  "contactType": "customer service"
                },
                "sameAs": [
                  "https://www.facebook.com/clearvitalsocialcare", // Add your actual social media URLs
                  "https://www.linkedin.com/company/clearvitalsocialcare",
                  "https://twitter.com/clearvitalcare"
                ]
              })
            }}
          />

          <Navbar />
          <main className="content">{children}</main>
          <FooterTop />
          <Footer />
        </div>
      </body>
    </html>
  );
}
