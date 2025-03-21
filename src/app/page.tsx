"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <header className="hero">
        <div className="overlay"></div>
        <div className="hero-content text-center">
          <h1>Professional & Person-Centered Care</h1>
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
          <p>This is the home page content. Replace it with your own text or add more sections as needed.</p>
        </div>
      </section>

      {/* FEATURED SECTIONS */}
      <section className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <i className="fas fa-home fa-2x text-primary mb-3"></i>
                <h5 className="card-title fw-bold">Supported Living</h5>
                <p className="card-text">
                  We offer flexible, individually-tailored supported living services for people with learning disabilities, autism, mental health conditions and associated complex needs.
                  <span className="d-block text-muted small">Fostering independence and self-confidence.</span>
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
                <h5 className="card-title fw-bold">Educational & Vocational Support</h5>
                <p className="card-text">
                  Our programmes help individuals build skills and gain meaningful work experience through training and vocational opportunities.
                  <span className="d-block text-muted small">Building knowledge and life skills.</span>
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
                <h5 className="card-title fw-bold">Careers & Vacancies</h5>
                <p className="card-text">
                  Join our dedicated team and make a real difference in people’s lives.
                  <span className="d-block text-muted small">Grow your career while helping others.</span>
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

      {/* Hero Inline Styles */}
      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          min-height: 70vh;
          background: url("/images/hero-bg.jpg") center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
        }
        .hero-content {
          position: relative;
          z-index: 1;
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
