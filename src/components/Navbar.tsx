"use client"; // Ensures it's a client-side component

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Function to close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <img src="/logo.png" alt="Logo" className="h-8" />
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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>

            {/* Dropdown - Who We Are */}
            <li className="nav-item dropdown" ref={dropdownRef}>
              <button
                className="nav-link dropdown-toggle"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen ? "true" : "false"}
              >
                Who We Are
              </button>
              <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                <li>
                  <Link
                    href="/who-we-are/mission"
                    className="dropdown-item"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/who-we-are/history"
                    className="dropdown-item"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Our History
                  </Link>
                </li>
                <li>
                  <Link
                    href="/who-we-are/values"
                    className="dropdown-item"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Our Values
                  </Link>
                </li>
                <li>
                  <Link
                    href="/who-we-are/team"
                    className="dropdown-item"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Our Team
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="/what-we-do" className="nav-link">What We Do</Link>
            </li>
            <li className="nav-item">
              <Link href="/how-you-can-help" className="nav-link">How You Can Help</Link>
            </li>
            <li className="nav-item">
              <Link href="/careers" className="nav-link">Careers</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact-us" className="nav-link">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
