"use client"; // Must be a client component

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown if user clicks outside the navbar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle a specific dropdown open or closed
  function handleToggleDropdown(menuName: string) {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  }

  return (
    <nav
      ref={navRef}
      className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top"
    >
      <div className="container">
        {/* Logo / Brand */}
        <Link href="/" className="navbar-brand">
          <img src="/images/logo.png" alt="Logo" className="h-8 me-2" />
          Clear Vital Social Care
        </Link>

        {/* Toggle Button for Mobile */}
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home Link */}
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>

            {/* Who We Are Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                onClick={() => handleToggleDropdown("who-we-are")}
                aria-expanded={openDropdown === "who-we-are"}
                style={{ background: "none", border: "none" }}
              >
                Who We Are
              </button>
              <ul
                className={`dropdown-menu ${
                  openDropdown === "who-we-are" ? "show" : ""
                }`}
              >
                <li>
                  <Link
                    href="/who-we-are/mission"
                    className="dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/who-we-are/history"
                    className="dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Our History
                  </Link>
                </li>
                <li>
                  <Link
                    href="/who-we-are/values"
                    className="dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Our Values
                  </Link>
                </li>
                <li>
                  <Link
                    href="/who-we-are/team"
                    className="dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Our Team
                  </Link>
                </li>
              </ul>
            </li>

            {/* What We Do Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                onClick={() => handleToggleDropdown("what-we-do")}
                aria-expanded={openDropdown === "what-we-do"}
                style={{ background: "none", border: "none" }}
              >
                What We Do
              </button>
              <ul
                className={`dropdown-menu ${
                  openDropdown === "what-we-do" ? "show" : ""
                }`}
              >
                <li>
                  <Link
                    href="/what-we-do/adult-social-care"
                    className="dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Adult Social Care
                  </Link>
                </li>
                <li>
                  <Link
                    href="/what-we-do/children-families"
                    className="dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Children & Families
                  </Link>
                </li>
                <li>
                  <Link
                    href="/what-we-do/supported-living"
                    className="dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Supported Living
                  </Link>
                </li>
                <li>
                  <Link
                    href="/what-we-do/residential-care"
                    className="dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Residential Care
                  </Link>
                </li>
                <li>
                  <Link
                    href="/what-we-do/day-services"
                    className="dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Day Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/what-we-do/education-training"
                    className="dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Education & Training
                  </Link>
                </li>
              </ul>
            </li>

            {/* How You Can Help */}
            <li className="nav-item">
              <Link href="/how-you-can-help" className="nav-link">
                How You Can Help
              </Link>
            </li>

            {/* Careers */}
            <li className="nav-item">
              <Link href="/careers" className="nav-link">
                Careers
              </Link>
            </li>

            {/* Contact Us Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                onClick={() => handleToggleDropdown("contact-us")}
                aria-expanded={openDropdown === "contact-us"}
                style={{ background: "none", border: "none" }}
              >
                Contact Us
              </button>
              <ul
                className={`dropdown-menu ${
                  openDropdown === "contact-us" ? "show" : ""
                }`}
              >
                <li>
                  <Link
                    href="/contact-us/customer-support"
                    className="dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us/complaints"
                    className="dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Complaints
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us/feedback"
                    className="dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Feedback
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
