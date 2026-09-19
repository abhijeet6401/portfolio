import { CaseStudy } from "@/lib/content-schema";

export const caseStudies: CaseStudy[] = [
  {
    slug: "snabbit",
    title: "Scaling service operations without treating the customer experience as an afterthought",
    organization: "Snabbit",
    year: "2026",
    categories: ["product", "strategy"],
    featured: true,
    oneLineProblem:
      "Scaling a high-frequency home-service operation 5x while protecting unit economics and customer satisfaction.",
    deck: "Product and operating work across service quality, retention, cost reduction, inventory controls, and a new category launch.",
    role: "Product Management & Operations Intern",
    period: "May 2026 – Sep 2026",
    verifiedFacts: [
      {
        label: "Scale Factor",
        value: "50 → 250 orders/day",
        sourceRef: "CV3-Snabbit-L3",
        caveat: "Sustained during nationwide pilot expansion",
      },
      {
        label: "Retention GOV",
        value: "20% → 50%",
        sourceRef: "CV3-Snabbit-L1",
        caveat: "Share of total category booking volume driven by Blush Prive pass",
      },
      {
        label: "Cost Savings",
        value: "≈ ₹50 Lakh / mo",
        sourceRef: "CV2-Snabbit-L1",
        caveat: "Achieved by vendor renegotiations and volume consolidation",
      },
      {
        label: "Service Quality",
        value: "99% fulfillment · 4.87 rating",
        sourceRef: "CV3-Snabbit-L3",
        caveat: "Maintained consistently while volume expanded 5x",
      },
      {
        label: "Mani-Pedi Launch",
        value: "15%+ order share · ₹2,000 AOV",
        sourceRef: "CV3-Snabbit-L2",
        caveat: "Lifted average order value roughly 2x",
      },
      {
        label: "Inventory Reliability",
        value: "70% stockout cut · ₹30L–45L lockup",
        sourceRef: "CV1-Snabbit-L2",
        caveat: "Managed across 2 central warehouses with reorder-point tracking",
      },
    ],
    sections: [
      {
        id: "situation",
        heading: "The Situation",
        body: [
          "Snabbit's salon-at-home category was expanding rapidly from a small Bengaluru pilot into a multi-city offering. Scaling a home service business is fundamentally different from scaling software: every booking requires a trained service professional, physical consumables, precise travel windows, and tight customer trust.",
          "As order volume prepared to multiply from 50 to 250 orders per day, the immediate risks were operational friction and margin leakage. Product consumables accounted for 40% of service revenues, warehouse stock-outs caused last-minute technician delays, and repeat customer retention was low at 20%.",
          "The challenge was not simply driving top-line booking volume; it was ensuring that the unit economics and the end-customer experience remained resilient as volume scaled five-fold.",
        ],
      },
      {
        id: "understanding",
        heading: "What I Needed to Understand",
        body: [
          "I spent my first weeks directly observing field operations: sitting beside dispatch teams, analyzing daily technician routes, and auditing the central warehouse floor.",
          "Three core operational bottlenecks emerged:",
          "1. Consumable Costs & Leakage: Different technicians were sourcing materials inconsistently, and packaging costs varied widely by supplier. Consumables represented an unsustainable 40% of service revenues.",
          "2. Inventory Stock-outs: Over 100 SKUs were managed with irregular manual counts across 2 warehouses. Stock-outs were frequent, forcing technicians to scramble or delay morning dispatches.",
          "3. Retention Mechanics: Customers booked one-off services for special events but lacked a structured habit loop to book routine grooming at regular intervals.",
        ],
        artifacts: [
          {
            kind: "photo",
            src: "/images/warehouse-fieldwork.jpg",
            alt: "Field operations auditing inventory bins and scanning SKUs with a laptop on the warehouse floor",
            caption:
              "Fieldwork inside the warehouse: auditing SKU bin designs, physical count variance, and stock-out triggers before modeling reorder logic.",
            sourceLabel: "Original documentary fieldwork photo",
          },
        ],
      },
      {
        id: "contribution",
        heading: "My Contribution",
        body: [
          "Working collaboratively across operations, warehouse managers, and software engineers, I focused on three concrete interventions:",
          "1. Productized Retention ('Blush Prive'): Instead of relying on generic discount banners, I helped design and launch 'Blush Prive'—an in-app retention pass tailored for high-frequency grooming customers. This shifted booking frequency from sporadic to predictable, lifting retention GOV from 20% to 50% of total category volume.",
          "2. Category Expansion (Mani-Pedi Launch): I analyzed pricing models, duration constraints, and basket sizing to structure the launch of manicure & pedicure services. The offering rapidly captured 15%+ of category order share and roughly doubled average order value (AOV) to approximately ₹2,000.",
          "3. Unit Economics & Warehouse Controls: I queried Snabbit's database via SQL and modeled cost-to-revenue drivers in Excel. By consolidating suppliers, negotiating per-unit vendor pricing, and building SKU-level reorder tracking for 100+ SKUs across two warehouses, we cut product costs from 40% to 20% of revenue, saved approximately ₹50 Lakh per month, and cut stock-out frequency by 70%.",
        ],
        artifacts: [
          {
            kind: "photo",
            src: "/images/snabbit-desk-builder.jpg",
            alt: "Abhijeet working at desk in Snabbit office with Make Snabbit a Habit branding in background",
            caption:
              "Working at the Snabbit operations desk: translating daily warehouse telemetry, SQL queries, and dispatch logs into category roadmap choices.",
            sourceLabel: "Original documentary photo",
          },
        ],
      },
      {
        id: "how-work-moved",
        heading: "How the Work Moved",
        body: [
          "Observation: Walked the warehouse floors, tracked daily technician cancellations, and reviewed dispatch logs to identify why orders failed or arrived late.",
          "Framing: Discovered that service quality was tightly bounded by physical kit readiness and predictable customer rebooking, rather than top-of-funnel marketing.",
          "Decision: Prioritized an in-app pass (Blush Prive) to stabilize demand and instituted automated reorder thresholds in the warehouse before expanding city launches.",
          "Implementation: Built SQL queries for daily RQSP (Reliability, Quality, Speed, Price) dashboards, established minimum bin quantities, and coordinated with technicians on kit standards.",
          "Measurement: Monitored daily fulfillment rates (holding steady at 99%) and average ratings (4.87/5) while order volume expanded 5x from 50 to 250 daily orders.",
        ],
      },
      {
        id: "trade-offs",
        heading: "Trade-offs and Judgment",
        body: [
          "Speed vs. Buffer Stock: We could have eliminated 100% of stock-outs by over-ordering inventory, but that would have locked up critical working capital. Instead, we established dynamic safety stocks based on 7-day consumption velocity, capping capital lock-up between ₹30L and ₹45L while still cutting stock-outs by 70%.",
          "Discounting vs. Membership Commitments: Marketing teams initially wanted aggressive first-booking coupons. I argued for packaging benefits into the Blush Prive retention pass, ensuring that margin sacrifice bought long-term cohort loyalty rather than one-time transaction churn.",
        ],
      },
      {
        id: "reflection",
        heading: "What I Would Carry Forward",
        body: [
          "In on-demand services, software cannot outrun physical operations. If the warehouse bins are disorganized or technician travel windows are miscalculated, no in-app UI refinement will prevent a bad customer review. The most valuable product work often happens where digital logic touches physical reality.",
        ],
      },
    ],
    confidentialityNote:
      "All operational figures and metrics reflect verified CV source entries. Specific vendor contracts and proprietary platform schemas remain confidential.",
    nextSlug: "aequitas",
  },
  {
    slug: "aequitas",
    title: "Building research tools for a high-trust investing workflow",
    organization: "Aequitas Investments",
    year: "2025",
    categories: ["product", "strategy"],
    featured: true,
    oneLineProblem:
      "Modernizing fragmented analyst research and high-net-worth client workflows for a $1Bn AUM boutique investment fund.",
    deck: "A research platform, a custom CRM for 1,000+ HNI clients, and a LangGraph chatbot with contextual reasoning.",
    role: "AI Product Management Intern",
    period: "Jun 2025 – Aug 2025",
    verifiedFacts: [
      {
        label: "Analyst Research Time",
        value: "50% reduction",
        sourceRef: "CV1-Aequitas-L1",
        caveat: "Unified 10+ news sources with MiniLM-based deduplication",
      },
      {
        label: "CRM Scale",
        value: "1,000+ HNI clients",
        sourceRef: "CV1-Aequitas-L2",
        caveat: "Replaced Salesforce with custom internal solution",
      },
      {
        label: "Client Response Time",
        value: "30% faster",
        sourceRef: "CV1-Aequitas-L2",
        caveat: "Automated relationship management workflows across teams",
      },
      {
        label: "AI Orchestration",
        value: "LangGraph + Tool Calling",
        sourceRef: "CV1-Aequitas-L3",
        caveat: "Multimodal research chatbot with strict contextual reasoning",
      },
    ],
    sections: [
      {
        id: "situation",
        heading: "The Situation",
        body: [
          "Aequitas Investments is a boutique wealth management and investment fund managing approximately $1Bn in assets under management (AUM). Investment analysts were spending upwards of half their working hours manually scanning 10+ disconnected news feeds, earnings releases, and regulatory filings.",
          "Meanwhile, high-net-worth individual (HNI) client interactions were tracked across disparate systems and an off-the-shelf Salesforce instance that was overly complex and disconnected from the investment team's actual portfolio theses.",
          "The firm needed custom tools designed specifically for investment research velocity and relationship responsiveness, without compromising security, confidentiality, or data integrity.",
        ],
      },
      {
        id: "understanding",
        heading: "What I Needed to Understand",
        body: [
          "In asset management, speed is useless without veracity. If an AI tool summarizes a company's earnings call inaccurately or hallucinates an executive quote, analysts lose trust immediately.",
          "I mapped the exact daily workflow of the research team: how they ingested morning feeds, tagged company tickers, filtered duplicate wire stories, and extracted financial commentary. In parallel, I analyzed why relationship managers resisted Salesforce: it required too many manual data entry steps during fast client calls.",
        ],
      },
      {
        id: "contribution",
        heading: "My Contribution",
        body: [
          "1. Unified Research Platform: Guided the product design and delivery of a PERN (PostgreSQL, Express, React, Node) + TypeScript research workstation. Incorporated MiniLM embedding-based deduplication to cluster duplicate news feeds across 10+ financial wires into a single canonical story card, cutting repetitive analyst review time by 50%.",
          "2. Bespoke HNI CRM: Designed a lightweight, purpose-built CRM tailored to the specific lifecycle of 1,000+ HNI clients. Streamlined relationship touchpoints, automated recurring portfolio summary handoffs, and reduced client response time by 30%.",
          "3. Contextual Research Assistant: Architected a multimodal AI research assistant leveraging LangGraph agent orchestration. Configured strict tool-calling boundaries and contextual reasoning so analysts could query internal memos, macro reports, and market commentary with verifiable citations.",
        ],
        artifacts: [
          {
            kind: "diagram",
            src: "/images/aequitas-architecture.svg",
            alt: "System architecture diagram illustrating the research platform, MiniLM deduplication, and LangGraph agent workflow",
            caption:
              "High-level workflow architecture: ingesting 10+ financial news feeds, MiniLM vector clustering, and LangGraph agent orchestration with citations.",
            sourceLabel: "Recreated for this portfolio from non-confidential information",
          },
        ],
      },
      {
        id: "trade-offs",
        heading: "Trade-offs and Judgment",
        body: [
          "Off-the-shelf CRM vs. Custom Build: Replacing enterprise software like Salesforce with custom software carries maintenance overhead. However, the firm was utilizing less than 15% of Salesforce's features while paying high licensing fees, and the interface slowed down client responsiveness. Building a focused 1,000+ client CRM optimized for speed proved significantly more effective.",
          "Open Retrieval vs. Guardrailed Agent: Rather than letting an LLM generate open-ended answers, we enforced strict LangGraph tool-calling pipelines where the model could only pull from verified internal filings and cite exact source paragraphs.",
        ],
      },
      {
        id: "reflection",
        heading: "What I Would Carry Forward",
        body: [
          "AI assistants succeed in high-trust industries only when users know exactly where the model stops and verifiable evidence begins. Providing visible citations and clear confidence bounds matters far more than conversational flair.",
        ],
      },
    ],
    confidentialityNote:
      "Client names, portfolio holdings, private fund research, and internal prompts have been omitted in strict accordance with fund confidentiality standards.",
    nextSlug: "frost-sullivan",
  },
  {
    slug: "frost-sullivan",
    title: "Turning fragmented market inputs into a decision-ready forecast",
    organization: "Frost & Sullivan",
    year: "2025",
    categories: ["analytics", "strategy"],
    featured: true,
    oneLineProblem:
      "Reconciling multi-country commercial sales data across volatile demand cycles to support international executive strategy.",
    deck: "Multi-country demand forecasting across a $23M+ scope, supported by Power BI and hybrid time-series modeling.",
    role: "Business Analytics & Consulting Intern",
    period: "May 2025 – Jun 2025",
    verifiedFacts: [
      {
        label: "Commercial Scope",
        value: "$23M+ sales data",
        sourceRef: "CV1-FS-L2",
        caveat: "Multi-country historical transactions and demand pipelines",
      },
      {
        label: "Predictive Models",
        value: "Moving Averages · Exp. Smoothing · LSTM",
        sourceRef: "CV1-FS-L1",
        caveat: "Hybrid modeling across distinct geographical markets",
      },
      {
        label: "Segment Revenue",
        value: "3 distinct segments modeled",
        sourceRef: "CV1-FS-L3",
        caveat: "Automated CAGR tracking via SQL-DAX drilldowns",
      },
      {
        label: "Operational Insights",
        value: "8.0% returns · Nov-Dec seasonality",
        sourceRef: "CV1-FS-L3",
        caveat: "Uncovered structural demand spikes and return patterns",
      },
    ],
    sections: [
      {
        id: "situation",
        heading: "The Situation",
        body: [
          "Frost & Sullivan delivers strategic market forecasts to international leadership teams navigating multi-country expansions. Client stakeholders faced volatile order patterns across multiple international territories totaling over $23M in historical commercial transactions.",
          "Different regional markets logged order receipts under varying timelines, and demand was prone to sharp year-end surges and post-holiday returns that obscured underlying category health.",
          "The objective was to transform raw transaction records into a coherent, decision-ready forecasting engine that executives could interrogate across countries and product tiers.",
        ],
      },
      {
        id: "understanding",
        heading: "What I Needed to Understand",
        body: [
          "A forecast is only as reliable as its baseline assumptions. Before applying algorithms, I audited transaction irregularities, return behavior, and regional reporting lags.",
          "The data revealed that certain product categories experienced recurring return rates near 8.0%, and a massive demand spike consistently occurred in the November–December window. Treating these variations as random noise produced severe inventory overstock in Q1.",
        ],
      },
      {
        id: "contribution",
        heading: "My Contribution",
        body: [
          "1. Hybrid Predictive Modeling: Implemented multi-tier time-series forecasting combining Moving Averages, Exponential Smoothing, and Long Short-Term Memory (LSTM) models to balance short-term responsiveness with long-term seasonality.",
          "2. Power BI Decision Cockpit: Developed an interactive Power BI decision model featuring automated CAGR calculations and multi-level SQL-DAX drilldowns. Stakeholders could slice data across three primary segments and isolate regional performance.",
          "3. Isolating Structural Patterns: Formally quantified the 8.0% product return rate and modeled the November–December seasonality cycle, enabling leadership to calibrate production runs and prevent capital lock-up.",
        ],
        artifacts: [
          {
            kind: "diagram",
            src: "/images/frost-sullivan-forecast.svg",
            alt: "Conceptual forecasting hierarchy diagram showing regional transaction inputs, time-series reconciliation, and executive scenario drilldowns",
            caption:
              "Decision framework flow: harmonizing raw multi-country transaction logs, isolating seasonal spikes and returns, and rendering scenario models.",
            sourceLabel: "Recreated for this portfolio from non-confidential information",
          },
        ],
      },
      {
        id: "trade-offs",
        heading: "Trade-offs and Judgment",
        body: [
          "Model Complexity vs. Decision Interpretability: While deep learning architectures like LSTM provided valuable pattern capture for complex multi-country time series, executive stakeholders needed to understand why specific numbers moved. We paired the LSTM predictions with transparent Exponential Smoothing baselines so business leaders could evaluate the underlying assumptions.",
          "Decision-First vs. Dashboard-First: We avoided building dozens of decorative metric cards. The dashboard was structured strictly around three management choices: inventory commitment dates, regional budget allocation, and return reserve allowances.",
        ],
      },
      {
        id: "reflection",
        heading: "What I Would Carry Forward",
        body: [
          "An analytical model or dashboard is only successful if it changes an operating decision. If an executive leaves a review meeting saying 'the charts look nice' but orders the exact same inventory as before, the analysis has failed.",
        ],
      },
    ],
    confidentialityNote:
      "Client corporate identities, underlying market models, and proprietary commercial contracts have been omitted in adherence to engagement terms.",
    nextSlug: "india-accelerator",
  },
  {
    slug: "india-accelerator",
    title: "The discipline of a clear 'Pass'",
    organization: "India Accelerator",
    year: "2024",
    categories: ["strategy", "analytics"],
    featured: true,
    oneLineProblem:
      "Evaluating early-stage venture investment opportunities and developing rigorous diligence rubrics across high-growth markets.",
    deck: "Investment due diligence, market sizing across a $130B sector, and recommending against two startup investments.",
    role: "Investment Analyst Intern",
    period: "Aug 2024 – Oct 2024",
    verifiedFacts: [
      {
        label: "Diligence Recommendation",
        value: "Pass call on 2 startups",
        sourceRef: "CV2-IA-L1",
        caveat: "Identified critical execution and unit economic risks post due diligence",
      },
      {
        label: "Market Mapped",
        value: "$130B sector scope",
        sourceRef: "CV2-IA-L2",
        caveat: "Mapped across refurbished tech and B2B commerce",
      },
      {
        label: "Competitive Benchmarking",
        value: "15+ competitors analyzed",
        sourceRef: "CV2-IA-L2",
        caveat: "Detailed benchmarking on pricing, GTM, and user journeys (Grest, ValueShoppe)",
      },
      {
        label: "Data Synthesis",
        value: "20+ data sources",
        sourceRef: "CV2-IA-L3",
        caveat: "Synthesized financial statements, customer experience gaps, and capital flows",
      },
    ],
    sections: [
      {
        id: "situation",
        heading: "The Situation",
        body: [
          "India Accelerator evaluates hundreds of seed and pre-Series A startups annually. Early-stage venture deals frequently present compelling founder narratives, high top-line growth projections, and massive market estimates.",
          "During my tenure, two prominent startups in refurbished electronics and B2B commerce sought investment. Both claimed rapid user acquisition in what was estimated as a $130B broader market opportunity.",
          "My mandate was to cut through pitch decks, perform rigorous ground-truth diligence, and provide clear investment recommendations to the investment committee.",
        ],
      },
      {
        id: "understanding",
        heading: "What I Needed to Understand",
        body: [
          "In early-stage evaluation, the most common trap is confusing a large total addressable market (TAM) with a company's ability to capture value.",
          "I synthesized data across 20+ primary and secondary sources—reviewing audited accounts, tracking customer dispute boards, auditing return logistics costs, and mystery-shopping competitor platforms (benchmarking 15+ players including Grest and ValueShoppe).",
        ],
      },
      {
        id: "contribution",
        heading: "My Contribution",
        body: [
          "1. Unit Economics & Cash Burn Audit: Mapped the true contribution margins of the target startups. Discovered that high headline revenues masked severe refurbishing reverse-logistics costs, warranty defect liabilities, and uncollected trade credit.",
          "2. Competitive Benchmarking: Evaluated 15+ competitors across pricing transparency, inventory turns, and customer journey friction, establishing that the target startups had no defensible moat against better-capitalized category incumbents.",
          "3. Formulating a Clear 'Pass': Prepared structured investment memos recommending an unequivocal 'Pass' on both opportunities. Outlined the specific execution hazards and capital-intensity traps that would impair future funding rounds.",
        ],
        artifacts: [
          {
            kind: "diagram",
            src: "/images/india-accelerator-rubric.svg",
            alt: "Investment diligence framework comparing narrative claims against verified unit economics, reverse logistics, and defensibility",
            caption:
              "Diligence evaluation rubric: deconstructing pitch claims into verified unit economics, customer dispute frequency, and working capital cycles.",
            sourceLabel: "Recreated for this portfolio from non-confidential information",
          },
        ],
      },
      {
        id: "trade-offs",
        heading: "Trade-offs and Judgment",
        body: [
          "Fear of Missing Out (FOMO) vs. Underwriting Discipline: When a startup boasts 30% month-on-month growth, recommending against investment feels counter-intuitive. However, disciplined diligence requires evaluating whether growth creates equity value or simply burns working capital. The recommendation protected fund capital from high-risk balance sheets.",
          "Structuring Uncertainty: Instead of presenting a vague 'maybe', I structured the memos around specific falsifiable hypotheses: what metrics would have to change for the business model to become investable.",
        ],
      },
      {
        id: "reflection",
        heading: "What I Would Carry Forward",
        body: [
          "Saying 'No' with structured reasoning is far more valuable than giving an enthusiastic 'Yes' based on surface-level enthusiasm. A rigorous pass clarifies what kind of execution is truly required to build an enduring enterprise.",
        ],
      },
    ],
    confidentialityNote:
      "Target company names and private diligence memos remain strictly confidential. Non-confidential market benchmarking details are shared for illustrative purposes.",
    nextSlug: "3one4-capital",
  },
  {
    slug: "3one4-capital",
    title: "Learning to separate a compelling market from a compelling investment",
    organization: "3one4 Capital",
    year: "2025",
    categories: ["strategy", "analytics"],
    featured: false,
    oneLineProblem:
      "Assisting early-stage venture portfolio companies with tailored financing structures, runway modeling, and capital efficiency.",
    deck: "Portfolio management, debt financing playbooks, and growth optimization alongside the Principal of Finance.",
    role: "Portfolio Management and Strategy Intern",
    period: "Dec 2024 – Feb 2025",
    verifiedFacts: [
      {
        label: "Financing Playbooks",
        value: "9% – 22% cost range",
        sourceRef: "CV2-3one4-L1",
        caveat: "Compared venture debt, NCDs, and RBF across 5 distinct instruments",
      },
      {
        label: "Runway Extension",
        value: "Up to 6 months",
        sourceRef: "CV2-3one4-L2",
        caveat: "Prepared 4 briefs on bridge loans, convertible notes, and asset financing",
      },
      {
        label: "Portfolio Support",
        value: "3 consumer & fintech startups",
        sourceRef: "CV2-3one4-L3",
        caveat: "Analyzed unit economics, LTV/CAC, and growth patterns (Seed to Pre-IPO)",
      },
    ],
    sections: [
      {
        id: "context",
        heading: "Context & Contribution",
        body: [
          "Working directly alongside the Principal of Finance at 3one4 Capital, I supported early-stage portfolio founders evaluating alternative capital structures to optimize runway while avoiding premature equity dilution.",
          "I developed comprehensive debt financing playbooks comparing venture debt, non-convertible debentures (NCDs), and revenue-based financing (RBF). The analysis mapped true effective borrowing costs across a 9% to 22% spectrum and benchmarked instrument suitability against founder cash flow profiles.",
          "Additionally, I authored four detailed financing briefs covering bridge loans, asset financing, and convertible notes that helped founders extend runway by up to 6 months. I also supported three consumer and fintech companies across unit economic modeling, LTV/CAC cohort decay, and growth pattern audits.",
        ],
      },
      {
        id: "judgment",
        heading: "Strategic Takeaway",
        body: [
          "Capital structure is an integral part of product strategy. Founders who understand how to pair non-dilutive financing with predictable unit economics buy themselves the runway needed to discover true product-market fit without forfeiting ownership.",
        ],
      },
    ],
    confidentialityNote:
      "Portfolio company names and private financial structures remain confidential under fund non-disclosure agreements.",
    nextSlug: "jobhunt-agent",
  },
  {
    slug: "jobhunt-agent",
    title: "Building a job-search agent around a real workflow",
    organization: "Independent Builder Project",
    year: "2026",
    categories: ["product", "analytics"],
    featured: false,
    oneLineProblem:
      "Eliminating the repetitive manual friction of searching, tailoring resumes, and tracking applications for high-volume job hunts.",
    deck: "Full-stack AI discovery assistant tailoring LaTeX resumes and managing application pipelines with automated outreach.",
    role: "Solo Builder",
    period: "Jun 2026",
    verifiedFacts: [
      {
        label: "Job Search Aggregation",
        value: "100+ live jobs / search",
        sourceRef: "CV3-JobHunt-L1",
        caveat: "Scraped and filtered from LinkedIn and YC startups via Tavily API",
      },
      {
        label: "Time Saved",
        value: "10+ hours saved",
        sourceRef: "CV3-JobHunt-L2",
        caveat: "Automated LaTeX resume compiles and tracked 30+ applications",
      },
      {
        label: "Full-Stack Deployment",
        value: "FastAPI + pdflatex on Render",
        sourceRef: "CV3-JobHunt-L3",
        caveat: "Password-protected web application compiling PDF resumes on the fly",
      },
      {
        label: "Outreach Automation",
        value: "30+ applications tracked",
        sourceRef: "CV3-JobHunt-L2",
        caveat: "Direct Google Sheets service account integration for application stages",
      },
    ],
    sections: [
      {
        id: "problem",
        heading: "The Problem & Architecture",
        body: [
          "Searching for internships and engineering/product roles often involves hours of repetitive busywork: checking multiple job boards, manually tweaking bullet points in LaTeX, formatting cover letters, and logging application dates into spreadsheets.",
          "I designed and built 'JobHunt Agent' as an autonomous assistant to handle this pipeline end-to-end. The system accepts candidate background data and target job queries, then executes a structured sequence:",
          "1. Aggregates 100+ relevant live job listings per search across LinkedIn and YC startups using the Tavily search API.",
          "2. Ingests candidate LaTeX resume source files and selectively adapts skill bullet points to match the target job description using xAI's LLM API, preserving clean typography without introducing hallucinations.",
          "3. Generates concise, role-specific cold outreach emails and logs all application statuses directly into Google Sheets via service account authentication.",
          "4. Deployed as a password-protected web app on Render, compiling customized PDFs on demand using pdflatex within a lightweight FastAPI container.",
        ],
      },
      {
        id: "boundaries",
        heading: "What It Does / What It Does Not Do",
        body: [
          "What it does: Discovers live openings, tailors resume bullet emphasis to match job keywords, automatically compiles valid LaTeX PDFs, and syncs outreach statuses to Google Sheets.",
          "What it does NOT do: It does not blindly auto-submit applications to applicant portals without human review, it does not invent credentials or past employers, and it does not spam hiring managers with generic bulk messages.",
        ],
      },
    ],
    confidentialityNote: "Built as an independent project. Codebase adheres to personal API safety guardrails.",
    nextSlug: "amex-offer-ranking",
  },
  {
    slug: "amex-offer-ranking",
    title: "Improving ranking quality where order matters",
    organization: "American Express Decision Science Track",
    year: "2025",
    categories: ["analytics"],
    featured: false,
    oneLineProblem:
      "Optimizing credit card offer suitability for cardmembers by predicting personalized engagement preferences across high-dimensional features.",
    deck: "Personalized recommendation system achieving a 22.9% lift in MAP@7 through an Ensemble of Experts and Rankers.",
    role: "Decision Science Modeler",
    period: "Jul 2025",
    verifiedFacts: [
      {
        label: "Ranking Precision",
        value: "MAP@7 of 0.652",
        sourceRef: "CV1-Amex-L1",
        caveat: "Represents a 22.9% lift over the baseline benchmark",
      },
      {
        label: "Architecture",
        value: "Ensemble of Experts & Rankers (E2R)",
        sourceRef: "CV1-Amex-L1",
        caveat: "Trained using XGBoost and LightGBM ranking objectives",
      },
      {
        label: "Metric Improvements",
        value: "AUC-PR +20% · NDCG@7 +18%",
        sourceRef: "CV1-Amex-L2",
        caveat: "Hyperparameter tuning via Optuna Bayesian search",
      },
      {
        label: "Feature Engineering",
        value: "NMF · UMAP · HDBSCAN",
        sourceRef: "CV1-Amex-L2",
        caveat: "Unsupervised dimensional reduction and customer behavioral clustering",
      },
    ],
    sections: [
      {
        id: "ranking-challenge",
        heading: "The Ranking Challenge",
        body: [
          "Credit cardholders are frequently presented with multiple merchant and rewards offers. Presenting irrelevant offers creates user fatigue and diminishes offer redemptions. Because cardholders typically only evaluate the top handful of visible offers, ranking accuracy at top positions (top 7) is vastly more critical than overall classification accuracy.",
          "To optimize this ordering, I engineered an Ensemble of Experts and Rankers (E2R) model leveraging both LightGBM and XGBoost ranking objectives.",
          "I constructed dense behavioral features using Non-Negative Matrix Factorization (NMF), Uniform Manifold Approximation and Projection (UMAP), and HDBSCAN clustering to capture latent cardholder spending profiles without overfitting.",
          "Systematic hyperparameter optimization via Optuna Bayesian search yielded a Mean Average Precision at 7 (MAP@7) of 0.652—a 22.9% improvement over the baseline model—alongside an 18% lift in NDCG@7 and a 20%+ increase in AUC-PR.",
        ],
      },
      {
        id: "takeaway",
        heading: "Analytical Takeaway",
        body: [
          "Choosing the right loss metric determines whether modeling solves the business problem. Optimizing for MAP@7 aligned the algorithm directly with human attention constraints, ensuring that the highest-utility offers surfaced where cardholders actually looked.",
        ],
      },
    ],
    confidentialityNote: "Analytical modeling project conducted under the Amex Decision Science track guidelines.",
    nextSlug: "research-competitions",
  },
  {
    slug: "research-competitions",
    title: "Structured problem solving under competition and research constraints",
    organization: "Competitions & Academic Research",
    year: "2024–2026",
    categories: ["strategy", "analytics", "product"],
    featured: false,
    oneLineProblem:
      "Applying rigorous quantitative and strategic frameworks across national case competitions, equity theses, and macro-financial risk modeling.",
    deck: "Selected work spanning the Indian Case Challenge (ICC), Frammer AI analytics platform, equity research, and sovereign yield modeling.",
    role: "Researcher & Competitor",
    period: "2024 – 2026",
    verifiedFacts: [
      {
        label: "Indian Case Challenge (ICC)",
        value: "Runner-up / 2000+ teams",
        sourceRef: "CV1-ICC-L1",
        caveat: "Recommended Loyka acquisition at ₹156 Cr valuation with 28% IRR",
      },
      {
        label: "Frammer AI (Gen Championship)",
        value: "Bronze · 98% SQL success",
        sourceRef: "CV1-Frammer-L1",
        caveat: "Full-stack FastAPI + Next.js platform with self-healing SQL and G-Eval",
      },
      {
        label: "Equity Research (HAL - ACE)",
        value: "HAL ₹7,660 DCF · 0.935 Sharpe",
        sourceRef: "CV2-Equity-L1",
        caveat: "Comps EV/EBITDA 17.7x, ACE R² 0.86 with govt capex, 33.39% Jensen's Alpha",
      },
      {
        label: "Macro-Financial Risk",
        value: "VECM · 20 bps rise · 50:50 Barbell",
        sourceRef: "CV1-Macro-L1",
        caveat: "Quantified term premium risk; recommended 91-day T-Bills & 15-year SDLs",
      },
    ],
    sections: [
      {
        id: "icc",
        heading: "Indian Case Challenge (ICC) – Bikaji Expansion",
        body: [
          "Runner-up in Bikaji's corporate expansion case competition (INR 50K prize), emerging as the only undergraduate team on the podium among 2,000+ global teams.",
          "Evaluated 5+ prospective M&A targets and built an acquisition thesis recommending Loyka at a ₹156 Cr valuation with an estimated 28% IRR. Modeled supply chain efficiencies yielding a 15% operational improvement and 40% reduction in retail stock-outs via ML-driven demand forecasting and network flow models.",
        ],
      },
      {
        id: "frammer",
        heading: "Frammer AI – GenAI Analytics Platform",
        body: [
          "Architected a full-stack Python/FastAPI and Next.js platform orchestrating 4 GenAI engines via LangGraph for business data analytics and KPI generation.",
          "Engineered a self-healing SQL pipeline that autonomously inspects and rewrites failed database queries, attaining a 98% execution success rate and 88.2% healing efficiency. Designed a G-Eval framework with execution-aware scoring that improved weighted benchmark accuracy from 60.4% to 80.1%.",
        ],
      },
      {
        id: "equity-research",
        heading: "Equity Research & Macro-Financial Modeling",
        body: [
          "Equity Research (HAL & ACE): Built fundamental long investment theses using DCF valuation, regression modeling, and risk-adjusted benchmarking. Valued HAL at ₹7,660 per share (~53% upside) with EV/EBITDA of 17.7x. Modeled ACE revenue growth (15% CAGR) via government capex regression (adjusted R² 0.86), achieving a 0.935 Sharpe ratio and 33.39% Jensen's Alpha over a 20-year benchmark window.",
          "Macro-Financial Risk Modeling: Working under Prof. Krittika Banerjee at IIT Kharagpur, developed a multivariate VECM time-series framework to quantify sovereign yield curves. Estimated a 20 bps term premium rise above 5% fiscal deficit, recommending a 50:50 barbell portfolio of 91-day T-Bills and 15-year State Development Loans (SDLs) to balance policy tightening risk.",
        ],
      },
    ],
    confidentialityNote: "Academic research and competition submissions. All figures match verified CV submissions.",
    nextSlug: "snabbit",
  },
];
