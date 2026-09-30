"use client";

import { useRouter } from "next/navigation";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchFormProps {
  id: string;
  placeholder: string;
  defaultQuery?: string;
  children: React.ReactNode;
}

export function SearchForm({
  id,
  placeholder,
  defaultQuery = "",
  children,
}: SearchFormProps) {
  const router = useRouter();

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = new FormData(event.currentTarget).get("q");
    const params = new URLSearchParams();

    if (typeof query === "string" && query.trim() !== "") {
      params.set("q", query.trim());
    }

    const queryString = params.toString();
    router.push(queryString ? `/courses?${queryString}` : "/courses");
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:items-center sm:justify-center"
    >
      <label htmlFor={id} className="sr-only">
        Search for a course, topic, or creator
      </label>
      <Input
        id={id}
        name="q"
        defaultValue={defaultQuery}
        placeholder={placeholder}
        icon={<SearchIcon className="size-6 shrink-0 text-neutral-400" />}
        className="text-lg text-neutral-950 placeholder:text-neutral-400"
        wrapperClassName="sm:w-[461px]"
      />
      <Button type="submit" className="gap-2">
        {children}
      </Button>
    </form>
  );
}
