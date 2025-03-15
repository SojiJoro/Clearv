import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Metadata } from "next";
import Script from "next/script"; // optional if you want the toggler to work

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
      <head>
        {/* If you want the Bootstrap toggler to work in page.tsx, keep this Script. */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        {/* No Navbar here. Only the one in page.tsx. */}

        {/* You can add margin-top here if you have a fixed-top navbar in page.tsx */}
        <main style={{ marginTop: "80px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
