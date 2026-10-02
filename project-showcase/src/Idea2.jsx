import { Link } from "react-router-dom";
import "./styles/global.css";

const problemPoints = [
  {
    title: "Equipment fails without warning",
    text: "Broken projectors, dead PCs or faulty instruments surface only when a lecture or practical is already underway.",
  },
  {
    title: "No single place to report issues",
    text: "Faculty and students have no central way to check an asset's status or report a problem.",
  },
  {
    title: "Maintenance is hard to follow",
    text: "Repairs, technician assignments and repair history are not tracked in one system.",
  },
];

const workflowSteps = [
  { title: "Equipment", text: "Every asset is registered in the platform." },
  { title: "QR Code", text: "Each asset gets a unique QR code." },
  { title: "Issue Report", text: "Faculty or students scan the code to check status or report a problem." },
  { title: "Admin", text: "Administrators review the reported issue." },
  { title: "Technician", text: "A technician is assigned to the issue." },
  { title: "Repair", text: "The technician carries out the repair." },
  { title: "Status Update", text: "The equipment status is updated." },
  { title: "Analytics", text: "Repair data feeds failure analytics." },
];

const managedAssets = [
  {
    title: "Classrooms",
    items: ["Projectors", "Smart boards", "Speakers", "Remotes", "PCs", "AC/fans", "Other classroom assets"],
  },
  {
    title: "Practical Labs",
    items: [
      "Computers",
      "Oscilloscopes",
      "Multimeters",
      "Power supplies",
      "Sensors",
      "Microcontrollers",
      "Lab kits",
      "Networking equipment",
      "Scientific instruments",
    ],
  },
];

const features = [
  { title: "QR-based identification", text: "Every piece of equipment is identified by its own unique QR code." },
  { title: "Equipment status", text: "Each asset is marked Working, Damaged, Missing or Under Maintenance." },
  { title: "Instant issue reporting", text: "Problems are reported straight from the equipment's QR code." },
  { title: "Photo/video evidence", text: "Reports can include photo or video evidence of the fault." },
  { title: "Technician assignment", text: "Administrators assign reported issues to technicians." },
  { title: "Maintenance workflow", text: "Issues move through a defined maintenance process to resolution." },
  { title: "Repair history", text: "Every repair is stored against the equipment it belongs to." },
  { title: "Preventive maintenance reminders", text: "Reminders prompt maintenance before equipment fails." },
  { title: "Maintenance-cost tracking", text: "Maintenance spending is recorded and tracked." },
  { title: "Health / risk score", text: "Each asset carries an equipment health and risk score." },
  { title: "Failure analytics", text: "Failure data is analysed to show where problems occur." },
  { title: "Admin dashboard", text: "Administrators get one view for managing equipment and maintenance." },
  { title: "Notifications", text: "Users are notified as issues and repairs progress." },
  { title: "Equipment availability", text: "Availability of equipment can be checked at any time." },
  { title: "Lab readiness checking", text: "Labs are checked for readiness before academic activities." },
];

const actors = ["Faculty", "Student", "Technician", "Admin"];

const architectureLayers = [
  { label: "Users", value: actors.join(" / ") },
  { label: "Frontend", value: "React + Tailwind" },
  { label: "Backend", value: "Node.js + Express" },
  { label: "Database", value: "PostgreSQL" },
];

const dataEntities = ["Equipment", "Issues", "Maintenance"];

const techStack = [
  { layer: "Frontend", tech: "React.js" },
  { layer: "UI", tech: "Tailwind CSS" },
  { layer: "Backend", tech: "Node.js + Express.js" },
  { layer: "Database", tech: "PostgreSQL" },
  { layer: "Authentication", tech: "JWT + Role-Based Access Control" },
  { layer: "QR", tech: "QR code generation/scanning library" },
  { layer: "Image Storage", tech: "Cloudinary" },
  { layer: "Analytics", tech: "Recharts / Chart.js" },
  { layer: "Notifications", tech: "Nodemailer / Firebase" },
  { layer: "Deployment", tech: "Vercel + Render/Railway" },
  { layer: "Version Control", tech: "Git + GitHub" },
  { layer: "Optional ML", tech: "Python + Scikit-learn + FastAPI" },
];

const labReadinessRows = [
  { equipment: "Multimeters", status: "10/10 working", state: "ok" },
  { equipment: "Oscilloscopes", status: "9/10 working", state: "warn" },
  { equipment: "Power supplies", status: "1 faulty", state: "fault" },
];

const mvpItems = [
  "User & role management",
  "Equipment registration",
  "QR generation",
  "Equipment status",
  "Issue reporting",
  "Maintenance workflow",
  "Technician assignment",
  "Maintenance history",
  "Admin dashboard",
  "Lab readiness score",
];

const futureScope = [
  {
    title: "Predictive maintenance",
    text: "Anticipate equipment failures before they happen.",
  },
  {
    title: "Machine learning",
    text: "An optional advanced component built with Python, Scikit-learn and FastAPI.",
  },
  {
    title: "Timetable integration",
    text: "Connect equipment status to the timetable so a failure before a scheduled lecture is marked high priority.",
  },
];

function Idea2() {
  return (
    <main className="idea-page idea-theme-2">
      <header className="idea-topbar" aria-label="Project navigation">
        <Link className="idea-nav-back" to="/">
          ← Back to Projects
        </Link>
        <Link className="idea-nav-next" to="/idea-3">
          Next Project →
        </Link>
      </header>

      <header className="idea-hero">
        <p className="idea-section-label">Software Engineering + Data Science</p>
        <h1 className="idea-title">Smart Campus Equipment Management System</h1>
        <p className="idea-description">
          A centralized platform for colleges to track, report, maintain and monitor classroom and
          laboratory equipment, so that equipment failures don&apos;t disrupt lectures or practical
          sessions.
        </p>

        <div className="idea-hero-summary">
          <div className="idea-card">
            <h2 className="idea-card-title">Problem</h2>
            <p>Equipment failures disrupt lectures and practical sessions.</p>
          </div>
          <div className="idea-card">
            <h2 className="idea-card-title">Solution</h2>
            <p>
              Every asset gets a unique QR code for checking status and reporting problems, while
              administrators and technicians manage repairs.
            </p>
          </div>
        </div>

        <a className="idea-cta" href="#problem">
          Explore the Project ↓
        </a>
      </header>

      <section className="idea-section" id="problem">
        <p className="idea-section-label">The Problem</p>
        <h2 className="idea-section-title">Equipment failures shouldn&apos;t interrupt teaching</h2>
        <p className="idea-description">
          Classrooms and labs depend on working equipment. When a projector or an instrument fails,
          the lecture or practical session is disrupted.
        </p>
        <div className="idea-grid">
          {problemPoints.map((point) => (
            <article className="idea-card" key={point.title}>
              <h3 className="idea-card-title">{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="idea-section" id="solution">
        <p className="idea-section-label">Proposed Solution</p>
        <h2 className="idea-section-title">Track equipment, report faults, resolve them</h2>
        <div className="idea-flow">
          <article className="idea-card">
            <h3 className="idea-card-title">Problem</h3>
            <p>Equipment fails and disrupts lectures or practicals.</p>
          </article>
          <span className="idea-flow-arrow" aria-hidden="true">
            ↓
          </span>
          <article className="idea-card idea-card-highlight">
            <h3 className="idea-card-title">Proposed System</h3>
            <p>
              A centralized platform where every asset has a unique QR code. Faculty and students scan
              it to check status or report a problem; administrators and technicians manage
              maintenance and repair.
            </p>
          </article>
          <span className="idea-flow-arrow" aria-hidden="true">
            ↓
          </span>
          <article className="idea-card">
            <h3 className="idea-card-title">Result</h3>
            <p>
              Faults are reported, repaired and recorded in history, and facilities can be checked for
              readiness.
            </p>
          </article>
        </div>

        <h3 className="idea-subtitle">What can be managed</h3>
        <div className="idea-grid">
          {managedAssets.map((group) => (
            <article className="idea-card" key={group.title}>
              <h4 className="idea-card-title">{group.title}</h4>
              <ul className="idea-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="idea-section" id="workflow">
        <p className="idea-section-label">How It Works</p>
        <h2 className="idea-section-title">From equipment to analytics</h2>
        <ol className="idea-workflow">
          {workflowSteps.map((step, index) => (
            <li className="idea-step" key={step.title}>
              <span className="idea-step-number">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="idea-step-title">{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="idea-section" id="features">
        <p className="idea-section-label">Core Features</p>
        <h2 className="idea-section-title">What the platform does</h2>
        <div className="idea-feature-grid">
          {features.map((feature) => (
            <article className="idea-feature" key={feature.title}>
              <span className="idea-feature-mark" aria-hidden="true">
                +
              </span>
              <h3 className="idea-card-title">{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="idea-section" id="architecture">
        <p className="idea-section-label">Technical Architecture</p>
        <h2 className="idea-section-title">Suggested architecture</h2>
        <div className="idea-architecture">
          {architectureLayers.map((layer) => (
            <div className="idea-architecture-layer" key={layer.label}>
              <div className="idea-architecture-box">
                <span className="idea-architecture-label">{layer.label}</span>
                <strong>{layer.value}</strong>
              </div>
              <span className="idea-flow-arrow" aria-hidden="true">
                ↓
              </span>
            </div>
          ))}

          <div className="idea-architecture-split">
            {dataEntities.map((entity) => (
              <div className="idea-architecture-box" key={entity}>
                <strong>{entity}</strong>
              </div>
            ))}
          </div>
          <span className="idea-flow-arrow" aria-hidden="true">
            ↓
          </span>
          <div className="idea-architecture-box">
            <strong>Analytics</strong>
          </div>
          <span className="idea-flow-arrow" aria-hidden="true">
            ↓
          </span>
          <div className="idea-architecture-box idea-card-highlight">
            <strong>Lab Readiness</strong>
          </div>
        </div>

        <h3 className="idea-subtitle">Technology stack</h3>
        <div className="idea-tech-grid">
          {techStack.map((item) => (
            <article className="idea-tech-card" key={item.layer}>
              <span className="idea-tech-layer">{item.layer}</span>
              <strong>{item.tech}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="idea-section" id="usp">
        <p className="idea-section-label">What Makes It Different</p>
        <h2 className="idea-section-title">Not just tracking: readiness</h2>
        <p className="idea-description">
          Existing asset-management systems already offer QR tracking and maintenance, so QR itself
          is not the innovation.
        </p>
        <div className="idea-compare">
          <article className="idea-card">
            <h3 className="idea-card-title">Existing approach</h3>
            <p>Track equipment and manage its maintenance.</p>
          </article>
          <article className="idea-card idea-card-highlight">
            <h3 className="idea-card-title">Our approach</h3>
            <p>
              Ensure that classrooms and laboratories are ready for academic activities.
            </p>
          </article>
          <article className="idea-card">
            <h3 className="idea-card-title">Specific improvement</h3>
            <p>Faculty know about a problem before the practical begins.</p>
          </article>
        </div>
      </section>

      <section className="idea-section" id="use-case">
        <p className="idea-section-label">Use Cases</p>
        <h2 className="idea-section-title">The system in action</h2>

        <h3 className="idea-subtitle">Reporting a faulty projector</h3>
        <ol className="idea-workflow">
          {[
            "Projector isn't working",
            "Teacher scans the QR code",
            "Teacher reports the issue with a photo",
            "Technician is assigned",
            "Projector is repaired",
            'Status becomes "Working"',
            "Repair is stored in history",
          ].map((step, index) => (
            <li className="idea-step" key={step}>
              <span className="idea-step-number">{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>

        <h3 className="idea-subtitle">Electronics Lab: practical at 10 AM</h3>
        <div className="idea-readiness">
          <table className="idea-table">
            <thead>
              <tr>
                <th scope="col">Equipment</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {labReadinessRows.map((row) => (
                <tr className={`idea-table-row idea-table-row-${row.state}`} key={row.equipment}>
                  <th scope="row">{row.equipment}</th>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="idea-readiness-score">
            <span className="idea-architecture-label">Lab Readiness</span>
            <strong className="idea-readiness-value">90%</strong>
            <p>The faculty knows about the problem before the practical begins.</p>
          </div>
        </div>
      </section>

      <section className="idea-section" id="mvp">
        <p className="idea-section-label">Project Scope</p>
        <h2 className="idea-section-title">MVP for the mini-project</h2>
        <p className="idea-description">
          The first build focuses on these ten capabilities rather than the full feature set.
        </p>
        <ol className="idea-workflow">
          {mvpItems.map((item, index) => (
            <li className="idea-step" key={item}>
              <span className="idea-step-number">{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="idea-section" id="future-scope">
        <p className="idea-section-label">Future Scope</p>
        <h2 className="idea-section-title">If time allows</h2>
        <ol className="idea-timeline">
          {futureScope.map((item) => (
            <li className="idea-timeline-item" key={item.title}>
              <h3 className="idea-card-title">{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <footer className="idea-section idea-closing">
        <blockquote className="idea-pitch">
          A QR-powered Smart Campus Equipment Management System that helps colleges monitor classroom
          and laboratory equipment, report and resolve failures, and determine whether facilities are
          ready for upcoming academic activities.
        </blockquote>
        <Link className="idea-cta" to="/">
          ← Back to Projects
        </Link>
      </footer>
    </main>
  );
}

export default Idea2;