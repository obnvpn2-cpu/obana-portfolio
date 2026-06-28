import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="motion-section scroll-mt-24 py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-8 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-8 text-slate-700">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
