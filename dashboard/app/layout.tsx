import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Signal Ledger — Early Failure Detection",
  description: "Evidence-based SaaS dashboard for organizational failure signal tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {/* Nav */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
            <Link href="/" className="flex items-center gap-2 font-bold text-indigo-700 text-lg tracking-tight">
              <span className="text-xl">📡</span> Signal Ledger
            </Link>
            <nav className="flex items-center gap-6 text-sm text-slate-600 font-medium">
              <Link href="/" className="hover:text-indigo-600 transition-colors">Portfolio</Link>
              <span className="text-slate-300">|</span>
              <span className="text-slate-400 cursor-not-allowed" title="Coming soon">Reports</span>
              <span className="text-slate-300">|</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 border border-indigo-200">
                MVP
              </span>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-8">
          {children}
        </main>

        <footer className="text-center text-xs text-slate-400 py-4 border-t border-slate-200 bg-white">
          Signal Ledger · Evidence-first organizational risk intelligence ·{" "}
          <span className="text-slate-300">MVP v0.1</span>
        </footer>
      </body>
    </html>
  );
}
