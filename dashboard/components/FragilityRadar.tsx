"use client";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { MetricSnapshot } from "@/data/cases";

interface Props {
  snapshot: MetricSnapshot;
}

export default function FragilityRadar({ snapshot: s }: Props) {
  const data = [
    { metric: "Signal\nVisibility", value: s.signalVisibilityScore },
    { metric: "Response\nLag", value: s.responseLagScore },
    { metric: "Motivation\nOpacity", value: 100 - s.evidenceClassCoverage.C },
    { metric: "Open\nQuestions", value: Math.min(s.unresolvedUnknowns * 15, 100) },
  ];

  return (
    <div className="w-full h-56">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} margin={{ top: 8, right: 24, bottom: 8, left: 24 }}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11 }} />
          <Radar
            name="Fragility"
            dataKey="value"
            stroke="#6366f1"
            fill="#6366f1"
            fillOpacity={0.25}
          />
          <Tooltip contentStyle={{ fontSize: 12 }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
