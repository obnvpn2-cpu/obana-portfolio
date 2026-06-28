"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Filter, SearchX } from "lucide-react";
import { applications, type ApplicationStatus } from "@/data/projects";

const statuses: Array<ApplicationStatus | "すべて"> = ["すべて", "検討中", "応募準備", "選考中", "保留"];
const remoteOptions = ["すべて", "リモート可", "一部リモート", "出社中心"] as const;
const salaryOptions = [
  { label: "すべて", min: 0 },
  { label: "400万円以上", min: 400 },
  { label: "500万円以上", min: 500 },
] as const;
const allTags = Array.from(new Set(applications.flatMap((application) => application.tags)));

export function JobTrackerDemo() {
  const [status, setStatus] = useState<(typeof statuses)[number]>("すべて");
  const [remote, setRemote] = useState<(typeof remoteOptions)[number]>("すべて");
  const [salary, setSalary] = useState<(typeof salaryOptions)[number]>(salaryOptions[0]);
  const [tag, setTag] = useState("すべて");

  const filteredApplications = useMemo(
    () =>
      applications.filter((application) => {
        const statusMatch = status === "すべて" || application.status === status;
        const remoteMatch = remote === "すべて" || application.remote === remote;
        const salaryMatch = application.salaryMax >= salary.min;
        const tagMatch = tag === "すべて" || application.tags.includes(tag);
        return statusMatch && remoteMatch && salaryMatch && tagMatch;
      }),
    [remote, salary, status, tag],
  );

  return (
    <div className="border-2 border-slate-950 bg-white shadow-[8px_8px_0_#f2b705]">
      <div className="flex flex-col gap-3 border-b-2 border-slate-950 bg-slate-950 px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-bold">選考ステータス管理デモ</h3>
          <p className="mt-1 text-sm leading-6 text-slate-300">ポートフォリオ用サンプルデータです。実在の企業・転職活動データは含みません。</p>
        </div>
        <p className="inline-flex min-h-10 items-center gap-2 border border-white/30 px-3 py-2 font-mono text-sm">
          <Filter aria-hidden="true" size={16} />
          {filteredApplications.length}件
        </p>
      </div>

      <div className="grid gap-4 border-b border-slate-200 p-5 lg:grid-cols-4">
        <FilterGroup label="ステータス">
          {statuses.map((item) => (
            <FilterButton key={item} selected={status === item} onClick={() => setStatus(item)}>
              {item}
            </FilterButton>
          ))}
        </FilterGroup>
        <FilterGroup label="リモート条件">
          {remoteOptions.map((item) => (
            <FilterButton key={item} selected={remote === item} onClick={() => setRemote(item)}>
              {item}
            </FilterButton>
          ))}
        </FilterGroup>
        <FilterGroup label="年収レンジ">
          {salaryOptions.map((item) => (
            <FilterButton key={item.label} selected={salary.label === item.label} onClick={() => setSalary(item)}>
              {item.label}
            </FilterButton>
          ))}
        </FilterGroup>
        <FilterGroup label="技術タグ">
          {["すべて", ...allTags].map((item) => (
            <FilterButton key={item} selected={tag === item} onClick={() => setTag(item)}>
              {item}
            </FilterButton>
          ))}
        </FilterGroup>
      </div>

      <div className="p-5">
        {filteredApplications.length > 0 ? (
          <div className="grid gap-4 lg:grid-cols-2">
            {filteredApplications.map((application) => (
              <article key={application.id} className="motion-result border border-slate-200 bg-slate-50 p-4 transition duration-200 hover:-translate-y-0.5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="font-bold text-slate-950">{application.company}</h4>
                    <p className="mt-1 text-sm text-slate-700">{application.role}</p>
                  </div>
                  <span className="w-fit border border-teal-700 bg-white px-2 py-1 text-xs font-bold text-teal-800">
                    {application.status}
                  </span>
                </div>
                <dl className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-xs font-semibold text-slate-500">リモート条件</dt>
                    <dd className="mt-1">{application.remote}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs font-semibold text-slate-500">年収目安</dt>
                    <dd className="mt-1">{application.salaryMin}万 - {application.salaryMax}万円</dd>
                  </div>
                </dl>
                <div className="mt-4 flex flex-wrap gap-2">
                  {application.tags.map((item) => (
                    <span key={item} className="border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-4 border-l-4 border-amber-400 pl-3 text-sm leading-7 text-slate-700">
                  判定理由：{application.reason}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center border border-dashed border-slate-300 bg-slate-50 px-5 py-12 text-center">
            <SearchX aria-hidden="true" className="text-slate-500" size={36} />
            <p className="mt-4 font-bold text-slate-950">条件に合うサンプルがありません</p>
            <p className="mt-2 max-w-md text-sm leading-7 text-slate-600">
              フィルタ条件を緩めると、表示対象のサンプルデータを確認できます。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-2 font-mono text-xs font-semibold tracking-[0.12em] text-slate-500">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function FilterButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={
        selected
          ? "min-h-11 border-2 border-slate-950 bg-teal-700 px-3 py-2 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          : "min-h-11 border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-slate-950 hover:bg-teal-50 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
      }
    >
      {children}
    </button>
  );
}
