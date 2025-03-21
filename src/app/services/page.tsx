"use client";

import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  // Define your services data (title, link, and image)
  const services = [
    {
      title: "Adult Social Care",
      href: "/services/adult-social-care",
      image: "/images/adult-social-care.jpg",
    },
    {
      title: "Supported Living",
      href: "/services/supported-living",
      image: "/images/supported-living.jpg",
    },
    {
      title: "Educational & Vocational Support",
      href: "/services/educational-vocational-support",
      image: "/images/education-training.jpg",
    },
  ];

  return (
    <section className="what-we-do-section py-5 mt-5">
      <div className="container">
        {/* Heading and Overview Text */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Services</h1>
        </div>
        <div className="mb-5">
          <p>
            Clear Vital Social Care provides flexible, individually-tailored supported living
            services in Hampshire and Dorset for people with learning disabilities, autism, mental
            health conditions and associated complex needs. Our support packages range from a few
            hours a day to help with independent living skills, assist with shopping, cooking and
            personal care and provide access to resources in the community, right up to full-time,
            24-7 specialist care.
          </p>
          <p>
            As a service, we work closely with local authority commissioners, care professionals and
            accommodation providers to support people with their own tenancy to live as
            independently as possible, while still being able to rely on the individual care and
            assistance they need. Our supported living services are highly personalised, structured
            around the requirements, capabilities and preferences of the people we support.
          </p>
          <p>
            We support people in shared and individual properties across the county, including
            Hampshire and Dorset.
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
                      background: "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1))",
                    }}
                  >
                    <h3 className="text-white fw-bold p-3 m-0">{service.title}</h3>
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
