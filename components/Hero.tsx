import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-texture" />
      <div className="hero-glow" />

      <div className="hero-tag">
        <span className="hero-tag-dot" />
        Now serving Metro Atlanta
      </div>

      <h1>
        <span>Your ride,</span>
        <span className="line-orange">your schedule,</span>
        <span className="line-muted">no surprises.</span>
      </h1>

      <p className="hero-sub">
        Pre-scheduled rides for commuters, caregivers, crews, and everyone who
        can&apos;t afford to miss a pickup.
      </p>

      <div className="hero-actions">
        <Link href="/signup" className="btn-primary">BOOK YOUR FIRST RIDE →</Link>
        <Link href="#usecases" className="btn-secondary">See who we serve</Link>
      </div>

      <div className="hero-stats">
        <div className="hero-stat fade-up">
          <div className="hero-stat-num">4.9<span>★</span></div>
          <div className="hero-stat-label">Avg driver rating</div>
        </div>
        <div className="hero-stat fade-up" style={{ transitionDelay: ".1s" }}>
          <div className="hero-stat-num">No<span>/</span>Surge</div>
          <div className="hero-stat-label">Flat rates, always</div>
        </div>
        <div className="hero-stat fade-up" style={{ transitionDelay: ".2s" }}>
          <div className="hero-stat-num">ATL<span>/</span>Wide</div>
          <div className="hero-stat-label">Gwinnett · DeKalb · Cobb</div>
        </div>
      </div>
    </section>
  );
}
