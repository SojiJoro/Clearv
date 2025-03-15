import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JavaScript loads
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clear Vital Social Care",
  description: "Providing care, support, and education for people with autism.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Bar - Always visible on all pages */}
        <Navbar />

        {/* Main content area with margin so it doesn't overlap with the navbar */}
        <main style={{ marginTop: "80px", minHeight: "80vh" }}>
          {children}
        </main>

        {/* Footer - Always visible on all pages */}
        <Footer />
      </body>
    </html>
  );
}
