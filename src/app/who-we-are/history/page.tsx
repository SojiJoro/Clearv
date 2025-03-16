export default function HistoryPage() {
  return (
    <section className="history-section py-5 mt-5">
      <div className="container">
        {/* Heading Section */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Our History</h1>
          <p className="lead mb-0">A legacy of care, a future of compassion.</p>
        </div>

        {/* Main Content Centered */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <p>
              Clear Vital Social Care was founded with one simple vision:{" "}
              <strong>to make quality care accessible to those who need it the most</strong>. 
              Since our establishment, we have grown into a trusted provider of social care 
              services across the UK, supporting adults, children, and families through 
              dedicated residential, community, and specialist services.
            </p>
            <p>
              Our journey began with a small team of <strong>passionate carers and social workers</strong> 
              who recognised the need for a <strong>holistic, person-first approach</strong> 
              to care. Over the years, we have expanded our reach, developing innovative programs 
              to support people with <strong>learning disabilities, autism, dementia, 
              and complex care needs</strong>.
            </p>
            <p className="fw-bold">
              Today, we continue to evolve, but our values remain the same: 
              <strong> compassion, inclusivity, and excellence</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
