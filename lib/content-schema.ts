import { z } from "zod";

export const WorkCategorySchema = z.enum(["product", "strategy", "analytics"]);
export type WorkCategory = z.infer<typeof WorkCategorySchema>;

export const VerifiedFactSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  sourceRef: z.string().min(1),
  caveat: z.string().optional(),
});
export type VerifiedFact = z.infer<typeof VerifiedFactSchema>;

export const ArtifactSchema = z.object({
  kind: z.enum(["photo", "screenshot", "diagram", "reconstruction"]),
  src: z.string().min(1),
  alt: z.string().min(1),
  caption: z.string().min(1),
  sourceLabel: z.string().min(1),
  confidential: z.boolean().optional(),
  focalPoint: z.object({ x: z.number(), y: z.number() }).optional(),
});
export type Artifact = z.infer<typeof ArtifactSchema>;

export const CaseSectionSchema = z.object({
  id: z.string().min(1),
  heading: z.string().min(1),
  body: z.array(z.string().min(1)),
  artifacts: z.array(ArtifactSchema).optional(),
});
export type CaseSection = z.infer<typeof CaseSectionSchema>;

export const CaseStudySchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  organization: z.string().min(1),
  year: z.string().optional(),
  categories: z.array(WorkCategorySchema).min(1),
  featured: z.boolean(),
  oneLineProblem: z.string().min(1),
  deck: z.string().min(1),
  role: z.string().optional(),
  period: z.string().optional(),
  verifiedFacts: z.array(VerifiedFactSchema).min(1),
  sections: z.array(CaseSectionSchema).min(1),
  confidentialityNote: z.string().optional(),
  nextSlug: z.string().optional(),
});
export type CaseStudy = z.infer<typeof CaseStudySchema>;

export const PrincipleSchema = z.object({
  number: z.string(),
  title: z.string(),
  quote: z.string(),
  description: z.string(),
  evidenceLink: z.object({
    text: z.string(),
    href: z.string(),
  }),
});
export type Principle = z.infer<typeof PrincipleSchema>;

export const TimelineItemSchema = z.object({
  year: z.string(),
  role: z.string(),
  organization: z.string(),
  period: z.string(),
  description: z.string(),
  discipline: WorkCategorySchema,
  verifiedFacts: z.array(z.string()).optional(),
  link: z.string().optional(),
});
export type TimelineItem = z.infer<typeof TimelineItemSchema>;
