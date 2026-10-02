import { Link } from "react-router-dom";
import "./styles/global.css";

/* ==========================================================================
   Building blocks
   ========================================================================== */

const formatIndex = (index) => String(index + 1).padStart(2, "0");

function SectionHeader({ number, label, title, intro }) {
  return (
    <header className="idea-section-header">
      <p className="idea-section-label">
        <span className="idea-section-number">{number}</span>
        <span className="idea-section-name">{label}</span>
      </p>
      <h2 className="idea-title">{title}</h2>
      {intro && <p className="idea-description">{intro}</p>}
    </header>
  );
}

/* A sequence of actors or steps. Each node is a string or { name, note, link }. */
function Chain({ nodes, label, direction = "horizontal" }) {
  const arrow = direction === "vertical" ? "↓" : "→";

  return (
    <ol className={`idea-chain idea-chain--${direction}`} aria-label={label}>
      {nodes.map((node, index) => {
        const { name, note, link } =
          typeof node === "string" ? { name: node } : node;

        return (
          <li className="idea-chain-node" key={name}>
            <span className="idea-chain-name">{name}</span>
            {note && <span className="idea-chain-note">{note}</span>}
            {index < nodes.length - 1 && (
              <span className="idea-chain-connector">
                <span className="idea-chain-arrow" aria-hidden="true">
                  {arrow}
                </span>
                {link && <span className="idea-chain-link">{link}</span>}
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function ChipList({ items }) {
  return (
    <ul className="idea-chip-list">
      {items.map((item) => (
        <li className="idea-chip" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function BulletList({ items }) {
  return (
    <ul className="idea-list">
      {items.map((item) => (
        <li className="idea-list-item" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* Label / value pairs rendered as a description list. */
function FieldList({ fields, className = "idea-fields" }) {
  return (
    <dl className={className}>
      {fields.map(({ label, value }) => (
        <div className="idea-field" key={label}>
          <dt className="idea-field-label">{label}</dt>
          <dd className="idea-field-value">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* Quantities from several sources, with their computed total. */
function QuantityList({ sources, totalLabel }) {
  const total = sources.reduce((sum, { kg }) => sum + kg, 0);

  return (
    <div className="idea-quantity">
      <ul className="idea-quantity-list">
        {sources.map(({ name, kg }) => (
          <li className="idea-quantity-item" key={name}>
            <span className="idea-quantity-name">{name}</span>
            <span className="idea-quantity-value">{kg} kg</span>
          </li>
        ))}
      </ul>
      <p className="idea-quantity-total">
        <span className="idea-quantity-total-label">{totalLabel}</span>
        <span className="idea-quantity-total-value">
          {total.toLocaleString("en-US")} kg
        </span>
      </p>
    </div>
  );
}

/* ==========================================================================
   Content (taken from the project resource)
   ========================================================================== */

/* Hero */
const heroFacts = [
  { label: "Platform type", value: "Web platform" },
  { label: "Core idea", value: "Configurable supply chains" },
  { label: "Matching", value: "Rule-based algorithm" },
  { label: "Demonstrated with", value: "UCO and surplus food" },
  { label: "Core stack", value: "React, Node.js, PostgreSQL" },
];

/* 01 The problem */
const manufacturerCosts = [
  "Finding suppliers",
  "Verifying suppliers",
  "Comparing prices",
  "Collecting material",
  "Coordinating transportation",
  "Tracking quantities",
  "Checking quality",
  "Managing payments",
  "Maintaining records",
];

/* 02 Proposed solution */
const solutionSteps = [
  {
    label: "Problem",
    title: "Fragmented supply",
    text: "Material is spread across many small suppliers. Manufacturers bear the cost of finding and managing them, while small suppliers may have difficulty finding reliable buyers.",
  },
  {
    label: "Proposed system",
    title: "Matching + coordination",
    text: "A web platform connects both sides through supply and demand listings, matching, and a managed supply chain workflow.",
  },
  {
    label: "Result",
    title: "A digital layer",
    text: "A digital layer connecting fragmented supply and demand, with the supply chain between them managed on the platform.",
  },
];

const supplyFlow = [
  { name: "Small Suppliers", link: "Supply" },
  { name: "Our Platform", link: "Matching + Coordination" },
  { name: "Aggregator / Processor / Buyer" },
  { name: "Final Use" },
];

/* 03 Dynamic by design */
const dynamicChains = [
  { tag: "UCO", nodes: ["Restaurant", "Aggregator", "Chemical Manufacturer"] },
  { tag: "Surplus food", nodes: ["Canteen", "NGO", "Beneficiaries"] },
  { nodes: ["Farmer", "Aggregator", "Food Processor"] },
  { nodes: ["Business", "Recycler", "Processing Company"] },
];

/* 04 How it works */
const platformWorkflow = [
  {
    title: "User Management",
    text: "Participants register and receive role-based access.",
  },
  {
    title: "Organization Management",
    text: "Supplier, aggregator, manufacturer, NGO and other organizations are set up on the platform.",
  },
  {
    title: "Create Supply Chain",
    text: "A supply chain is configured with the participants and stages it needs.",
  },
  {
    title: "Supply Listing",
    text: "Suppliers publish what they have: material, quantity, location, availability, quality and expected price.",
  },
  {
    title: "Demand Listing",
    text: "Buyers publish what they need: material, quantity, location, frequency and quality requirement.",
  },
  {
    title: "Matching",
    text: "Supply and demand are compared to identify potential matches.",
  },
  {
    title: "Transaction",
    text: "Matched participants proceed to a transaction.",
  },
  {
    title: "Logistics",
    text: "Collection, pickup and transportation are coordinated.",
  },
  {
    title: "Analytics",
    text: "Supplier, buyer and network analytics turn activity into business insights.",
  },
];

const chainStages = [
  "Supplier",
  "Collection / Pickup",
  "Aggregator",
  "Processing / Storage",
  "Buyer",
  "Final Receiver",
];

const minimalChain = ["Supplier", "NGO", "Beneficiary"];

/* 05 Core features */
const coreFeatures = [
  {
    title: "Participant Management",
    text: "Different participants can register on the platform.",
    points: [
      "Suppliers",
      "Aggregators",
      "Manufacturers",
      "Processors",
      "Buyers",
      "NGOs",
      "Logistics providers",
      "Other organizations",
    ],
  },
  {
    title: "Supply Listing",
    text: "A supplier publishes what is available, such as UCO in kilograms or surplus food in meals.",
    points: [
      "Material",
      "Quantity",
      "Location",
      "Availability",
      "Quality",
      "Expected price",
    ],
  },
  {
    title: "Demand Listing",
    text: "A buyer publishes what is required, how much, and how often.",
    points: [
      "Required material",
      "Required quantity",
      "Location",
      "Frequency",
      "Quality requirement",
    ],
  },
  {
    title: "Supply-Demand Matching",
    text: "The platform compares supply and demand to identify potential matches.",
    points: [
      "Quantity",
      "Location",
      "Price",
      "Quality",
      "Availability",
      "Frequency",
      "Requirements",
    ],
  },
  {
    title: "Supply Chain Workflow",
    text: "Once a match is established, the platform can manage the flow, using only the stages a given supply chain needs.",
    points: chainStages,
  },
  {
    title: "Supply Chain Analytics",
    text: "Supplier, buyer and network analytics provide business insights.",
    points: ["Supplier analytics", "Buyer analytics", "Network analytics"],
  },
];

const listingExamples = [
  {
    title: "Supply listing",
    context: "UCO",
    fields: [
      { label: "Material", value: "Used Cooking Oil" },
      { label: "Quantity", value: "50 kg" },
      { label: "Location", value: "Mumbai" },
      { label: "Available From", value: "5 Oct" },
      { label: "Quality", value: "Grade A" },
      { label: "Expected Price", value: "₹X/kg" },
    ],
  },
  {
    title: "Demand listing",
    context: "UCO",
    fields: [
      { label: "Required Material", value: "UCO" },
      { label: "Required Quantity", value: "1,000 kg" },
      { label: "Location", value: "Mumbai" },
      { label: "Frequency", value: "Monthly" },
      { label: "Quality Requirement", value: "Grade A" },
    ],
  },
  {
    title: "Supply listing",
    context: "Surplus food",
    fields: [
      { label: "Material", value: "Surplus Food" },
      { label: "Quantity", value: "100 meals" },
      { label: "Location", value: "Mumbai" },
      { label: "Available Until", value: "8 PM" },
    ],
  },
];

/* 06 Technical architecture */
const architectureLayers = [
  ["Users"],
  ["Web Platform"],
  ["Supply Listings", "Demand Listings", "Users / Orgs"],
  ["Matching Engine"],
  ["Supply Chain Engine"],
  ["Logistics", "Inventory", "Transactions"],
  ["Analytics"],
  ["Business Insights"],
];

const requestPath = ["React", "REST API", "Node.js + Express", "PostgreSQL"];

const deploymentTargets = [
  { label: "Frontend", value: "Vercel" },
  { label: "Backend", value: "Render / Railway" },
  { label: "Database", value: "Supabase / Neon PostgreSQL" },
  { label: "File storage", value: "Cloudinary" },
];

/* 07 Technology stack */
const techStack = [
  {
    layer: "Frontend",
    technology: "React.js",
    role: "Dashboards, supply/demand listings, forms, participant management, supply-chain visualization and analytics.",
  },
  {
    layer: "UI",
    technology: "Tailwind CSS",
    role: "Responsive UI and fast development.",
  },
  {
    layer: "Backend",
    technology: "Node.js + Express.js",
    role: "REST APIs, authentication, supply/demand management, matching logic, supply-chain workflows, transactions and analytics APIs.",
  },
  {
    layer: "Database",
    technology: "PostgreSQL",
    role: "Suited to a platform with many relationships between entities.",
  },
  {
    layer: "Authentication",
    technology: "JWT + RBAC",
    role: "Role-based access, with a different dashboard for each role.",
  },
  {
    layer: "Matching",
    technology: "Rule-based matching algorithm",
    role: "Rule-based to start with; not AI in the first version.",
  },
  {
    layer: "Analytics",
    technology: "Recharts / Chart.js",
    role: "Supply and demand trends, regional supply, transaction volume, match success rate and more.",
  },
  {
    layer: "Maps",
    technology: "Leaflet + OpenStreetMap",
    role: "Displays suppliers flowing to an aggregator.",
    status: "Future development",
  },
  {
    layer: "QR",
    technology: "QR Code library",
    role: "Generates and scans QR codes for supply batches.",
  },
  { layer: "File Storage", technology: "Cloudinary" },
  { layer: "Version Control", technology: "Git + GitHub" },
  { layer: "Deployment", technology: "Vercel + Render/Railway" },
  {
    layer: "Optional ML",
    technology: "Python + FastAPI + Scikit-learn",
    role: "Predictions once enough historical data exists.",
    status: "Optional",
  },
];

/* 08 Key technical components */
const matchScoreTerms = [
  "Quantity Compatibility",
  "Location Compatibility",
  "Price Compatibility",
  "Quality Compatibility",
  "Availability Compatibility",
];

const matchExample = {
  parties: [
    {
      role: "Supplier",
      fields: [
        { label: "Quantity", value: "500 kg" },
        { label: "Location", value: "Mumbai" },
        { label: "Price", value: "₹40/kg" },
        { label: "Quality", value: "Grade A" },
      ],
    },
    {
      role: "Buyer",
      fields: [
        { label: "Quantity", value: "Needs 450 kg" },
        { label: "Location", value: "Mumbai" },
        { label: "Price", value: "Maximum ₹45/kg" },
        { label: "Quality", value: "Grade A" },
      ],
    },
  ],
  result: "High match",
};

const potentialSuppliers = [
  { name: "Supplier A", kg: 200 },
  { name: "Supplier B", kg: 300 },
  { name: "Supplier C", kg: 150 },
  { name: "Supplier D", kg: 400 },
];

const analyticsGroups = [
  {
    title: "Supplier analytics",
    metrics: [
      "Quantity supplied",
      "Supply frequency",
      "Average price",
      "Quality",
      "Reliability",
      "Location",
    ],
  },
  {
    title: "Buyer analytics",
    metrics: [
      "Demand quantity",
      "Purchase frequency",
      "Average price",
      "Preferred suppliers",
      "Historical purchases",
    ],
  },
  {
    title: "Network analytics",
    metrics: [
      "Most active suppliers",
      "Most active buyers",
      "Supply-demand gaps",
      "Average transaction value",
      "Transportation cost",
      "Unfulfilled demand",
      "Available regional supply",
    ],
  },
];

const chartTopics = [
  "Supply trends",
  "Demand trends",
  "Regional supply",
  "Buyer demand",
  "Transaction volume",
  "Revenue",
  "Costs",
  "Match success rate",
  "Unfulfilled demand",
  "Supplier performance",
];

const accessRoles = [
  "Platform Admin",
  "Supplier",
  "Aggregator",
  "Buyer",
  "Manufacturer",
  "Processor",
  "NGO",
  "Logistics Provider",
];

const dataEntities = [
  "Users",
  "Organizations",
  "Roles",
  "Supply Chains",
  "Supply Chain Stages",
  "Supply Listings",
  "Demand Listings",
  "Matches",
  "Transactions",
  "Orders",
  "Logistics",
  "Inventory",
  "Quality Checks",
  "Payments",
  "Analytics",
];

const qrFlow = ["Supply Batch", "Generate QR", "Scan", "View"];

const qrFields = [
  "Source",
  "Quantity",
  "Quality",
  "Date",
  "Location",
  "Current Owner",
  "Status",
];

/* 09 What makes it different */
const comparisons = [
  {
    aspect: "Scope",
    notThis: "A tool that only manages UCO",
    thisPlatform:
      "A configurable digital infrastructure that connects fragmented supply with demand",
  },
  {
    aspect: "Supply chain structure",
    notThis: "One hard-coded supply chain",
    thisPlatform: "Participants and stages configured for each supply chain",
  },
  {
    aspect: "Role in collection",
    notThis: "The platform itself becomes the collector",
    thisPlatform:
      "An existing aggregator or collection company uses the platform to manage its network",
  },
  {
    aspect: "End receivers",
    notThis: "Commercial supply chains only",
    thisPlatform:
      "Commercial and non-commercial chains, ending in manufacturers, NGOs, charities, shelters or community organizations",
  },
];

/* 10 Revenue model */
const revenueStreams = [
  {
    title: "Manufacturers / Buyers",
    intro: "They pay for:",
    items: [
      "Supplier discovery",
      "Supply-demand matching",
      "Verified supplier information",
      "Network analytics",
      "Procurement analytics",
      "Historical data",
      "Premium dashboards",
    ],
  },
  {
    title: "Aggregators",
    intro: "They pay for:",
    items: [
      "Supplier management",
      "Collection planning",
      "Inventory",
      "Logistics coordination",
      "Buyer management",
      "Analytics",
    ],
  },
  {
    title: "Platform transaction fee",
    intro:
      "For successful commercial transactions, the platform could potentially charge a service fee.",
  },
];

/* 11 Use cases */
const ucoFlow = ["Restaurants / Food Stalls", "Aggregator", "Chemical Manufacturer"];

const ucoSuppliers = [
  { name: "Restaurant A", kg: 20 },
  { name: "Restaurant B", kg: 35 },
  { name: "Restaurant C", kg: 15 },
  { name: "Restaurant D", kg: 40 },
];

const ucoPlatformSupport = [
  "Discover suppliers",
  "Aggregate supply",
  "Match supply with demand",
  "Track collection",
  "Track quantities",
  "Manage batches",
  "Coordinate logistics",
  "Track quality",
  "Analyze costs",
  "Analyze suppliers and buyers",
];

const surplusFoodFlow = [
  { name: "Canteen", note: "100 meal portions available" },
  { name: "Platform" },
  { name: "Nearby NGO" },
  { name: "Volunteer / Pickup" },
  { name: "Beneficiaries" },
];

const nonCommercialReceivers = [
  "NGO",
  "Charity",
  "Shelter",
  "Community organization",
];

/* 12 Future scope */
const roadmap = [
  {
    when: "First version",
    title: "Rule-based matching",
    text: "Matching starts as a rule-based algorithm, already a good technical feature on its own. ML is not mandatory for the first version.",
  },
  {
    when: "Future development",
    title: "Map integration",
    text: "Leaflet and OpenStreetMap can display suppliers flowing to an aggregator.",
  },
  {
    when: "Later",
    title: "Route optimization",
    text: "Route optimization can be added after map integration.",
  },
  {
    when: "With enough historical data",
    title: "Machine learning",
    text: "Predictive models become possible once enough historical data has been collected.",
  },
];

const mlPredictions = [
  { title: "Demand", question: "Which material will buyers need next month?" },
  {
    title: "Supply",
    question: "How much UCO could be available from this region?",
  },
  {
    title: "Supplier reliability",
    question: "Which suppliers consistently fulfil their commitments?",
  },
  {
    title: "Matching",
    question: "Which supplier-buyer relationships are likely to work well?",
  },
];

const mlPipeline = [
  "Python",
  "Pandas",
  "Scikit-learn",
  "FastAPI",
  "Node.js Backend",
];

/* ==========================================================================
   Page
   ========================================================================== */

function Idea1() {
  return (
    <div className="idea-page idea-theme-1" id="idea-top">
      <header className="idea-topbar" aria-label="Project navigation">
        <Link className="idea-nav-back" to="/">
          ← Back to Projects
        </Link>
        <Link className="idea-nav-next" to="/idea-2">
          Next Project →
        </Link>
      </header>

      <main className="idea-main">
        {/* Hero */}
        <section className="idea-hero">
          <p className="idea-hero-tag">
            <span className="idea-hero-number">Idea 01</span>
            <span className="idea-hero-context">
              6th-semester B.E. mini project
            </span>
          </p>
          <h1 className="idea-title idea-title--hero">
            Dynamic Supply Chain Network Platform
          </h1>
          <p className="idea-description idea-hero-description">
            A web platform where businesses and organizations can create,
            connect, manage, and analyze supply chains by connecting fragmented
            suppliers with aggregators, processors, buyers, NGOs, or other end
            users.
          </p>

          <div className="idea-hero-statements">
            <p className="idea-hero-statement">
              <span className="idea-hero-statement-label">The problem</span>
              Material that a manufacturer needs is available from hundreds of
              small suppliers, while small suppliers may have difficulty finding
              reliable buyers.
            </p>
            <p className="idea-hero-statement">
              <span className="idea-hero-statement-label">The proposal</span>
              A digital layer that connects fragmented supply with demand and
              manages the supply chain between them.
            </p>
          </div>

          <a className="idea-button" href="#idea-problem">
            Explore the Project ↓
          </a>

          <FieldList className="idea-hero-facts" fields={heroFacts} />
        </section>

        {/* 01 The problem */}
        <section className="idea-section idea-problem" id="idea-problem">
          <SectionHeader
            number="01"
            label="The problem"
            title="Many industries have a fragmented supply problem."
          />

          <div className="idea-stats">
            <div className="idea-stat">
              <span className="idea-stat-value">1,000 kg</span>
              <span className="idea-stat-label">
                of a raw material needed by an industrial manufacturer
              </span>
            </div>
            <div className="idea-stat">
              <span className="idea-stat-value">Hundreds</span>
              <span className="idea-stat-label">
                of small suppliers it is available from
              </span>
            </div>
          </div>

          <div className="idea-grid idea-grid--2">
            <article className="idea-card">
              <h3 className="idea-card-title">The manufacturer’s side</h3>
              <p className="idea-card-text">
                Finding and managing all those suppliers creates costs for the
                manufacturer:
              </p>
              <BulletList items={manufacturerCosts} />
            </article>
            <article className="idea-card">
              <h3 className="idea-card-title">The supplier’s side</h3>
              <p className="idea-card-text">
                At the same time, small suppliers may have difficulty finding
                reliable buyers.
              </p>
            </article>
          </div>
        </section>

        {/* 02 Proposed solution */}
        <section className="idea-section idea-solution">
          <SectionHeader
            number="02"
            label="Proposed solution"
            title="A digital layer connecting fragmented supply and demand."
            intro="Our platform connects both sides: small suppliers on one end, and aggregators, processors, buyers, NGOs or other end users on the other."
          />

          <div className="idea-grid idea-grid--2">
            <ol className="idea-hierarchy">
              {solutionSteps.map((step, index) => (
                <li className="idea-hierarchy-item" key={step.label}>
                  <p className="idea-hierarchy-label">{step.label}</p>
                  <h3 className="idea-card-title">{step.title}</h3>
                  <p className="idea-card-text">{step.text}</p>
                  {index < solutionSteps.length - 1 && (
                    <span className="idea-arrow" aria-hidden="true">
                      ↓
                    </span>
                  )}
                </li>
              ))}
            </ol>

            <div className="idea-panel">
              <h3 className="idea-panel-title">Connecting both sides</h3>
              <Chain
                nodes={supplyFlow}
                direction="vertical"
                label="How supply reaches final use"
              />
            </div>
          </div>
        </section>

        {/* 03 Dynamic by design */}
        <section className="idea-section idea-dynamic">
          <SectionHeader
            number="03"
            label="Dynamic by design"
            title="Why is it “Dynamic”?"
            intro="We don’t hard-code one particular supply chain. The platform allows different participants and stages to be configured according to the particular supply chain."
          />

          <ul className="idea-grid idea-grid--2">
            {dynamicChains.map((chain) => (
              <li
                className="idea-card idea-chain-card"
                key={chain.nodes.join("-")}
              >
                {chain.tag && <span className="idea-tag">{chain.tag}</span>}
                <Chain nodes={chain.nodes} />
              </li>
            ))}
          </ul>

          <p className="idea-note">
            One platform. The participants and stages change with the supply
            chain.
          </p>
        </section>

        {/* 04 How it works */}
        <section className="idea-section idea-how">
          <SectionHeader
            number="04"
            label="How it works"
            title="From user management to analytics."
            intro="The core platform takes a supply chain from registration through matching and logistics to analytics."
          />

          <ol className="idea-workflow">
            {platformWorkflow.map((step, index) => (
              <li className="idea-step" key={step.title}>
                <span className="idea-step-number">{formatIndex(index)}</span>
                <h3 className="idea-step-title">{step.title}</h3>
                <p className="idea-step-text">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="idea-panel idea-stages">
            <h3 className="idea-panel-title">Supply chain stages</h3>
            <p className="idea-card-text">
              Once a match is established, the platform can manage the flow:
            </p>
            <Chain nodes={chainStages} label="Full supply chain" />
            <p className="idea-card-text">
              Not every supply chain needs every stage. For example, this one
              may only require three:
            </p>
            <Chain nodes={minimalChain} label="Minimal supply chain" />
            <p className="idea-note">That’s what makes the platform dynamic.</p>
          </div>
        </section>

        {/* 05 Core features */}
        <section className="idea-section idea-features">
          <SectionHeader
            number="05"
            label="Core features"
            title="What the core platform provides."
            intro="A common platform layer for registering participants, publishing supply and demand, matching them, managing the supply chain and analyzing it."
          />

          <div className="idea-grid idea-grid--3">
            {coreFeatures.map((feature, index) => (
              <article className="idea-card idea-feature" key={feature.title}>
                <span className="idea-feature-number">
                  {formatIndex(index)}
                </span>
                <h3 className="idea-card-title">{feature.title}</h3>
                <p className="idea-card-text">{feature.text}</p>
                <ChipList items={feature.points} />
              </article>
            ))}
          </div>

          <div className="idea-listings">
            <h3 className="idea-subtitle">What a listing looks like</h3>
            <div className="idea-grid idea-grid--3">
              {listingExamples.map((listing) => (
                <article
                  className="idea-card idea-listing"
                  key={`${listing.title}-${listing.context}`}
                >
                  <span className="idea-tag">{listing.context}</span>
                  <h4 className="idea-card-title">{listing.title}</h4>
                  <FieldList fields={listing.fields} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 06 Technical architecture */}
        <section className="idea-section idea-architecture-section">
          <SectionHeader
            number="06"
            label="Technical architecture"
            title="From web platform to business insights."
            intro="Supply and demand listings feed a matching engine and a supply chain engine, which drive logistics, inventory, transactions and analytics."
          />

          <div className="idea-architecture-layout">
            <div
              className="idea-architecture"
              role="group"
              aria-label="High-level architecture diagram"
            >
              <ol className="idea-architecture-layers">
                {architectureLayers.map((nodes, index) => (
                  <li className="idea-architecture-layer" key={nodes.join("-")}>
                    <ul className="idea-architecture-nodes">
                      {nodes.map((node) => (
                        <li className="idea-architecture-node" key={node}>
                          {node}
                        </li>
                      ))}
                    </ul>
                    {index < architectureLayers.length - 1 && (
                      <span
                        className="idea-architecture-arrow"
                        aria-hidden="true"
                      >
                        ↓
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <div className="idea-architecture-side">
              <div className="idea-panel">
                <h3 className="idea-panel-title">Request path</h3>
                <Chain nodes={requestPath} label="Request path" />
              </div>
              <div className="idea-panel">
                <h3 className="idea-panel-title">Deployment</h3>
                <FieldList fields={deploymentTargets} />
              </div>
            </div>
          </div>
        </section>

        {/* 07 Technology stack */}
        <section className="idea-section idea-stack">
          <SectionHeader
            number="07"
            label="Technology stack"
            title="The technologies behind each layer."
            intro="The stack is kept modern but achievable for a 6th-semester B.E. mini project."
          />

          <ul className="idea-tech-grid">
            {techStack.map((item) => (
              <li className="idea-tech-card" key={item.layer}>
                <p className="idea-tech-layer">{item.layer}</p>
                <h3 className="idea-tech-name">{item.technology}</h3>
                {item.role && <p className="idea-tech-role">{item.role}</p>}
                {item.status && <span className="idea-tag">{item.status}</span>}
              </li>
            ))}
          </ul>
        </section>

        {/* 08 Key technical components */}
        <section className="idea-section idea-components">
          <SectionHeader
            number="08"
            label="Key technical components"
            title="What is technically interesting."
            intro="An algorithmic matching engine and a strong analytics layer, supported by role-based access, a relational data model and QR batch tracking."
          />

          <article className="idea-component idea-component--matching">
            <h3 className="idea-component-title">Rule-based matching engine</h3>
            <p className="idea-description">
              Matching starts as a rule-based algorithm rather than AI. Each
              match score is built from five compatibility checks.
            </p>

            <div className="idea-formula">
              <p className="idea-formula-label">Match score =</p>
              <ul className="idea-formula-terms">
                {matchScoreTerms.map((term, index) => (
                  <li className="idea-formula-term" key={term}>
                    {index > 0 && (
                      <span
                        className="idea-formula-operator"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    )}
                    {term}
                  </li>
                ))}
              </ul>
            </div>

            <div className="idea-match-example">
              <h4 className="idea-subtitle">Example</h4>
              <div className="idea-grid idea-grid--2">
                {matchExample.parties.map((party) => (
                  <div className="idea-card" key={party.role}>
                    <p className="idea-card-title">{party.role}</p>
                    <FieldList fields={party.fields} />
                  </div>
                ))}
              </div>
              <p className="idea-match-result">
                <span aria-hidden="true">→</span> {matchExample.result}
              </p>
            </div>

            <div className="idea-aggregation">
              <h4 className="idea-subtitle">
                Matching one demand to many suppliers
              </h4>
              <p className="idea-aggregation-need">
                <span className="idea-aggregation-label">Buyer requires</span>
                <span className="idea-aggregation-value">1,000 kg</span>
              </p>
              <QuantityList
                sources={potentialSuppliers}
                totalLabel="Potential available supply"
              />
            </div>

            <p className="idea-note">
              This gives the project an Algorithmic Foundations of Optimization
              + Data Science component. Machine learning can be introduced
              later.
            </p>
          </article>

          <article className="idea-component idea-component--analytics">
            <h3 className="idea-component-title">Supply chain analytics</h3>
            <p className="idea-description">
              One of the project’s strongest technical components.
            </p>

            <div className="idea-grid idea-grid--3">
              {analyticsGroups.map((group) => (
                <section className="idea-card" key={group.title}>
                  <h4 className="idea-card-title">{group.title}</h4>
                  <BulletList items={group.metrics} />
                </section>
              ))}
            </div>

            <div className="idea-chart-topics">
              <h4 className="idea-subtitle">Visualized with Recharts / Chart.js</h4>
              <ChipList items={chartTopics} />
            </div>
          </article>

          <div className="idea-grid idea-grid--3">
            <article className="idea-card idea-component">
              <h3 className="idea-component-title">Role-based access control</h3>
              <p className="idea-card-text">
                JWT authentication with role-based access control. Each role
                gets a different dashboard.
              </p>
              <ChipList items={accessRoles} />
            </article>

            <article className="idea-card idea-component">
              <h3 className="idea-component-title">Relational data model</h3>
              <p className="idea-card-text">
                PostgreSQL suits a platform with many relationships. Potential
                core entities:
              </p>
              <ChipList items={dataEntities} />
            </article>

            <article className="idea-card idea-component">
              <h3 className="idea-component-title">QR batch tracking</h3>
              <p className="idea-card-text">
                For physical materials and batches, particularly useful for the
                UCO use case.
              </p>
              <Chain nodes={qrFlow} label="QR workflow" />
              <p className="idea-card-text">A scan shows:</p>
              <ChipList items={qrFields} />
            </article>
          </div>
        </section>

        {/* 09 What makes it different */}
        <section className="idea-section idea-usp">
          <SectionHeader
            number="09"
            label="What makes it different"
            title="Configurable infrastructure, not a single supply chain."
          />

          <div className="idea-usp-statement">
            <p className="idea-usp-not">
              <span className="idea-usp-label">The USP is not</span>
              “We manage UCO.”
            </p>
            <blockquote className="idea-usp-quote">
              <span className="idea-usp-label">The USP is</span>
              <p>
                “We provide a configurable digital infrastructure for
                connecting fragmented supply with demand and managing the
                supply chain between them.”
              </p>
            </blockquote>
            <p className="idea-usp-simple">
              In very simple language: people who have something → people who
              need it → our platform connects and manages them.
            </p>
          </div>

          <div className="idea-compare">
            {comparisons.map((row) => (
              <article className="idea-compare-row" key={row.aspect}>
                <h3 className="idea-compare-aspect">{row.aspect}</h3>
                <div className="idea-compare-cell idea-compare-cell--not">
                  <p className="idea-compare-label">Not this</p>
                  <p className="idea-compare-text">{row.notThis}</p>
                </div>
                <div className="idea-compare-cell idea-compare-cell--this">
                  <p className="idea-compare-label">This platform</p>
                  <p className="idea-compare-text">{row.thisPlatform}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 10 Revenue model */}
        <section className="idea-section idea-revenue">
          <SectionHeader
            number="10"
            label="Revenue model"
            title="Who pays, and for what."
            intro="Small suppliers don’t necessarily have to be the primary paying customers. The commercial customers could be manufacturers, buyers and aggregators, with a possible service fee on successful transactions."
          />

          <div className="idea-grid idea-grid--3">
            {revenueStreams.map((stream) => (
              <article className="idea-card" key={stream.title}>
                <h3 className="idea-card-title">{stream.title}</h3>
                <p className="idea-card-text">{stream.intro}</p>
                {stream.items && <BulletList items={stream.items} />}
              </article>
            ))}
          </div>
        </section>

        {/* 11 Use cases */}
        <section className="idea-section idea-use-cases">
          <SectionHeader
            number="11"
            label="Use cases"
            title="One generic engine, two demonstrated supply chains."
            intro="Rather than a full enterprise marketplace, the project builds one generic platform engine and demonstrates it with two supply chains. That shows the platform is dynamic, not hard-coded for UCO."
          />

          <div className="idea-grid idea-grid--2">
            <article className="idea-usecase">
              <p className="idea-usecase-label">Demonstration 1</p>
              <h3 className="idea-usecase-title">UCO supply chain</h3>
              <p className="idea-card-text">
                Small restaurants and food stalls generate Used Cooking Oil.
                Instead of each manufacturer trying to collect small quantities
                individually, supply is aggregated through the platform.
              </p>
              <Chain nodes={ucoFlow} label="UCO supply chain" />
              <QuantityList sources={ucoSuppliers} totalLabel="Aggregated supply" />
              <p className="idea-usecase-destination">
                <span aria-hidden="true">→</span> Chemical / Industrial
                Manufacturer
              </p>
              <h4 className="idea-subtitle">How the platform helps</h4>
              <ChipList items={ucoPlatformSupport} />
              <p className="idea-note">
                <strong>Important:</strong> the platform doesn’t necessarily
                become the UCO collector. An existing aggregator or collection
                company can use the platform to manage its network.
              </p>
            </article>

            <article className="idea-usecase">
              <p className="idea-usecase-label">Demonstration 2</p>
              <h3 className="idea-usecase-title">Surplus food</h3>
              <p className="idea-card-text">
                A hotel, canteen, hostel, or event has suitable surplus food.
              </p>
              <Chain
                nodes={surplusFoodFlow}
                direction="vertical"
                label="Surplus food supply chain"
              />
              <h4 className="idea-subtitle">
                The end receiver isn’t a manufacturer
              </h4>
              <ChipList items={nonCommercialReceivers} />
              <p className="idea-note">
                So the platform supports different types of supply chains, not
                just commercial ones.
              </p>
            </article>
          </div>
        </section>

        {/* 12 Future scope */}
        <section className="idea-section idea-future">
          <SectionHeader
            number="12"
            label="Future scope"
            title="Where the platform can grow."
            intro="The first version keeps matching rule-based. Map integration, route optimization and machine learning build on top of it."
          />

          <ol className="idea-timeline">
            {roadmap.map((item) => (
              <li className="idea-timeline-item" key={item.title}>
                <p className="idea-timeline-when">{item.when}</p>
                <h3 className="idea-card-title">{item.title}</h3>
                <p className="idea-card-text">{item.text}</p>
              </li>
            ))}
          </ol>

          <div className="idea-panel idea-ml">
            <h3 className="idea-panel-title">Optional machine learning</h3>
            <p className="idea-card-text">
              Once there is enough historical data, ML could predict:
            </p>
            <div className="idea-grid idea-grid--2">
              {mlPredictions.map((prediction) => (
                <article className="idea-card" key={prediction.title}>
                  <h4 className="idea-card-title">{prediction.title}</h4>
                  <p className="idea-card-text">{prediction.question}</p>
                </article>
              ))}
            </div>
            <h4 className="idea-subtitle">Possible stack</h4>
            <Chain nodes={mlPipeline} label="Machine learning pipeline" />
            <p className="idea-note">
              ML isn’t mandatory for the first version. The matching algorithm
              is already a good technical feature.
            </p>
          </div>
        </section>
      </main>

      <footer className="idea-cta">
        <p className="idea-section-label">The idea in one line</p>
        <h2 className="idea-title">
          People who have something → people who need it → our platform
          connects and manages them.
        </h2>
        <div className="idea-cta-actions">
          <Link className="idea-button" to="/">
            ← Back to Projects
          </Link>
          <a className="idea-button idea-button--secondary" href="#idea-top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}


export default Idea1;