"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { AuthField } from "@/constants/auth";

interface AuthFormProps {
  fields: AuthField[];
  submitLabel: string;
}

export function AuthForm({ fields, submitLabel }: AuthFormProps) {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex flex-col gap-6"
    >
      {fields.map(({ id, label, ...inputProps }) => (
        <div key={id} className="flex flex-col gap-2">
          <label
            htmlFor={id}
            className="text-sm leading-[17px] font-medium text-neutral-950"
          >
            {label}
          </label>
          <Input
            id={id}
            variant="field"
            required
            className="text-lg text-neutral-950 placeholder:text-neutral-400"
            {...inputProps}
          />
        </div>
      ))}

      <Button type="submit" className="self-end">
        {submitLabel}
      </Button>
    </form>
  );
}
