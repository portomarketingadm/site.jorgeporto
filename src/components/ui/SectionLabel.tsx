type SectionLabelProps = {
  index: string;
  label: string;
  light?: boolean;
};

export function SectionLabel({ index, label, light = false }: SectionLabelProps) {
  return (
    <span
      className={`eyebrow flex items-center gap-3 ${light ? "text-ink/60" : ""}`}
    >
      <span className={light ? "text-ink" : "text-gold"}>{index}</span>
      <span className="h-px w-8 bg-current opacity-40" />
      {label}
    </span>
  );
}
