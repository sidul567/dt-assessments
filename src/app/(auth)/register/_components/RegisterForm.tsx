"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FIELDS = [
  {
    id: "full-name",
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Jamie Davis",
    autoComplete: "name",
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "designer@example.com",
    autoComplete: "email",
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "********",
    autoComplete: "new-password",
  },
];

export function RegisterForm() {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex flex-col gap-6"
    >
      {FIELDS.map(({ id, label, ...inputProps }) => (
        <div key={id} className="flex flex-col gap-2">
          <label htmlFor={id} className="text-sm font-medium text-neutral-950 leading-[17px]">
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
        Continue
      </Button>
    </form>
  );
}
