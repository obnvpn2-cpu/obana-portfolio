import { CaseStudyList } from "@/components/CaseStudyList";
import { CareerDirection } from "@/components/CareerDirection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { JobTrackerDemo } from "@/components/JobTrackerDemo";
import { Section } from "@/components/Section";
import { SkillMatrix } from "@/components/SkillMatrix";
import { StrengthList } from "@/components/StrengthList";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="min-h-full bg-slate-50 text-slate-950">
      <Hero />
      <main>
        <Section
          id="about"
          eyebrow="自己紹介"
          title="制作と運用の間にある課題を、使える形へ整理する"
          description={profile.about}
        >
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-bold text-slate-950">これまでの経験</h3>
              <p className="mt-3 leading-8 text-slate-700">
                LP / ECサイト制作・改修、自社Webサイト運用、Excel VBA / Power Automateによる業務改善を経験。目的と制約を確認し、現場で継続して扱える実装・手順・確認観点に整えることを重視しています。
              </p>
            </div>
            <div className="border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-bold text-slate-950">大切にしていること</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="border border-slate-300 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-4 border-l-4 border-teal-700 pl-3 text-sm leading-7 text-slate-700">
                {profile.location}
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="strengths"
          eyebrow="強み"
          title="強み"
          description="制作・運用・改善を分断せず、現場で使われ続ける状態まで考えます。"
        >
          <StrengthList />
        </Section>

        <Section
          id="case-studies"
          eyebrow="実績"
          title="課題解決ストーリー"
          description="公開情報として安全に抽象化した実績です。詳細な社名・数値は掲載していません。"
        >
          <CaseStudyList />
        </Section>

        <Section
          id="react-lab"
          eyebrow="操作デモ"
          title="選考ステータス管理デモ"
          description="React / TypeScript を使った小さな操作デモです。フィルタ、件数表示、空状態、判定理由の表示を確認できます。"
        >
          <JobTrackerDemo />
        </Section>

        <Section
          id="tech-stack"
          eyebrow="使用技術"
          title="経験技術"
          description="React / TypeScriptは実務経験として誇張せず、このサイトで使用している技術と学習・強化中の領域として分けています。"
        >
          <SkillMatrix />
        </Section>

        <Section
          id="career-direction"
          eyebrow="希望領域"
          title="今後関わりたい領域"
          description="Web実装と業務改善の両方に関わり、使う人が運用しやすい状態を作る仕事を希望しています。"
        >
          <CareerDirection />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
