const steps = [
  {
    num: "01",
    title: "Build your profile",
    desc: "Enter your home, work, and any recurring stops. Set your typical days and pickup times. This becomes your default schedule — change it anytime.",
  },
  {
    num: "02",
    title: "Confirm your rides",
    desc: "Review your upcoming week. Modify timing, add a stop, or cancel — all from your passenger portal. No phone calls. No back-and-forth.",
  },
  {
    num: "03",
    title: "Ride with confidence",
    desc: "Your vetted driver arrives on time. Track them live. Share your ETA with whoever needs it. No surge. No mystery car. No stress.",
  },
  {
    num: "04",
    title: "Get reimbursed",
    desc: "Download formatted receipts for your employer, insurance company, or FSA/HSA administrator. One tap. The right format. Every time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="howitworks" id="howitworks">
      <div className="section-label">Process</div>
      <h2 className="section-h2">
        Up and running
        <br />
        <em>in four steps.</em>
      </h2>

      <div className="steps">
        {steps.map((s, i) => (
          <div key={i} className="step fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="step-num">{s.num}</div>
            <h3 className="step-title">{s.title}</h3>
            <p className="step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
