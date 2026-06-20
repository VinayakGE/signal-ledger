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

| System | Status | Candidate Topology |
|--------|--------|--------------------|
| Kodak | Audited | T1 (Signal Visible, Response Lagged) |
| Nokia | Under Investigation | Unresolved |

---

## Hypotheses Under Consideration

| ID | Statement | Status |
|----|-----------|--------|
| H2 | Systems may fail despite visible signals when execution capacity cannot adapt to reality | Candidate — Kodak consistent, Nokia unresolved |

---

## What Success Looks Like

Not:

> 50 systems, 50 explanations.

But:

> 50 systems, 5 recurring failure topologies — with disconfirming cases documented.

The disconfirming cases are as valuable as the confirming ones.
