import { NextRequest, NextResponse } from "next/server";
import { CASES, getCaseById } from "@/data/cases";
import { caseAlert, caseFragility, compositeFragilityScore, latestSnapshot, portfolioStats } from "@/lib/metrics";

/**
 * GET /api/report?case=<id>   — single case JSON report
 * GET /api/report             — full portfolio JSON report
 */
export async function GET(req: NextRequest) {
  const caseId = req.nextUrl.searchParams.get("case");

  if (caseId) {
    const c = getCaseById(caseId);
    if (!c) return NextResponse.json({ error: "Case not found" }, { status: 404 });

    const snap = latestSnapshot(c);
    return NextResponse.json({
      reportType: "case",
      generatedAt: new Date().toISOString(),
      case: {
        id: c.id,
        name: c.name,
        status: c.status,
        topology: c.topology,
        primaryHypothesis: c.primaryHypothesis,
        latestPeriod: snap.period,
        metrics: {
          signalVisibilityScore: snap.signalVisibilityScore,
          responseLagScore: snap.responseLagScore,
          evidenceClassCoverage: snap.evidenceClassCoverage,
          unresolvedUnknowns: snap.unresolvedUnknowns,
          pressurePointStatus: snap.pressurePointStatus,
          confidenceLevel: snap.confidenceLevel,
          compositeFragilityScore: compositeFragilityScore(snap),
        },
        alertLevel: caseAlert(c),
        keyFinding: c.keyFinding,
        openQuestions: c.openQuestions,
        hypotheses: c.hypotheses,
        evidenceItems: c.evidence.map((e) => ({
          id: e.id,
          date: e.date,
          description: e.description,
          evidenceClass: e.evidenceClass,
          source: e.source,
        })),
        snapshotHistory: c.snapshots,
      },
    });
  }

  // Portfolio report
  const stats = portfolioStats(CASES);
  return NextResponse.json({
    reportType: "portfolio",
    generatedAt: new Date().toISOString(),
    summary: stats,
    cases: CASES.map((c) => {
      const snap = latestSnapshot(c);
      return {
        id: c.id,
        name: c.name,
        status: c.status,
        topology: c.topology,
        alertLevel: caseAlert(c),
        compositeFragilityScore: caseFragility(c),
        latestPeriod: snap.period,
        confidenceLevel: snap.confidenceLevel,
        openQuestions: c.openQuestions.length,
        keyFinding: c.keyFinding,
      };
    }),
  });
}
