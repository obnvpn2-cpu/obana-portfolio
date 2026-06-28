import { ArrowDown, BriefcaseBusiness } from "lucide-react";
import { profile } from "@/data/profile";

const ctas = [
  { label: "実績を見る", href: "#case-studies", icon: ArrowDown },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(90deg,#f8fafc_0,#f8fafc_29px,#e2e8f0_30px),linear-gradient(0deg,#f8fafc_0,#f8fafc_29px,#e2e8f0_30px)] bg-[size:30px_30px]">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0f766e,#f2b705,#1d4ed8)]" />
      <div className="mx-auto grid min-h-dvh max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:py-24">
        <div className="motion-fade-up">
          <p className="mb-5 inline-flex items-center gap-2 border border-teal-700 bg-white px-3 py-2 font-mono text-xs font-semibold text-teal-800 shadow-[4px_4px_0_#0f172a]">
            <BriefcaseBusiness aria-hidden="true" size={16} />
            {profile.role}
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] text-slate-950 sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-800 sm:text-xl">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {ctas.map((cta, index) => {
              const Icon = cta.icon;
              return (
                <a
                  key={cta.label}
                  href={cta.href}
                  
                  className={
                    index === 0
                      ? "inline-flex min-h-12 items-center justify-center gap-2 border-2 border-slate-950 bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-[5px_5px_0_#f2b705] transition hover:-translate-y-0.5 hover:shadow-[7px_7px_0_#f2b705] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700"
                      : "inline-flex min-h-12 items-center justify-center gap-2 border-2 border-slate-950 bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-50 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700"
                  }
                >
                  <Icon aria-hidden="true" size={18} />
                  {cta.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="motion-fade-up motion-delay-1 border-2 border-slate-950 bg-white p-4 shadow-[10px_10px_0_#0f766e] transition-transform duration-300 hover:-translate-y-1 sm:p-6">
          <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              仕事の進め方
            </p>
            <p className="border border-slate-300 px-2 py-1 font-mono text-xs text-slate-600">
              要約
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["課題", "更新依頼と確認観点が散らばる"],
              ["整理", "目的・変更箇所・確認項目に分解"],
              ["実装", "壊れにくい構造と運用しやすい単位へ"],
              ["改善", "手戻りと繰り返し作業を減らす"],
            ].map(([label, text]) => (
              <div key={label} className="grid grid-cols-[72px_1fr] gap-3 border-b border-dashed border-slate-200 pb-4 last:border-b-0">
                <span className="font-mono text-xs font-bold text-teal-700">{label}</span>
                <span className="text-sm leading-7 text-slate-800">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



