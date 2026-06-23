"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import type { MetricSnapshot } from "@/data/cases";

interface Props {
  snapshots: MetricSnapshot[];
}

export default function TrendChart({ snapshots }: Props) {
  const data = snapshots.map((s) => ({
    period: s.period,
    "Signal Visibility": s.signalVisibilityScore,
    "Response Lag": s.responseLagScore,
    "Class C Coverage %": s.evidenceClassCoverage.C,
    "Open Questions": s.unresolvedUnknowns * 10, // scale to 0-100
  }));

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="period" tick={{ fontSize: 11 }} />
          <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
          <Tooltip
            contentStyle={{ fontSize: 12, borderRadius: 8 }}
            formatter={(value, name) => {
              const num = typeof value === "number" ? value : Number(value ?? 0);
              if (name === "Open Questions") return [Math.round(num / 10), "Open Questions"];
              return [num, name as string];
            }}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          {/* Warning reference lines */}
          <ReferenceLine y={80} stroke="#f97316" strokeDasharray="4 2" label={{ value: "warning", position: "right", fontSize: 10, fill: "#f97316" }} />
          <ReferenceLine y={65} stroke="#fbbf24" strokeDasharray="4 2" label={{ value: "watch", position: "right", fontSize: 10, fill: "#fbbf24" }} />
          <Line type="monotone" dataKey="Signal Visibility" stroke="#6366f1" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="Response Lag" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="Class C Coverage %" stroke="#22c55e" strokeWidth={1.5} strokeDasharray="5 3" dot={{ r: 3 }} />
          <Line type="monotone" dataKey="Open Questions" stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="3 3" dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
