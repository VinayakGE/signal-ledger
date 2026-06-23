import type { EvidenceItem } from "@/data/cases";

const classBadge: Record<string, string> = {
  A: "bg-blue-100 text-blue-800 border border-blue-200",
  B: "bg-purple-100 text-purple-800 border border-purple-200",
  C: "bg-green-100 text-green-800 border border-green-200",
};

const classLabel: Record<string, string> = {
  A: "Class A — Structural",
  B: "Class B — Retrospective",
  C: "Class C — Contemporaneous",
};

interface Props {
  evidence: EvidenceItem[];
}

export default function EvidenceTrace({ evidence }: Props) {
  const sorted = [...evidence].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="space-y-3">
      {sorted.map((item) => (
        <div key={item.id} className="rounded-lg border border-slate-200 bg-white p-4">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${classBadge[item.evidenceClass]}`}>
              {classLabel[item.evidenceClass]}
            </span>
            <span className="text-xs text-slate-400 font-mono">{item.date}</span>
          </div>
          <p className="text-sm text-slate-700 mb-1">{item.description}</p>
          <p className="text-xs text-slate-400">
            <span className="font-medium text-slate-500">Source:</span> {item.source}
          </p>
          {item.metricIds.length > 0 && (
            <p className="text-xs text-slate-400 mt-0.5">
              <span className="font-medium text-slate-500">Supports:</span>{" "}
              {item.metricIds.map((m) => (
                <span key={m} className="inline-block rounded bg-slate-100 px-1.5 py-0.5 mr-1 font-mono text-xs text-slate-600">
                  {m}
                </span>
              ))}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
