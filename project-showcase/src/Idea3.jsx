import { Link } from "react-router-dom";
import "./styles/global.css";

const heroFacts = [
  { label: "Platform", value: "Android only" },
  { label: "Container", value: ".n1n4d" },
  { label: "Cipher", value: "AES-256-GCM" },
  { label: "Authority", value: "Backend" },
];

const problemPoints = [
  {
    number: "01",
    title: "Files travel freely",
    text: "A protected media file can be copied, forwarded, or stored on a phone, a Drive account, or a USB stick. Copying the file must never grant access to it.",
  },
  {
    number: "02",
    title: "Clients can be attacked",
    text: "An attacker may download the NASK APK, decompile it, modify it, recompile it, install it, or run it inside an Android emulator.",
  },
  {
    number: "03",
    title: "Local state can be reset",
    text: "Deleting the file, uninstalling, reinstalling, forwarding, or clearing app data must not reset authorization.",
  },
  {
    number: "04",
    title: "Access is not a forwarding counter",
    text: "Limiting access is not about counting how many times a file is forwarded. The system must track which installations are actually authorized.",
  },
];

const solutionStages = [
  {
    label: "Problem",
    title: "Portable media, untrusted environments",
    text: "The media file moves freely, and the client application can be reverse engineered or tampered with.",
  },
  {
    label: "Proposed System",
    title: "Local encryption + backend authorization",
    text: "Media is encrypted locally into a .n1n4d container. A backend-controlled authorization protocol and a controlled Android client decide who may open it.",
  },
  {
    label: "Result",
    title: "Free distribution, controlled access",
    text: "The file can be freely distributed, while the backend determines which Android installations may decrypt and view it.",
  },
];

const roleCards = [
  {
    label: "Backend",
    text: "Manages asset state, policy, installation identity, authorization, and auditing.",
  },
  {
    label: ".n1n4d file",
    text: "Holds the protected media as a portable encrypted object.",
  },
  {
    label: "Android client",
    text: "A controlled cryptographic and rendering environment.",
  },
];

const creatorSteps = [
  {
    number: "01",
    title: "Login",
    text: "Root authenticates with NASK.",
  },
  {
    number: "02",
    title: "Create protected asset",
    text: "Root specifies the share limit, maximum depth, delegation, and offline policy.",
  },
  {
    number: "03",
    title: "Backend authorization",
    text: "Root's Android application contacts NASK. The backend creates the Asset ID, policy, authorization state, and cryptographic setup.",
  },
  {
    number: "04",
    title: "Local encryption",
    text: "movie.mp4 goes through the local NASK packager and becomes movie.n1n4d. The backend never needs the original movie.",
  },
];

const openingSteps = [
  { number: "01", title: "Receive .n1n4d", text: "The file arrives from anywhere. NASK parses Asset ID, format, crypto metadata, and policy metadata." },
  { number: "02", title: "Verify installation", text: "The backend verifies the installation identity." },
  { number: "03", title: "Verify integrity", text: "App and device integrity are checked." },
  { number: "04", title: "Check asset active", text: "The asset must be in a state that allows access." },
  { number: "05", title: "Check authorization tree", text: "The backend looks at the recorded tree of authorized installations." },
  { number: "06", title: "Check remaining limit", text: "A free slot must remain." },
  { number: "07", title: "Create authorization node", text: "The new installation is added to the tree." },
  { number: "08", title: "Cryptographic authorization", text: "Asset-specific cryptographic access is granted." },
  { number: "09", title: "Playback", text: "The media is rendered through the controlled pipeline." },
];

const existingInstallationPath = [
  "Local authorization",
  "Local cryptographic access",
  "Playback",
];

const containerFields = [
  "N1N4D magic",
  "Format version",
  "Asset ID",
  "Media type",
  "Crypto version",
  "Chunk information",
  "Policy metadata",
  "Policy integrity information",
];

const features = [
  {
    number: "01",
    title: "Portable .n1n4d container",
    text: "A container format, not a new encryption algorithm. The file can be copied freely and carries the asset's metadata and encrypted payload.",
  },
  {
    number: "02",
    title: "Local encryption",
    text: "The media stays on the creator's phone and is encrypted by the local NASK packager. The backend never needs the original.",
  },
  {
    number: "03",
    title: "Installation identity",
    text: "Each installation has a key pair. The public key goes to the backend, while the private key stays in Android Keystore.",
  },
  {
    number: "04",
    title: "Dynamic authorization tree",
    text: "The tree is created dynamically as installations are authorized. The backend records the actual topology.",
  },
  {
    number: "05",
    title: "Permanent slots",
    text: "A consumed slot is never returned. Deleting the file, uninstalling, reinstalling, forwarding, or clearing app data does not reset authorization.",
  },
  {
    number: "06",
    title: "No recovery mechanism",
    text: "A lost file means no slot reset and no recovery unlock. A new purchase starts a new authorization lifecycle.",
  },
  {
    number: "07",
    title: "Backend asset state",
    text: "Each asset is ACTIVE, SUSPENDED, REVOKED, or EXPIRED. NASK only needs to know the state of the asset, wherever the file is.",
  },
  {
    number: "08",
    title: "Atomic slot allocation",
    text: "Slot checks and reservation run in a single database transaction, so concurrent requests cannot over-allocate.",
  },
  {
    number: "09",
    title: "Secure media rendering",
    text: "Chunks are decrypted and played through a controlled Media3 / ExoPlayer pipeline, never written out as a plaintext file.",
  },
  {
    number: "10",
    title: "Screenshot protection",
    text: "FLAG_SECURE is used where appropriate to block ordinary Android screenshot and screen-recording paths.",
  },
  {
    number: "11",
    title: "Optional dynamic watermark",
    text: "For premium content, a user or installation identifier, timestamp, and asset ID can be rendered as a visible or subtle watermark for deterrence and provenance.",
  },
  {
    number: "12",
    title: "Audit system",
    text: "The backend records asset creation, authorization attempts, grants, rejections, new installations, delegation, access events, integrity failures, and asset suspension.",
  },
  {
    number: "13",
    title: "Paid device identification",
    text: "A premium seller feature that shows installation ID, platform, first authorization, last access, integrity state, access level, and parent node.",
  },
];

const backendServices = [
  "Asset Service",
  "Policy Service",
  "Authorization Engine",
  "Key Service",
  "Identity Service",
  "Audit Service",
  "Asset Status",
];

const androidModules = [
  "Kotlin Application",
  "Android Keystore",
  "Integrity Checks",
  ".n1n4d Parser",
  "Crypto Module",
  "Secure Renderer",
];

const securityLayers = [
  {
    title: "Cryptography",
    items: ["AES-256-GCM", "Key hierarchy"],
  },
  {
    title: "Identity",
    items: ["Android Keystore", "Key pairs"],
  },
  {
    title: "Integrity",
    items: ["Play Integrity", "App verification"],
  },
];

const securityFlow = [
  "Backend Authorization",
  "Access Tree",
  "Secure Rendering",
];

const keyHierarchy = [
  { title: "Installation Key", text: "Identifies and proves the installation." },
  { title: "Authorization protocol", text: "Challenge-response against the backend." },
  { title: "Content-key authorization", text: "Asset-specific cryptographic access." },
  { title: "Media decryption", text: "Chunk-wise authenticated decryption." },
];

const challengeSteps = [
  "Backend sends a challenge",
  "Android app signs the challenge",
  "Backend verifies against the stored public key",
];

const techComponents = [
  {
    number: "01",
    title: "Cryptography",
    points: [
      "Established primitives only. NASK does not invent its own encryption algorithm.",
      "AES-256-GCM for authenticated encryption: confidentiality, integrity, and authentication.",
      "Elliptic-curve cryptography using Android-supported primitives for asymmetric operations.",
      "SHA-256 / SHA-3 where appropriate, and Android's cryptographically secure random generator.",
    ],
  },
  {
    number: "02",
    title: "Chunked authenticated encryption",
    points: [
      "Large media is split into chunks, each with authenticated encryption.",
      "This makes progressive playback practical.",
      "Tampering with the file is caught by AEAD integrity verification.",
    ],
  },
  {
    number: "03",
    title: "Installation identity and proof of possession",
    points: [
      "The private key is generated and protected with Android Keystore, hardware-backed where supported, and never uploaded.",
      "Authorization uses challenge-response, which gives cryptographic proof of possession.",
      "Weak identifiers such as IMEI, Android ID, device model, and MAC address are not relied upon.",
    ],
  },
  {
    number: "04",
    title: "App and device integrity",
    points: [
      "The backend does not trust a client that claims isAuthorized = true.",
      "Installation identity, app integrity, device integrity, and backend authorization are combined.",
      "Google Play Integrity is incorporated into the verification layer.",
    ],
  },
  {
    number: "05",
    title: "Anti-tampering and emulator handling",
    points: [
      "Client checks: release build verification, signature verification, debugger detection, integrity verification, unexpected modification detection, and root/emulator risk signals where appropriate.",
      "No master decryption key sits behind an if (isTampered == false) check, because that can be patched out.",
      "The backend independently verifies the installation and can reject or restrict authorization when integrity conditions are not met.",
    ],
  },
  {
    number: "06",
    title: "Authorization ledger and race protection",
    points: [
      "The authorization tree is stored in PostgreSQL as a permanent ledger.",
      "Allocation runs atomically: check the remaining slot, reserve it, create the authorization node, commit.",
      "With a limit of 3 and 2 consumed, only one of 50 simultaneous requests gets slot 3.",
    ],
  },
  {
    number: "07",
    title: "Reverse-engineering resistance",
    points: [
      "R8 in release builds for shrinking, obfuscation, optimization, and less readable class and method names.",
      "Selective C/C++ code through the Android NDK, exposed via a small JNI interface, for particularly sensitive client operations.",
      "Both are secondary defenses and not the cryptographic security boundary.",
    ],
  },
  {
    number: "08",
    title: "Controlled rendering",
    points: [
      "Encrypted chunks are decrypted locally and fed into a controlled media pipeline.",
      "The entire movie is never decrypted into a storage path such as /storage/movie.mp4.",
      "FLAG_SECURE and optional dynamic watermarking complete the display layer.",
    ],
  },
];

const trustPriority = [
  "Backend authorization",
  "Cryptographic design",
  "Keystore",
  "Integrity verification",
  "R8 / obfuscation",
  "Native code",
];

const chainTree = {
  name: "ROOT",
  children: [
    { name: "A", children: [{ name: "C", children: [{ name: "D" }] }] },
    { name: "B" },
  ],
};

const fanTree = {
  name: "ROOT",
  children: [{ name: "A" }, { name: "B" }, { name: "C" }, { name: "D" }],
};

const trees = [
  { label: "Topology one", tree: chainTree },
  { label: "Topology two", tree: fanTree },
];

const differences = [
  {
    topic: "Installation identity",
    naive: "Weak identifiers: IMEI, Android ID, device model, MAC address",
    nask: "Key pair with the private key in Android Keystore and challenge-response",
    improvement: "Cryptographic proof of possession",
  },
  {
    topic: "Share limit",
    naive: "A file-forwarding counter",
    nask: "A dynamic tree of authorized installations; forwarding the file does not consume a node",
    improvement: "The same .n1n4d can have different authorization topologies",
  },
  {
    topic: "Trusting the client",
    naive: "Client says isAuthorized = true",
    nask: "Installation identity, app integrity, device integrity, and backend authorization",
    improvement: "Backend verifies independently",
  },
  {
    topic: "Secrets in the APK",
    naive: "A master key that can be found by decompiling",
    nask: "No secret embedded in the APK is sufficient to decrypt arbitrary .n1n4d files",
    improvement: "Understanding the code is not the same as obtaining authorization",
  },
  {
    topic: "Reset behaviour",
    naive: "Delete, uninstall, or reinstall to start over",
    nask: "Permanent authorization ledger in PostgreSQL",
    improvement: "Consumed slots are never returned",
  },
  {
    topic: "Playback",
    naive: "Decrypt the entire movie to a plaintext file",
    nask: "Chunk-wise decryption into a controlled Media3 pipeline",
    improvement: "No obvious extraction target",
  },
];

const useCaseFlow = [
  {
    label: "Creator",
    title: "Root protects movie.mp4",
    text: "Share limit 3, maximum depth 2, delegation enabled. The file is encrypted locally into movie.n1n4d.",
  },
  {
    label: "Distribution",
    title: "File is copied freely",
    text: "It can sit on someone's phone, Drive account, or USB stick. Copying grants no authorization.",
  },
  {
    label: "New installation",
    title: "Backend authorization",
    text: "Challenge-response, integrity checks, asset status, tree check, and remaining-limit check.",
  },
  {
    label: "Viewer",
    title: "Protected playback",
    text: "Controlled Media3 rendering, with FLAG_SECURE and an optional watermark.",
  },
];

const sellerView = {
  asset: "ABC123",
  status: "ACTIVE",
  authorized: "2 / 4",
  tree: {
    name: "ROOT",
    children: [{ name: "A" }, { name: "B" }],
  },
};

const scenarios = [
  {
    title: "Race for the final slot",
    text: "Limit = 3, Consumed = 2, and 50 people try at the same time. The atomic transaction lets only one of them take slot 3.",
  },
  {
    title: "Lost file",
    text: "No slot reset and no recovery unlock. The customer buys the content again, and the new protected asset starts a new authorization lifecycle.",
  },
  {
    title: "Unexpected installation",
    text: "If the expected tree does not match reality, NASK reports \"Unexpected installation authorized\" rather than claiming the content was stolen.",
  },
];

const androidReasons = [
  "Application execution environment",
  "Installation identity",
  "Cryptographic key storage",
  "Secure rendering",
  "App integrity",
  "Screenshot and screen-recording controls",
  "Decompilation and tampering resistance",
  "Device-bound authorization",
];

const desktopRisks = [
  "Reverse engineering",
  "Debuggers",
  "Memory inspection",
  "DLL / shared-library injection",
  "Modified binaries",
  "Virtual machines",
  "Different media pipelines",
  "Much harder environment control",
];

const limits = [
  {
    title: "Physical capture cannot be prevented",
    text: "A camera pointed at the screen cannot be stopped cryptographically. NASK never claims to be piracy-proof.",
  },
  {
    title: "An APK cannot be made impossible to decompile",
    text: "The goal is that decompiling NASK does not reveal a secret that bypasses backend authorization or decrypts arbitrary .n1n4d files.",
  },
  {
    title: "R8 and NDK are not the root of trust",
    text: "They raise reverse-engineering effort but do not make secrets magically safe.",
  },
  {
    title: "Client v1 targets Android only",
    text: "This is a deliberate architectural decision. The backend can remain platform-independent.",
  },
];

const attackDefense = [
  { attack: "Copy .n1n4d", defense: "Copying does not grant authorization" },
  { attack: "Forward .n1n4d", defense: "Backend authorization required" },
  { attack: "Modify file", defense: "AEAD integrity verification" },
  { attack: "Change share limit", defense: "Authenticated policy and backend authority" },
  { attack: "Replay authorization", defense: "Challenge-response and server-side state" },
  { attack: "Race for final slot", defense: "Atomic database transaction" },
  { attack: "Delete / reinstall", defense: "Permanent authorization ledger" },
  { attack: "Modified APK", defense: "Integrity verification and backend enforcement" },
  { attack: "Decompile APK", defense: "No master secret embedded in the APK" },
  { attack: "Extract installation key", defense: "Android Keystore, hardware-backed where available" },
  { attack: "Emulator abuse", defense: "Integrity and risk checks" },
  { attack: "API manipulation", defense: "Server-side authorization" },
  { attack: "Screenshot", defense: "FLAG_SECURE where supported" },
  { attack: "Plaintext file extraction", defense: "Controlled local rendering" },
  { attack: "Backend compromise", defense: "Key separation and least privilege" },
  { attack: "Physical camera", defense: "Cannot be prevented" },
];

const androidStack = [
  { component: "Language", technology: "Kotlin" },
  { component: "UI", technology: "Jetpack Compose" },
  { component: "Architecture", technology: "Clean Architecture + MVVM" },
  { component: "Dependency injection", technology: "Hilt" },
  { component: "Networking", technology: "Retrofit + OkHttp" },
  { component: "Serialization", technology: "Kotlinx Serialization" },
  { component: "Local database", technology: "Room" },
  { component: "Secure key storage", technology: "Android Keystore" },
  { component: "Crypto", technology: "Google Tink / Android cryptographic APIs" },
  { component: "Media playback", technology: "AndroidX Media3 / ExoPlayer" },
  { component: "Background work", technology: "WorkManager" },
  { component: "QR", technology: "ML Kit / ZXing, if needed" },
  { component: "Obfuscation", technology: "R8" },
  { component: "Native security", technology: "Android NDK / C++, selectively" },
  { component: "Integrity", technology: "Google Play Integrity API" },
];

const backendStack = [
  { component: "Backend", technology: "Java + Spring Boot" },
  { component: "API", technology: "REST" },
  { component: "Database", technology: "PostgreSQL" },
  { component: "Cache / rate limiting", technology: "Redis" },
  { component: "Authentication", technology: "JWT + refresh tokens" },
  { component: "Cryptographic service", technology: "Java Cryptography Architecture / Tink where applicable" },
  { component: "ORM", technology: "Spring Data JPA / Hibernate" },
  { component: "Database migrations", technology: "Flyway" },
  { component: "API documentation", technology: "OpenAPI / Swagger" },
  { component: "Logging", technology: "SLF4J + structured logging" },
];

const stackGroups = [
  { title: "Android application", rows: androidStack },
  { title: "Backend", rows: backendStack },
];

const coreTables = [
  "USERS",
  "ORGANIZATIONS",
  "INSTALLATIONS",
  "ASSETS",
  "POLICIES",
  "AUTHORIZATIONS",
  "ACCESS_EVENTS",
  "INTEGRITY_EVENTS",
  "CRYPTO_SESSIONS",
];

const devTools = ["Docker", "GitHub", "GitHub Actions", "Postman", "Android Studio"];

const separationOfConcerns = [
  { term: ".n1n4d", role: "Portable encrypted object" },
  { term: "Android app", role: "Controlled cryptographic and rendering client" },
  { term: "Backend", role: "Authorization and asset-state authority" },
  { term: "Android Keystore", role: "Installation identity protection" },
  { term: "Play Integrity", role: "Client-integrity signal" },
  { term: "PostgreSQL", role: "Permanent authorization and state ledger" },
  { term: "Media3", role: "Controlled playback" },
  { term: "R8 / NDK", role: "Reverse-engineering resistance, not the root of trust" },
];

const phases = [
  {
    number: "Phase 1",
    title: ".n1n4d prototype",
    text: "MP4, local packager, AES-GCM chunk encryption, .n1n4d, NASK parser, local playback. No backend yet.",
  },
  {
    number: "Phase 2",
    title: "Backend",
    text: "Asset creation, asset status, policy, authorization, and installation registration.",
  },
  {
    number: "Phase 3",
    title: "Cryptographic identity",
    text: "Android Keystore, installation key pair, backend registration, and challenge-response.",
  },
  {
    number: "Phase 4",
    title: "Authorization tree",
    text: "ROOT with child installations and delegated nodes, with permanent slots and atomic allocation.",
  },
  {
    number: "Phase 5",
    title: "Integrity",
    text: "Play Integrity, R8, signature verification, and anti-tamper checks.",
  },
  {
    number: "Phase 6",
    title: "Secure renderer",
    text: "Media3, controlled decryption, secure surface, FLAG_SECURE, and watermarking.",
  },
  {
    number: "Phase 7",
    title: "Attack testing",
    text: "Copy, forward, and modify the file; modify policy; replay requests; race authorization; decompile and patch the APK; run a modified client; use an emulator; extract local files; attempt plaintext recovery. Each is documented as attack, expected result, actual result, defense.",
  },
];

function SectionHeader({ number, label, title, intro }) {
  return (
    <header className="idea-section-header">
      <p className="idea-section-label">
        <span className="idea-section-number">{number}</span>
        {label}
      </p>
      <h2 className="idea-title">{title}</h2>
      {intro && <p className="idea-description">{intro}</p>}
    </header>
  );
}

function TreeNode({ node }) {
  return (
    <li className="idea-tree-node">
      <span className="idea-tree-label">{node.name}</span>
      {node.children && (
        <ul className="idea-tree-children">
          {node.children.map((child) => (
            <TreeNode key={child.name} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

function Idea3() {
  return (
    <main className="idea-page idea-theme-3">
      <header className="idea-topbar" aria-label="Project navigation">
        <Link className="idea-nav-back" to="/">
          ← Back to Projects
        </Link>
        <Link className="idea-nav-next" to="/idea-1">
          Next Project →
        </Link>
      </header>

      <section className="idea-hero">
        <p className="idea-section-label">
          <span className="idea-section-number">03</span>
          Project
        </p>
        <h1 className="idea-hero-title">NASK</h1>
        <p className="idea-hero-subtitle">Native Access Security Kernel</p>
        <p className="idea-description idea-hero-description">
          An Android-only secure digital-media access system. Media is encrypted
          locally into a portable <code>.n1n4d</code> container, and a
          backend-controlled authorization protocol decides which Android
          installations may decrypt and view it.
        </p>
        <p className="idea-hero-statement">
          The file can be freely distributed. Access cannot.
        </p>
        <dl className="idea-hero-facts">
          {heroFacts.map((fact) => (
            <div className="idea-hero-fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <a className="idea-cta-link" href="#problem">
          Explore the Project ↓
        </a>
      </section>

      <section className="idea-section" id="problem">
        <SectionHeader
          number="01"
          label="Problem"
          title="A file that moves freely still needs controlled access"
          intro="Protected media can be copied, forwarded, and stored anywhere, and the client application can be attacked. Access control has to survive both."
        />
        <div className="idea-grid">
          {problemPoints.map((point) => (
            <article className="idea-card" key={point.number}>
              <span className="idea-card-number">{point.number}</span>
              <h3 className="idea-card-title">{point.title}</h3>
              <p className="idea-card-text">{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="idea-section">
        <SectionHeader
          number="02"
          label="Proposed Solution"
          title="Portable encrypted object, backend-controlled access"
          intro="NASK separates the protected content from the authority that decides who may open it."
        />
        <div className="idea-solution-flow">
          {solutionStages.map((stage, index) => (
            <div className="idea-solution-item" key={stage.label}>
              <article className="idea-card idea-solution-card">
                <p className="idea-card-label">{stage.label}</p>
                <h3 className="idea-card-title">{stage.title}</h3>
                <p className="idea-card-text">{stage.text}</p>
              </article>
              {index < solutionStages.length - 1 && (
                <span className="idea-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="idea-grid idea-grid-three">
          {roleCards.map((role) => (
            <article className="idea-card idea-role-card" key={role.label}>
              <p className="idea-card-label">{role.label}</p>
              <p className="idea-card-text">{role.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="idea-section">
        <SectionHeader
          number="03"
          label="Why Android Only"
          title="An architectural decision, not an MVP limitation"
          intro="NASK Client v1 targets Android devices only. The security model depends on controlling the client environment, while the backend can remain platform-independent."
        />
        <div className="idea-compare">
          <article className="idea-card">
            <p className="idea-card-label">What Android lets NASK control</p>
            <ul className="idea-list">
              {androidReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
            <p className="idea-card-text">
              Android Keystore and Play Integrity fit this architecture.
            </p>
          </article>
          <article className="idea-card">
            <p className="idea-card-label">A desktop client would add</p>
            <ul className="idea-list">
              {desktopRisks.map((risk) => (
                <li key={risk}>{risk}</li>
              ))}
            </ul>
            <p className="idea-card-text">
              A much larger attack surface on Windows, Linux, and macOS.
            </p>
          </article>
        </div>
        <blockquote className="idea-quote">
          The protected client is intentionally constrained to Android because
          the threat model and security controls are designed around a managed
          mobile execution environment.
        </blockquote>
      </section>

      <section className="idea-section">
        <SectionHeader
          number="04"
          label="How It Works"
          title="From creator to authorized viewer"
          intro="Two workflows: the creator protecting an asset, and a new installation opening a .n1n4d file."
        />

        <h3 className="idea-subtitle">Creator workflow</h3>
        <ol className="idea-workflow">
          {creatorSteps.map((step) => (
            <li className="idea-step" key={step.number}>
              <span className="idea-step-number">{step.number}</span>
              <h4 className="idea-step-title">{step.title}</h4>
              <p className="idea-step-text">{step.text}</p>
            </li>
          ))}
        </ol>

        <h3 className="idea-subtitle">Opening a .n1n4d on a new installation</h3>
        <ol className="idea-workflow idea-workflow-long">
          {openingSteps.map((step) => (
            <li className="idea-step" key={step.number}>
              <span className="idea-step-number">{step.number}</span>
              <h4 className="idea-step-title">{step.title}</h4>
              <p className="idea-step-text">{step.text}</p>
            </li>
          ))}
        </ol>

        <h3 className="idea-subtitle">
          Opening on an already authorized installation
        </h3>
        <p className="idea-description">
          Depending on the asset's offline policy, access can stay local.
        </p>
        <div className="idea-inline-flow">
          {existingInstallationPath.map((item, index) => (
            <span className="idea-inline-flow-item" key={item}>
              <span className="idea-chip">{item}</span>
              {index < existingInstallationPath.length - 1 && (
                <span className="idea-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </span>
          ))}
        </div>
      </section>

      <section className="idea-section">
        <SectionHeader
          number="05"
          label="The .n1n4d Container"
          title="A container format, not a new cipher"
          intro="Large media is split into chunks, each protected with authenticated encryption, which makes progressive playback practical."
        />
        <div className="idea-container-format">
          <div className="idea-container-block idea-container-header">
            <p className="idea-card-label">Header</p>
            <ul className="idea-list">
              {containerFields.map((field) => (
                <li key={field}>{field}</li>
              ))}
            </ul>
          </div>
          <div className="idea-container-block idea-container-payload">
            <p className="idea-card-label">Encrypted payload</p>
            <p className="idea-card-text">
              Encrypted media chunks: Chunk 0, Chunk 1, Chunk 2, and so on, each
              with authenticated encryption.
            </p>
          </div>
          <div className="idea-container-block idea-container-footer">
            <p className="idea-card-label">Footer</p>
            <p className="idea-card-text">Authentication / integrity</p>
          </div>
        </div>
      </section>

      <section className="idea-section">
        <SectionHeader
          number="06"
          label="Core Features"
          title="What NASK provides"
        />
        <div className="idea-grid idea-feature-grid">
          {features.map((feature) => (
            <article className="idea-card idea-feature" key={feature.number}>
              <span className="idea-card-number">{feature.number}</span>
              <h3 className="idea-card-title">{feature.title}</h3>
              <p className="idea-card-text">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="idea-section">
        <SectionHeader
          number="07"
          label="Dynamic Authorization Tree"
          title="Not a forwarding counter"
          intro="The finite value is the authorization-node (share) limit. The .n1n4d itself can be forwarded indefinitely, and forwarding does not consume a node. The tree is created dynamically as installations are authorized."
        />
        <p className="idea-description">
          Example with a limit of 4: same asset, same .n1n4d, different
          authorization topology. The backend records the actual tree.
        </p>
        <div className="idea-grid idea-grid-two">
          {trees.map((item) => (
            <article className="idea-card idea-tree-card" key={item.label}>
              <p className="idea-card-label">{item.label}</p>
              <ul className="idea-tree">
                <TreeNode node={item.tree} />
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="idea-section">
        <SectionHeader
          number="08"
          label="Technical Architecture"
          title="Backend authority, controlled Android client"
          intro="The backend manages asset state, policy, installation identity, authorization, and auditing. The protected media stays in the portable file."
        />
        <div className="idea-architecture">
          <div className="idea-architecture-layer">
            <p className="idea-card-label">NASK Backend</p>
            <ul className="idea-tech-grid">
              {backendServices.map((service) => (
                <li className="idea-tech-card" key={service}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="idea-architecture-link">
            <span className="idea-arrow" aria-hidden="true">
              ↕
            </span>
            <p className="idea-card-label">HTTPS / Auth Protocol</p>
          </div>
          <div className="idea-architecture-layer">
            <p className="idea-card-label">NASK Android</p>
            <ul className="idea-tech-grid">
              {androidModules.map((module) => (
                <li className="idea-tech-card" key={module}>
                  {module}
                </li>
              ))}
            </ul>
          </div>
          <div className="idea-architecture-link">
            <span className="idea-arrow" aria-hidden="true">
              ↓
            </span>
          </div>
          <div className="idea-architecture-layer idea-architecture-file">
            <p className="idea-card-label">.n1n4d file</p>
            <p className="idea-card-text">Can be copied freely.</p>
          </div>
        </div>

        <h3 className="idea-subtitle">Security stack</h3>
        <div className="idea-grid idea-grid-three">
          {securityLayers.map((layer) => (
            <article className="idea-card" key={layer.title}>
              <p className="idea-card-label">{layer.title}</p>
              <ul className="idea-list">
                {layer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="idea-inline-flow">
          {securityFlow.map((item, index) => (
            <span className="idea-inline-flow-item" key={item}>
              <span className="idea-chip">{item}</span>
              {index < securityFlow.length - 1 && (
                <span className="idea-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </span>
          ))}
        </div>
      </section>

      <section className="idea-section">
        <SectionHeader
          number="09"
          label="Key Technical Components"
          title="What is technically interesting"
        />

        <h3 className="idea-subtitle">Key hierarchy</h3>
        <ol className="idea-workflow">
          {keyHierarchy.map((level, index) => (
            <li className="idea-step" key={level.title}>
              <span className="idea-step-number">{`0${index + 1}`}</span>
              <h4 className="idea-step-title">{level.title}</h4>
              <p className="idea-step-text">{level.text}</p>
            </li>
          ))}
        </ol>

        <h3 className="idea-subtitle">Challenge-response</h3>
        <ol className="idea-workflow idea-workflow-short">
          {challengeSteps.map((step, index) => (
            <li className="idea-step" key={step}>
              <span className="idea-step-number">{`0${index + 1}`}</span>
              <p className="idea-step-text">{step}</p>
            </li>
          ))}
        </ol>

        <div className="idea-grid idea-grid-two">
          {techComponents.map((component) => (
            <article className="idea-card idea-tech-component" key={component.number}>
              <span className="idea-card-number">{component.number}</span>
              <h3 className="idea-card-title">{component.title}</h3>
              <ul className="idea-list">
                {component.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <h3 className="idea-subtitle">Order of trust</h3>
        <p className="idea-description">
          The first layers are the real security boundary. The last layers only
          raise reverse-engineering effort.
        </p>
        <ol className="idea-priority">
          {trustPriority.map((layer) => (
            <li className="idea-priority-item" key={layer}>
              {layer}
            </li>
          ))}
        </ol>
        <blockquote className="idea-quote">
          No secret embedded in the APK may be sufficient to decrypt arbitrary
          .n1n4d files.
        </blockquote>
      </section>

      <section className="idea-section">
        <SectionHeader
          number="10"
          label="What Makes It Different"
          title="Naive approach versus NASK"
          intro="Understanding the APK's code is not equivalent to obtaining authorization."
        />
        <div className="idea-difference-list">
          {differences.map((row) => (
            <article className="idea-difference" key={row.topic}>
              <h3 className="idea-card-title">{row.topic}</h3>
              <div className="idea-difference-columns">
                <div className="idea-difference-cell">
                  <p className="idea-card-label">Naive approach</p>
                  <p className="idea-card-text">{row.naive}</p>
                </div>
                <div className="idea-difference-cell">
                  <p className="idea-card-label">NASK approach</p>
                  <p className="idea-card-text">{row.nask}</p>
                </div>
                <div className="idea-difference-cell idea-difference-gain">
                  <p className="idea-card-label">Improvement</p>
                  <p className="idea-card-text">{row.improvement}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="idea-section">
        <SectionHeader
          number="11"
          label="Use Case"
          title="One protected movie, end to end"
        />
        <div className="idea-solution-flow">
          {useCaseFlow.map((item, index) => (
            <div className="idea-solution-item" key={item.label}>
              <article className="idea-card idea-solution-card">
                <p className="idea-card-label">{item.label}</p>
                <h3 className="idea-card-title">{item.title}</h3>
                <p className="idea-card-text">{item.text}</p>
              </article>
              {index < useCaseFlow.length - 1 && (
                <span className="idea-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <h3 className="idea-subtitle">What the seller sees</h3>
        <article className="idea-card idea-seller-view">
          <dl className="idea-meta-list">
            <div>
              <dt>Asset</dt>
              <dd>{sellerView.asset}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{sellerView.status}</dd>
            </div>
            <div>
              <dt>Authorized</dt>
              <dd>{sellerView.authorized}</dd>
            </div>
          </dl>
          <ul className="idea-tree">
            <TreeNode node={sellerView.tree} />
          </ul>
        </article>

        <div className="idea-grid idea-grid-three">
          {scenarios.map((scenario) => (
            <article className="idea-card" key={scenario.title}>
              <h3 className="idea-card-title">{scenario.title}</h3>
              <p className="idea-card-text">{scenario.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="idea-section">
        <SectionHeader
          number="12"
          label="Attack and Defense Model"
          title="Designed to be tested against"
          intro="NASK is evaluated against explicit attacks, and the result of each is documented."
        />
        <div className="idea-table-wrapper">
          <table className="idea-table">
            <thead>
              <tr>
                <th scope="col">Attack</th>
                <th scope="col">Defense</th>
              </tr>
            </thead>
            <tbody>
              {attackDefense.map((row) => (
                <tr key={row.attack}>
                  <td>{row.attack}</td>
                  <td>{row.defense}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="idea-section">
        <SectionHeader
          number="13"
          label="Honest Limits"
          title="What NASK does not claim"
          intro="NASK controls digital authorization and protected digital access. It cannot prevent physical capture of displayed content."
        />
        <div className="idea-grid">
          {limits.map((limit) => (
            <article className="idea-card" key={limit.title}>
              <h3 className="idea-card-title">{limit.title}</h3>
              <p className="idea-card-text">{limit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="idea-section">
        <SectionHeader
          number="14"
          label="Technology Stack"
          title="Android, Spring Boot, PostgreSQL"
        />
        <div className="idea-grid idea-grid-two">
          {stackGroups.map((group) => (
            <article className="idea-card idea-stack-card" key={group.title}>
              <p className="idea-card-label">{group.title}</p>
              <table className="idea-table idea-table-compact">
                <tbody>
                  {group.rows.map((row) => (
                    <tr key={row.component}>
                      <th scope="row">{row.component}</th>
                      <td>{row.technology}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
          ))}
        </div>

        <div className="idea-grid idea-grid-two">
          <article className="idea-card">
            <p className="idea-card-label">PostgreSQL core tables</p>
            <ul className="idea-tech-grid">
              {coreTables.map((table) => (
                <li className="idea-tech-card" key={table}>
                  {table}
                </li>
              ))}
            </ul>
          </article>
          <article className="idea-card">
            <p className="idea-card-label">Infrastructure and development</p>
            <p className="idea-card-text">
              Android over HTTPS to the Spring Boot API, backed by PostgreSQL and
              Redis. Deployed as an Android APK against a cloud backend.
            </p>
            <ul className="idea-tech-grid">
              {devTools.map((tool) => (
                <li className="idea-tech-card" key={tool}>
                  {tool}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <h3 className="idea-subtitle">Separation of responsibilities</h3>
        <dl className="idea-separation">
          {separationOfConcerns.map((item) => (
            <div className="idea-separation-row" key={item.term}>
              <dt>{item.term}</dt>
              <dd>{item.role}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="idea-section">
        <SectionHeader
          number="15"
          label="Development Roadmap"
          title="Seven phases, ending in attack testing"
          intro="The attack and defense evaluation in the final phase makes the project stronger academically."
        />
        <ol className="idea-timeline">
          {phases.map((phase) => (
            <li className="idea-timeline-item" key={phase.number}>
              <span className="idea-timeline-marker">{phase.number}</span>
              <h3 className="idea-card-title">{phase.title}</h3>
              <p className="idea-card-text">{phase.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="idea-cta">
        <p className="idea-section-label">NASK</p>
        <h2 className="idea-title">Explore the complete project</h2>
        <p className="idea-description">
          A portable encrypted object, a controlled Android client, and a
          backend that holds the authority.
        </p>
        <Link className="idea-cta-link" to="/">
          ← Back to Projects
        </Link>
      </section>
    </main>
  );
}

export default Idea3;