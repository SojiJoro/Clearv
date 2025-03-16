"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Load Bootstrap JS for dropdowns, etc.
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  // Toggle for custom dropdowns (Who We Are, How You Can Help)
  function handleToggleDropdown(menuName: string, e: React.MouseEvent) {
    e.preventDefault();
    setActiveDropdown(activeDropdown === menuName ? "" : menuName);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo / Home Link */}
        <Link href="/" passHref>
          <a className="navbar-brand d-flex align-items-center">
            <Image
              src="/images/logo.png"
              alt="Clear Vital Logo"
              width={50}
              height={50}
              className="logo-stroke me-2"
            />
            <span className="fw-bold">Clear Vital Social Care</span>
          </a>
        </Link>

        {/* Hamburger Toggler (mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {/* Home */}
            <li className="nav-item me-3">
              <Link href="/" passHref>
                <a className="nav-link">Home</a>
              </Link>
            </li>

            {/* Who We Are (custom dropdown) */}
            <li className="nav-item dropdown me-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                onClick={(e) => handleToggleDropdown("whoWeAre", e)}
              >
                Who We Are
              </a>
              {activeDropdown === "whoWeAre" && (
                <ul className="dropdown-menu show">
                  <li>
                    <Link href="/who-we-are/mission" passHref>
                      <a className="dropdown-item">Our Mission</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/who-we-are/history" passHref>
                      <a className="dropdown-item">Our History</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/who-we-are/values" passHref>
                      <a className="dropdown-item">Our Values</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/who-we-are/team" passHref>
                      <a className="dropdown-item">Our Team</a>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* What We Do (Bootstrap default dropdown) */}
            <li className="nav-item dropdown me-3">
              {/* This link goes directly to /what-we-do instead of "#" */}
              <Link href="/what-we-do" passHref>
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown" // Tells Bootstrap to handle the dropdown
                  aria-expanded="false"
                  role="button"
                >
                  What We Do
                </a>
              </Link>
              {/* Sub-links appear in a standard Bootstrap dropdown */}
              <ul className="dropdown-menu">
                <li>
                  <Link href="/what-we-do/adult-social-care" passHref>
                    <a className="dropdown-item">Adult Social Care</a>
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/children-families" passHref>
                    <a className="dropdown-item">Children &amp; Families</a>
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/supported-living" passHref>
                    <a className="dropdown-item">Supported Living</a>
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/residential-care" passHref>
                    <a className="dropdown-item">Residential Care</a>
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/day-services" passHref>
                    <a className="dropdown-item">Day Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/education-training" passHref>
                    <a className="dropdown-item">Education &amp; Training</a>
                  </Link>
                </li>
              </ul>
            </li>

            {/* How You Can Help (custom dropdown) */}
            <li className="nav-item dropdown me-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                onClick={(e) => handleToggleDropdown("howYouCanHelp", e)}
              >
                How You Can Help
              </a>
              {activeDropdown === "howYouCanHelp" && (
                <ul className="dropdown-menu show">
                  <li>
                    <Link href="/how-you-can-help/volunteer" passHref>
                      <a className="dropdown-item">Volunteer</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-you-can-help/donate" passHref>
                      <a className="dropdown-item">Donate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-you-can-help/fundraising" passHref>
                      <a className="dropdown-item">Fundraising</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-you-can-help/corporate-partnerships" passHref>
                      <a className="dropdown-item">Corporate Partnerships</a>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Careers (Single Link) */}
            <li className="nav-item me-3">
              <Link href="/careers" passHref>
                <a className="nav-link">Careers</a>
              </Link>
            </li>

            {/* Contact Us (Single Link) */}
            <li className="nav-item me-3">
              <Link href="/contact-us" passHref>
                <a className="nav-link">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
