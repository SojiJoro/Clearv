// src/app/careers/current-vacancies/page.tsx

import VacanciesClient from "./VacanciesClient";

// Example function that fetches or returns vacancy data on the server
// Replace with a real API call, database query, or any server-side logic
async function getVacanciesData() {
  // For a real API:
  // const res = await fetch("https://example.com/api/vacancies", { cache: "no-store" });
  // if (!res.ok) throw new Error("Failed to fetch vacancies");
  // return await res.json();

  // For demonstration, return a static array:
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
    // Add more vacancies as needed
  ];
}

// By default, files in `app/` are Server Components, so we can run server-side code here
export default async function CurrentVacanciesPage() {
  const vacancies = await getVacanciesData();

  // Render the client component, passing the data as props
  return <VacanciesClient vacancies={vacancies} />;
}
