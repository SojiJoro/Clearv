import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterTop from "@/components/FooterTop"; // <-- Import your pre-footer
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clear Vital Social Care",
  description: "Providing care, support, and education for people with autism.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="page-container">
          {/* Single global navigation bar */}
          <Navbar />

          {/* Main page content */}
          <main className="content">{children}</main>

          {/* Pre-Footer (the darker section with links & address) */}
          <FooterTop />

          {/* Existing Footer (social icons, etc.) */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
