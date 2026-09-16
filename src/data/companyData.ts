import { Product, KeyProject, CustomerEngagement, TeamMember } from '../types';

export const COMPANY_INFO = {
  name: 'Numera.AI Labs',
  legalName: 'Numera.AI Labs Private Limited',
  tagline: 'Unlocking Insights... Unleashing Potential.',
  shortDescription:
    'Products and services in Artificial Intelligence and Machine Learning including customized Large Language Models, enabling enterprises to excel by delivering crucial insights from data.',
  email: 'contact@thenumeralabs.com',
  phone: '+91 9945486784',
  domain: 'thenumeralabs.com',
  location: 'Bangalore, India',
  vision:
    'To empower enterprises with the power of latest AI/ ML and LLM tools towards enhanced efficiency.',
  mission:
    'Proactively engage with stakeholders to develop intelligent eco-systems.',
  aboutUsText:
    'We are a company providing products and services in Artificial Intelligence and Machine Learning including customised Large Language Models, enabling our customers to excel in their business by providing crucial insights from their data.',
};

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'roi-tool',
    slNo: 1,
    name: 'ROI Tool (Region of Interest & Signal Classification)',
    shortName: 'ROI Tool',
    category: 'Defense & Signals',
    tagline: 'High-precision noise extraction & source signal classification for sensor arrays',
    badgeColor: 'blue',
    offlineCapable: true,
    description:
      'Electric signals are recorded continuously by a variety of sensors – acoustic, optical, electronic and etc. In many applications and implementations these signals for large part of the duration may not change at all. The useful data in the signal must be extracted efficiently before the signal may be subjected to further analysis for actionable insights. Our ROI tool is able to (i) extract relevant signal from noisy data and (ii) classify source of the signal. The tool is customisable and extendable to integrate, for example, of various inputs such as satellite images, real time video stream captured on-board, many other sensor data (Sensor Fusion techniques). Further, electric signal classification, a process of categorizing signals into meaningful groups is also integrated. By accurately identifying and interpreting different patterns in the signal, the tool enables systems and or humans to respond intelligently to their surroundings, triggering specific actions or providing valuable information.',
    extendedOverview:
      'Built for mission-critical telemetry, marine acoustics, and tactical intelligence where signals are submerged in high ambient noise. The ROI tool executes fast frequency-time domain filtering followed by deep feature classification to pinpoint anomalous or target acoustic and electromagnetic signatures in milliseconds.',
    keyCapabilities: [
      'Extracts regions of interest from continuous raw sensor streams',
      'Advanced noise filtering and ambient baseline subtraction',
      'Source classification across acoustic, optical, and RF modalities',
      'Sensor Fusion: Integrates satellite imagery, on-board video feeds, and spatial telemetry',
      'Automated triggers for situational response and operator alerts',
      'Capable of fully air-gapped on-board embedded hardware execution',
    ],
    systemArchitecture: {
      inputs: [
        'Acoustic hydrophone & sonar streams',
        'Optical and electro-optical sensors',
        'RF & electromagnetic spectrum probes',
        'Satellite imagery & real-time on-board video feeds',
      ],
      coreEngine: [
        'Adaptive Noise Floor Filtering & Transient Isolation',
        'Wavelet & Spectrogram Feature Decomposition',
        'Deep Neural Signal Classifier with confidence scoring',
        'Multi-modal Sensor Fusion Synchronization Layer',
      ],
      outputs: [
        'Isolated Clean Signal Segments',
        'Classified Emitter/Source Identity & Confidence',
        'Actionable Alert Triggers & Spatial Vector Logs',
        'Integration payloads for Combat Management Systems',
      ],
    },
    useCases: [
      'Naval sonar & acoustic signature classification in real-time patrol',
      'Defense perimeter monitoring and unattended ground sensors',
      'Industrial vibration & critical equipment acoustic diagnostic telemetry',
      'Aerospace sensor telemetry & telemetry anomaly detection',
    ],
    securityHighlights: [
      '100% offline & edge-deployable on tactical edge computers',
      'Zero telemetry leakage; no cloud dependency required',
      'Compliant with defense-grade MIL-STD security postures',
    ],
  },
  {
    id: 'ai-assistant-kms',
    slNo: 2,
    name: 'AI Assistant / KMS (Knowledge Management System)',
    shortName: 'AI Assistant / KMS',
    category: 'Offline LLMs & KMS',
    tagline: 'Completely offline, fine-tuned conversational intelligence for enterprise knowledge repositories',
    badgeColor: 'amber',
    offlineCapable: true,
    description:
      "Our AI Assistant (chatbot) utilises the power of LLMs and will be fine tuned and trained on customer's Knowledge base. The solution being completely offline offers complete privacy and data security. Most chatbots rely on active communication channels which can lead to data breaches. But this solution by Numera operating offline avoids any such threats. We will provide, in addition, an intuitive user interface to access chatbot and with features such as query archiving, access controls, etc.",
    extendedOverview:
      'Designed specifically for security-sensitive organizations, defense public sector units, research labs, and financial institutions who cannot risk uploading proprietary knowledge to third-party public cloud APIs. Runs entirely on customer-managed on-premise hardware.',
    keyCapabilities: [
      'Custom fine-tuned on internal manuals, SOPs, specs, and proprietary wikis',
      'Air-gapped operation with zero network connectivity requirement',
      'Enterprise role-based access control (RBAC) down to document-level chunks',
      'Historical query archiving, search audit logs, and compliance tracing',
      'Contextual multi-turn dialogue with citation attribution to original pages',
      'Zero external data egress — complete immunity against third-party API leaks',
    ],
    systemArchitecture: {
      inputs: [
        'Proprietary PDF archives, CAD specs, and technical manuals',
        'Internal enterprise documentation, wikis, and SOP repositories',
        'Local database schemas and compliance guidelines',
      ],
      coreEngine: [
        'Quantized Local Large Language Model (Llama / Mistral / DeepSeek fine-tuned)',
        'Local Dense Vector Database (Chroma / Milvus / FAISS air-gapped)',
        'Hybrid Semantic & Keyword Re-ranking Engine',
        'Deterministic Access Permission Filter',
      ],
      outputs: [
        'Cited Conversational Answers with exact source page links',
        'Executive Summaries and synthesized procedure steps',
        'Audit-ready query logs for compliance officers',
      ],
    },
    useCases: [
      'Defense PSU engineering division technical manual query desk',
      'Restricted R&D laboratory intellectual property query assistant',
      'Private banking internal policy & regulatory handbook guidance',
      'Aerospace maintenance crew instant troubleshooting assistant',
    ],
    securityHighlights: [
      'Self-contained Docker or bare-metal deployment on local GPU/CPU nodes',
      'No outbound internet connections required or permitted',
      'Enterprise LDAP / Active Directory integration for access control',
    ],
  },
  {
    id: 'document-summariser',
    slNo: 3,
    name: 'Document Summariser',
    shortName: 'Document Summariser',
    category: 'Document Intelligence',
    tagline: 'High-fidelity offline text distillation for dense multi-domain literature & files',
    badgeColor: 'emerald',
    offlineCapable: true,
    description:
      'Our LLM-based offline summarizer allows to distil lengthy texts into concise summaries while extracting key information. Our offline summarizer harnesses the capabilities of advanced natural language processing models to generate summaries that closely mirror human comprehension. This Document Summarizer utilises state-of-the-art LLMs, such as GPT (Generative Pre-trained Transformer), to understand language patterns and contexts and grasp the nuanced meaning of texts across various domains, including news articles, research papers, legal documents, and more. The offline capability of our summarizer ensures that users can beneficially operate even in environments with limited connectivity and or with sensitive data requirements.',
    extendedOverview:
      'Replaces hours of manual reading with structured, high-accuracy multi-tier summaries (Executive Brief, Key Findings, Action Items, Critical Risks). Engineered to understand complex terminology across engineering, law, scientific research, and defense.',
    keyCapabilities: [
      'Multi-level summary modes: One-page executive brief, detailed bullet points, or structured tables',
      'Domain-adapted for research papers, patent disclosures, legal briefs, and technical specs',
      'Extraction of entities, dates, quantitative metrics, and commitments',
      'Processes files up to hundreds of pages without memory degradation',
      'Operates seamlessly in isolated field networks and remote facilities',
      'Exports to clean Word, PDF, or markdown reports with timestamped citations',
    ],
    systemArchitecture: {
      inputs: [
        'Long-form PDF documents, Word documents, scanned OCR text',
        'Technical research papers, project reports, and legislative texts',
      ],
      coreEngine: [
        'Document Structure Parsing & Hierarchical Chunking',
        'Domain-Tuned Transformer Summarization Models',
        'Key Entity & Numerical Data Preservation Validator',
        'Hallucination Reduction Cross-Check Filter',
      ],
      outputs: [
        'Tiered Summaries (Executive, Analytical, Granular)',
        'Extracted Table of Decisions, Deadlines, and Numerical Metrics',
        'Comparative Document Diff Overviews',
      ],
    },
    useCases: [
      'Fast review of 300+ page government tender documents and RFPs',
      'Scientific literature review in corporate research institutes',
      'Board-level intelligence dossiers from multi-source market reports',
      'Legal discovery and contract review briefings',
    ],
    securityHighlights: [
      'Complete local document processing with ephemeral in-memory parsing',
      'No data persists unless saved to internal network storage',
      'Tested under low-bandwidth and zero-connectivity conditions',
    ],
  },
  {
    id: 'document-screener',
    slNo: 4,
    name: 'Document Screener',
    shortName: 'Document Screener',
    category: 'Document Intelligence',
    tagline: 'Context-aware semantic matching for resumes, RFP proposals & compliance workflows',
    badgeColor: 'purple',
    offlineCapable: true,
    description:
      'Our LLM - based document screeners enables machines to comprehend and interpret text embedded within documents of diverse genres and formats. The fine tuned LLM allow them to identify relevant information, infer intent, and detect implicit connections within documents. This contextual awareness empowers document screeners to deliver more nuanced and insightful analyses, thereby enhancing decision-making processes and facilitating deeper understanding of document content. We propose to provide a modular architecture for Document Screener to ensure seamless integration with existing document management systems and workflows, if any. Matching resumes to JDs, matching proposals to RFPs, compliance checks are some of the use cases for our Document Screener. Indeed, these LLMs when fine-tuned and customised on information from any specific domains, the performance of these LLMs are on par with human comprehension.',
    extendedOverview:
      'Going far beyond keyword matching, the Document Screener evaluates semantic equivalence, domain expertise depth, project relevance, and regulatory compliance. It scores and ranks documents against custom criteria with transparent explanatory rationales.',
    keyCapabilities: [
      'Resume-to-Job Description (JD) matching with semantic skill gap analysis',
      'Vendor Proposal to RFP clause-by-clause compliance verification',
      'Modular REST/gRPC API architecture for plug-and-play ERP/DMS integration',
      'Detects implicit qualifications, transferable skills, and hidden discrepancies',
      'Automated scoring matrices with drill-down justifications for reviewers',
      'Custom fine-tuning for specialized technical, defense, and medical domains',
    ],
    systemArchitecture: {
      inputs: [
        'Candidate resumes, CV portfolios, and certifications',
        'Vendor bid submissions, contract proposals, and RFP requirements',
        'Internal enterprise criteria spreadsheets and compliance checklists',
      ],
      coreEngine: [
        'Semantic Embeddings & Cross-Attention Matcher',
        'Clause & Requirement Extraction Pipeline',
        'Implicit Intent & Correlation Analyzer',
        'Custom Scoring & Threshold Rule Evaluator',
      ],
      outputs: [
        'Ranked Candidate / Vendor Scorecards',
        'Gap Analysis matrix highlighting missing qualifications or unfulfilled clauses',
        'Automated Shortlist Recommendations for human approval',
      ],
    },
    useCases: [
      'Large-scale enterprise recruitment screening for specialized engineering roles',
      'Public sector procurement bid evaluations against rigid tender specifications',
      'Vendor compliance auditing across suppliers and sub-contractors',
      'Quality management system (QMS) audit document verification',
    ],
    securityHighlights: [
      'Anonymized candidate screening mode to eliminate demographic bias',
      'On-premise deployment ensures confidential candidate and tender data stays secure',
      'Full audit trail of all scoring algorithms for defensible procurement decisions',
    ],
  },
  {
    id: 'legal-tool',
    slNo: 5,
    name: 'Legal Tool (Indian Court Citation & Precedent AI)',
    shortName: 'Legal Tool',
    category: 'Legal & IP',
    tagline: 'Deep semantic precedent retrieval and citation generator for the Indian judicial system',
    badgeColor: 'rose',
    offlineCapable: true,
    description:
      'Our LLM – based Legal too has the capability to generate citations for the many court judgements in the courts of India. This provides relevant context and content for the legal team to effectively present the legal cases in the court of Law when deemed necessary.',
    extendedOverview:
      'A specialized legal intelligence platform indexing landmark rulings and contemporary judgements from the Supreme Court of India, High Courts, and specialized appellate tribunals. It surfaces authoritative ratio decidendi and prepares ironclad legal briefs.',
    keyCapabilities: [
      'Multi-court citation search across Supreme Court of India & State High Courts',
      'Contextual fact-pattern matching: finds cases with identical situational nuances',
      'Overruled & affirmed precedent indicator (avoids citing bad law)',
      'Automated case law synthesis and legal argument drafting',
      'Generates court-ready citation lists adhering to standard legal formatting',
      'Secure internal deployment for corporate legal departments and advocate chambers',
    ],
    systemArchitecture: {
      inputs: [
        'Case briefs, draft pleadings, and statement of facts',
        'Legal questions of law and specific sections of Indian statutes (IPC, CrPC/BNSS, CPC, Companies Act)',
      ],
      coreEngine: [
        'Indian Jurisprudence Knowledge Graph & Lexical Embeddings',
        'Precedent Status Tracker (Upheld, Distinguished, Overruled)',
        'Legal Reasoning & Argument Synthesis LLM',
        'Official Law Reporter Cross-Referencer (SCC, AIR, SCR)',
      ],
      outputs: [
        'Validated Citation Lists with Headnotes and Full-Text Excerpts',
        'Case Strength Assessment and Counter-Argument Previews',
        'Draft Brief Sections with embedded statutory citations',
      ],
    },
    useCases: [
      'Litigation research for high-stakes corporate disputes in High Courts & Supreme Court',
      'Corporate in-house legal counsel contract risk and precedent review',
      'Preparation of written submissions and special leave petitions (SLPs)',
      'Due diligence on ongoing litigation liabilities for M&A transactions',
    ],
    securityHighlights: [
      'Absolute client-attorney confidentiality with local repository deployment',
      'Strict verification preventing AI hallucination of non-existent court citations',
    ],
  },
  {
    id: 'patent-tool',
    slNo: 6,
    name: 'Patent Tool (Prior Art & Claims Research AI)',
    shortName: 'Patent Tool',
    category: 'Legal & IP',
    tagline: 'Automated prior art discovery, novelty analysis, and patent claim landscape reports',
    badgeColor: 'orange',
    offlineCapable: false,
    description:
      'Our LLM – based Patent tool has the capability to generate a report based on keywords search among the patent, research and claims websites that may be used effectively by the Intellectual Property (IP) team and patent lawyers.',
    extendedOverview:
      'Accelerates patent filing readiness and defensibility. Scours global patent repositories (USPTO, EPO, WIPO, Indian Patent Office) and non-patent literature to construct comprehensive prior art matrices and freedom-to-operate (FTO) intelligence reports.',
    keyCapabilities: [
      'Autonomous keyword and concept expansion across technical synonyms',
      'Deep scraping and parsing of global patent databases and scientific preprint servers',
      'Claim-by-claim element mapping against competitor disclosures',
      'Freedom-to-Operate (FTO) risk scoring and white-space opportunity mapping',
      'Comprehensive IP landscape reports ready for patent attorneys and IP committees',
      'Exportable patent classification mapping (IPC / CPC categorization)',
    ],
    systemArchitecture: {
      inputs: [
        'Invention disclosures, provisional drafts, and core technology claims',
        'Competitor patent portfolios and technical keywords',
      ],
      coreEngine: [
        'Patent Query Expansion & Semantic Vector Search Engine',
        'Multi-Repository Crawler & Non-Patent Literature Aggregator',
        'Claim Element Dissection & Overlap Evaluator',
        'Automated Patent Dossier Generator',
      ],
      outputs: [
        'Prior Art Similarity Matrix with exact claim correlation percentages',
        'Comprehensive Patentability & Novelty Report',
        'Visual IP landscape charts showing white spaces and crowded claims',
      ],
    },
    useCases: [
      'R&D pre-filing patentability assessments to prevent costly rejections',
      'Patent litigation defense and invalidation searches',
      'Competitor IP monitoring and quarterly portfolio tracking',
      'Technology transfer and licensing due diligence',
    ],
    securityHighlights: [
      'End-to-end encrypted search queries preventing leak of unpublished invention concepts',
      'Zero training on user-submitted invention disclosures',
    ],
  },
  {
    id: 'pqc-tool',
    slNo: 7,
    name: 'PQC (Post Quantum Cryptography) Tool',
    shortName: 'PQC Tool',
    category: 'Quantum Security',
    tagline: 'Low/no-code environment for modeling, testing & transitioning to quantum-resilient encryption',
    badgeColor: 'indigo',
    offlineCapable: true,
    description:
      "As quantum computers advance, they pose a significant threat to existing security algorithms by leveraging quantum mechanics' properties like superposition and entanglement, which allow them to solve complex problems much faster than classical computers. This makes current cryptographic algorithms, such as RSA and ECC, vulnerable to attacks. Well-known quantum algorithms like Shor's and Grover's can break these systems, putting data and communications at risk. To prepare for this quantum future, our post-quantum cryptography (PQC) platform offers a solution. Our Solution provides an innovative low / no-code environment that simplifies the development, testing, and integration of PQC algorithms. Users can access a comprehensive library, experiment in a scalable simulation environment, and safeguard their data against future quantum threats.",
    extendedOverview:
      'The definitive bridge from vulnerable RSA/ECC infrastructure to NIST-standardized lattice-based and hash-based post-quantum cryptography. Empowers enterprise security architects, defense teams, and cryptographers to test algorithm throughput, key size impact, and migration paths without rewriting core systems.',
    keyCapabilities: [
      'Comprehensive library of NIST-standardized PQC algorithms (ML-KEM/Kyber, ML-DSA/Dilithium, SLH-DSA/SPHINCS+)',
      'Innovative low-code / no-code visual workflow builder for cryptographic pipelines',
      'Scalable simulation environment to stress-test bandwidth, latency, and hardware constraints',
      'Side-by-side benchmarking: Classical RSA-4096 / ECC vs. Post-Quantum alternatives',
      'Automated crypto-agility migration roadmaps for legacy protocols (TLS, SSH, VPN)',
      'Hardware acceleration benchmarking for embedded systems and field hardware',
    ],
    systemArchitecture: {
      inputs: [
        'Existing enterprise crypto profiles (RSA, ECDSA certificates, VPN configs)',
        'Target hardware profile (x86 servers, ARM, FPGA, microcontrollers)',
        'Throughput and latency tolerance parameters',
      ],
      coreEngine: [
        'NIST PQC Algorithmic Execution Core (Lattice, Code-based, Isogeny)',
        'Quantum Vulnerability & Shor/Grover Attack Simulator',
        'Hybrid Classical-PQC Key Exchange Wrapper Engine',
        'Performance & Resource Profiling Harness',
      ],
      outputs: [
        'Optimized PQC Implementation Binaries and API bindings',
        'Benchmark Reports (Key Generation, Encapsulation, Signature verification)',
        'Step-by-step Enterprise Quantum Migration Playbook',
      ],
    },
    useCases: [
      'Defense and national security secure communications modernization',
      'Banking and SWIFT financial transaction encryption future-proofing',
      'Critical infrastructure (SCADA, power grids) quantum threat protection',
      'Automotive and IoT secure firmware update verification',
    ],
    securityHighlights: [
      'Tested against latest NIST FIPS 203, 204, and 205 drafts',
      'Offline cryptographic testbed suitable for air-gapped security labs',
    ],
  },
  {
    id: 'lumina-ei',
    slNo: 8,
    name: 'Lumina - EI (Educational Intelligence)',
    shortName: 'Lumina - EI',
    category: 'Educational Intelligence',
    tagline:
      'Institutional-grade Educational Intelligence platform that transforms verified curricula into a secure, AI-powered tutoring layer',
    badgeColor: 'teal',
    offlineCapable: true,
    description:
      "The product is an institutional-grade Educational Intelligence platform that transforms verified curricula into a secure, AI-powered tutoring layer. Lumina-EI is not another AI chatbot — it is an infrastructure layer that makes the institution the source of truth. We solve the AI trust gap in education by restricting every AI response to content from the institution's own resources (textbooks, notes, PPTs, PDFs, videos, etc). Our mission is precision at scale.",
    extendedOverview:
      "Lumina - EI is not another generic conversational bot; it is an enterprise institutional infrastructure layer engineered specifically for universities, colleges, and educational institutes. By establishing the institution's authenticated curriculum as the absolute single source of truth, Lumina-EI bridges the AI trust gap. Every explanation, breakdown, formula derivation, and quiz question is strictly restricted to approved course resources (textbooks, professor lecture notes, PowerPoint decks, syllabi, PDFs, and video lectures) with precise bibliographic citations and zero risk of hallucination.",
    keyCapabilities: [
      'Institutional Source-of-Truth Engine: Restricts every AI response strictly to verified institutional resources',
      'Curriculum-to-Tutoring Pipeline: Automatically indexes textbooks, lecture slides, notes, PDFs, and recorded videos',
      'Precision-at-Scale Tutoring: Delivers 24/7 personalized, Socratic guidance mapped directly to syllabus learning outcomes',
      'Verifiable Source Attribution: Transparent citation trails pointing students to exact pages, lecture timestamps, and slide numbers',
      'Adaptive Concept Testing: Generates formative quizzes, practice problems, and rubric-aligned evaluations from course material',
      'Faculty & Department Analytics: Real-time visibility into student comprehension bottlenecks, frequently queried concepts, and curriculum gaps',
    ],
    systemArchitecture: {
      inputs: [
        'Institutional curricula & syllabus documents',
        'Prescribed textbooks, monographs, and academic publications',
        'Faculty lecture notes, PowerPoint presentations, and handouts',
        'Recorded lecture audio/video transcripts and laboratory manuals',
        'Student conceptual queries, doubts, and exam revision prompts',
      ],
      coreEngine: [
        'Curriculum Document Parsing & Multimodal Vector Indexing Core',
        'Institution Source-Lock Verification & Zero-Hallucination Guardrails',
        'Socratic Pedagogical Reasoning Engine (concept breakdowns, progressive hints)',
        'Institutional Knowledge Base Management & Faculty Oversight Dashboard',
      ],
      outputs: [
        'Course-Grounded Answers with Exact Page & Chapter Citations',
        'Concept Revision Summaries and Personalized Study Plans',
        'Self-Assessment Problem Sets & Faculty-Graded Diagnostic Quizzes',
        'Institutional Learning Analytics & Student Query Trend Reports',
      ],
    },
    useCases: [
      'Universities & Colleges: Providing 24/7 grounded tutoring for undergraduate and postgraduate STEM, Medical, and Humanities courses',
      'K-12 Educational Institutions: Safe, curriculum-locked homework and study assistance without generic web exposure',
      'Medical & Healthcare Academies: Rigorous syllabus-aligned clinical exam preparation where precision and zero hallucination are mandatory',
      'Corporate L&D & Technical Onboarding: Transforming enterprise training manuals, SOPs, and compliance decks into an interactive tutoring layer',
    ],
    securityHighlights: [
      '100% Institution-Restricted Knowledge: Hard boundary preventing unverified web content or third-party hallucination',
      'Private On-Premise / Campus Deployment: Student interaction data and proprietary curriculum materials never leave institutional control',
      'Zero Student Data Training: Absolute privacy protection in compliance with student data governance standards',
    ],
  },
];

export const KEY_PROJECTS: KeyProject[] = [
  {
    id: 'quantum-technology',
    title: 'Quantum Technology Protocol Validation',
    client: 'Taqbit Labs',
    category: 'Quantum Computing & Cryptography',
    description:
      'We were engaged by Taqbit Labs to validate the design and implementation scheme in addition to providing support to perform simulations for a Quantum Cryptography protocol.',
    impacts: [
      'Rigorous mathematical validation of quantum key distribution protocols',
      'High-performance simulation testbed for quantum noise and channel attenuation',
      'Accelerated hardware implementation readiness for quantum hardware prototypes',
    ],
  },
  {
    id: 'voice-db-search',
    title: 'Voice Based DB Search Engine',
    client: 'Indian Navy',
    category: 'Defense & Offline Speech Intelligence',
    description:
      'The Indian Navy engaged us to design and develop a voice based database search engine. The engine is capable of performing offline voice processing to generate SQL queries.',
    impacts: [
      'Zero cloud dependency: executes 100% offline in isolated combat environments',
      'Speech-to-SQL translation enabling natural command bridge over complex naval databases',
      'Drastically reduced operator query time during high-tempo tactical situations',
    ],
  },
  {
    id: 'ml-psephology',
    title: 'Machine Learning in Psephology',
    client: 'Designedbox',
    category: 'Predictive Analytics & Political Research',
    description:
      'Our client, Designedbox, a political research firm, hired us to validate and derive insights from data they had collected via surveys.',
    impacts: [
      'Data hygiene and demographic weighting validation across complex multi-lingual surveys',
      'Predictive voter sentiment modeling and micro-trend discovery',
      'Actionable constituency-level strategic intelligence dashboards',
    ],
  },
  {
    id: 'enterprise-risk',
    title: 'Enterprise Vulnerability & Risk Scoring Model',
    client: 'Secpod',
    category: 'Cybersecurity & Risk Intelligence',
    description:
      'Our client, Secpod, working in the domain of Information Security, was engaged with us to build a model for assessing Enterprise Risk, based on various measured vulnerabilities in the enterprise assets. The model uses these to arrive at a Risk Score and provides insights to the user on how the overall risk can be reduced.',
    impacts: [
      'Dynamic Risk Score synthesizing CVE severity, exploit availability, and asset criticality',
      'Prescriptive remediation workflows prioritizing highest-impact security fixes',
      'Directly enhanced client enterprise security posture across thousands of endpoints',
    ],
  },
  {
    id: 'health-analytics',
    title: 'Vocal Biomarker Screener for Hypothyroidism',
    client: 'Vox Analytics',
    category: 'Healthcare & Acoustic Diagnostics',
    description:
      'We were hired by a health-analytics company, Vox Analytics, to create a screener for Hypothyroidism. The screener took voice sample of a patient as an input and produced the probability of them being susceptible to hypothyroidism as the output.',
    impacts: [
      'Non-invasive preliminary screening utilizing acoustic voice frequency shifts',
      'High sensitivity classification model verified against clinical lab markers',
      'Pioneered rapid digital triage for endocrinology clinics and remote health centers',
    ],
  },
];

export const CUSTOMER_ENGAGEMENTS: CustomerEngagement[] = [
  {
    id: 'log-analytics',
    title: 'Software Log Analytics Engine',
    client: 'Enterprise Log Analytics Client',
    domain: 'Systems & Infrastructure',
    description:
      'Our client, in the domain of Log Analytics, was engaged with us to enhance log analytics by identifying the start and end points of activities within system logs. This solution was crucial as it significantly improved the efficiency of log analysis, enabling faster identification of system events and issues.',
    keyOutcomes: [
      'Automated demarcation of multi-threaded activity bounds in voluminous raw system logs',
      'Dramatically lowered MTTR (Mean Time to Resolution) for system anomalies',
      'Provided clear telemetry tracking for complex enterprise microservice clusters',
    ],
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy Time-Series Forecasting',
    client: 'Integrum Energy',
    domain: 'Clean Tech & Power Trading',
    description:
      'We developed, for Integrum Energy, a time series forecasting engine, in the context of generation of energy in wind farms and solar plants. This helped the client to effectively trade energy, improve operational efficiency by providing insights on energy banking and procurement.',
    keyOutcomes: [
      'Precision meteorological and generation forecasting for wind and solar plants',
      'Empowered optimal day-ahead energy trading and energy banking schedules',
      'Reduced grid penalty deviation costs and boosted revenue realization',
    ],
  },
  {
    id: 'correspondence-management',
    title: 'Correspondence Management System',
    client: 'Defense Public Sector Undertaking (DPSU)',
    domain: 'Government & Defense',
    description:
      'Our Letter Management System is a sophisticated solution designed to automate and streamline the creation and management of corporate correspondence. It leverages an AI-powered engine to generate drafts from custom templates, ensuring accuracy and consistency across all documents. The system provides a centralized platform for creating, approving, and tracking all official letters and communications. This approach significantly reduces the time and effort spent on manual drafting, while also minimizing the risk of human error. By standardizing and accelerating your entire correspondence workflow, our system ensures professional and timely communication with all stakeholders. The client is a DPSU.',
    keyOutcomes: [
      'AI draft generation preserving rigorous defense nomenclature and official protocols',
      'End-to-end encrypted approval workflows and tamper-evident audit logs',
      'Over 60% reduction in corporate communication cycle times',
    ],
  },
  {
    id: 'marine-vessel-design',
    title: 'Marine Vessel Design Compliance Assistant',
    client: 'Defense Public Sector Undertaking (DPSU)',
    domain: 'Naval Architecture & Defense',
    description:
      'We are developing an offline LLM powered Design Compliance Assistant. It is a specialized tool engineered to transform the complex process of ship design. It provides an intuitive, natural-language chatbot interface that allows designers to instantly verify compliance with a vast, up-to-date knowledge base of maritime regulations and standards. By automating these meticulous checks, the system reduces manual effort, minimizes errors, and ensures that designs consistently adhere to all necessary safety and environmental criteria, significantly accelerating project timelines. The client is a DPSU.',
    keyOutcomes: [
      'Instant natural-language verification against international maritime registers and naval rules',
      '100% offline deployment adhering to strict naval shipyard air-gap mandates',
      'Substantially accelerated ship design approval milestones and minimized engineering rework',
    ],
  },
  {
    id: 'hospitality-tech',
    title: 'CoHost Hospitality Tech Platform',
    client: 'Manitude Technologies',
    domain: 'Hospitality & Commercial Operations',
    description:
      'We have developed CoHost, which is an integrated hospitality-tech platform that streamlines restaurant and café operations while enhancing guest experiences. It combines modules for vendor management, inventory, menu, reservations, customer engagement, invoicing, HR, and accounts into a unified system. Powered by analytics and AI/ML insights, Co Host improves operational efficiency, automates reporting, and enables seamless customer interactions through a dedicated WhatsApp interface. The client was Manitude Technologies.',
    keyOutcomes: [
      'End-to-end unified ERP covering inventory, invoicing, tables, and HR',
      'Intelligent guest engagement via dedicated automated WhatsApp conversational bot',
      'Real-time automated margin and wastage analytics for restaurant operators',
    ],
  },
  {
    id: 'semicon-training-bot',
    title: 'Offline Semiconductor Training Bot',
    client: 'Sampoorna Swaraj Foundation',
    domain: 'Education & Semiconductor Engineering',
    description:
      'Our AI-powered Semiconductor Training Bot is an offline solution designed to provide trainees with instant access to expert knowledge. Based on the books of Dr. Shankar Prasad, this specialized bot answers questions from trainees using a natural language interface, ensuring they receive accurate and relevant information immediately. To enhance understanding, the bot also retrieves and presents relevant images from its knowledge base, providing visual context alongside its textual responses. This system eliminates the need for an internet connection, making it an invaluable tool for on-site and remote training environments. The client was Sampoorna Swaraj Foundation.',
    keyOutcomes: [
      'Zero internet required: runs on local training center workstations',
      'Multimodal retrieval: returns both textual explanations and high-res semiconductor schematics',
      'Preserves and scales master semiconductor pedagogy to students across India',
    ],
  },
  {
    id: 'research-intelligence-tool',
    title: 'Academic & Research Methodology Intelligence Tool',
    client: 'Research & Education Software Solutions Client',
    domain: 'Research Methodology & Higher Ed',
    description:
      'Our Client, in the domain of Software design and development of tools for research and education, engaged with us to design a tool to help researchers - professors, graduate and post graduate students. This solution creates a research intelligence layer to efficiently conduct the various stages of research methodology.',
    keyOutcomes: [
      'End-to-end intelligence layer accelerating the qualitative and quantitative stages of academic research methodology',
      'Empowers professors, doctoral scholars, and graduate students with automated literature synthesis, hypothesis structuring, and citation mapping',
      'Significantly reduces research turnaround cycles while enforcing strict academic integrity and methodological rigor',
    ],
  },
];

export const DIRECTORS: TeamMember[] = [
  {
    id: 'srivatsa',
    name: 'Dr. Srivatsa S K',
    role: 'Co-Founder & CEO',
    qualification: 'PhD',
    avatarInitial: 'SK',
    category: 'director',
    background: [
      'PhD in Physics, Raman Research Institute (RRI), Bangalore',
    ],
    experience: [
      'Lead various AI/ML projects over the last decade',
      'Professor, PES University',
      'Co-Founder and Director, Brainstars Services Private Limited, Bangalore',
    ],
  },
  {
    id: 'srikanth',
    name: 'Srikanth Joshi',
    role: 'Co-Founder',
    avatarInitial: 'SJ',
    category: 'director',
    background: [
      '35 Years in Accounting & Finance',
    ],
    experience: [
      'Manager - Accounts, Gleason India',
      'Manager - Accounts, Polyflex India',
    ],
  },
  {
    id: 'sangeeta',
    name: 'Sangeeta Kulkarni',
    role: 'Co-Founder',
    avatarInitial: 'SK',
    category: 'director',
    background: [
      '12 Years in Accounting',
    ],
    experience: [
      'Consultant with Tractrix OptoDynamics',
    ],
  },
];

export const CONSULTANTS: TeamMember[] = [
  {
    id: 'karthik-joshi',
    name: 'Karthik S Joshi',
    role: 'Product Vision, Technology Development & Deployment',
    qualification: 'M Sc',
    avatarInitial: 'KJ',
    category: 'consultant',
    experience: [
      'Chief Data Scientist, Vox Analytics',
      'Founder Director, DEPA Solutions',
    ],
  },
  {
    id: 'sriraghavan-sm',
    name: 'Sriraghavan S M',
    role: 'Instructional Design Consultant',
    qualification: 'M Sc',
    avatarInitial: 'SM',
    category: 'consultant',
    experience: [
      'Founder Trustee – NeeAr Foundation',
      'Founder Director – NumberNagar',
      'Meet the Scientist program - 100 lectures across Karnataka',
    ],
  },
  {
    id: 'neelam-dixit',
    name: 'Neelam Dixit',
    role: 'Child Psychology Consultant',
    qualification: 'B Sc, Dip Psy',
    avatarInitial: 'ND',
    category: 'consultant',
    experience: [
      'Member - American Psychological Association',
      'Founder Trustee - NeeAr Foundation',
      'Certified Global Art Therapy (Uni. of Edinburgh)',
      'Programme consultant, Times of India',
    ],
  },
];

export const ADVISORS: TeamMember[] = [
  {
    id: 'praveen-kulkarni',
    name: 'Cmde. Praveen Kulkarni (Retd.)',
    role: 'Technical Consultant',
    qualification: 'M Tech',
    avatarInitial: 'PK',
    category: 'advisor',
    experience: [
      '30 years in Indian Navy',
      'Director, Software Engineering Group',
      'Joint Director (Networking Systems), Steered Development of Combat Management Systems',
    ],
  },
  {
    id: 'vijayanand-gurudev',
    name: 'Vijayanand Gurudev',
    role: 'Advisor - Brand & Marketing',
    qualification: 'B E',
    avatarInitial: 'VG',
    category: 'advisor',
    experience: [
      'CMO, Vigyan Labs',
      'Founder, eEshavasya Technologies',
      'Founder, 1by0GRIT',
    ],
  },
  {
    id: 'nalinakshi-ramesh',
    name: 'Nalinakshi Ramesh',
    role: 'Advisor - Pedagogy',
    qualification: 'B Sc BEd',
    avatarInitial: 'NR',
    category: 'advisor',
    experience: [
      'Assistant Mistress, Carmel School',
      'Assistant Mistress, Holy Saint School',
    ],
  },
  {
    id: 'kiran-ramarao',
    name: 'Kiran Ramarao',
    role: 'Hon. Advisor - Strategy',
    qualification: 'B E',
    avatarInitial: 'KR',
    category: 'advisor',
    experience: [
      'Consultant, Infosys Ltd',
      'Business Development Manager, Tata Consultancy Services',
    ],
  },
];

// Backwards-compatible export pointing to Directors
export const CORE_TEAM: TeamMember[] = DIRECTORS;

export const DOMAIN_SETUP_GUIDE = {
  domain: 'thenumeralabs.com',
  recommendedProviders: ['Cloud Run / GCP', 'Cloudflare', 'Vercel / Netlify', 'GitHub Pages'],
  dnsRecords: [
    {
      type: 'A',
      name: '@',
      value: '216.239.32.21',
      description: 'Google Cloud Run custom domain mapping IPv4 record 1',
    },
    {
      type: 'A',
      name: '@',
      value: '216.239.34.21',
      description: 'Google Cloud Run custom domain mapping IPv4 record 2',
    },
    {
      type: 'A',
      name: '@',
      value: '216.239.36.21',
      description: 'Google Cloud Run custom domain mapping IPv4 record 3',
    },
    {
      type: 'A',
      name: '@',
      value: '216.239.38.21',
      description: 'Google Cloud Run custom domain mapping IPv4 record 4',
    },
    {
      type: 'CNAME',
      name: 'www',
      value: 'ghs.googlehosted.com',
      description: 'Subdomain routing for www.thenumeralabs.com to Google hosting infrastructure',
    },
    {
      type: 'TXT',
      name: '@',
      value: 'google-site-verification=NUMERA_VERIFICATION_TOKEN',
      description: 'Domain ownership verification token in Google Search Console / Cloud Console',
    },
  ],
};
