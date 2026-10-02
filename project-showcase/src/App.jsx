import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="home">

      {/* =========================
          HERO
      ========================= */}

      <section className="hero">
        <span className="hero-tag">
          SEM 6 · MINI PROJECT
        </span>

        <h1>
          Problem <br />
          Statements.
        </h1>

        <p className="hero-description">
          Three project concepts developed by our team,
          exploring real-world problems through engineering.
        </p>
      </section>


      {/* =========================
          TEAM
      ========================= */}

      <section className="section">

        <p className="section-label">
          The Team
        </p>

        <h2>Our Team</h2>

        <div className="team-list">

          <div className="team-member">
            <div className="member-info">
              <h3>Ninad Kathe</h3>
            </div>

            <span className="roll-no">
              B-05
            </span>
          </div>


          <div className="team-member team-lead">

            <div className="member-info">
              <h3>
                Arya Mane
                <span className="role">
                  Team Lead
                </span>
              </h3>
            </div>

            <span className="roll-no">
              B-26
            </span>

          </div>


          <div className="team-member">

            <div className="member-info">
              <h3>Madhura Manjrekar</h3>
            </div>

            <span className="roll-no">
              B-28
            </span>

          </div>


          <div className="team-member">

            <div className="member-info">
              <h3>Vibha Mastkar</h3>
            </div>

            <span className="roll-no">
              B-29
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          PROJECTS
      ========================= */}

      <section className="section">

        <p className="section-label">
          Our Work
        </p>

        <h2>Project Ideas</h2>

        <div className="projects-grid">


          {/* PROJECT 01 */}

          <Link
            to="/idea-1"
            className="project-card"
          >

            <span className="project-number">
              01
            </span>

            <h3>
              Dynamic Supply Chain
              Network Platform
            </h3>

            <p>
              A configurable platform that connects
              fragmented suppliers with aggregators,
              processors, buyers, NGOs, and other end
              users while managing supply-demand
              matching and the overall supply chain.
            </p>

            <span className="project-link">
              Explore →
            </span>

          </Link>


          {/* PROJECT 02 */}

          <Link
            to="/idea-2"
            className="project-card"
          >

            <span className="project-number">
              02
            </span>

            <h3>
              Smart Campus Equipment
              Management System
            </h3>

            <p>
              A centralized system for tracking,
              reporting, maintaining, and monitoring
              classroom and laboratory equipment,
              with QR-based issue reporting and
              lab readiness monitoring.
            </p>

            <span className="project-link">
              Explore →
            </span>

          </Link>


          {/* PROJECT 03 */}

          <Link
            to="/idea-3"
            className="project-card"
          >

            <span className="project-number">
              03
            </span>

            <h3>
              NASK — Native Access
              Security Kernel
            </h3>

            <p>
              An Android-focused secure digital-media
              access system that uses encrypted
              .n1n4d containers and backend-controlled
              authorization to manage protected
              content access.
            </p>

            <span className="project-link">
              Explore →
            </span>

          </Link>


        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">
        SEM 6 MINI PROJECT · 2027
      </footer>

    </div>
  );
}

export default App;