export type SkillGroup = {
  label: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "実務経験あり",
    description: "Web制作・改修・運用で使用",
    items: ["HTML", "CSS", "JavaScript", "jQuery", "PHPテンプレート", "WordPress", "Git", "Photoshop", "Illustrator"],
  },
  {
    label: "業務改善",
    description: "現場作業の整理と自動化で使用",
    items: ["Excel VBA", "Power Automate", "業務フロー整理"],
  },
  {
    label: "このサイトで使用",
    description: "ポートフォリオ本体とデモ機能で使用",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "学習・強化中",
    description: "今後の実務領域として継続強化",
    items: ["React設計", "TypeScript", "コンポーネント設計", "アクセシビリティ"],
  },
];
