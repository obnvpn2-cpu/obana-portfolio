import { caseStudies } from "@/data/caseStudies";
import { CaseStudyCard } from "@/components/CaseStudyCard";

export function CaseStudyList() {
  return (
    <div className="space-y-5">
      {caseStudies.map((study) => (
        <CaseStudyCard key={study.title} study={study} />
      ))}
    </div>
  );
}
