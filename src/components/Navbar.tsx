"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState("");

  function handleToggleDropdown(menuName: string) {
    setActiveDropdown(activeDropdown === menuName ? "" : menuName);
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image src="/images/logo.png" alt="Clear Vital Logo" width={50} height={50} className="logo-stroke me-2" />
          <span className="fw-bold">Clear Vital Social Care</span>
        </Link>

        {/* Hamburger Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" href="/">Home</Link>
            </li>

            {/* Who We Are */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" onClick={() => handleToggleDropdown("whoWeAre")}>
                Who We Are
              </a>
              {activeDropdown === "whoWeAre" && (
                <ul className="dropdown-menu show">
                  <li><Link className="dropdown-item" href="/who-we-are/mission">Our Mission</Link></li>
                  <li><Link className="dropdown-item" href="/who-we-are/history">Our History</Link></li>
                  <li><Link className="dropdown-item" href="/who-we-are/values">Our Values</Link></li>
                  <li><Link className="dropdown-item" href="/who-we-are/team">Our Team</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
