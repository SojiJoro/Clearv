import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "@/components/Navbar";
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
        {/* Single Navbar for the entire site */}
        <Navbar />

        {/* Add top margin so content is visible below the fixed navbar */}
        <main style={{ marginTop: "80px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
