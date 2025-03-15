import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS for toggler & dropdowns
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Metadata } from "next";

// If you have a separate Footer component, import it. Otherwise, 
// we will place your "updated footer" code here.

export const metadata: Metadata = {
  title: "Clear Vital Social Care",
  description: "Providing care, support, and education for people with autism.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Copied your entire NAVBAR code here, unchanged.
  const [activeDropdown, setActiveDropdown] = useState("");
  function handleToggleDropdown(menuName: string) {
    if (activeDropdown === menuName) {
      setActiveDropdown("");
    } else {
      setActiveDropdown(menuName);
    }
  }

  return (
    <html lang="en">
      <body>
        {/* NAVIGATION BAR - visible on all pages */}
        <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
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

            {/* Hamburger Button */}
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

            {/* Desktop Menu */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                {/* Home */}
                <li className="nav-item me-3">
                  <Link className="nav-link active" href="/">
                    Home
                  </Link>
                </li>

                {/* Who We Are */}
                <li className="nav-item dropdown me-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    onClick={() => handleToggleDropdown("whoWeAre")}
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
                    onClick={() => handleToggleDropdown("whatWeDo")}
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
                    onClick={() => handleToggleDropdown("howYouCanHelp")}
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
                <li className="nav-item dropdown me-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    onClick={() => handleToggleDropdown("careers")}
                  >
                    Careers
                  </a>
                  {activeDropdown === "careers" && (
                    <ul className="dropdown-menu show">
                      <li>
                        <Link className="dropdown-item" href="/careers/current-vacancies">
                          Current Vacancies
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/careers/why-work-with-us">
                          Why Work With Us
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/careers/apply">
                          Apply
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Contact Us */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    onClick={() => handleToggleDropdown("contactUs")}
                  >
                    Contact Us
                  </a>
                  {activeDropdown === "contactUs" && (
                    <ul className="dropdown-menu show">
                      <li>
                        <Link className="dropdown-item" href="/contact-us/general-enquiry">
                          General Enquiry
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/contact-us/locations">
                          Locations / Offices
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/contact-us/complaints-feedback">
                          Complaints &amp; Feedback
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* The rest of your site’s pages go here */}
        <main style={{ marginTop: "80px" }}>
          {children}
        </main>

        {/* FOOTER (Optional) 
            If you have a separate Footer component, import & use <Footer /> here.
            Otherwise, paste your entire "updated footer" code below. 
        */}
        {/* 
          <footer className="py-5 text-white" style={{ backgroundColor: "#164B68" }}>
            ...
          </footer> 
        */}
      </body>
    </html>
  );
}
