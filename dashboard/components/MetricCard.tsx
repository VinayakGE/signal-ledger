interface Props {
  title: string;
  value: string | number;
  sub?: string;
  accent?: string; // tailwind bg colour class
}

export default function MetricCard({ title, value, sub, accent = "bg-slate-50" }: Props) {
  return (
    <div className={`rounded-xl border border-slate-200 p-4 ${accent} flex flex-col gap-1`}>
      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{title}</p>
      <p className="text-2xl font-bold text-slate-800">{value}</p>
      {sub && <p className="text-xs text-slate-500">{sub}</p>}
    </div>
  );
}
