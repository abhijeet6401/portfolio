import { describe, it, expect } from "vitest";
import { caseStudies } from "../content/work";
import { principles } from "../content/principles";
import { timelineItems } from "../content/timeline";
import {
  CaseStudySchema,
  PrincipleSchema,
  TimelineItemSchema,
} from "../lib/content-schema";

describe("Content Data Integrity & Schema Validation", () => {
  it("should have exactly 8 case studies", () => {
    expect(caseStudies.length).toBe(8);
  });

  it("should have unique slugs for all case studies", () => {
    const slugs = caseStudies.map((cs) => cs.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(caseStudies.length);
  });

  it("should validate each case study against CaseStudySchema", () => {
    caseStudies.forEach((study) => {
      const parsed = CaseStudySchema.safeParse(study);
      if (!parsed.success) {
        console.error(`Validation failed for ${study.slug}:`, parsed.error);
      }
      expect(parsed.success).toBe(true);
    });
  });

  it("should ensure every verified fact has a valid sourceRef", () => {
    caseStudies.forEach((study) => {
      study.verifiedFacts.forEach((fact) => {
        expect(fact.sourceRef).toBeDefined();
        expect(fact.sourceRef.trim().length).toBeGreaterThan(3);
        expect(fact.label.trim().length).toBeGreaterThan(0);
        expect(fact.value.trim().length).toBeGreaterThan(0);
      });
    });
  });

  it("should have the four required flagship featured case studies", () => {
    const featuredSlugs = caseStudies.filter((c) => c.featured).map((c) => c.slug);
    expect(featuredSlugs).toContain("snabbit");
    expect(featuredSlugs).toContain("aequitas");
    expect(featuredSlugs).toContain("frost-sullivan");
    expect(featuredSlugs).toContain("india-accelerator");
    expect(featuredSlugs.length).toBe(4);
  });

  it("should ensure all nextSlug links point to existing case studies", () => {
    const allSlugs = new Set(caseStudies.map((c) => c.slug));
    caseStudies.forEach((study) => {
      if (study.nextSlug) {
        expect(allSlugs.has(study.nextSlug)).toBe(true);
      }
    });
  });

  it("should validate all 5 principles against PrincipleSchema", () => {
    expect(principles.length).toBe(5);
    principles.forEach((principle) => {
      const parsed = PrincipleSchema.safeParse(principle);
      expect(parsed.success).toBe(true);
    });
  });

  it("should validate all timeline items against TimelineItemSchema", () => {
    expect(timelineItems.length).toBeGreaterThan(5);
    timelineItems.forEach((item) => {
      const parsed = TimelineItemSchema.safeParse(item);
      expect(parsed.success).toBe(true);
    });
  });
});
