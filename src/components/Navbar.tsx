"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // ✅ Fix: Use require() instead of import() to prevent TypeScript errors
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  function handleToggleDropdown(menuName: string) {
    setActiveDropdown(activeDropdown === menuName ? "" : menuName);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image
            src="/images/logo.png"
            alt="Clear Vital Logo"
            width={50}
            height={50}
            className="logo-stroke me-2"
          />
          <span className="fw-bold">Clear Vital Social Care</span>
        </Link>

        {/* Hamburger Toggler */}
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
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>

            {/* Who We Are */}
            <li className="nav-item dropdown me-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleToggleDropdown("whoWeAre");
                }}
              >
                Who We Are
              </a>
              {activeDropdown === "whoWeAre" && (
                <ul className="dropdown-menu show">
                  <li>
                    <Link className="dropdown-item" href="/who-we-are/mission">
                      Our Mission
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/who-we-are/history">
                      Our History
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/who-we-are/values">
                      Our Values
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/who-we-are/team">
                      Our Team
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* What We Do */}
            <li className="nav-item dropdown me-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleToggleDropdown("whatWeDo");
                }}
              >
                What We Do
              </a>
              {activeDropdown === "whatWeDo" && (
                <ul className="dropdown-menu show">
                  <li>
                    <Link className="dropdown-item" href="/what-we-do/adult-social-care">
                      Adult Social Care
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/what-we-do/children-families">
                      Children &amp; Families
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/what-we-do/supported-living">
                      Supported Living
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/what-we-do/residential-care">
                      Residential Care
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/what-we-do/day-services">
                      Day Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/what-we-do/education-training">
                      Education &amp; Training
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* How You Can Help */}
            <li className="nav-item dropdown me-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleToggleDropdown("howYouCanHelp");
                }}
              >
                How You Can Help
              </a>
              {activeDropdown === "howYouCanHelp" && (
                <ul className="dropdown-menu show">
                  <li>
                    <Link className="dropdown-item" href="/how-you-can-help/volunteer">
                      Volunteer
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/how-you-can-help/donate">
                      Donate
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/how-you-can-help/fundraising">
                      Fundraising
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/how-you-can-help/corporate-partnerships">
                      Corporate Partnerships
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Careers */}
            <li className="nav-item me-3">
              <Link className="nav-link" href="/careers">
                Careers
              </Link>
            </li>

            {/* Contact Us */}
            <li className="nav-item me-3">
              <Link className="nav-link" href="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
