export default function Team() {
  return (
    <section className="team-section py-5 mt-5">
      <div className="container">
        {/* Heading Section */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Meet Our Team</h1>
          <p className="lead mb-0">
            Dedicated professionals working together to enhance lives.
          </p>
        </div>

        {/* Main Text (Centered) */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <p>
              Our team is composed of caregivers, social workers, mental health specialists, and 
              other dedicated professionals, all committed to delivering personalised care that 
              meets the unique needs of every individual. United by a shared passion for making 
              a difference, we work collaboratively to provide holistic support and promote 
              independence, dignity, and fulfilment in the lives of those we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
