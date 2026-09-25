export function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-5 rounded-md border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="font-sans text-small font-semibold text-primary-500">{number}</span>
        <h2 className="font-sans text-small font-semibold tracking-widest text-neutral-900 uppercase">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
