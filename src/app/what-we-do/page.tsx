"use client";
import Link from "next/link";
import Image from "next/image";

export default function WhatWeDoPage() {
  // Define your services data (title, link, and image)
  const services = [
    {
      title: "Adult Social Care",
      href: "/what-we-do/adult-social-care",
      image: "/images/adult-social-care.jpg", // Replace with actual image path
    },
    {
      title: "Children & Families",
      href: "/what-we-do/children-families",
      image: "/images/children-families.jpg",
    },
    {
      title: "Supported Living",
      href: "/what-we-do/supported-living",
      image: "/images/supported-living.jpg",
    },
    {
      title: "Residential Care",
      href: "/what-we-do/residential-care",
      image: "/images/residential-care.jpg",
    },
    {
      title: "Day Services",
      href: "/what-we-do/day-services",
      image: "/images/day-services.jpg",
    },
    {
      title: "Education & Training",
      href: "/what-we-do/education-training",
      image: "/images/education-training.jpg",
    },
  ];

  return (
    <section className="what-we-do-section py-5 mt-5">
      <div className="container">
        {/* Heading Section */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">What We Do</h1>
          <p className="lead mb-0">
            Learn about the various services we provide to support individuals in the community.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-sm-6 col-md-4">
              <Link href={service.href} className="text-decoration-none text-dark">
                <div className="card h-100 border-0 position-relative overflow-hidden shadow">
                  {/* Image Container */}
                  <div className="ratio ratio-16x9">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Text Overlay */}
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1))",
                    }}
                  >
                    <h3 className="text-white fw-bold p-3 m-0">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
