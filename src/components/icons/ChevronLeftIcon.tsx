import type { SVGProps } from "react";

export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M17.885 3.77L16.115 2L6.115 12L16.115 22L17.885 20.23L9.655 12L17.885 3.77Z"
        fill="currentColor"
      />
    </svg>
  );
}
