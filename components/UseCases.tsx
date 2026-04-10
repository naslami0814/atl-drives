import {
  CalendarCheck,
  Users,
  Repeat,
  Plane,
  GraduationCap,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

const ICON_SIZE = 22;
const ICON_STROKE = 1.75;

interface UseCase {
  Icon: LucideIcon;
  num: string;
  title: [string, string];
  desc: string;
  features: string[];
}

const cases: UseCase[] = [
  {
    Icon: CalendarCheck,
    num: "01 / MEDICAL",
    title: ["Medical", "Appointments"],
    desc: "Dialysis. Chemo. Physical therapy. Memory care. Your loved ones deserve a ride that shows up every single time — not a surge-priced gamble.",
    features: [
      "Schedule recurring weekly or daily pickups",
      "Accessible vehicle options available",
      "Receipts formatted for insurance reimbursement",
      "Same driver, same face — every appointment",
    ],
  },
  {
    Icon: Users,
    num: "02 / WORKFORCE",
    title: ["Crews", "Shift Workers"],
    desc: "Your team needs to be on site at 5 AM, not waiting on an Uber that may or may not show. Pre-scheduled rides for shift workers, construction crews, and warehouse teams.",
    features: [
      "Early morning and late-night pickups",
      "Multi-stop routes for crew pickups",
      "Employer billing and group invoicing",
      "Bulk booking for large teams",
    ],
  },
  {
    Icon: Repeat,
    num: "03 / COMMUTE",
    title: ["Daily", "Commuters"],
    desc: "Park further out, skip the parking deck, and ride in. Set your Monday–Friday schedule once and forget it. Your car waits. Your stress doesn't ride with you.",
    features: [
      "Set your route once, auto-schedule repeats",
      "Coffee shop and errand stops on your route",
      "Receipts for employer commuter benefits",
      "Modify or cancel any ride with 2 hrs notice",
    ],
  },
  {
    Icon: Plane,
    num: "04 / AIRPORT",
    title: ["Hartsfield", "Transfers"],
    desc: "Your flight doesn't wait. Book your airport ride days in advance, know your driver's name before you leave your house, and land knowing your pickup is locked in.",
    features: [
      "Book up to 30 days in advance",
      "Meet-and-greet service available",
      "Flight monitoring on early/late arrivals",
      "SUV and van options for groups",
    ],
  },
  {
    Icon: GraduationCap,
    num: "05 / STUDENTS",
    title: ["Campus", "Students"],
    desc: "Class schedules don't flex. Set up a Monday / Wednesday / Friday route to campus and never miss an 8 AM because surge pricing scared you into staying home.",
    features: [
      "Class-day-based scheduling",
      "Late-night safe rides back home",
      "Share ETA with family in real time",
      "Student discount packages available",
    ],
  },
  {
    Icon: HeartHandshake,
    num: "06 / SENIORS",
    title: ["Senior", "Care Rides"],
    desc: "Grocery runs. Church on Sunday. The hairdresser every two weeks. Give the seniors in your life reliable, familiar transportation — not a stranger from an app.",
    features: [
      "Recurring weekly and bi-weekly rides",
      "Door-to-door and wait-and-return service",
      "Family member can book and track",
      "Wheelchair accessible vehicles available",
    ],
  },
];

export default function UseCases() {
  return (
    <section className="usecases" id="usecases">
      <div className="section-label">Who we serve</div>
      <h2 className="section-h2">
        Built for real life,
        <br />
        <em>not just rush hour.</em>
      </h2>
      <p className="section-sub">
        ATL Drives handles the rides that can&apos;t be left to chance — medical, professional, personal.
      </p>

      <div className="usecases-grid">
        {cases.map(({ Icon, num, title, desc, features }, i) => (
          <div
            key={i}
            className="usecase-card fade-up"
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <div className="usecase-num">{num}</div>
            <h3 className="usecase-title">
              <Icon
                className="usecase-icon-svg"
                size={ICON_SIZE}
                strokeWidth={ICON_STROKE}
              />
              {title[0]} <span className="slash">/</span> {title[1]}
            </h3>
            <p className="usecase-desc">{desc}</p>
            <div className="usecase-features">
              {features.map((f, j) => (
                <div key={j} className="usecase-feature">{f}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
