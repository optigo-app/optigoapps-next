import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.scss";
import "./globals.css";
import ScrollTop from "@/components/ScrollTop/ScrollTop";
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/Footer'
import ShowContact from "@/components/ShowContact/ShowContact";
import LoadingProvider from "@/context/LoadingContext";
import PageLoadWatcher from "@/context/PageLoadWatcher";
import PromotionalBanner from "@/components/PromotionalBanner/PromotionalBanner";
import { Toaster } from "react-hot-toast";
import { toastConfig } from "@/toastConfig";
import { WEBSITE_URL } from "@/env";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  title: "Optigoapps | Cloud ERP for Diamond and Jewellery",
  description: "Optigoapps is a leading provider of Jewellery ERP and CRM solutions designed to empower jewellery businesses of all sizes. Our platform helps retailers, wholesalers, and manufacturers streamline operations, improve customer relationships, and maximize efficiency.",
  metadataBase: new URL(`${WEBSITE_URL}`), // replace with real domain
  openGraph: {
    title: "Optigoapps | Cloud ERP for Diamond and Jewellery",
    description: "Optigoapps is a leading provider of Jewellery ERP and CRM solutions designed to empower jewellery businesses of all sizes. Our platform helps retailers, wholesalers, and manufacturers streamline operations, improve customer relationships, and maximize efficiency.",
    url: `${WEBSITE_URL}`,
    siteName: "Optigoapps",
    images: [
      {
        url: "/logo.png", // relative is fine, it will resolve against metadataBase
        width: 1200,
        height: 630,
        alt: "Optigoapps Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optigoapps | Cloud ERP for Diamond and Jewellery",
    description: "Optigoapps is a leading provider of Jewellery ERP and CRM solutions designed to empower jewellery businesses of all sizes. Our platform helps retailers, wholesalers, and manufacturers streamline operations, improve customer relationships, and maximize efficiency.",
    images: ["/og-image.jpg"],
  },
  locale: "en_IN",
  type: "website",
};


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // customize as needed
  variable: '--font-poppins', // optional for CSS variable use
  display: 'swap',
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Toaster {...toastConfig} />
        {/* PROTOTYPE LABEL */}
        {/* <div
          style={{
            position: 'fixed',
            top: '25px',
            right: '45px',
            transform: 'translateX(50%) rotate(45deg)',
            background: 'red',
            color: 'white',
            padding: '6px 40px',
            fontWeight: 'bold',
            fontSize: '20px',
            zIndex: 10,
            whiteSpace: 'nowrap',
            boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
          }}
        >
          Prototype
        </div> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Optigoapps",
              "url": "https://www.optigoapps.com",
              "logo": "/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 90998 87762",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/OptigoApps/", // Add your social media links
                "https://x.com/optigoapps?lang=en",
                "https://www.linkedin.com/company/orail-optigo-apps/"
              ]
            })
          }}
        />
        <LoadingProvider>
          <PageLoadWatcher />
          <div className='mainHomeSection'>
            <Header />
            {children}
            <ShowContact />
            <Footer />
          </div>
        </LoadingProvider>

        {/* SCROLL TO TOP BUTTON */}
        <PromotionalBanner />
        <ScrollTop />
      </body>
    </html>
  );
}
