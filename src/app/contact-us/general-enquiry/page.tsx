export default function ContactUsPage() {
    return (
      <div className="container my-5">
        <h1 className="fw-bold text-center">Get in Touch</h1>
        <p className="lead text-center">
          We’re here to help. Let us know how we can support you.
        </p>
        <form className="mt-4">
          <div className="mb-3">
            <label className="form-label fw-bold">Full Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Email Address</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Your Message</label>
            <textarea className="form-control" rows={5} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    );
  }
  