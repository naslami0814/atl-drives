import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner-texture" />
      <h2>
        Ready to ride
        <br />
        on your terms?
      </h2>
      <p className="cta-banner-sub">
        No subscription. No commitment. Just reliable rides, when you need them.
      </p>
      <div className="cta-banner-actions">
        <Link href="/signup" className="btn-dark">CREATE YOUR ACCOUNT →</Link>
        <Link href="mailto:hello@atldrives.com" className="btn-outline-dark">Talk to us first</Link>
      </div>
    </section>
  );
}
