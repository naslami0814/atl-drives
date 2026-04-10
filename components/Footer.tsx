import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="wordmark">
            <span className="wordmark-atl">ATL</span>
            <span className="wordmark-slash">/</span>
            <span className="wordmark-drives">DRIVES</span>
          </Link>
          <p>
            Scheduled rides for Metro Atlanta — built around real commutes, real care, and real
            reliability. No surge. No surprises.
          </p>
        </div>

        <div>
          <div className="footer-col-title">/ Riders</div>
          <div className="footer-links">
            <Link href="/signup">Book a ride</Link>
            <Link href="/portal">Passenger portal</Link>
            <Link href="#howitworks">How it works</Link>
            <Link href="/portal/billing">Receipts &amp; billing</Link>
          </div>
        </div>

        <div>
          <div className="footer-col-title">/ Business</div>
          <div className="footer-links">
            <Link href="#">Corporate accounts</Link>
            <Link href="#">Crew transportation</Link>
            <Link href="#">Employer billing</Link>
            <Link href="#">Group bookings</Link>
          </div>
        </div>

        <div>
          <div className="footer-col-title">/ Company</div>
          <div className="footer-links">
            <Link href="#">About ATL Drives</Link>
            <Link href="#">Drive with us</Link>
            <Link href="#coverage">Coverage areas</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 ATL Drives LLC — Atlanta, GA</span>
        <span>
          Privacy <span className="footer-bottom-slash">/</span> Terms{" "}
          <span className="footer-bottom-slash">/</span> Support
        </span>
      </div>
    </footer>
  );
}
