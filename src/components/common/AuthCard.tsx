interface AuthCardProps {
  eyebrow: string;
  title: string;
  footer: React.ReactNode;
  children: React.ReactNode;
}

export function AuthCard({ eyebrow, title, footer, children }: AuthCardProps) {
  return (
    <section className="flex w-full flex-col justify-between gap-16 rounded-3xl bg-white px-6 py-10 sm:px-16 sm:py-15 lg:min-h-[784px] lg:w-[579px]">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-lg text-primary-800">{eyebrow}</p>
          <h1 className="font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.44px] text-neutral-950 md:text-[44px]">
            {title}
          </h1>
        </div>

        {children}
      </div>

      <div className="flex flex-col items-center gap-16">{footer}</div>
    </section>
  );
}
