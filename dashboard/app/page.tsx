import { CASES } from "@/data/cases";
import { portfolioStats, caseAlert, caseFragility, TOPOLOGY_LABELS } from "@/lib/metrics";
import MetricCard from "@/components/MetricCard";
import CaseTable from "@/components/CaseTable";
import AlertBadge from "@/components/AlertBadge";

export default function PortfolioPage() {
  const stats = portfolioStats(CASES);

  const criticalCases = CASES.filter((c) => caseAlert(c) === "critical");
  const warningCases = CASES.filter((c) => caseAlert(c) === "warning");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Portfolio Overview</h1>
        <p className="text-sm text-slate-500 mt-1">
          Early failure-signal tracking across {stats.total} organizational cases · Evidence-class auditable
        </p>
      </div>

      {/* Alert banner */}
      {criticalCases.length > 0 && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 flex items-start gap-3">
          <span className="text-red-600 text-lg mt-0.5">⚠️</span>
          <div>
            <p className="font-semibold text-red-700 text-sm">
              {criticalCases.length} case{criticalCases.length > 1 ? "s" : ""} at CRITICAL fragility
            </p>
            <p className="text-xs text-red-600 mt-0.5">
              {criticalCases.map((c) => c.name).join(", ")} — high signal visibility + high response lag detected.
            </p>
          </div>
        </div>
      )}

      {/* KPI row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          title="Total Cases"
          value={stats.total}
          sub={`${stats.active} active · ${stats.closed} closed · ${stats.paused} paused`}
        />
        <MetricCard
          title="Avg Fragility Score"
          value={`${stats.avgFragility}/100`}
          sub="Composite (visibility + lag + opacity + unknowns)"
          accent={stats.avgFragility >= 80 ? "bg-red-50" : stats.avgFragility >= 60 ? "bg-orange-50" : "bg-slate-50"}
        />
        <MetricCard
          title="Open Questions"
          value={stats.totalOpenQuestions}
          sub="Unresolved unknowns across portfolio"
        />
        <MetricCard
          title="Evidence Items"
          value={stats.totalEvidence}
          sub="Classified A / B / C artifacts"
        />
      </div>

      {/* Alert distribution */}
      <div>
        <h2 className="text-base font-semibold text-slate-700 mb-3">Alert Distribution</h2>
        <div className="flex flex-wrap gap-3">
          <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-3 text-center min-w-24">
            <p className="text-2xl font-bold text-red-700">{stats.alertCounts.critical}</p>
            <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mt-0.5">Critical</p>
          </div>
          <div className="rounded-xl border border-orange-200 bg-orange-50 px-5 py-3 text-center min-w-24">
            <p className="text-2xl font-bold text-orange-700">{stats.alertCounts.warning}</p>
            <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mt-0.5">Warning</p>
          </div>
          <div className="rounded-xl border border-yellow-200 bg-yellow-50 px-5 py-3 text-center min-w-24">
            <p className="text-2xl font-bold text-yellow-700">{stats.alertCounts.watch}</p>
            <p className="text-xs font-semibold text-yellow-500 uppercase tracking-wide mt-0.5">Watch</p>
          </div>
        </div>
      </div>

      {/* Topology map */}
      <div>
        <h2 className="text-base font-semibold text-slate-700 mb-3">Topology Map</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CASES.map((c) => (
            <div key={c.id} className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <p className="font-semibold text-slate-800">{c.name}</p>
                <AlertBadge level={caseAlert(c)} size="sm" />
              </div>
              <p className="text-xs text-slate-500">{TOPOLOGY_LABELS[c.topology]}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 bg-slate-200 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full ${
                      caseFragility(c) >= 80 ? "bg-red-500" : caseFragility(c) >= 60 ? "bg-orange-400" : "bg-yellow-400"
                    }`}
                    style={{ width: `${caseFragility(c)}%` }}
                  />
                </div>
                <span className="text-xs font-mono text-slate-500">{caseFragility(c)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case table */}
      <div>
        <h2 className="text-base font-semibold text-slate-700 mb-3">All Cases</h2>
        <CaseTable cases={CASES} />
      </div>

      {/* Pressure point legend */}
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-slate-700 mb-3">Pressure Points & Metric Definitions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
          <div>
            <p className="font-semibold text-slate-700 mb-1">Signal Visibility Score (0–100)</p>
            <p>Was the threat signal observable before outcome? 100 = fully visible in real time.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700 mb-1">Response Lag Score (0–100)</p>
            <p>How slow was leadership response relative to signal visibility? 100 = no adaptive response.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700 mb-1">Evidence Class Coverage (A / B / C)</p>
            <p>% of evidence that is Class A (structural), B (retrospective), or C (contemporaneous motivation). Low Class C = motivation opacity.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700 mb-1">PP#001 — Backward Excavation</p>
            <p>Can fragility signals be recovered from the public record before outcomes became obvious?</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700 mb-1">PP#002 — Observable Selection / Opaque Motivation</p>
            <p>Strategic choices are observable but underlying motivations remain opaque without Class C evidence.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700 mb-1">Composite Fragility Score</p>
            <p>Weighted: Signal Visibility (30%) + Response Lag (35%) + Motivation Opacity (20%) + Open Questions (15%).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
