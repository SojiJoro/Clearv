"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  useEffect(() => {
    // Load Bootstrap JS if you need modals, collapses, etc.
    // (Hover-based dropdown is handled via CSS, so data-bs-toggle isn't used for these links.)
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo & Home Link */}
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

        {/* Mobile Toggler */}
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

            {/* Who We Are (Hover Dropdown) */}
            <li className="nav-item dropdown me-3">
              {/* Parent link with .dropdown-toggle (no data-bs-toggle) */}
              <Link href="#" passHref>
                <a className="nav-link dropdown-toggle">Who We Are</a>
              </Link>
              {/* Sub-links appear in .dropdown-menu */}
              <div className="dropdown-menu">
                <Link href="/who-we-are/mission" passHref>
                  <a className="dropdown-item">Our Mission</a>
                </Link>
                <Link href="/who-we-are/history" passHref>
                  <a className="dropdown-item">Our History</a>
                </Link>
                <Link href="/who-we-are/values" passHref>
                  <a className="dropdown-item">Our Values</a>
                </Link>
                <Link href="/who-we-are/team" passHref>
                  <a className="dropdown-item">Our Team</a>
                </Link>
              </div>
            </li>

            {/* What We Do: Text Link + (Optional) Caret Link */}
            <li className="nav-item dropdown me-3 d-flex align-items-center">
              {/* 1) Main text link goes directly to /what-we-do */}
              <Link href="/what-we-do" passHref>
                <a className="nav-link">What We Do</a>
              </Link>
              {/* 2) Optional caret link, purely for style (no data-bs-toggle) */}
              <a className="nav-link dropdown-toggle" href="#">
                <span className="visually-hidden">Toggle Dropdown</span>
              </a>
              {/* Dropdown menu with sub-pages */}
              <div className="dropdown-menu">
                <Link href="/what-we-do/adult-social-care" passHref>
                  <a className="dropdown-item">Adult Social Care</a>
                </Link>
                <Link href="/what-we-do/children-families" passHref>
                  <a className="dropdown-item">Children & Families</a>
                </Link>
                <Link href="/what-we-do/supported-living" passHref>
                  <a className="dropdown-item">Supported Living</a>
                </Link>
                <Link href="/what-we-do/residential-care" passHref>
                  <a className="dropdown-item">Residential Care</a>
                </Link>
                <Link href="/what-we-do/day-services" passHref>
                  <a className="dropdown-item">Day Services</a>
                </Link>
                <Link href="/what-we-do/education-training" passHref>
                  <a className="dropdown-item">Education & Training</a>
                </Link>
              </div>
            </li>

            {/* How You Can Help (Hover Dropdown) */}
            <li className="nav-item dropdown me-3">
              <Link href="#" passHref>
                <a className="nav-link dropdown-toggle">How You Can Help</a>
              </Link>
              <div className="dropdown-menu">
                <Link href="/how-you-can-help/volunteer" passHref>
                  <a className="dropdown-item">Volunteer</a>
                </Link>
                <Link href="/how-you-can-help/donate" passHref>
                  <a className="dropdown-item">Donate</a>
                </Link>
                <Link href="/how-you-can-help/fundraising" passHref>
                  <a className="dropdown-item">Fundraising</a>
                </Link>
                <Link href="/how-you-can-help/corporate-partnerships" passHref>
                  <a className="dropdown-item">Corporate Partnerships</a>
                </Link>
              </div>
            </li>

            {/* Careers */}
            <li className="nav-item me-3">
              <Link href="/careers" passHref>
                <a className="nav-link">Careers</a>
              </Link>
            </li>

            {/* Contact Us */}
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
