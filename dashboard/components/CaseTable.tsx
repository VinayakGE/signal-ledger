"use client";

import Link from "next/link";
import type { Case } from "@/data/cases";
import { caseAlert, caseFragility, TOPOLOGY_LABELS } from "@/lib/metrics";
import AlertBadge from "./AlertBadge";

const statusBadge: Record<string, string> = {
  closed: "bg-slate-100 text-slate-600",
  active: "bg-emerald-100 text-emerald-700",
  paused: "bg-yellow-100 text-yellow-700",
};

interface Props {
  cases: Case[];
}

export default function CaseTable({ cases }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="min-w-full divide-y divide-slate-200 text-sm">
        <thead className="bg-slate-50">
          <tr>
            {["Case", "Status", "Topology", "Fragility", "Alert", "Key Finding"].map((h) => (
              <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {cases.map((c) => {
            const alert = caseAlert(c);
            const fragility = caseFragility(c);
            return (
              <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 font-medium text-indigo-700 whitespace-nowrap">
                  <Link href={`/cases/${c.id}`} className="hover:underline">
                    {c.name}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold capitalize ${statusBadge[c.status]}`}>
                    {c.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-600 text-xs">
                  {TOPOLOGY_LABELS[c.topology]}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-slate-200 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full ${
                          fragility >= 80 ? "bg-red-500" : fragility >= 60 ? "bg-orange-400" : "bg-yellow-400"
                        }`}
                        style={{ width: `${fragility}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono text-slate-600">{fragility}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <AlertBadge level={alert} size="sm" />
                </td>
                <td className="px-4 py-3 text-slate-500 text-xs max-w-xs truncate">
                  {c.keyFinding}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
