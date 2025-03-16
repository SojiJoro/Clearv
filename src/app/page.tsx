"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // Track which dropdown is currently open
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
    <>
      <main>
        {/* NAVIGATION BAR */}
        <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
          <div className="container d-flex justify-content-between align-items-center">
            {/* Logo */}
            <Link className="navbar-brand d-flex align-items-center" href="/">
              <Image
                src="/images/logo.png" // Adjust path as needed
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
                        <Link
                          className="dropdown-item"
                          href="/how-you-can-help/corporate-partnerships"
                        >
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
                        <Link
                          className="dropdown-item"
                          href="/contact-us/complaints-feedback"
                        >
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
          <div className="hero-content text-center">
            <h1>Professional &amp; Person-Centered Care</h1>
            <h2>We are your trusted partner in social care, delivering high-quality support.</h2>
            <p>Enhancing Lives with Professional Care.</p>
            <Link
              href="/who-we-are/mission"
              className="btn btn-primary btn-lg"
              style={{ backgroundColor: "#164B68", borderColor: "#164B68", color: "#fff" }}
            >
              Learn More
            </Link>
          </div>
        </header>

        {/* MAIN CONTENT SECTION */}
        <section className="container my-5">
          <div className="text-center">
            <h2 className="fw-bold">Welcome to Clear Vital Social Care</h2>
            <p>
              This is the home page content. Replace it with your own text or add more sections as
              needed.
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
                    <span className="d-block text-muted small">
                      Fostering independence and self-confidence.
                    </span>
                  </p>
                  <Link
                    href="/what-we-do/adult-social-care"
                    className="btn btn-outline-primary"
                    style={{
                      backgroundColor: "#164B68",
                      borderColor: "#164B68",
                      color: "#fff",
                    }}
                  >
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
                    <span className="d-block text-muted small">
                      Building knowledge and life skills.
                    </span>
                  </p>
                  <Link
                    href="/what-we-do/education-training"
                    className="btn btn-outline-success"
                    style={{
                      backgroundColor: "#164B68",
                      borderColor: "#164B68",
                      color: "#fff",
                    }}
                  >
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
                    <span className="d-block text-muted small">
                      Grow your career while helping others.
                    </span>
                  </p>
                  <Link
                    href="/careers/current-vacancies"
                    className="btn btn-outline-warning"
                    style={{
                      backgroundColor: "#164B68",
                      borderColor: "#164B68",
                      color: "#fff",
                    }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section py-5 bg-light mb-0">
          <div className="container">
            <div className="row align-items-center">
              {/* Contact Info */}
              <div className="col-md-6 mb-4 mb-md-0">
                <h2 className="fw-bold text-dark mb-3">Contact Us</h2>
                <p className="text-muted">
                  You can reach out by completing the form or emailing us at:
                </p>
                <p className="fw-bold text-primary">
                  <a
                    href="mailto:contact@clearvitalsocialcare.com"
                    className="text-primary"
                  >
                    contact@clearvitalsocialcare.com
                  </a>
                </p>
                <div className="mt-4">
                  <h5 className="text-muted mb-3">Follow us:</h5>
                  <a href="#" className="me-3 text-dark">
                    <i className="fab fa-facebook fa-2x"></i>
                  </a>
                  <a href="#" className="me-3 text-dark">
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                  <a href="#" className="text-dark">
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-md-6">
                <form className="p-4 rounded shadow-sm bg-white">
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label fw-bold">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      className="form-control rounded-pill px-3"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactReason" className="form-label fw-bold">
                      Reason for Contact
                    </label>
                    <select
                      id="contactReason"
                      className="form-control rounded-pill px-3"
                    >
                      <option>Choose an option</option>
                      <option>General Inquiry</option>
                      <option>Support Services</option>
                      <option>Careers</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label fw-bold">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="text"
                      className="form-control rounded-pill px-3"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control rounded-pill px-3"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label fw-bold">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="form-control rounded px-3"
                      rows={4}
                      placeholder="Type your message here"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 rounded-pill"
                    style={{
                      backgroundColor: "#164B68",
                      borderColor: "#164B68",
                      color: "#fff",
                    }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*
        Inline CSS via <style jsx>. You could also place this in a global CSS or module CSS.
      */}
      <style jsx>{`
        /* HERO STYLING */
        .hero {
          position: relative;
          width: 100%;
          min-height: 70vh; /* adjust as needed for desired hero height */
          background: url("/images/hero-bg.jpg") center/cover no-repeat; /* adjust path to your image */
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4); /* Dark overlay for better text contrast */
        }
        .hero-content {
          position: relative;
          z-index: 1; /* ensures the text is above the overlay */
          color: #fff;
          max-width: 800px;
          margin: 0 auto;
        }
        .hero-content h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .hero-content h2 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          font-weight: 300;
        }
        .hero-content p {
          margin-bottom: 1.5rem;
        }
      `}</style>
    </>
  );
}
