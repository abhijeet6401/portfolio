export interface ManifestAsset {
  filename: string;
  slug: string;
  title: string;
  approvedContext: string;
  altText: string;
  focalPoint: { x: number; y: number };
  cropVariants: string[];
  confidentialityNotes: string;
  isUsed: boolean;
  placement: string;
}

export const assetManifest: ManifestAsset[] = [
  {
    filename: "abhijeet-portrait.png",
    slug: "abhijeet-portrait",
    title: "Abhijeet Kumar — Portrait",
    approvedContext:
      "Portrait of Abhijeet Kumar in black shirt and beige trousers.",
    altText: "Portrait of Abhijeet Kumar standing outdoors",
    focalPoint: { x: 50, y: 35 },
    cropVariants: ["3:4 portrait", "1:1 square", "4:5 lead"],
    confidentialityNotes: "Original documentary portrait.",
    isUsed: true,
    placement: "About page lead bio; Thinking page reflection.",
  },
  {
    filename: "snabbit-desk-builder.jpg",
    slug: "snabbit-desk",
    title: "Abhijeet at Snabbit Workspace",
    approvedContext:
      "Working at desk in Snabbit office with 'MAKE SNABBIT A HABIT' wall graphic and Series D hanging banners in background.",
    altText:
      "Abhijeet Kumar seated at desk working on a laptop in the Snabbit operations office",
    focalPoint: { x: 50, y: 50 },
    cropVariants: ["4:5 hero", "16:9 contextual", "1:1 square"],
    confidentialityNotes:
      "Verified original photo. No confidential customer or vendor data visible.",
    isUsed: true,
    placement: "Homepage hero beside intro; Snabbit case study contribution section; About page.",
  },
  {
    filename: "warehouse-fieldwork.jpg",
    slug: "snabbit-warehouse",
    title: "Snabbit Warehouse Floor & Inventory SKU Auditing",
    approvedContext:
      "Fieldwork inside warehouse showing technician and SKU inventory bins, barcode scanner, and laptop on the warehouse floor.",
    altText:
      "Warehouse technician scanning inventory boxes and checking SKU bins with a laptop on the floor",
    focalPoint: { x: 50, y: 40 },
    cropVariants: ["3:2 wide", "16:9 documentary", "4:3 inset"],
    confidentialityNotes:
      "Verified original fieldwork photo. Shows physical SKU bins and packaging.",
    isUsed: true,
    placement: "Homepage field strip (first image); Snabbit case study 'What I needed to understand'; Thinking page.",
  },
  {
    filename: "snabbit-wall-graphic.png",
    slug: "snabbit-wall",
    title: "Snabbit Office 'Make Snabbit a Habit' Activation",
    approvedContext:
      "Snabbit headquarters feature wall displaying 'MAKE Snabbit A HABIT' brand typography.",
    altText: "Magenta feature wall with bold white text reading Make Snabbit a Habit",
    focalPoint: { x: 50, y: 50 },
    cropVariants: ["16:9 wide", "4:3 inset"],
    confidentialityNotes: "Original brand activation documentary photo.",
    isUsed: true,
    placement: "Homepage field strip (second image); Snabbit case study launch section.",
  },
  {
    filename: "kgp-team-community.png",
    slug: "kgp-team",
    title: "IIT Kharagpur Team & Community",
    approvedContext:
      "IIT Kharagpur student cohort and team wearing royal blue department shirts, with Abhijeet sitting front and center.",
    altText:
      "Group photo of IIT Kharagpur team members in blue polo shirts with Abhijeet Kumar sitting in front center",
    focalPoint: { x: 50, y: 60 },
    cropVariants: ["4:3 group", "16:9 contextual"],
    confidentialityNotes: "Original campus community photo.",
    isUsed: true,
    placement: "Homepage field strip (third image); About page community section.",
  },
  {
    filename: "aequitas-presence.png",
    slug: "aequitas-presence",
    title: "Aequitas Investments Office Presence",
    approvedContext:
      "Entrance to Aequitas Investments showing the embossed logo and office door.",
    altText: "Office entrance with embossed logo reading AEQUITAS on neutral stone wall",
    focalPoint: { x: 50, y: 50 },
    cropVariants: ["4:5 environmental", "1:1 square"],
    confidentialityNotes:
      "Environmental contextual image supported by case text. No proprietary research displayed.",
    isUsed: true,
    placement: "Aequitas case study 'The Situation'.",
  },
  {
    filename: "flight-night-view.png",
    slug: "flight-night-view",
    title: "Night Flight & Cross-City Field Travel",
    approvedContext:
      "Aerial view from aircraft window over illuminated city highways at night.",
    altText: "Airplane wing looking out at night over illuminated city grids and highways",
    focalPoint: { x: 50, y: 50 },
    cropVariants: ["9:16 vertical", "4:5 atmospheric"],
    confidentialityNotes: "Documentary travel / field operations perspective.",
    isUsed: true,
    placement: "About page travel / operations detail.",
  },
  {
    filename: "gc-pm-proof.jpg",
    slug: "gc-pm-proof",
    title: "General Championship 1st Position Proof (Product Management)",
    approvedContext:
      "Official certificate listing Abhijeet Kumar (23HS10002) at 1st Position in Product Management signed by Technology Students' Gymkhana, IIT Kharagpur.",
    altText:
      "Official document signed by Technology Students' Gymkhana confirming Abhijeet Kumar in 1st Position for Product Management",
    focalPoint: { x: 50, y: 30 },
    cropVariants: ["3:4 document", "full certificate"],
    confidentialityNotes: "Verified competition win certificate.",
    isUsed: true,
    placement: "Research & Competitions case study ('General Championship' section).",
  },
  {
    filename: "aequitas-architecture.svg",
    slug: "aequitas-workflow",
    title: "Aequitas Research & CRM Workflow Architecture",
    approvedContext:
      "High-level workflow showing 10+ news ingestion, MiniLM deduplication, and LangGraph agent orchestration with citations.",
    altText:
      "Architectural workflow diagram showing news sources, MiniLM deduplication, LangGraph orchestration, and HNI CRM handoff",
    focalPoint: { x: 50, y: 50 },
    cropVariants: ["16:9 diagram"],
    confidentialityNotes:
      "Recreated for this portfolio from non-confidential information. Contains no proprietary code or client data.",
    isUsed: true,
    placement: "Aequitas case study 'My Contribution'.",
  },
  {
    filename: "frost-sullivan-forecast.svg",
    slug: "frost-sullivan-model",
    title: "Multi-Country Forecasting Decision Flow",
    approvedContext:
      "Decision model framework showing regional sales input harmonization, return-rate isolation (8%), and Power BI scenario modeling.",
    altText:
      "Forecasting flow diagram illustrating data harmonization, time-series decomposition, and executive decision scenario planning",
    focalPoint: { x: 50, y: 50 },
    cropVariants: ["16:9 diagram"],
    confidentialityNotes:
      "Recreated for this portfolio from non-confidential information. No proprietary client datasets included.",
    isUsed: true,
    placement: "Frost & Sullivan case study 'My Contribution'.",
  },
  {
    filename: "india-accelerator-rubric.svg",
    slug: "india-accelerator-rubric",
    title: "Startup Due Diligence & 'Pass' Decision Rubric",
    approvedContext:
      "Evaluation rubric contrasting headline growth metrics with verified unit economics, warranty liabilities, and capital intensity.",
    altText:
      "Diligence matrix diagram contrasting pitch claims against contribution margin and defensibility criteria",
    focalPoint: { x: 50, y: 50 },
    cropVariants: ["16:9 diagram"],
    confidentialityNotes:
      "Recreated for this portfolio from non-confidential information. Target startup names omitted.",
    isUsed: true,
    placement: "India Accelerator case study 'My Contribution'.",
  },
];
