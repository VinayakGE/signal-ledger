// Seed data derived from Signal Ledger investigation files.
// Each metric snapshot represents a period in the case lifecycle.

export type EvidenceClass = "A" | "B" | "C";
export type AlertLevel = "watch" | "warning" | "critical";
export type CaseStatus = "closed" | "active" | "paused";
export type TopologyCandidate = "T1" | "T2" | "T3" | "T4" | "T5" | "unclassified";

export interface EvidenceItem {
  id: string;
  date: string;           // ISO date string (or approximate year)
  description: string;
  evidenceClass: EvidenceClass;
  source: string;
  metricIds: string[];    // which metrics this evidence supports
}

export interface MetricSnapshot {
  period: string;         // e.g. "2007", "2009-Q3"
  signalVisibilityScore: number;   // 0–100: how visible was the threat signal?
  responseLagScore: number;        // 0–100: 100 = maximum lag / no response
  evidenceClassCoverage: {
    A: number;   // % of evidence that is Class A
    B: number;
    C: number;
  };
  unresolvedUnknowns: number;      // count of open, unresolved research questions
  pressurePointStatus: {
    pp001: "none" | "emerging" | "active" | "resolved";  // Backward Excavation
    pp002: "none" | "emerging" | "active" | "resolved";  // Observable Selection / Opaque Motivation
  };
  confidenceLevel: "low" | "medium" | "high";
  notes?: string;
}

export interface Case {
  id: string;
  name: string;
  status: CaseStatus;
  outcomeKnown: boolean;
  topology: TopologyCandidate;
  dateOpened: string;
  dateClosed?: string;
  primaryHypothesis: string;
  summary: string;
  snapshots: MetricSnapshot[];
  evidence: EvidenceItem[];
  hypotheses: {
    id: string;
    label: string;
    status: "active" | "weakened" | "eliminated" | "unresolved";
    confidence: "low" | "medium" | "high";
  }[];
  openQuestions: string[];
  keyFinding: string;
}

// ─────────────────────────────────────────────
// CASE 001 – KODAK
// ─────────────────────────────────────────────
const kodak: Case = {
  id: "kodak",
  name: "Kodak",
  status: "closed",
  outcomeKnown: true,
  topology: "T1",
  dateOpened: "2026-06-20",
  dateClosed: "2026-06-22",
  primaryHypothesis: "Signal Visible, Response Lagged",
  summary:
    "Kodak recognized the digital threat early, invested heavily in R&D, but failed to reallocate its cost structure fast enough as film revenue collapsed.",
  snapshots: [
    {
      period: "1993",
      signalVisibilityScore: 55,
      responseLagScore: 30,
      evidenceClassCoverage: { A: 70, B: 25, C: 5 },
      unresolvedUnknowns: 3,
      pressurePointStatus: { pp001: "none", pp002: "emerging" },
      confidenceLevel: "medium",
      notes: "CEO Fisher commits $2B+ to digital R&D. Signal visible but response proportional at this stage.",
    },
    {
      period: "2001",
      signalVisibilityScore: 85,
      responseLagScore: 65,
      evidenceClassCoverage: { A: 65, B: 30, C: 5 },
      unresolvedUnknowns: 2,
      pressurePointStatus: { pp001: "emerging", pp002: "active" },
      confidenceLevel: "high",
      notes: "Film demand clearly declining. Digital market share slipping (27% → 15%). Response lagging signal.",
    },
    {
      period: "2005",
      signalVisibilityScore: 95,
      responseLagScore: 80,
      evidenceClassCoverage: { A: 60, B: 35, C: 5 },
      unresolvedUnknowns: 1,
      pressurePointStatus: { pp001: "active", pp002: "active" },
      confidenceLevel: "high",
      notes: "Strategy shift announced ('Digital revenue to exceed traditional') but margins already below 10%.",
    },
    {
      period: "2008",
      signalVisibilityScore: 98,
      responseLagScore: 95,
      evidenceClassCoverage: { A: 65, B: 30, C: 5 },
      unresolvedUnknowns: 0,
      pressurePointStatus: { pp001: "active", pp002: "active" },
      confidenceLevel: "high",
      notes: "Margins <5%. Despite ~$3B R&D in digital, digital imaging revenue <10% of total. Last profitable year 2007.",
    },
  ],
  evidence: [
    {
      id: "k-01",
      date: "1975",
      description: "Kodak engineers invented the digital camera internally.",
      evidenceClass: "A",
      source: "Corporate history, patent records",
      metricIds: ["signalVisibilityScore"],
    },
    {
      id: "k-02",
      date: "1993",
      description: "CEO Fisher publicly committed $2B+ to digital R&D investment.",
      evidenceClass: "A",
      source: "Annual Report 1993, press releases",
      metricIds: ["signalVisibilityScore", "responseLagScore"],
    },
    {
      id: "k-03",
      date: "2001",
      description: "Film demand clearly declining YoY; digital market share fell from 27% to 15% by 2003.",
      evidenceClass: "A",
      source: "IDC market share data, Kodak annual reports 2001–2003",
      metricIds: ["signalVisibilityScore", "responseLagScore"],
    },
    {
      id: "k-04",
      date: "2001",
      description: "Kodak losing $60 per digital camera sold. Middle management still film-centric.",
      evidenceClass: "B",
      source: "Post-hoc executive interviews, industry analyst reports",
      metricIds: ["responseLagScore"],
    },
    {
      id: "k-05",
      date: "2008",
      description: "Operating margins collapsed from ~20% (2000) to <5% (2008) while revenue held ~$10B.",
      evidenceClass: "A",
      source: "Kodak 10-K filings 2000–2008",
      metricIds: ["signalVisibilityScore", "responseLagScore"],
    },
  ],
  hypotheses: [
    { id: "H1", label: "Industry-Wide Blindness", status: "eliminated", confidence: "high" },
    { id: "H2", label: "External Discontinuity", status: "weakened", confidence: "medium" },
    { id: "T1", label: "Signal Visible, Response Lagged", status: "active", confidence: "high" },
  ],
  openQuestions: [],
  keyFinding:
    "Threat was visible by 1993 at minimum. Response was proportional in intent but failed in execution. Capital allocation did not match stated strategy. T1 topology confirmed.",
};

// ─────────────────────────────────────────────
// CASE 002 – NOKIA
// ─────────────────────────────────────────────
const nokia: Case = {
  id: "nokia",
  name: "Nokia",
  status: "active",
  outcomeKnown: true,
  topology: "unclassified",
  dateOpened: "2026-06-20",
  primaryHypothesis: "Unresolved — T1 vs T3 vs T5",
  summary:
    "Nokia's smartphone market share collapsed from 50% (2007) to 3% (2013). Threat was recognized across the industry, but whether Nokia's failure was blindness, execution, or structural constraint remains unresolved.",
  snapshots: [
    {
      period: "2007",
      signalVisibilityScore: 75,
      responseLagScore: 40,
      evidenceClassCoverage: { A: 60, B: 35, C: 5 },
      unresolvedUnknowns: 5,
      pressurePointStatus: { pp001: "none", pp002: "emerging" },
      confidenceLevel: "medium",
      notes: "iPhone launched Jan 2007. Samsung joined OHA (Nov 2007). Nokia issued public concern statements.",
    },
    {
      period: "2009",
      signalVisibilityScore: 88,
      responseLagScore: 65,
      evidenceClassCoverage: { A: 55, B: 40, C: 5 },
      unresolvedUnknowns: 5,
      pressurePointStatus: { pp001: "emerging", pp002: "emerging" },
      confidenceLevel: "medium",
      notes: "Android adoption accelerating. Nokia Symbian share declining. Response: N97 launch failed.",
    },
    {
      period: "2011",
      signalVisibilityScore: 95,
      responseLagScore: 85,
      evidenceClassCoverage: { A: 55, B: 40, C: 5 },
      unresolvedUnknowns: 4,
      pressurePointStatus: { pp001: "active", pp002: "active" },
      confidenceLevel: "medium",
      notes: "Microsoft partnership announced. Market share 27.6% → further decline. Elop 'burning platform' memo.",
    },
  ],
  evidence: [
    {
      id: "n-01",
      date: "2007-01",
      description: "iPhone launched by Apple. Nokia held ~50% global smartphone market share.",
      evidenceClass: "A",
      source: "Gartner market share reports Q1 2007",
      metricIds: ["signalVisibilityScore"],
    },
    {
      id: "n-02",
      date: "2007-11",
      description: "Samsung joined Open Handset Alliance (OHA) for Android. Nokia declined to join.",
      evidenceClass: "A",
      source: "OHA public announcement Nov 2007",
      metricIds: ["signalVisibilityScore", "responseLagScore"],
    },
    {
      id: "n-03",
      date: "2011",
      description: "Elop 'Burning Platform' memo leaked — described Nokia standing on a burning oil rig.",
      evidenceClass: "B",
      source: "Leaked internal memo (Feb 2011), widely reported",
      metricIds: ["signalVisibilityScore", "responseLagScore"],
    },
    {
      id: "n-04",
      date: "2011-02",
      description: "Nokia announced Microsoft Windows Phone partnership as primary smartphone OS.",
      evidenceClass: "A",
      source: "Nokia press release Feb 2011",
      metricIds: ["responseLagScore"],
    },
  ],
  hypotheses: [
    { id: "H1", label: "Industry-Wide Blindness", status: "weakened", confidence: "high" },
    { id: "H2", label: "External Discontinuity", status: "weakened", confidence: "medium" },
    { id: "H4", label: "Model Failure", status: "unresolved", confidence: "low" },
    { id: "H5", label: "Organizational Constraint", status: "unresolved", confidence: "low" },
  ],
  openQuestions: [
    "Was Nokia's failure primarily blindness differential, execution differential, or structural constraint?",
    "Did Samsung's faster OHA adoption reflect better threat recognition or different organizational flexibility?",
    "What class of evidence would distinguish H4 from H5 in Nokia's case?",
    "Does the Elop memo represent genuine recognition or retrospective narrative?",
    "Were there internal Nokia documents pre-2009 showing recognized threat without response?",
  ],
  keyFinding:
    "Industry-wide blindness hypothesis (H1) weakened — threat was recognized across Nokia, Samsung, and the broader industry. Primary failure mechanism (execution vs structural constraint) remains unresolved.",
};

// ─────────────────────────────────────────────
// CASE 003 – WEWORK
// ─────────────────────────────────────────────
const wework: Case = {
  id: "wework",
  name: "WeWork",
  status: "active",
  outcomeKnown: true,
  topology: "unclassified",
  dateOpened: "2026-06-23",
  primaryHypothesis: "H5 — Narrative Mechanism Sustaining Capital Against Evidence",
  summary:
    "WeWork raised $47B in valuation before IPO withdrawal in Sept 2019. Evidence class taxonomy has been deployed. Class A evidence abundant; Class C (contemporaneous motivation) scarce.",
  snapshots: [
    {
      period: "2015",
      signalVisibilityScore: 30,
      responseLagScore: 20,
      evidenceClassCoverage: { A: 75, B: 15, C: 10 },
      unresolvedUnknowns: 6,
      pressurePointStatus: { pp001: "none", pp002: "emerging" },
      confidenceLevel: "low",
      notes: "Valuation $1.5B. Unit economics concern not yet publicly documented.",
    },
    {
      period: "2017",
      signalVisibilityScore: 55,
      responseLagScore: 35,
      evidenceClassCoverage: { A: 70, B: 25, C: 5 },
      unresolvedUnknowns: 5,
      pressurePointStatus: { pp001: "none", pp002: "emerging" },
      confidenceLevel: "low",
      notes: "Valuation $20B. Capital escalation observable. Motivation for model conviction opaque.",
    },
    {
      period: "2019-Q3",
      signalVisibilityScore: 90,
      responseLagScore: 85,
      evidenceClassCoverage: { A: 65, B: 30, C: 5 },
      unresolvedUnknowns: 4,
      pressurePointStatus: { pp001: "emerging", pp002: "active" },
      confidenceLevel: "medium",
      notes: "S-1 filed Aug 2019. IPO withdrawn Sept 2019. Valuation collapsed from $47B to ~$8B. Class C remains scarce.",
    },
  ],
  evidence: [
    {
      id: "w-01",
      date: "2019-08",
      description: "S-1 prospectus filed with SEC. Documents business model, dual-class share structure, related-party transactions.",
      evidenceClass: "A",
      source: "SEC EDGAR S-1 filing, August 2019",
      metricIds: ["signalVisibilityScore", "evidenceClassCoverage"],
    },
    {
      id: "w-02",
      date: "2019-09",
      description: "IPO withdrawn. SoftBank renegotiation began. Valuation fell from $47B to ~$8B.",
      evidenceClass: "A",
      source: "WSJ, Bloomberg news archives Sept 2019",
      metricIds: ["signalVisibilityScore", "responseLagScore"],
    },
    {
      id: "w-03",
      date: "2020",
      description: "Neumann post-failure interviews attributing collapse to market conditions.",
      evidenceClass: "B",
      source: "Multiple news interviews 2020–2021",
      metricIds: ["responseLagScore"],
    },
    {
      id: "w-04",
      date: "2019-08",
      description: "S-1 shareholder letter (Neumann). Pre-failure; partial Class C candidate — contains vision/mission statements but limited explicit unit-economics conviction.",
      evidenceClass: "C",
      source: "WeWork S-1 Prospectus, Shareholder Letter, August 2019",
      metricIds: ["evidenceClassCoverage"],
    },
  ],
  hypotheses: [
    { id: "H1", label: "Industry-Wide Blindness", status: "unresolved", confidence: "low" },
    { id: "H5", label: "Narrative Sustaining Capital Against Evidence", status: "active", confidence: "medium" },
  ],
  openQuestions: [
    "Does S-1 shareholder letter contain explicit conviction about unit economics (Class C)?",
    "Are pre-Sept-2019 Neumann interviews available that establish contemporaneous model conviction?",
    "Does Zone A (motivation) remain opaque despite extensive public record?",
    "Does PP#002 (Observable Selection, Opaque Motivation) appear independently in WeWork?",
  ],
  keyFinding:
    "Evidence class taxonomy deployed: Class A abundant, Class C scarce. Observable choices documented (capital escalation, IPO pursuit). Founder conviction at model level unresolved — pending shareholder letter analysis.",
};

// ─────────────────────────────────────────────
// CASE 004 – GE
// ─────────────────────────────────────────────
const ge: Case = {
  id: "ge",
  name: "General Electric",
  status: "paused",
  outcomeKnown: true,
  topology: "unclassified",
  dateOpened: "2026-06-20",
  primaryHypothesis: "H2-C — Information ≠ Interpretation",
  summary:
    "GE's power segment overcapacity and Alstom acquisition losses under Immelt. Investigation paused due to inaccessibility of primary sources (network policy blocks contemporaneous materials).",
  snapshots: [
    {
      period: "2014",
      signalVisibilityScore: 40,
      responseLagScore: 35,
      evidenceClassCoverage: { A: 50, B: 40, C: 10 },
      unresolvedUnknowns: 5,
      pressurePointStatus: { pp001: "none", pp002: "emerging" },
      confidenceLevel: "low",
      notes: "Alstom acquisition begins. Overcapacity risk observable in market data. Immelt model not yet testable.",
    },
    {
      period: "2017",
      signalVisibilityScore: 70,
      responseLagScore: 70,
      evidenceClassCoverage: { A: 45, B: 50, C: 5 },
      unresolvedUnknowns: 5,
      pressurePointStatus: { pp001: "emerging", pp002: "active" },
      confidenceLevel: "low",
      notes: "Flannery replaces Immelt. $23B write-down. Information available pre-2017 — question is whether Immelt held a different model.",
    },
  ],
  evidence: [
    {
      id: "g-01",
      date: "2015",
      description: "GE completes Alstom Power acquisition for $10.6B. Overcapacity signals existed in power market.",
      evidenceClass: "A",
      source: "GE press releases, financial filings 2015",
      metricIds: ["signalVisibilityScore"],
    },
    {
      id: "g-02",
      date: "2017",
      description: "Flannery reveals $23B asset write-down and restructuring. H2-C: Immelt-era model may have filtered interpretation of available information.",
      evidenceClass: "B",
      source: "GE earnings call Oct 2017, Flannery investor day",
      metricIds: ["signalVisibilityScore", "responseLagScore"],
    },
  ],
  hypotheses: [
    { id: "H2-C", label: "Information ≠ Interpretation (Model Filter)", status: "unresolved", confidence: "low" },
    { id: "H4", label: "Model Failure", status: "unresolved", confidence: "low" },
  ],
  openQuestions: [
    "Did Immelt hold a different model of GE's power segment exposure than post-hoc evidence suggests?",
    "What class of evidence would establish the Immelt-era model (Class C required)?",
    "Would Alstom integration metrics have been visible to Immelt before 2017?",
    "Is Information ≠ Interpretation boundary durable across institutional-domain cases?",
    "When network policy resolves, does Class C evidence become accessible for 2014–2016 period?",
  ],
  keyFinding:
    "Investigation paused at H2-C attack. Primary source access blocked by network policy. Boundary observation: Information ≠ Interpretation — observable data existed, but whether Immelt's model filtered its interpretation cannot be resolved without Class C evidence.",
};

// ─────────────────────────────────────────────
// CASE 005 – BLACKBERRY
// ─────────────────────────────────────────────
const blackberry: Case = {
  id: "blackberry",
  name: "BlackBerry",
  status: "paused",
  outcomeKnown: true,
  topology: "unclassified",
  dateOpened: "2026-06-20",
  primaryHypothesis: "H4 — Model Failure (Enterprise-Extension Model Persisted Despite Contradictory Feedback)",
  summary:
    "BlackBerry leadership recognized the iPhone threat by Summer 2007 but the enterprise-extension model persisted through Storm failure (2009), PlayBook launch (2011), and into 2012 (Heins 'no drastic change needed'). H4 strongly supported; H5 (organizational constraint) unresolved.",
  snapshots: [
    {
      period: "2007",
      signalVisibilityScore: 80,
      responseLagScore: 35,
      evidenceClassCoverage: { A: 60, B: 30, C: 10 },
      unresolvedUnknowns: 4,
      pressurePointStatus: { pp001: "none", pp002: "emerging" },
      confidenceLevel: "medium",
      notes: "Lazaridis: 'competing with a Mac, not a Nokia' (private, Summer 2007). Threat recognized at founder level.",
    },
    {
      period: "2009",
      signalVisibilityScore: 85,
      responseLagScore: 60,
      evidenceClassCoverage: { A: 60, B: 35, C: 5 },
      unresolvedUnknowns: 4,
      pressurePointStatus: { pp001: "emerging", pp002: "active" },
      confidenceLevel: "medium",
      notes: "BlackBerry Storm launched and failed commercially. Model not revised; divergent leadership responses instead.",
    },
    {
      period: "2011",
      signalVisibilityScore: 92,
      responseLagScore: 82,
      evidenceClassCoverage: { A: 65, B: 30, C: 5 },
      unresolvedUnknowns: 3,
      pressurePointStatus: { pp001: "active", pp002: "active" },
      confidenceLevel: "high",
      notes: "PlayBook launched without native email. Lazaridis (Apr 2011): 'don't appreciate us.' Model still defended. Market share collapsing.",
    },
    {
      period: "2012",
      signalVisibilityScore: 96,
      responseLagScore: 92,
      evidenceClassCoverage: { A: 70, B: 28, C: 2 },
      unresolvedUnknowns: 2,
      pressurePointStatus: { pp001: "active", pp002: "active" },
      confidenceLevel: "high",
      notes: "Heins (Jan 2012): 'no drastic change needed.' Enterprise-extension model explicitly confirmed despite all contrary evidence.",
    },
  ],
  evidence: [
    {
      id: "bb-01",
      date: "2007-07",
      description: "Lazaridis private statement: iPhone is 'competing with a Mac, not a Nokia' — indicating recognition of qualitative shift.",
      evidenceClass: "B",
      source: "Industry reconstruction; referenced in retrospective accounts",
      metricIds: ["signalVisibilityScore"],
    },
    {
      id: "bb-02",
      date: "2007-02",
      description: "Balsillie public response to iPhone: 'not a sea-change' — contradicts blindness claim.",
      evidenceClass: "A",
      source: "Public media interview, Feb 2007",
      metricIds: ["signalVisibilityScore", "responseLagScore"],
    },
    {
      id: "bb-03",
      date: "2009",
      description: "BlackBerry Storm launched and failed commercially. Leadership response: divergent (Lazaridis vs Balsillie) rather than model revision.",
      evidenceClass: "A",
      source: "Sales data, contemporary market reports 2009",
      metricIds: ["responseLagScore"],
    },
    {
      id: "bb-04",
      date: "2011-04",
      description: "Lazaridis after PlayBook failure: 'They just don't appreciate us.' Model defended rather than reconsidered.",
      evidenceClass: "B",
      source: "Reported interview April 2011",
      metricIds: ["responseLagScore"],
    },
    {
      id: "bb-05",
      date: "2012-01",
      description: "Heins (incoming CEO, Jan 2012): 'There is nothing wrong with the strategy... no drastic change needed.'",
      evidenceClass: "A",
      source: "Public statement, January 2012",
      metricIds: ["responseLagScore"],
    },
  ],
  hypotheses: [
    { id: "H1", label: "Industry-Wide Blindness", status: "eliminated", confidence: "high" },
    { id: "H4", label: "Model Failure", status: "active", confidence: "high" },
    { id: "H5", label: "Organizational Constraint", status: "unresolved", confidence: "low" },
  ],
  openQuestions: [
    "Did the enterprise-extension model undergo genuine reconsideration between PlayBook failure (Q2 2011) and Jan 2012?",
    "Was model persistence a product of leadership conviction (H4) or institutional structure (H5)?",
    "What Class C evidence exists for the 2011–2012 reconsideration window?",
  ],
  keyFinding:
    "H4 (Model Failure) strongly supported across 5 data points spanning 2007–2012. Model persistence observable and documented. H5 (organizational constraint as mechanism) unresolved — structural vs motivational failure not yet distinguishable.",
};

export const CASES: Case[] = [kodak, nokia, wework, ge, blackberry];

export function getCaseById(id: string): Case | undefined {
  return CASES.find((c) => c.id === id);
}
