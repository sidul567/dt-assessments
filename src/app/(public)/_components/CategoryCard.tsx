import type { ComponentType, SVGProps } from "react";

interface CategoryCardProps {
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export function CategoryCard({ name, Icon }: CategoryCardProps) {
  return (
    <div className="flex size-[167px] items-center justify-center rounded-3xl border border-neutral-200">
      <div className="flex flex-col items-center gap-3">
        <span className="flex items-center justify-center rounded-[40px] bg-secondary-400 p-3">
          <Icon className="size-9 text-neutral-950" />
        </span>
        <p className="text-xl font-medium text-neutral-950">{name}</p>
      </div>
    </div>
  );
}
