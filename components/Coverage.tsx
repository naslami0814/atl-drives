const counties = [
  { name: "City of Atlanta / Midtown / Buckhead", status: "live" },
  { name: "DeKalb County", status: "live" },
  { name: "Gwinnett County", status: "live" },
  { name: "Cobb County", status: "coming" },
  { name: "Clayton County / Hartsfield Area", status: "coming" },
  { name: "Fulton County South", status: "coming" },
];

export default function Coverage() {
  return (
    <section className="coverage" id="coverage">
      <div className="section-label">Service area</div>
      <div className="coverage-grid">
        <div className="coverage-text">
          <h2 className="section-h2">
            Metro Atlanta,
            <br />
            <em>covered.</em>
          </h2>
          <p className="section-sub">
            We serve the suburbs other ride services ignore — because Atlanta&apos;s traffic
            doesn&apos;t stop at the city limits.
          </p>
          <div className="coverage-note">
            <strong>/ Expanding monthly.</strong> Don&apos;t see your area? Join the waitlist and
            we&apos;ll notify you the week we launch near you.
          </div>
        </div>

        <div>
          <div className="county-list fade-up">
            {counties.map((c, i) => (
              <div key={i} className="county-row">
                <span className="county-name">{c.name}</span>
                <span className={`county-status ${c.status === "live" ? "county-live" : "county-coming"}`}>
                  {c.status === "live" ? "LIVE" : "COMING SOON"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
