import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="case-card border-2 border-slate-950 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[7px_7px_0_#0f766e]">
      <div className="border-b-2 border-slate-950 bg-amber-100 px-5 py-4">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-teal-800">
          {study.label} / {study.type}
        </p>
        <h3 className="mt-2 text-xl font-bold text-slate-950">{study.title}</h3>
      </div>
      <div className="grid gap-0 lg:grid-cols-[1fr_1.2fr]">
        <div className="border-b-2 border-slate-950 p-5 lg:border-b-0 lg:border-r-2">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
            課題
          </p>
          <p className="mt-3 leading-8 text-slate-800">{study.problem}</p>
          <p className="mt-4 text-sm leading-7 text-slate-600">{study.confidentiality}</p>
        </div>
        <div className="space-y-5 p-5">
          <p className="leading-8 text-slate-800">{study.summary}</p>
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
              担当したこと
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {study.responsibilities.map((item) => (
                <li key={item} className="border border-slate-300 bg-slate-50 px-3 py-1 text-sm text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
              結果
            </p>
            <p className="mt-2 leading-8 text-slate-800">{study.result}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((technology) => (
              <span key={technology} className="bg-slate-950 px-3 py-1 font-mono text-xs font-semibold text-white">
                {technology}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={`/case-studies/${study.slug}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 border-2 border-slate-950 bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700"
            >
              詳細を見る
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
            {study.sourceUrl ? (
              <a
                href={study.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 border-2 border-slate-950 bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-50 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700"
              >
                公開ページ
                <ExternalLink aria-hidden="true" size={16} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
