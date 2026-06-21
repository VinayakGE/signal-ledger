# Signal Ledger

Signal Ledger is an observation repository.

Its purpose is not to prove a framework.

Its purpose is to determine whether recurring failure patterns can be detected before outcomes become obvious.

---

## Core Discipline

Every investigation begins unresolved.

Every investigation must include:

- A research question that is answerable with evidence
- Competing explanations with specific predictions
- Evidence supporting each explanation
- Evidence contradicting each explanation
- Unknowns explicitly named
- A confidence assessment

**"No finding" is a valid outcome.**

Hypotheses earn promotion through repeated observation across independent systems.

Interesting explanations do not automatically become features.

---

## What This Repository Is Not

Not a scoring engine.
Not a prediction machine.
Not a framework validation exercise.

If every case supports the same theory, the researcher is learning less than the framework.

---

## Investigation Protocol

### Layer 1 — Observation

Pure facts. No interpretation.

Example:
> Nokia smartphone market share declined from 50% (2007) to 27.6% (2010).

### Layer 2 — Assessment

Competing explanations. Multiple hypotheses coexist until evidence decides.

Example:
> H1: Signal visible, response lagged.
> H2: Signal weak, industry-wide blindness.
> H3: External discontinuity altered competitive dynamics.

### Layer 3 — Classification

Only after evidence accumulates across multiple independent cases.

Example:
> H1 confidence: Medium
> H2 confidence: Low
> Status: Unresolved

---

## Candidate Failure Topologies

These are not schema fields. They are candidates waiting for pattern confirmation.

**T1 — Signal Visible, Response Lagged**
The system recognized the threat but failed to align resources or execution with it.
*Candidate case: Kodak*

**T2 — Signal Weak, Industry Blindness**
The signal was genuinely difficult to read. Most participants missed it.
*Candidate case: TBD*

**T3 — External Discontinuity**
Reasonable strategic choices became obsolete after structural change in the environment.
*Candidate case: TBD*

**T4 — Incentive Corruption**
Incentive structures systematically suppressed accurate signal transmission.
*Candidate case: 2008 credit ratings, BNPL*

**T5 — Organizational Paralysis**
Signal visible at leadership level but organizational structure prevented adaptation.
*Candidate case: Nokia (unresolved)*

A topology earns its name when it appears independently across at least three systems.

Until then it remains a candidate.

---

## Repository Structure

```
signal-ledger/
├── systems/
│   ├── companies/       # Individual system audits
│   └── ...
├── templates/
│   └── system_audit.yaml
├── hypotheses/          # Candidate hypotheses under investigation
└── README.md
```

### File Lifecycle

`*_notes.md` — Active investigation. Not yet classified.

`*.yaml` — Promoted audit. Evidence earned classification.

A notes file graduates to yaml only when:

1. Growth source is clearly identified
2. A specific, measurable signal is isolated
3. Break condition is falsifiable
4. Contradictions are documented and addressed
5. Competing explanations are assessed

---

## Current Cases

| System | Status | Output Type | Primary Pressure |
|--------|--------|-------------|------------------|
| Kodak #001 | Closure | Visibility → Response gap explained | T1 evidence |
| Nokia #002 | Active | Structured Uncertainty | Competing explanations under same facts |
| WeWork #003 | Active | State-Space Refinement | Model-failure definition narrowed |
| GE #004 | Paused | Boundary Pressure | Information ≠ Interpretation |
| BlackBerry #005 | Paused | Boundary Pressure + Evidence Class Taxonomy | Structure ≠ Motivation |

---

## Evidence Class Taxonomy

A measurement instrument developed through BlackBerry Investigation #005 to classify what types of evidence are available about organizational decisions.

**Class A — Structural Evidence**

Observable sequence: proposal exists → proposal reviewed → proposal rejected

High confidence. Recoverable from contemporaneous reporting, public statements, observable outcomes. Does not bridge motivation gap.

**Class B — Retrospective Explanation**

Interviews, memoirs, post-hoc recollections by participants, years after the event. Recoverable but contaminated by outcome knowledge. Outcome knowledge may have restructured memory of motivation.

**Class C — Contemporaneous Motivation**

Board memos, internal emails, strategy notes, decision rationale written at time T — before outcome was known. The only evidence class that can genuinely bridge the Structure → Motivation gap. Rare.

**Application**: Future investigations should classify what evidence class they hold before claiming resolution at the motivation level. A finding based on Class B should be explicitly marked as outcome-contaminated. Only Class C can establish genuine contemporaneous rationale.

---

## Hypotheses Under Consideration

| ID | Statement | Status |
|----|-----------|--------|
| H2 | Systems may fail despite visible signals when execution capacity cannot adapt to reality | Candidate — Kodak consistent, Nokia unresolved |
| H5 | Systems may fail when narrative mechanisms sustain capital allocation against available contrary evidence | Candidate — WeWork investigation opened this question; not yet earned |

---

## Portfolio-Level State

**Current output distribution:**

- Explanations: Provisional (Kodak closed; Nokia/WeWork/GE unresolved)
- Boundaries: Strengthening (GE: Information → Model; BlackBerry: Structure → Motivation)
- Constraints: Beginning to emerge (Evidence class taxonomy defines limits of public auditability)
- Pressure Points: Now falsifiable (PP#001 Backward Excavation; PP#002 Observable Selection / Opaque Motivation)

**Meta-observation**: The repository is generating measurement instruments (evidence class taxonomy, pressure points with falsification conditions) faster than explanations. This is appropriate for early-stage research. Boundaries are harder to fake than explanations. The program should accumulate epistemological humility before premature certainty.

---

## What Success Looks Like

Not:

> 50 systems, 50 explanations.

But:

> 50 systems, clear map of where public evidence reaches
> and where it does not — with specific evidence classes
> defining what kinds of claims can be made.

A successful repository would establish:
- Recurring failure topologies (T1, T2, etc.)
- Recurring boundaries on what public evidence can establish (pressure points with falsification conditions)
- Disconfirming cases documented alongside confirming cases

The disconfirming cases and the boundaries are as valuable as the topologies.
