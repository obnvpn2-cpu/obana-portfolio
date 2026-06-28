import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-5 py-8 text-white sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-bold">{profile.name}</p>
        <p className="text-slate-300">Web実装・運用改善・業務自動化のポートフォリオ</p>
      </div>
    </footer>
  );
}
