import { Principle } from "@/lib/content-schema";

export const principles: Principle[] = [
  {
    number: "01",
    title: "Start where the work breaks",
    quote:
      "Before proposing a feature or process, I want to see the exception, handoff, delay, or workaround that people already live with.",
    description:
      "Users and field operators rarely follow idealized workflow diagrams. The most valuable product insights come from observing what technicians do when an item is out of stock, what analysts do when a dashboard misses an edge case, or what customers do when a checkout fails. If you start at the point of failure, you solve the real constraint rather than a theoretical one.",
    evidenceLink: {
      text: "See Snabbit operations & warehouse fieldwork",
      href: "/work/snabbit",
    },
  },
  {
    number: "02",
    title: "Make the decision explicit",
    quote:
      "A model, dashboard, or research note is useful only when it changes what someone can decide.",
    description:
      "It is tempting to build complex analytics that summarize everything and decide nothing. Whether forecasting $23M+ in commercial sales or engineering a credit card offer ranker, the technical architecture must be bounded by the immediate operating choice: which supplier to reorder from, which offer to display in position 1, or which budget to adjust.",
    evidenceLink: {
      text: "See Frost & Sullivan forecasting & Amex ranker",
      href: "/work/frost-sullivan",
    },
  },
  {
    number: "03",
    title: "Separate evidence from confidence",
    quote:
      "Ambiguity does not disappear because the document looks polished. I try to show what we know, what we assume, and what would change the call.",
    description:
      "A polished slide deck or an executive memo can easily mask shaky assumptions. In early-stage venture diligence, separating hard evidence (verified unit economics, dispute rates, reverse logistics costs) from narrative projections allows teams to make difficult 'Pass' calls with conviction, without being misled by surface enthusiasm.",
    evidenceLink: {
      text: "See India Accelerator investment diligence",
      href: "/work/india-accelerator",
    },
  },
  {
    number: "04",
    title: "Design trust into the workflow",
    quote:
      "In finance and research tools, speed matters only after reliability, context, and boundaries are clear.",
    description:
      "Introducing generative AI or automated assistants into high-trust professional workflows fails if users cannot inspect the reasoning. Analysts do not need a chatbot that hallucinates plausible corporate updates; they need verifiable retrieval, exact paragraph citations, and explicit guardrails that clearly demarcate where automation ends and human judgment begins.",
    evidenceLink: {
      text: "See Aequitas investment research platform",
      href: "/work/aequitas",
    },
  },
  {
    number: "05",
    title: "Stay close after launch",
    quote:
      "The first version creates better questions. I care about what happens when users, operators, and edge cases meet the design.",
    description:
      "Shipping is not the finish line; it is the moment observation truly begins. When we launched Blush Prive at Snabbit, monitoring daily cohort retention and technician dispatch stress revealed immediate opportunities to tune pricing and SKU thresholds. Staying close to daily operations turns early customer friction into sustained product longevity.",
    evidenceLink: {
      text: "See Snabbit scaling & JobHunt Agent",
      href: "/work/snabbit",
    },
  },
];
