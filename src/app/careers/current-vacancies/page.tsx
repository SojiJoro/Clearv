"use client";
import { useState } from "react";

// Example list of vacancies
const vacanciesData = [
  {
    id: 1,
    title: "Support Worker",
    location: "Bournemouth",
    description:
      "Provide daily support for adults with autism in a residential setting. Foster independence and wellbeing.",
    applyLink: "/careers/apply?position=support-worker",
  },
  {
    id: 2,
    title: "Community Outreach Officer",
    location: "Poole",
    description:
      "Engage with local partners and families to deliver high-quality community-based support programmes.",
    applyLink: "/careers/apply?position=community-outreach-officer",
  },
  {
    id: 3,
    title: "Care Assistant",
    location: "Bournemouth",
    description:
      "Assist individuals with personal care, daily living tasks, and social activities in a supported living environment.",
    applyLink: "/careers/apply?position=care-assistant",
  },
  // Add more vacancies as needed
];

export default function CurrentVacancies() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter vacancies by title or location
  const filteredVacancies = vacanciesData.filter((vacancy) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      vacancy.title.toLowerCase().includes(lowerSearch) ||
      vacancy.location.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <div className="container my-5">
      <h1 className="mb-4">Current Vacancies</h1>

      {/* Search bar */}
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by role or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Vacancy list */}
      <div className="row">
        {filteredVacancies.length > 0 ? (
          filteredVacancies.map((vacancy) => (
            <div key={vacancy.id} className="col-md-6 mb-3">
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
          <p>No vacancies found.</p>
        )}
      </div>
    </div>
  );
}
