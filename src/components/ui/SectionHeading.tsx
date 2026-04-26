import { cn } from "../../lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
};

function renderTitle(title: string, highlight?: string) {
  if (!highlight || !title.includes(highlight)) {
    return title;
  }

  const [start, end] = title.split(highlight);
  return (
    <>
      {start}
      <span className="text-sage-300">{highlight}</span>
      {end}
    </>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700/70">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="display-title text-4xl text-neutral-900 md:text-5xl">
        {renderTitle(title, highlight)}
      </h2>
      {description ? <p className="mt-4 text-base body-muted md:text-lg">{description}</p> : null}
    </div>
  );
}
