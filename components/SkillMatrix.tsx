import { skillGroups } from "@/data/skills";

export function SkillMatrix() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skillGroups.map((group) => (
        <article key={group.label} className="border border-slate-200 bg-white p-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
            {group.description}
          </p>
          <h3 className="mt-2 text-lg font-bold text-slate-950">{group.label}</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="border border-slate-300 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
