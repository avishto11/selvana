export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <div className={`flex flex-col gap-4 mb-12 md:mb-16 ${alignment}`}>
      {eyebrow && (
        <span className="font-body text-label-lg text-secondary uppercase tracking-widest">{eyebrow}</span>
      )}
      <h2 className="font-display text-headline-md text-primary">{title}</h2>
      {description && <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">{description}</p>}
    </div>
  );
}
