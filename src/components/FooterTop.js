"use client";
import Image from "next/image";
import Link from "next/link";

export default function FooterTop() {
  return (
    <div style={{ backgroundColor: "#0F354D", color: "#fff", padding: "40px 0" }}>
      <div className="container">
        <div className="row g-4">
          {/* Column 1: Logo with a smaller white background */}
          <div className="col-md-3 d-flex align-items-center">
            <div
              style={{
                backgroundColor: "#fff",
                padding: "5px",       // Adjust padding to reduce the white area
                borderRadius: "6px",  // Optional rounding
                display: "inline-block",
              }}
            >
              <Image
                src="/images/logo.png"
                alt="Clear Vital Social Care Logo"
                width={100}          // Smaller logo width
                height={60}          // Adjust height to match proportion
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-white">Home</Link>
              </li>
              <li>
                <Link href="/who-we-are/mission" className="text-white">Who We Are</Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-white">What We Do</Link>
              </li>
              <li>
                <Link href="/how-you-can-help" className="text-white">How You Can Help</Link>
              </li>
              <li>
                <Link href="/careers" className="text-white">Careers</Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-white">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: What We Do */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">What We Do</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/what-we-do/adult-social-care" className="text-white">
                  Adult Social Care
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/supported-living" className="text-white">
                  Supported Living
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/educational-vocational-support" className="text-white">
                  Educational &amp; Vocational Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Get in Touch</h5>
            <p className="mb-1">Ground Floor, Building 1000</p>
            <p className="mb-1">Western Road, Portsmouth</p>
            <p className="mb-1">Hampshire</p>
            <p className="mb-1">PO6 3EZ</p>
            <p className="mb-1">
              Email:{" "}
              <Link href="mailto:info@clearvitalsocialcare.com" className="text-white">
                info@clearvitalsocialcare.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
