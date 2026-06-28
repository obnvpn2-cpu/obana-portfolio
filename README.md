# web-ops-portfolio

Web実装・運用改善のポートフォリオです。Web実装、Webサイト運用改善、業務自動化を通じて、現場課題を使いやすい形に落とし込む経験を整理して見せるための静的サイトです。

## 目的

閲覧者が短時間で以下を確認できる構成にしています。

- Web制作・改修・運用改善の経験
- LP / ECサイト制作・改修の関わり方
- Excel VBA / Power Automate による業務改善
- React / TypeScript を使った小さなデモ実装
- 公開できる実績と技術領域

## 使用技術

- Next.js
- React
- TypeScript
- Tailwind CSS
- lucide-react

## 実装ポイント

- App Router のトップページ + 実績詳細ページ構成
- 外部API、DB、認証、CMSは未使用
- コンテンツを `data/` 配下の型付きデータに分離
- 実績は6件。公開案件2件、公開制作実績2件、守秘義務に配慮した抽象ケース2件を掲載
- 表示コンポーネントを `components/` 配下に分離
- `JobTrackerDemo` のみクライアントコンポーネント
- title、description、Open Graph / Twitter Card を設定
- キーボード操作とフォーカス表示を考慮
- 読みやすさを優先し、控えめなCSSアニメーションと `prefers-reduced-motion` 対応を追加
- 375px / 768px / 1440px の確認を前提にしたレスポンシブ構成

## デモ機能

`選考ステータス管理デモ` は、ポートフォリオ用サンプルデータだけを使った操作デモです。

- ステータスフィルタ
- リモート条件フィルタ
- 年収レンジフィルタ
- 技術タグフィルタ
- 件数表示
- 判定理由表示
- 空状態表示

実在の企業名、転職活動データ、個人の応募状況は含みません。

## React / TypeScript の扱い

React / TypeScript は実務経験として誇張せず、「このサイトで使用」「学習・強化中」の技術として掲載しています。実務経験ありの技術とはセクションを分けています。

## 起動方法

```bash
npm install
npm run dev
```

ローカル確認:

```bash
npm run typecheck
npm run lint
npm run build
```

## 公開範囲

個人名、職務経歴書、連絡先、居住情報など、個人情報になり得る情報は掲載していません。

## 公開制作実績

- 豆乳キャンペーン特設サイト: `https://www.k-tounyu.jp/cp/soylatte/`

- POLA 顔エステ アンケート風LP: `https://www.pola.co.jp/esthe/special/questionnaire/`


## 追加したスキル

`mattpocock/skills` から主要スキルを追加しました。Codexを再起動すると、次回以降の会話で認識されます。

- 確認: `npx skills@latest list -g`
- 使い方: `tdd`、`review`、`diagnosing-bugs` など、使いたいスキル名や用途を会話で指定します。
- 迷う場合: `ask-matt` を指定すると、状況に合うスキルを選ぶための案内として使えます。

