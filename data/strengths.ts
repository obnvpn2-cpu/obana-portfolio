export type Strength = {
  title: string;
  description: string;
  points: string[];
};

export const strengths: Strength[] = [
  {
    title: "Web実装",
    description:
      "HTML / CSS / JavaScript / jQuery を中心に、LPやECサイトの制作・修正・レスポンシブ対応を行います。",
    points: ["既存サイトの構造把握", "表示崩れや導線の修正", "運用を前提にしたマークアップ"],
  },
  {
    title: "運用改善",
    description:
      "更新しやすい構成、確認漏れ防止、属人化しやすい作業の整理を通じて、継続運用しやすい状態を作ります。",
    points: ["更新手順の整理", "確認観点の明文化", "修正依頼の分解と優先度付け"],
  },
  {
    title: "業務自動化",
    description:
      "Excel VBAやPower Automateを使い、繰り返し作業や転記作業を減らす改善を行います。",
    points: ["定型処理の自動化", "入力・集計の省力化", "現場で使える小さな仕組み化"],
  },
  {
    title: "現場課題の整理",
    description:
      "ヒアリングした内容を課題単位に分け、実装・改善へ落とし込みます。",
    points: ["要望と課題の切り分け", "実装範囲の整理", "利用者目線での確認"],
  },
];
