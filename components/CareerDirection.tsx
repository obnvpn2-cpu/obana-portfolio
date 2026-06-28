import { MapPinned, MonitorCog } from "lucide-react";
import type { ReactNode } from "react";

const desiredAreas = ["Webフロントエンド / Web実装", "社内SE・社内DX・業務改善", "Webサイト運用改善"];
const workStyles = ["継続的に改善へ関われる環境", "実装と改善の両方に関われる環境"];

export function CareerDirection() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <DirectionBlock icon={<MonitorCog aria-hidden="true" size={22} />} title="希望領域" items={desiredAreas} />
      <DirectionBlock icon={<MapPinned aria-hidden="true" size={22} />} title="働き方" items={workStyles} />
    </div>
  );
}

function DirectionBlock({ icon, title, items }: { icon: ReactNode; title: string; items: string[] }) {
  return (
    <article className="border-2 border-slate-950 bg-white p-5 shadow-[6px_6px_0_#0f766e]">
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center bg-slate-950 text-white">{icon}</span>
        <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="border-l-4 border-amber-400 pl-3 leading-7 text-slate-700">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
