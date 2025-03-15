// src/app/careers/current-vacancies/VacanciesClient.tsx
"use client";

import { useState } from "react";

export default function VacanciesClient({ vacancies }: { vacancies: any[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the vacancies by title or location
  const filteredVacancies = vacancies.filter((vacancy) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      vacancy.title.toLowerCase().includes(lowerSearch) ||
      vacancy.location.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <div className="container my-5">
      {/* ---- INTRO TEXT (from your old page) ---- */}
      <h1 className="fw-bold text-center">Join Our Team</h1>
      <p className="lead text-center">
        Make a difference in people&apos;s lives with a career in social care.
      </p>
      <p>
        At <strong>Clear Vital Social Care</strong>, we are always looking for{" "}
        <strong>passionate, dedicated individuals</strong> who want to make a positive impact in
        their communities. Whether you are a{" "}
        <strong>care worker, support staff, or specialist therapist</strong>, we have a place for you.
      </p>
      <h3 className="fw-bold mt-4">Why Work With Us?</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">🟢 Competitive salaries and benefits</li>
        <li className="list-group-item">🟢 Flexible working hours</li>
        <li className="list-group-item">🟢 Training and career development opportunities</li>
        <li className="list-group-item">🟢 A supportive and inclusive work environment</li>
      </ul>
      <p className="text-center mt-4">
        <strong>Find out more about our latest vacancies and start your journey in care today.</strong>
      </p>

      {/* ---- SEARCH BAR ---- */}
      <div className="row my-5">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search by role or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* ---- VACANCY LIST ---- */}
      <div className="row">
        {filteredVacancies.length > 0 ? (
          filteredVacancies.map((vacancy) => (
            <div key={vacancy.id} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{vacancy.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Location: {vacancy.location}
                  </h6>
                  <p className="card-text flex-grow-1">{vacancy.description}</p>
                  <a
                    href={vacancy.applyLink}
                    className="btn btn-primary mt-2"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p>No vacancies found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
