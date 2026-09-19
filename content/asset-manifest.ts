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
    placement: "Homepage hero beside intro; Snabbit case study contribution section.",
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
    placement: "Homepage field strip (first image); Snabbit case study 'What I needed to understand'.",
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
      "Diligence matrix diagram contrasting headline pitch metrics against contribution margin and defensibility criteria",
    focalPoint: { x: 50, y: 50 },
    cropVariants: ["16:9 diagram"],
    confidentialityNotes:
      "Recreated for this portfolio from non-confidential information. Target startup names omitted.",
    isUsed: true,
    placement: "India Accelerator case study 'My Contribution'.",
  },
];
