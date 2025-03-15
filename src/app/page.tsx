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

      {/* HERO SECTION */}
      <header className="hero">
        {/* Darkened overlay for better text contrast */}
        <div
          className="overlay"
          style={{ background: "rgba(0, 0, 0, 0.4)" }}
        ></div>
        <div className="container text-center position-relative">
          <h1>Professional &amp; Person-Centered Care</h1>
          {/* Subheading or tagline */}
          <h2 style={{ fontSize: "1.25rem", marginTop: "1rem", color: "#fff" }}>
            We are your trusted partner in social care, delivering high-quality support.
          </h2>
          <p style={{ color: "#fff", marginTop: "0.5rem" }}>
            Enhancing Lives with Professional Care.
          </p>
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
                  <span className="d-block text-muted small">
                    Fostering independence and self-confidence.
                  </span>
                </p>
                <Link
                  href="/what-we-do/adult-social-care"
                  className="btn btn-outline-primary"
                  style={{ backgroundColor: "#164B68", borderColor: "#164B68", color: "#fff" }}
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
                  style={{ backgroundColor: "#164B68", borderColor: "#164B68", color: "#fff" }}
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
                  style={{ backgroundColor: "#164B68", borderColor: "#164B68", color: "#fff" }}
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
              <p className="text-muted">You can reach out by completing the form or emailing us at:</p>
              <p className="fw-bold text-primary">
                <a href="mailto:contact@clearvitalsocialcare.com" className="text-primary">
                  contact@clearvitalsocialcare.com
                </a>
              </p>
              <div className="mt-4">
                <h5 className="text-muted mb-3">Follow us:</h5>
                <a href="#" className="me-3 text-dark"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="#" className="me-3 text-dark"><i className="fab fa-linkedin fa-2x"></i></a>
                <a href="#" className="text-dark"><i className="fab fa-twitter fa-2x"></i></a>
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
                  <select id="contactReason" className="form-control rounded-pill px-3">
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
                  style={{ backgroundColor: "#164B68", borderColor: "#164B68", color: "#fff" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* UPDATED FOOTER SECTION */}
      <footer className="py-5 text-white" style={{ backgroundColor: "#164B68" }}>
        <div className="container">
          <div className="row mb-4 align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h2 className="fw-bold fs-4 mb-3">
                Get in touch to start your Clear Vital Social Care journey with us today
              </h2>
              <p className="fs-6">
                Build a brighter future in healthcare together; with us by your side, you can achieve
                more than you think. When Clear Vital Social Care is involved, you're making a
                difference every step of the way.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <Image
                src="/images/cqc.png"
                alt="Care Quality Commission"
                width={150}
                height={50}
                className="me-3"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <h5 className="fw-bold fs-5">Clear Vital Social Care</h5>
              <p>0456 5654 66544</p>
              <p>
                <a href="mailto:info@clearvitalsocialcare.com" className="text-white text-decoration-none">
                  info@clearvitalsocialcare.com
                </a>
              </p>
              <p>
                Clear Vital Social Care
                <br />
                3r Floor, 12 Abbey Gardens
                <br />
                bOURNEMOUTH
                <br />
              </p>
            </div>
            <div className="col-md-4 mb-3 mb-md-0 text-center text-md-start">
              <h5 className="fw-bold fs-5">Join our newsletter</h5>
              <form className="d-flex">
                <input type="email" className="form-control me-4" placeholder="Email address" />
                <button className="btn btn-light">Sign up</button>
              </form>
            </div>
          </div>

          <hr className="my-4 border-light" />
        </div>
      </footer>
    </main>
  );
}
