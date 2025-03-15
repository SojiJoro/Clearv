"use client";

import { useState } from "react";

export default function CurrentVacanciesPage() {
  // Local search term state
  const [searchTerm, setSearchTerm] = useState("");

  // Example static vacancies (replace with your own data)
  const vacanciesData = [
    {
      id: 1,
      title: "Support Worker",
      location: "Bournemouth",
      description:
        "Provide daily support for adults with autism in a residential setting. Foster independence and wellbeing.",
    },
    {
      id: 2,
      title: "Community Outreach Officer",
      location: "Poole",
      description:
        "Engage with local partners and families to deliver high-quality community-based support programmes.",
    },
    {
      id: 3,
      title: "Care Assistant",
      location: "Bournemouth",
      description:
        "Assist individuals with personal care, daily living tasks, and social activities in a supported living environment.",
    },
  ];

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
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by role or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Vacancy list */}
      {filteredVacancies.length > 0 ? (
        <div className="row">
          {filteredVacancies.map((vacancy) => (
            <div key={vacancy.id} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{vacancy.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Location: {vacancy.location}
                  </h6>
                  <p className="card-text">{vacancy.description}</p>
                  {/* Adjust link as needed */}
                  <a href="#" className="btn btn-primary">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No vacancies found.</p>
      )}
    </div>
  );
}
