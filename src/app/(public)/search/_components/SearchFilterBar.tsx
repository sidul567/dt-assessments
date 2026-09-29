import { FilterIcon } from "@/components/icons/FilterIcon";
import { SignalIcon } from "@/components/icons/SignalIcon";
import { CategoryIcon } from "@/components/icons/CategoryIcon";
import { SortIcon } from "@/components/icons/SortIcon";

const FILTERS = [
  { label: "Filter", icon: FilterIcon },
  { label: "Level", icon: SignalIcon },
  { label: "Category", icon: CategoryIcon },
];

export function SearchFilterBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-4">
        {FILTERS.map(({ label, icon: Icon }) => (
          <button
            key={label}
            type="button"
            className="flex items-center gap-1 rounded-3xl border border-neutral-200 bg-white px-4 py-3 text-base font-medium text-neutral-700"
          >
            <Icon className="size-6 text-neutral-950" />
            {label}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="flex items-center gap-1 rounded-3xl border border-neutral-200 bg-white px-4 py-3 text-base font-medium text-neutral-700"
      >
        <SortIcon className="size-6 text-neutral-950" />
        Most relevant
      </button>
    </div>
  );
}
