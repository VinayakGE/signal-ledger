import { notFound } from "next/navigation";
import Link from "next/link";
import { CASES, getCaseById } from "@/data/cases";
import {
  caseAlert,
  caseFragility,
  compositeFragilityScore,
  signalVisibilityAlert,
  responseLagAlert,
  evidenceClassCAlert,
  unresolvedUnknownsAlert,
  TOPOLOGY_LABELS,
  HYPOTHESIS_STATUS_LABELS,
} from "@/lib/metrics";
import AlertBadge from "@/components/AlertBadge";
import MetricCard from "@/components/MetricCard";
import EvidenceTrace from "@/components/EvidenceTrace";
import TrendChart from "@/components/TrendChart";
import FragilityRadar from "@/components/FragilityRadar";

// Generate static params for all cases
export function generateStaticParams() {
  return CASES.map((c) => ({ id: c.id }));
}

interface Props {
  params: Promise<{ id: string }>;
}

const hypothesisStatusColor: Record<string, string> = {
  active: "bg-indigo-100 text-indigo-700 border border-indigo-200",
  weakened: "bg-orange-100 text-orange-700 border border-orange-200",
  eliminated: "bg-slate-100 text-slate-500 border border-slate-200 line-through",
  unresolved: "bg-yellow-100 text-yellow-700 border border-yellow-200",
};

const ppStatusColor: Record<string, string> = {
  none: "text-slate-400",
  emerging: "text-yellow-600",
  active: "text-orange-600 font-semibold",
  resolved: "text-green-600",
};

export default async function CasePage({ params }: Props) {
  const { id } = await params;
  const c = getCaseById(id);
  if (!c) notFound();

  const latest = c.snapshots[c.snapshots.length - 1];
  const fragility = compositeFragilityScore(latest);
  const alert = caseAlert(c);

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="hover:text-indigo-600 transition-colors">Portfolio</Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">{c.name}</span>
      </div>

      {/* Case header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-slate-800">{c.name}</h1>
            <AlertBadge level={alert} />
          </div>
          <p className="text-sm text-slate-500">
            {TOPOLOGY_LABELS[c.topology]} ·{" "}
            <span className="capitalize">{c.status}</span> ·{" "}
            Opened {c.dateOpened}
            {c.dateClosed && ` · Closed ${c.dateClosed}`}
          </p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-slate-800">{fragility}</p>
          <p className="text-xs text-slate-500">Composite Fragility</p>
        </div>
      </div>

      {/* Summary */}
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-700 leading-relaxed">{c.summary}</p>
        {c.keyFinding && (
          <div className="mt-3 rounded-lg bg-indigo-50 border border-indigo-100 p-3">
            <p className="text-xs font-semibold text-indigo-700 mb-1">Key Finding</p>
            <p className="text-sm text-indigo-800">{c.keyFinding}</p>
          </div>
        )}
      </div>

      {/* Metric cards for latest snapshot */}
      <div>
        <h2 className="text-base font-semibold text-slate-700 mb-3">
          Latest Metrics <span className="text-slate-400 font-normal text-sm">({latest.period})</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <MetricCard
            title="Signal Visibility"
            value={latest.signalVisibilityScore}
            sub={`Alert: ${signalVisibilityAlert(latest.signalVisibilityScore)}`}
            accent={
              signalVisibilityAlert(latest.signalVisibilityScore) === "critical" ? "bg-red-50" :
              signalVisibilityAlert(latest.signalVisibilityScore) === "warning" ? "bg-orange-50" : "bg-slate-50"
            }
          />
          <MetricCard
            title="Response Lag"
            value={latest.responseLagScore}
            sub={`Alert: ${responseLagAlert(latest.responseLagScore)}`}
            accent={
              responseLagAlert(latest.responseLagScore) === "critical" ? "bg-red-50" :
              responseLagAlert(latest.responseLagScore) === "warning" ? "bg-orange-50" : "bg-slate-50"
            }
          />
          <MetricCard
            title="Class C Coverage"
            value={`${latest.evidenceClassCoverage.C}%`}
            sub={`Motivation opacity: ${evidenceClassCAlert(latest.evidenceClassCoverage.C)}`}
            accent={
              evidenceClassCAlert(latest.evidenceClassCoverage.C) === "critical" ? "bg-red-50" :
              evidenceClassCAlert(latest.evidenceClassCoverage.C) === "warning" ? "bg-orange-50" : "bg-slate-50"
            }
          />
          <MetricCard
            title="Open Questions"
            value={latest.unresolvedUnknowns}
            sub={`Alert: ${unresolvedUnknownsAlert(latest.unresolvedUnknowns)}`}
            accent={
              unresolvedUnknownsAlert(latest.unresolvedUnknowns) === "critical" ? "bg-red-50" :
              unresolvedUnknownsAlert(latest.unresolvedUnknowns) === "warning" ? "bg-orange-50" : "bg-slate-50"
            }
          />
        </div>
      </div>

      {/* Pressure points + confidence */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Pressure Points</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">PP#001 — Backward Excavation</span>
              <span className={ppStatusColor[latest.pressurePointStatus.pp001]}>
                {latest.pressurePointStatus.pp001}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">PP#002 — Observable / Opaque Motivation</span>
              <span className={ppStatusColor[latest.pressurePointStatus.pp002]}>
                {latest.pressurePointStatus.pp002}
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Evidence Coverage</p>
          <div className="flex items-center gap-3">
            {(["A", "B", "C"] as const).map((cls) => (
              <div key={cls} className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-mono font-semibold text-slate-700">Class {cls}</span>
                  <span className="text-xs text-slate-500">{latest.evidenceClassCoverage[cls]}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full ${cls === "A" ? "bg-blue-500" : cls === "B" ? "bg-purple-500" : "bg-green-500"}`}
                    style={{ width: `${latest.evidenceClassCoverage[cls]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Confidence: <span className="capitalize font-medium text-slate-600">{latest.confidenceLevel}</span>
            {latest.notes && ` · ${latest.notes}`}
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-base font-semibold text-slate-700 mb-4">Metric Trends Over Time</h2>
          <TrendChart snapshots={c.snapshots} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-base font-semibold text-slate-700 mb-2">Fragility Profile</h2>
          <p className="text-xs text-slate-400 mb-3">Latest snapshot · {latest.period}</p>
          <FragilityRadar snapshot={latest} />
        </div>
      </div>

      {/* Hypotheses */}
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-base font-semibold text-slate-700 mb-3">Hypotheses</h2>
        <div className="flex flex-wrap gap-2">
          {c.hypotheses.map((h) => (
            <div key={h.id} className={`rounded-lg px-3 py-2 text-xs ${hypothesisStatusColor[h.status]}`}>
              <span className="font-mono font-bold mr-1.5">{h.id}</span>
              {h.label}
              <span className="ml-2 opacity-70">({HYPOTHESIS_STATUS_LABELS[h.status]} · {h.confidence})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Open questions */}
      {c.openQuestions.length > 0 && (
        <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5">
          <h2 className="text-base font-semibold text-yellow-800 mb-3">
            Open Questions ({c.openQuestions.length})
          </h2>
          <ul className="space-y-2">
            {c.openQuestions.map((q, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-yellow-800">
                <span className="text-yellow-500 mt-0.5 flex-shrink-0">•</span>
                {q}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Evidence audit trace */}
      <div>
        <h2 className="text-base font-semibold text-slate-700 mb-1">Evidence Audit Trail</h2>
        <p className="text-xs text-slate-400 mb-3">
          Every metric is traceable to a classified evidence item. Class A = structural fact, B = retrospective, C = contemporaneous motivation.
        </p>
        <EvidenceTrace evidence={c.evidence} />
      </div>

      {/* Snapshot history */}
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-base font-semibold text-slate-700 mb-3">Snapshot History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs divide-y divide-slate-200">
            <thead>
              <tr className="text-slate-500 uppercase tracking-wide">
                {["Period", "Sig. Visibility", "Response Lag", "Class C %", "Open Q", "Confidence", "Alert"].map(h => (
                  <th key={h} className="py-2 px-3 text-left font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {c.snapshots.map((s, i) => {
                const score = compositeFragilityScore(s);
                const level = score >= 80 ? "critical" : score >= 60 ? "warning" : "watch";
                return (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="py-2 px-3 font-mono font-semibold text-slate-700">{s.period}</td>
                    <td className="py-2 px-3">{s.signalVisibilityScore}</td>
                    <td className="py-2 px-3">{s.responseLagScore}</td>
                    <td className="py-2 px-3">{s.evidenceClassCoverage.C}%</td>
                    <td className="py-2 px-3">{s.unresolvedUnknowns}</td>
                    <td className="py-2 px-3 capitalize">{s.confidenceLevel}</td>
                    <td className="py-2 px-3">
                      <AlertBadge level={level} size="sm" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
