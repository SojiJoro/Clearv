export default function ValuesPage() {
  return (
    <section className="values-section py-5 mt-5">
      <div className="container">
        {/* Heading Area */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Our Values</h1>
          <p className="lead mb-0">The foundation of everything we do.</p>
        </div>

        {/* Main Content Centered */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item">
                <strong>Compassion:</strong> We treat every individual with kindness, dignity, and understanding.
              </li>
              <li className="list-group-item">
                <strong>Respect:</strong> We celebrate diversity and uphold the rights and choices of those in our care.
              </li>
              <li className="list-group-item">
                <strong>Empowerment:</strong> We provide individuals with the tools and support to live as independently as possible.
              </li>
              <li className="list-group-item">
                <strong>Excellence:</strong> We are committed to delivering the highest standards of care and support.
              </li>
              <li className="list-group-item">
                <strong>Integrity:</strong> We operate with transparency and accountability in everything we do.
              </li>
            </ul>

            <p className="text-center mt-4 fw-bold">
              Our values guide our care, our people, and our mission to improve lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
