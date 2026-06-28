export type ApplicationStatus = "検討中" | "応募準備" | "選考中" | "保留";

export type JobApplication = {
  id: number;
  company: string;
  role: string;
  status: ApplicationStatus;
  remote: "リモート可" | "一部リモート" | "出社中心";
  salaryMin: number;
  salaryMax: number;
  tags: string[];
  reason: string;
};

export const applications: JobApplication[] = [
  {
    id: 1,
    company: "サンプルWeb制作会社",
    role: "Web実装 / 運用改善",
    status: "選考中",
    remote: "リモート可",
    salaryMin: 420,
    salaryMax: 560,
    tags: ["HTML", "CSS", "JavaScript", "WordPress"],
    reason: "既存サイト改善と運用整理の経験を活かしやすい",
  },
  {
    id: 2,
    company: "サンプルDX支援企業",
    role: "社内DX / 業務改善",
    status: "応募準備",
    remote: "一部リモート",
    salaryMin: 380,
    salaryMax: 520,
    tags: ["VBA", "Power Automate", "業務整理"],
    reason: "現場業務の分解から小さく自動化する流れに合う",
  },
  {
    id: 3,
    company: "サンプルEC運営会社",
    role: "ECサイト運用担当",
    status: "検討中",
    remote: "リモート可",
    salaryMin: 360,
    salaryMax: 480,
    tags: ["EC", "LP", "Photoshop", "改善"],
    reason: "制作後の更新・差し替え・改善まで関われる",
  },
  {
    id: 4,
    company: "サンプルSaaS企業",
    role: "フロントエンド補助",
    status: "保留",
    remote: "出社中心",
    salaryMin: 450,
    salaryMax: 650,
    tags: ["React", "TypeScript", "アクセシビリティ"],
    reason: "技術領域は魅力的だが、勤務条件の優先度が合いにくい",
  },
];
