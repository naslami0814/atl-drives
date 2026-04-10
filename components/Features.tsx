export default function Features() {
  return (
    <section className="features" id="features">
      <div className="section-label">Features</div>
      <h2 className="section-h2">
        Everything you need.
        <br />
        <em>Nothing you don&apos;t.</em>
      </h2>

      {/* Row 1 */}
      <div className="bento">
        <div className="bento-cell wide fade-up" style={{ borderRight: "1px solid var(--border)" }}>
          <div className="bento-label">/ No Surge Pricing</div>
          <h3 className="bento-title">The price you see is the price you pay.</h3>
          <p className="bento-desc">
            Rush hour, rain, Friday afternoon, game day — your rate never moves. Pre-scheduled rides
            lock in a flat fare from the moment you book. Uber charges you more when you need a ride
            most. We don&apos;t.
          </p>
        </div>

        <div
          className="bento-cell tall fade-up"
          style={{ transitionDelay: ".1s", borderLeft: "1px solid var(--border)" }}
        >
          <div>
            <div className="bento-label">/ Receipts &amp; Reimbursement</div>
            <h3 className="bento-title" style={{ fontSize: "28px" }}>
              Formatted for whoever needs it.
            </h3>
          </div>
          <div className="receipt-mock">
            <div className="receipt-mock-row">
              <span className="receipt-mock-label">Passenger</span>
              <span className="receipt-mock-val">Marcus Williams</span>
            </div>
            <div className="receipt-mock-row">
              <span className="receipt-mock-label">Employer</span>
              <span className="receipt-mock-val">Peachtree Capital</span>
            </div>
            <div className="receipt-mock-row">
              <span className="receipt-mock-label">Route</span>
              <span className="receipt-mock-val" style={{ textAlign: "right", maxWidth: "160px" }}>
                Peachtree St → 191 Peachtree Tower
              </span>
            </div>
            <div className="receipt-mock-row">
              <span className="receipt-mock-label">TXN / 2041</span>
              <span className="receipt-mock-total">$35.25</span>
            </div>
            <div className="receipt-dl-btns">
              <div className="receipt-dl-btn">Employer Format ↓</div>
              <div className="receipt-dl-btn">Insurance ↓</div>
            </div>
          </div>
        </div>

        <div
          className="bento-cell accent fade-up"
          style={{
            transitionDelay: ".15s",
            borderTop: "1px solid rgba(0,0,0,0.1)",
            borderRight: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <div className="bento-label">/ Same Driver</div>
          <h3 className="bento-title" style={{ fontSize: "28px" }}>
            A face you recognize.
          </h3>
          <p className="bento-desc">
            Request your favorite driver. When the same person picks you up every morning, trust
            builds. That&apos;s not a feature — that&apos;s a different product entirely.
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="bento-row2">
        <div className="bento-cell teal-accent fade-up">
          <div className="bento-label">/ Vetted Drivers</div>
          <div className="bento-big-num" style={{ color: "var(--teal)" }}>100%</div>
          <div className="bento-big-num-label">
            Background checked, motor vehicle record verified, and identity confirmed before their
            first ride.
          </div>
        </div>
        <div className="bento-cell fade-up" style={{ transitionDelay: ".1s", borderRight: "1px solid var(--border)", borderLeft: "1px solid var(--border)" }}>
          <div className="bento-label">/ Stops &amp; Custom Routes</div>
          <h3 className="bento-title" style={{ fontSize: "24px" }}>
            Coffee, school, pharmacy — all on the way.
          </h3>
          <p className="bento-desc" style={{ marginTop: "12px" }}>
            Add recurring stops to any route. Toggle them on or off per ride without changing your
            default schedule.
          </p>
        </div>
        <div className="bento-cell fade-up" style={{ transitionDelay: ".2s" }}>
          <div className="bento-label">/ Real-Time Sharing</div>
          <h3 className="bento-title" style={{ fontSize: "24px" }}>
            Share your ETA with one tap.
          </h3>
          <p className="bento-desc" style={{ marginTop: "12px" }}>
            Send a live tracking link to your office, your family, or your client. They see exactly
            where you are without needing the app.
          </p>
        </div>
      </div>
    </section>
  );
}
