import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center text-white py-4" style={{ backgroundColor: "#164B68" }}>
      <p className="mb-0">
        &copy; 2025 Clear Vital Social Care | Follow us:
        <Link href="#" className="text-white ms-2"><i className="fab fa-facebook"></i></Link>
        <Link href="#" className="text-white ms-2"><i className="fab fa-twitter"></i></Link>
        <Link href="#" className="text-white ms-2"><i className="fab fa-instagram"></i></Link>
      </p>
    </footer>
  );
}
