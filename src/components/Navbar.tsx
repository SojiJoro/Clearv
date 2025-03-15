"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState("");

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

            {/* Replicate the same pattern for other dropdowns */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
