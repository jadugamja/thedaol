export default function ProjectPageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mb-12">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-primary font-bold tracking-widest uppercase text-sm font-display">
          {eyebrow}
        </span>
        <div className="h-px bg-gray-200 flex-1" />
      </div>
      <h2 className="text-3xl font-bold text-text-main mb-6">{title}</h2>
      <p className="text-text-sub leading-relaxed break-keep">{description}</p>
    </header>
  );
}
