export type TemplateSpec = {
  id: string;
  title: string;
  path: string;
  purpose: string;
  outputs: string[];
};

export const catalog: TemplateSpec[] = [
  {
    id: "content-ops",
    title: "Content Ops Department",
    path: "templates/content-ops",
    purpose: "Coordinate editorial research, drafting, and QA.",
    outputs: ["Content brief", "Editorial checklist", "Publish-ready markdown"]
  },
  {
    id: "research",
    title: "Research Department",
    path: "templates/research",
    purpose: "Produce technical research briefs and recommendation memos.",
    outputs: ["Research memo", "Risk table", "Decision summary"]
  },
  {
    id: "customer-support-triage",
    title: "Customer Support Triage",
    path: "templates/customer-support-triage",
    purpose: "Classify tickets, escalate urgent cases, and generate handoff notes.",
    outputs: ["Triage report", "Escalation queue", "Response draft"]
  },
  {
    id: "marketing-workflow",
    title: "Marketing Workflow",
    path: "templates/marketing-workflow",
    purpose: "Coordinate campaign planning and delivery packaging.",
    outputs: ["Campaign brief", "Asset checklist", "Launch summary"]
  },
  {
    id: "internal-operations-assistant",
    title: "Internal Operations Assistant",
    path: "templates/internal-operations-assistant",
    purpose: "Handle recurring internal workflows and action tracking.",
    outputs: ["Ops digest", "Action register", "Weekly summary"]
  }
];

export function listTemplateIds(): string[] {
  return catalog.map((template) => template.id);
}

