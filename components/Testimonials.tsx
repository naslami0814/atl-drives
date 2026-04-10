const quotes = [
  {
    text: '"My mom has dialysis three days a week. ATL Drives shows up every single time. I stopped worrying about whether she made it."',
    author: "Keisha M.",
    location: "Decatur, GA",
  },
  {
    text: '"I run a construction crew in Midtown. Used to spend my mornings chasing guys who missed their Uber. Now they\'re on site. Every shift."',
    author: "Darius T.",
    location: "Gwinnett County",
  },
  {
    text: '"The receipt format works perfectly for my company\'s reimbursement portal. I just download and submit. Takes 30 seconds."',
    author: "Marcus W.",
    location: "Buckhead commuter",
  },
];

export default function Testimonials() {
  return (
    <section className="social">
      <div className="section-label">From our riders</div>
      <h2 className="section-h2">
        What Atlanta
        <br />
        <em>is saying.</em>
      </h2>

      <div className="quotes-grid">
        {quotes.map((q, i) => (
          <div key={i} className="quote-cell fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
            <p className="quote-text">{q.text}</p>
            <div className="quote-meta">
              — {q.author} <span>/ {q.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
