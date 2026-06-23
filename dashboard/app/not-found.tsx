import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-64 gap-4 text-center">
      <p className="text-4xl font-bold text-slate-300">404</p>
      <p className="text-slate-500">Case not found in the ledger.</p>
      <Link href="/" className="text-indigo-600 hover:underline text-sm">
        ← Back to Portfolio
      </Link>
    </div>
  );
}
