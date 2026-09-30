import { FilterIcon } from "@/components/icons/FilterIcon";
import { SignalIcon } from "@/components/icons/SignalIcon";
import { CategoryIcon } from "@/components/icons/CategoryIcon";
import { SortIcon } from "@/components/icons/SortIcon";
import { Button } from "@/components/ui/button";

const FILTERS = [
  { label: "Filter", icon: FilterIcon },
  { label: "Level", icon: SignalIcon },
  { label: "Category", icon: CategoryIcon },
];

const FILTER_BUTTON_CLASSNAME = "gap-1 text-base text-neutral-700";

export function FilterBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-4">
        {FILTERS.map(({ label, icon: Icon }) => (
          <Button
            key={label}
            variant="outline"
            className={FILTER_BUTTON_CLASSNAME}
          >
            <Icon className="size-6 text-neutral-950" />
            {label}
          </Button>
        ))}
      </div>

      <Button variant="outline" className={FILTER_BUTTON_CLASSNAME}>
        <SortIcon className="size-6 text-neutral-950" />
        Most relevant
      </Button>
    </div>
  );
}
