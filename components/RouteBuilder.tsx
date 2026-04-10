export default function RouteBuilder() {
  return (
    <section className="route-section">
      <div className="section-label">Customization</div>
      <h2 className="section-h2">
        Your commute,
        <br />
        <em>your way.</em>
      </h2>

      <div className="route-visual">
        <div className="route-mock fade-up">
          <div className="route-mock-title">Your Default Route — Monday</div>
          <div className="route-line">

            <div className="route-stop">
              <div className="route-stop-connector">
                <div className="route-dot origin" />
                <div className="route-line-seg" />
              </div>
              <div className="route-stop-content">
                <div className="route-stop-name">🏠 Home</div>
                <div className="route-stop-meta">1420 Peachtree St NE, Atlanta</div>
                <span className="route-stop-badge badge-teal">PICKUP / 7:30 AM</span>
              </div>
            </div>

            <div className="route-stop">
              <div className="route-stop-connector">
                <div className="route-dot stop" />
                <div className="route-line-seg" />
              </div>
              <div className="route-stop-content">
                <div className="route-stop-name">☕ Starbucks Buckhead</div>
                <div className="route-stop-meta">3500 Peachtree Rd NE</div>
                <span className="route-stop-badge badge-orange">STOP / 7:45 AM · 5 min wait</span>
              </div>
            </div>

            <div className="route-stop">
              <div className="route-stop-connector">
                <div className="route-dot stop" />
                <div className="route-line-seg" />
              </div>
              <div className="route-stop-content">
                <div className="route-stop-name">🏫 Ava&apos;s School</div>
                <div className="route-stop-meta">1150 Bolling Way NE — Mon, Wed, Fri only</div>
                <span className="route-stop-badge badge-orange">STOP / 8:05 AM · drop off</span>
              </div>
            </div>

            <div className="route-stop">
              <div className="route-stop-connector">
                <div className="route-dot dest" />
              </div>
              <div className="route-stop-content">
                <div className="route-stop-name">🏢 Work</div>
                <div className="route-stop-meta">191 Peachtree Tower, Atlanta</div>
                <span className="route-stop-badge badge-teal">ARRIVE / ~8:25 AM</span>
              </div>
            </div>

          </div>
        </div>

        <div className="route-benefits fade-up" style={{ transitionDelay: ".15s" }}>
          <div className="route-benefit">
            <h4 className="route-benefit-title">Set once, runs automatically</h4>
            <p className="route-benefit-desc">
              Your schedule repeats weekly without re-booking. Edit any single day without affecting
              the rest of the week.
            </p>
          </div>
          <div className="route-benefit">
            <h4 className="route-benefit-title">Toggle stops per ride</h4>
            <p className="route-benefit-desc">
              Coffee stop only on weekdays. School drop-off only Monday, Wednesday, Friday. Every
              variation handled cleanly.
            </p>
          </div>
          <div className="route-benefit">
            <h4 className="route-benefit-title">One-time ride changes</h4>
            <p className="route-benefit-desc">
              Need to leave at 8:30 just tomorrow? Modify a single ride without touching your
              recurring schedule. Changes lock in at 2 hours before pickup.
            </p>
          </div>
          <div className="route-benefit">
            <h4 className="route-benefit-title">Return rides included</h4>
            <p className="route-benefit-desc">
              Set your end-of-day pickup time for the return trip. Or skip it on days you&apos;re
              staying late — your call, per day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
