// 1) SERVER COMPONENT: fetches vacancy data
// 2) CLIENT COMPONENT: displays the list & search bar

// --- SERVER IMPORTS ---
import React from "react";

// Example function that fetches vacancy data
// (Replace with your real API call or database query)
async function getVacanciesData() {
  // For a real API:
  // const res = await fetch("https://example.com/api/vacancies", { cache: "no-store" });
  // if (!res.ok) throw new Error("Failed to fetch vacancies");
  // return res.json();

  // For demonstration, return a local array:
  return [
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
  ];
}

// The default export is a SERVER COMPONENT by default in Next.js 13.
export default async function CurrentVacanciesPage() {
  // 1) Fetch the data on the server side
  const vacanciesData = await getVacanciesData();

  // 2) Render a CLIENT COMPONENT (defined below), passing the data as props
  return <VacanciesClient vacancies={vacanciesData} />;
}

// --- CLIENT COMPONENT ---
function VacanciesClient({ vacancies }: { vacancies: any[] }) {
  "use client"; // Must be declared inside the function to allow useState, etc.

  import { useState } from "react";
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
      {/* ---- INTRO TEXT ---- */}
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
                  <a href={vacancy.applyLink} className="btn btn-primary mt-2">
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
