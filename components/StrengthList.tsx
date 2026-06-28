import { CheckCircle2 } from "lucide-react";
import { strengths } from "@/data/strengths";

export function StrengthList() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {strengths.map((strength) => (
        <article key={strength.title} className="border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-950">{strength.title}</h3>
          <p className="mt-3 leading-7 text-slate-700">{strength.description}</p>
          <ul className="mt-5 space-y-2">
            {strength.points.map((point) => (
              <li key={point} className="flex gap-2 text-sm leading-6 text-slate-700">
                <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-teal-700" size={16} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
