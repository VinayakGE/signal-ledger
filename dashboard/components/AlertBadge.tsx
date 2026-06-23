import type { AlertLevel } from "@/data/cases";

const styles: Record<AlertLevel, string> = {
  watch: "bg-yellow-100 text-yellow-800 border border-yellow-300",
  warning: "bg-orange-100 text-orange-800 border border-orange-300",
  critical: "bg-red-100 text-red-800 border border-red-300",
};

const dots: Record<AlertLevel, string> = {
  watch: "bg-yellow-400",
  warning: "bg-orange-500",
  critical: "bg-red-600",
};

interface Props {
  level: AlertLevel;
  label?: string;
  size?: "sm" | "md";
}

export default function AlertBadge({ level, label, size = "md" }: Props) {
  const text = label ?? level.charAt(0).toUpperCase() + level.slice(1);
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold uppercase tracking-wide ${
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs"
      } ${styles[level]}`}
    >
      <span className={`inline-block h-1.5 w-1.5 rounded-full ${dots[level]}`} />
      {text}
    </span>
  );
}
