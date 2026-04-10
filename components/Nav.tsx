"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <Link href="/" className="wordmark">
        <span className="wordmark-atl">ATL</span>
        <span className="wordmark-slash">/</span>
        <span className="wordmark-drives">DRIVES</span>
      </Link>

      <div className={`nav-links${menuOpen ? " open" : ""}`}>
        <Link href="#usecases" onClick={() => setMenuOpen(false)}>Who We Serve</Link>
        <Link href="#howitworks" onClick={() => setMenuOpen(false)}>How It Works</Link>
        <Link href="#coverage" onClick={() => setMenuOpen(false)}>Coverage</Link>
        <Link href="#features" onClick={() => setMenuOpen(false)}>Features</Link>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Link href="/login" style={{ color: "var(--muted)", fontSize: "14px", fontWeight: 500 }}>
          Sign in
        </Link>
        <Link href="/signup" className="nav-cta">GET STARTED →</Link>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
