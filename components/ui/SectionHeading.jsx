export default function SectionHeading({ index, children, className = "" }) {
  return (
    <h2
      className={`font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl ${className}`}
    >
      {index ? (
        <span className="mr-3 font-mono text-sm font-normal tracking-normal text-secondary sm:mr-4 sm:text-base">
          {index}
        </span>
      ) : null}
      {children}
    </h2>
  );
}
