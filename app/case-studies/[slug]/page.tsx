import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { Footer } from "@/components/Footer";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: "実績詳細",
    };
  }

  return {
    title: `${study.title} | 実績詳細`,
    description: study.summary,
    openGraph: {
      title: `${study.title} | 実績詳細`,
      description: study.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-full bg-slate-50 text-slate-950">
      <main>
        <section className="border-b border-slate-200 bg-[linear-gradient(90deg,#f8fafc_0,#f8fafc_29px,#e2e8f0_30px),linear-gradient(0deg,#f8fafc_0,#f8fafc_29px,#e2e8f0_30px)] bg-[size:30px_30px]">
          <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
            <Link
              href="/#case-studies"
              className="inline-flex min-h-11 items-center gap-2 border-2 border-slate-950 bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-50 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700"
            >
              <ArrowLeft aria-hidden="true" size={16} />
              一覧へ戻る
            </Link>
            <div className="mt-10 max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
                {study.label} / {study.period}
              </p>
              <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">
                {study.title}
              </h1>
              <p className="mt-6 text-lg leading-9 text-slate-800">{study.summary}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {study.sourceUrl ? (
                  <a
                    href={study.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-slate-950 bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-[5px_5px_0_#f2b705] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700"
                  >
                    公開ページを見る
                    <ExternalLink aria-hidden="true" size={16} />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <aside className="space-y-4">
              <InfoCard title="担当範囲">
                <ul className="flex flex-wrap gap-2">
                  {study.responsibilities.map((item) => (
                    <li key={item} className="border border-slate-300 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </InfoCard>
              <InfoCard title="使用技術">
                <ul className="flex flex-wrap gap-2">
                  {study.technologies.map((item) => (
                    <li key={item} className="bg-slate-950 px-3 py-2 font-mono text-xs font-semibold text-white">
                      {item}
                    </li>
                  ))}
                </ul>
              </InfoCard>
              <InfoCard title="公開範囲">
                <p className="text-sm leading-7 text-slate-700">{study.confidentiality}</p>
              </InfoCard>
            </aside>

            <div className="space-y-6">
              <DetailBlock title="背景と課題">
                <p>{study.problem}</p>
              </DetailBlock>
              <DetailBlock title="役割と体制">
                <p>{study.role}</p>
                <p className="mt-4">{study.team}</p>
              </DetailBlock>
              <DetailBlock title="制約">
                <ul className="space-y-2">
                  {study.constraints.map((item) => (
                    <li key={item} className="border-l-4 border-amber-400 pl-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </DetailBlock>
              <DetailBlock title="進め方">
                <div className="space-y-4">
                  {study.process.map((step, index) => (
                    <article key={step.title} className="grid gap-3 border border-slate-200 bg-slate-50 p-4 sm:grid-cols-[72px_1fr]">
                      <p className="font-mono text-sm font-bold text-teal-700">手順{index + 1}</p>
                      <div>
                        <h3 className="font-bold text-slate-950">{step.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-700">{step.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </DetailBlock>
              <DetailBlock title="工夫したこと">
                <p>{study.approach}</p>
              </DetailBlock>
              <DetailBlock title="結果">
                <p>{study.result}</p>
                <ul className="mt-4 space-y-2">
                  {study.outcomes.map((item) => (
                    <li key={item} className="border-l-4 border-teal-700 pl-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </DetailBlock>
              <DetailBlock title="学び">
                <p>{study.learned}</p>
              </DetailBlock>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-2 border-slate-950 bg-white p-5 shadow-[5px_5px_0_#0f766e]">
      <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border border-slate-200 bg-white p-5 sm:p-6">
      <h2 className="text-2xl font-bold text-slate-950">{title}</h2>
      <div className="mt-4 leading-8 text-slate-700">{children}</div>
    </section>
  );
}
