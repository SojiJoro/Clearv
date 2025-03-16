"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  useEffect(() => {
    // Load Bootstrap JS to enable dropdown toggling on mobile
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

            {/* Who We Are (Hybrid Dropdown) */}
            <li className="nav-item dropdown me-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Who We Are
              </a>
              <ul className="dropdown-menu">
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
            </li>

            {/* What We Do (Hybrid Dropdown) */}
            <li className="nav-item dropdown me-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                What We Do
              </a>
              <ul className="dropdown-menu">
                {/* Overview link to /what-we-do */}
                <li>
                  <Link href="/what-we-do" passHref>
                    <a className="dropdown-item">Overview</a>
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/adult-social-care" passHref>
                    <a className="dropdown-item">Adult Social Care</a>
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do/children-families" passHref>
                    <a className="dropdown-item">Children & Families</a>
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
                    <a className="dropdown-item">Education & Training</a>
                  </Link>
                </li>
              </ul>
            </li>

            {/* How You Can Help (Hybrid Dropdown) */}
            <li className="nav-item dropdown me-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                How You Can Help
              </a>
              <ul className="dropdown-menu">
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
