export const site = {
  name: 'Harshit Goyal',
  tagline:
    'I ship production-grade AI systems — and the semiconductor tooling underneath them.',
  sub: 'Three deployed full-stack platforms with auth, observability, and CI/CD. EDA software experience at Cadence. Top-10 national ML competition rank.',
  role: 'Electrical Engineering, IIT Delhi ’26',
  email: 'harshitgoyal780p@gmail.com',
  github: 'https://github.com/goyal-harshit',
  linkedin: 'https://www.linkedin.com/in/goyal-harshit-iitd/',
  resumeSoftware: '/resume/Harshit_Goyal_Software_AI.pdf',
  resumeVlsi: '/resume/Harshit_Goyal_VLSI.pdf',
  url: 'https://goyal-harshit.github.io',
};

export const stats = [
  { value: '3', label: 'deployed AI platforms' },
  { value: '9th', label: 'nationally — FIFS ML Gameathon 2025' },
  { value: 'AIR 530', label: 'JEE Advanced (top 0.2%)' },
  { value: 'Cadence', label: 'EDA software internship' },
];

export type CaseStudySection = { heading: string; body: string[] };

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  domains: string[];
  stack: string[];
  github?: string;
  demo?: string;
  highlights: string[];
  caseStudy?: CaseStudySection[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'quantai',
    title: 'QuantAI',
    oneLiner:
      'A production quant research platform for Indian equities — 20+ domain modules, a multi-LLM RAG research assistant, circuit-breaker reliability, and full auth + observability. Live and free to use.',
    domains: ['Quant', 'Full-stack', 'AI/ML'],
    stack: [
      'FastAPI',
      'Next.js 14',
      'TypeScript',
      'PostgreSQL/TimescaleDB',
      'Redis',
      'Celery',
      'Docker',
      'Ollama / OpenAI / Anthropic',
    ],
    github: 'https://github.com/goyal-harshit/quant-analyzer',
    demo: 'https://goyal-harshit.github.io/quant-analyzer',
    highlights: [
      '20+ domain modules: screener, backtester, quant lab, macro, IPO tracker, mutual funds',
      'Every external data source behind a circuit breaker + rate limiter with fallback chains',
      'JWT auth with httpOnly cookies + CSRF, roles, password reset, email verification',
      'Prometheus metrics, structured JSON logs with request IDs, health endpoint reporting per-source breaker state',
    ],
    featured: true,
    caseStudy: [
      {
        heading: 'Problem',
        body: [
          'Indian retail investors lack an open quant research stack: existing tools are US-centric, paywalled, or single-purpose. QuantAI targets the NSE/BSE universe end-to-end — screening, backtesting, portfolio analytics, and AI-assisted research — built entirely on free, keyless data sources.',
        ],
      },
      {
        heading: 'Architecture',
        body: [
          'Next.js 14 static export talks REST to a FastAPI backend organized into 20+ domain modules (stocks, screener, portfolio, backtest, macro, ai, quant-lab, strategy-builder, watchlists, alerts, auth, and more). PostgreSQL/TimescaleDB stores time-series market data; Redis backs caching and Celery task queues; a Celery worker + beat handle background ingestion. Schema is owned by Alembic migrations in production.',
          'The AI assistant is provider-agnostic: one abstraction serves Ollama (free, local), OpenAI, Anthropic, Gemini, or Groq, with RAG-grounded answers and citations backed by a local embedding index.',
        ],
      },
      {
        heading: 'Key engineering decisions',
        body: [
          'Reliability first: every external data source sits behind a circuit breaker and rate limiter with a fallback chain. Market data is ingested into the DB and served DB-first, so upstream flakiness never breaks the UI.',
          'Graceful degradation: when the backend is unreachable, the frontend falls back to clearly-labelled demo data instead of erroring — the live GitHub Pages demo works with no server at all.',
          'Security as a feature: JWT in httpOnly cookies with CSRF protection, role-based access, password reset and email verification flows.',
        ],
      },
      {
        heading: 'Results',
        body: [
          'A deployable, observable platform: Prometheus metrics at /metrics, structured JSON logs with request IDs, and a /health endpoint reporting DB, Redis, and per-data-source circuit-breaker state. 58+ commits of iterative, production-style development.',
        ],
      },
    ],
  },
  {
    slug: 'codebase-intelligence',
    title: 'Codebase Intelligence Platform',
    oneLiner:
      'Turns any Git repo into a queryable knowledge graph — plain-English code Q&A, architecture risk detection, and change blast-radius computed in seconds. Parsed Flask in 0.28s.',
    domains: ['Dev-tools', 'AI/ML', 'Full-stack'],
    stack: [
      'tree-sitter',
      'ArcadeDB',
      'ChromaDB',
      'FastAPI',
      'Next.js',
      'TypeScript',
      'Docker',
      'Ollama',
    ],
    github: 'https://github.com/goyal-harshit/codebase-intelligence-platform',
    demo: 'https://goyal-harshit.github.io/codebase-intelligence-platform',
    highlights: [
      'Language-agnostic AST parsing (Python, JS/TS, Go, Rust, Java) via tree-sitter',
      'Parsed Flask (24 files) in 0.28s — 388 functions, 53 classes, within ~7% of grep ground truth',
      'Hybrid retrieval: NL→Cypher over the graph with semantic vector fallback',
      '12 phases shipped: risk detection, blast radius, SAST scanner, refactoring recommendations, GitHub OAuth',
    ],
    featured: true,
    caseStudy: [
      {
        heading: 'Problem',
        body: [
          'Understanding a large unfamiliar codebase is slow: grep finds text, not structure, and vector search alone hallucinates relationships. The platform answers questions like “what breaks if I change this function?” with graph-accurate answers.',
        ],
      },
      {
        heading: 'Architecture',
        body: [
          'A tree-sitter parsing engine extracts CodeEntity (functions, classes, methods) and CodeRelationship (contains, calls, inherits_from, imports) objects from any repo. These are ingested into an ArcadeDB knowledge graph with typed, index-backed edges, alongside a ChromaDB vector index of embeddings.',
          'Queries run through hybrid retrieval: natural language is translated to Cypher for structural questions, with semantic vector search as fallback; an LLM (Ollama) composes grounded answers. FastAPI backend, Next.js frontend, fully Dockerized.',
        ],
      },
      {
        heading: 'Key engineering decisions',
        body: [
          'Graph ingestion uses parameterized UNWIND batches — no string-built Cypher — for safety and speed.',
          'SHA-256-based incremental re-indexing re-parses only changed files and prunes deleted ones, keeping large-repo updates fast.',
          'Every capability shipped as a verifiable phase: AST parsing, graph DB, vector index, risk detection, impact analysis, hybrid Q&A, SAST scanning, refactoring recommendations, and GitHub OAuth — 12 phases, all done.',
        ],
      },
      {
        heading: 'Results',
        body: [
          'Validated against Flask: parsed 24 source files in 0.28s, extracting 388 functions/methods and 53 classes within ~7% of grep ground truth. Answers architecture questions and computes change blast radius on arbitrary repos.',
        ],
      },
    ],
  },
  {
    slug: 'intuitive-prompt-engine',
    title: 'IntuitivePromptEngine',
    oneLiner:
      'Image generation with zero typing — a real-time webcam pipeline that infers creative intent from gesture and expression, compiles a persistent Scene Graph, and drives diffusion models.',
    domains: ['AI/ML', 'Computer Vision', 'HCI'],
    stack: [
      'Python',
      'MediaPipe',
      'FastAPI',
      'WebSocket',
      'Ollama',
      'FLUX / SDXL',
      'Docker',
    ],
    github: 'https://github.com/goyal-harshit/intuitive-prompt-engine',
    demo: 'https://goyal-harshit.github.io/intuitive-prompt-engine',
    highlights: [
      'Infers creative intention from continuous semantic features — not gesture-to-command mapping',
      'Persistent Scene Graph accumulates and decays intent hypotheses over time',
      'Every pipeline stage behind an interface: swap vision, intent, prompting, or image backends independently',
      'CI + Docker + MIT licensed, one-click native start on Windows',
    ],
    featured: true,
    caseStudy: [
      {
        heading: 'Problem',
        body: [
          'Prompting image models is a typing bottleneck: you translate a mental image into words, then iterate. IntuitivePromptEngine removes the keyboard — it watches hands, posture, and expression through a standard webcam and compiles what you mean into diffusion-ready prompts.',
        ],
      },
      {
        heading: 'Architecture',
        body: [
          'A six-stage pipeline: vision (webcam + MediaPipe landmarks) → gestures (continuous semantic features: openness, expansion rate, circularity, tempo, smoothness, affect) → intent (ontology + evidence fusion into confidence-scored hypotheses) → scene (persistent Scene Graph with merge/decay) → prompting (template or Ollama strategy) → imagegen (Pollinations, HuggingFace, or ComfyUI backends). FastAPI + WebSocket serves a zero-build SPA frontend; SQLite logs every event.',
        ],
      },
      {
        heading: 'Key engineering decisions',
        body: [
          'Intent over commands: instead of mapping gestures to fixed actions, the engine segments continuous features into motion primitives and fuses them with interaction history — so the same gesture can mean different things in different contexts.',
          'Swappable everything: FrameSource, LandmarkExtractor, IntentModel, PromptGenerator, and ImageGenerator are all interfaces. Swapping a diffusion backend or an intent model touches one class.',
          'Runs CPU-only with no API keys in native mode; Docker path for the reproducible production-style stack.',
        ],
      },
      {
        heading: 'Results',
        body: [
          'End-to-end zero-typing image generation with CI, Docker packaging, MIT license, and full design docs (architecture, gesture ontology, scene graph, API, data models, roadmap).',
        ],
      },
    ],
  },
  {
    slug: 'fantasy-cricket-predictor',
    title: 'AI/ML Fantasy Cricket Predictor',
    oneLiner:
      'Ensemble ML system for fantasy team optimization — ranked 9th nationally in FIFS Gameathon 2025 (Google Cloud & Dream11).',
    domains: ['AI/ML'],
    stack: ['PyTorch', 'scikit-learn', 'Pandas'],
    highlights: [
      'Ranked 9th nationally, FIFS Gameathon 2025, organized with Google Cloud & Dream11',
      'Ensemble models over player form, matchups, venue, and constraint-based team optimization',
    ],
    featured: false,
  },
];

export const experience = [
  {
    company: 'Cadence Design Systems',
    role: 'ASIC Synthesis / EDA Software Intern',
    period: '2025',
    track: 'VLSI',
    points: [
      'RTL-to-Pre-CTS synthesis flow on Genus/Innovus',
      'Python tooling for netlist analysis',
      'TCL automation of synthesis workflows',
    ],
  },
  {
    company: 'PwC India',
    role: 'Technology Consulting Intern',
    period: '2024',
    track: 'Software',
    points: ['Digitized financial workflows serving a 130M+ farmer user base'],
  },
  {
    company: 'Cape Peninsula University of Technology, South Africa',
    role: 'AI Research Intern',
    period: '2023–24',
    track: 'AI',
    points: ['AI-enabled smart microgrid research'],
  },
];

export const skills = {
  Languages: ['Python', 'C++', 'TypeScript', 'SQL', 'TCL', 'Verilog', 'MATLAB'],
  'AI/ML': [
    'PyTorch',
    'TensorFlow',
    'scikit-learn',
    'RAG & embeddings',
    'LLM APIs',
    'Ollama',
    'MediaPipe',
  ],
  'Backend & Infra': [
    'FastAPI',
    'Next.js',
    'PostgreSQL',
    'Redis',
    'MongoDB',
    'ChromaDB',
    'Docker',
    'GitHub Actions',
    'Linux',
  ],
  Semiconductor: [
    'RTL design',
    'Logic synthesis',
    'STA',
    'Cadence Genus & Innovus',
    'Chip design flow',
  ],
};

export const achievements = [
  { title: 'JEE Advanced 2022', detail: 'AIR 530 (GE) among 250,000+ candidates' },
  { title: 'JEE Main 2022', detail: '99.74 percentile among 1M+ candidates' },
  {
    title: 'FIFS ML Gameathon 2025',
    detail: '9th nationally (Google Cloud & Dream11)',
  },
];
