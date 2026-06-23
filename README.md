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

## Current Cases and Investigation Phases

### Phase 1: Framework Accumulation (Complete)
Framework objects constructed from literature review and institutional failure analysis:
- PP#001: Backward Excavation
- PP#002: Observable Selection / Opaque Motivation  
- M1: Meta-Hypothesis (Explanatory objects die faster than boundary objects)

### Phase 2: Adversarial Testing via WeWork (Complete)
Test case: WeWork IPO documents and collapse (2019-2024)
Result: All three frameworks survived WeWork without wounds

| System | Status | Phase | Outcome |
|--------|--------|-------|---------|
| Kodak #001 | Closure | Phase 1 | Visibility → Response gap explained |
| Nokia #002 | Paused | Phase 1 | Structured Uncertainty |
| WeWork #003 | **Complete** | **Phase 2** | **No frameworks wounded; all survived** |
| GE #004 | Paused | Phase 1 | Boundary Pressure |
| BlackBerry #005 | Paused | Phase 1 | Evidence Class Taxonomy |

### Phase 3: Direction Pending
Success criterion: Know exactly why questions remain open (distinguish Closed vs. Unresolved vs. Currently Unresolvable)

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

## Portfolio-Level State — Version 0.1

**Framework Status after Phase 2 (WeWork Investigation):**

| Framework | Status | Evidence | Falsification Condition |
|-----------|--------|----------|------------------------|
| PP#002: Observable/Opaque | Emerging, Survived Compression | WeWork exhibited pattern; no Class C motivation available | New case shows transparent motivation at observable boundary |
| M1: Explanatory objects die faster | Emerging, Requires Comparison | All frameworks survived; none wounded (supports but insufficient for validation) | Find explanatory object that survives while boundary object wounds |
| PD1: Promotion Discipline | Emerging, Unvalidated, Behavioral | 5+ instances of claim demotion observed | Repository defends favored claim when contradictory evidence appears |

**Key Finding:** All three frameworks survived Phase 2 WeWork test without wounds. This could indicate framework robustness or insufficient adversarial pressure — distinction currently unresolvable with available evidence.

**Open Questions (6 primary):**
1. Why did WeWork fail to generate wounds? (Currently Unresolvable with Class A/B)
2. Does Promotion Discipline persist under strong preference? (Unresolved — untested)
3. Which frameworks will wound in future cases? (Currently Unresolvable)
4. Can we distinguish confirmation bias in compression from genuine pattern? (Unresolved)
5. Are three evidence classes sufficient? (Unresolved)
6. Will repository continue to demote favored claims? (Unresolved — key test)

**What This Repository Has Become:**

Not: A theory of organizational collapse

But: A documented record of disciplined investigation under uncertainty

The strongest output is not a framework. It is repeatably demonstrated capacity to:
- Identify claim-evidence mismatches
- Demote over-reaches before they calcify
- Keep questions open when evidence doesn't justify closure
- Distinguish observations from interpretations from identity claims

**See:** SIGNAL_LEDGER_REPORT_V0_1.md for complete documentation

---

## What Success Looks Like

**Original definition (still valid):**

Not: 50 systems, 50 explanations

But: 50 systems, clear map of where public evidence reaches and where it does not

**Updated after Phase 2 (v0.1 addition):**

Success is also demonstrated by:

1. **Framework survival under adversarial pressure** — Frameworks that survive testing are less likely to be premature abstractions
2. **Explicit falsification conditions** — Being able to specify exactly what evidence would wound a framework
3. **Open questions appropriately categorized** — Knowing which questions are closed, which are unresolved (solvable), and which are currently unresolvable (evidence unavailable)
4. **Documented demotions** — Recording when claims exceeded evidence and how that was corrected
5. **Resistance to premature closure** — The hardest achievement: knowing when to keep a question open rather than force an answer

A successful repository would establish:
- Recurring failure topologies (T1, T2, etc.)
- Recurring boundaries on what public evidence can establish (pressure points with falsification conditions)
- Disconfirming cases documented alongside confirming cases
- **Demonstrated capacity to catch and correct its own overreach** (not just in one session, but repeatedly, including on favored claims)

The disconfirming cases, the boundaries, and the explicit record of prevented overreach are as valuable as the topologies.

---

## How to Read This Repository (v0.1 and beyond)

**START HERE:** SIGNAL_LEDGER_REPORT_V0_1.md documents the complete state: method, frameworks, cases, survivors, open questions, falsification conditions.

**FRAMEWORK DETAILS:** Individual framework files (CANDIDATE_PROCESS_PROPERTY_PD1.md, etc.) contain detailed evidence and status.

**INVESTIGATION PROCESS:** See PHASE_3_ORIENTATION.md for success criteria and EPISTEMIC_GUARDRAILS.md for embedded safety constraints.

**ACTIVE WORK:** Phase 3 investigations will create dated documents (not integrated into frameworks until v0.2).

Version 0.1 is frozen as of 2026-06-23. See VERSION_0_1_FROZEN.md.
