"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // Track which dropdown is currently open
  // e.g. 'whoWeAre', 'whatWeDo', 'howYouCanHelp', 'careers', 'contactUs', or '' if none
  const [activeDropdown, setActiveDropdown] = useState("");

  // Toggle logic: if the user clicks the same menu again, close it; otherwise, open the new one.
  function handleToggleDropdown(menuName: string) {
    if (activeDropdown === menuName) {
      setActiveDropdown("");
    } else {
      setActiveDropdown(menuName);
    }
  }

  return (
    <main>
      {/* NAVIGATION BAR */}
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
              <li className="nav-item">
                <Link className="nav-link active" href="/">
                  Home
                </Link>
              </li>

              {/* Who We Are */}
              <li className="nav-item dropdown">
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
              <li className="nav-item dropdown">
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
              <li className="nav-item dropdown">
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
              <li className="nav-item dropdown">
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

      {/* HERO SECTION */}
      <header className="hero">
        <div className="overlay"></div>
        <div className="container text-center position-relative">
          <h1>Professional &amp; Person-Centered Care</h1>
          <p>Enhancing Lives with Professional Care.</p>
          <Link href="/who-we-are/mission" className="btn btn-primary btn-lg">
            Learn More
          </Link>
        </div>
      </header>

      {/* MAIN CONTENT SECTION */}
      <section className="container my-5">
        <div className="text-center">
          <h2 className="fw-bold">Welcome to Clear Vital Social Care</h2>
          <p>
            This is the home page content. Replace it with your own text or add more sections as needed.
          </p>
        </div>
      </section>

      {/* FEATURED SECTIONS */}
      <section className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <i className="fas fa-home fa-2x text-primary mb-3"></i>
                <h5 className="card-title fw-bold">Independent Living</h5>
                <p className="card-text">
                  We offer tailored support to help adults with autism live independently.
                </p>
                <Link href="/what-we-do/adult-social-care" className="btn btn-outline-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <i className="fas fa-school fa-2x text-success mb-3"></i>
                <h5 className="card-title fw-bold">Education &amp; Training</h5>
                <p className="card-text">
                  Our specialized courses empower individuals to reach their full potential.
                </p>
                <Link href="/what-we-do/education-training" className="btn btn-outline-success">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <i className="fas fa-chalkboard-teacher fa-2x text-warning mb-3"></i>
                <h5 className="card-title fw-bold">Careers &amp; Vacancies</h5>
                <p className="card-text">
                  Join our dedicated team and make a real difference in people’s lives.
                </p>
                <Link href="/careers/current-vacancies" className="btn btn-outline-warning">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
