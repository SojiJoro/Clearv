"use client";

import Image from "next/image";
import Link from "next/link";

export default function FooterTop() {
  return (
    <div style={{ backgroundColor: "#0F354D", color: "#fff", padding: "40px 0" }}>
      <div className="container">
        <div className="row g-4">
          {/* Column 1: Logo */}
          <div className="col-md-3">
            <Image
              src="/images/logo.png"
              alt="Clear Vital Social Care Logo"
              width={150}
              height={80}
            />
          </div>

          {/* Column 2: LINKS (Top Menus) */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">LINKS</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/who-we-are/mission" className="text-white">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-white">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/how-you-can-help" className="text-white">
                  How You Can Help
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: WHAT WE DO (Sub-Services) */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">WHAT WE DO</h5>
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
                  Educational & Vocational Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: GET IN TOUCH (Address & Email) */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">GET IN TOUCH</h5>
            <p className="mb-1">29 Alders Road</p>
            <p className="mb-1">Fareham, England</p>
            <p className="mb-1">PO16 0SH</p>
            <p className="mb-1">
              Email:{" "}
              <a href="mailto:info@clearvitalsocialcare.com" className="text-white">
                info@clearvitalsocialcare.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
